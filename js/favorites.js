// favorites.js - Update to use user-specific favorites key
// --- DOM ELEMENTS ---
const favoritesListContainer = document.getElementById('favorites-list');
const sortDropdown = document.getElementById('sort-by');

// --- HELPER FUNCTIONS ---
function getCurrentUsername() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  return currentUser ? currentUser.username : null;
}

// --- DATA FUNCTIONS ---

function getFavorites() {
  const username = getCurrentUsername();
  if (!username) {
    return []; // No favorites for guest
  }
  const favoritesKey = `favorites_${username}`;
  return JSON.parse(localStorage.getItem(favoritesKey)) || [];
}

function saveFavorites(favorites) {
  const username = getCurrentUsername();
  if (!username) {
    return; // Cannot save for guest
  }
  const favoritesKey = `favorites_${username}`;
  localStorage.setItem(favoritesKey, JSON.stringify(favorites));
}

function removeFavorite(recipeId) {
  event.stopPropagation(); // Prevent the click from navigating
  let favorites = getFavorites();
  const updatedFavorites = favorites.filter(item => item.id !== recipeId);
  saveFavorites(updatedFavorites);
  renderFavorites();
}

// --- RENDERING FUNCTIONS ---

function renderFavorites(itemsToRender = null) {
  const username = getCurrentUsername();
  if (!username) {
    favoritesListContainer.innerHTML = '<p class="no-favorites-message text-center text-gray-500 py-12">Please log in to view and manage your favorites.</p>';
    return;
  }

  const favorites = itemsToRender === null ? getFavorites() : itemsToRender;
  const validFavorites = favorites.filter(item => item && item.id && item.name);
  favoritesListContainer.innerHTML = '';

  if (validFavorites.length === 0) {
    favoritesListContainer.innerHTML = '<p class="no-favorites-message text-center text-gray-500 py-12">You haven\'t added any favorites yet. Start exploring!</p>';
    return;
  }

  validFavorites.forEach(item => {
    let itemType = "Unknown";
    let typeIcon = "";

    if (item.cuisine) {
      itemType = "Recipe";
      typeIcon = `<div class="type-icon type-recipe flex items-center gap-1 text-orange-500" title="Recipe">
                  <i class="fas fa-utensils"></i>
                </div>`;
    } else if (item.steps) {
      itemType = "Guide";
      typeIcon = `<div class="type-icon type-guide flex items-center gap-1 text-blue-500" title="Guide">
                  <i class="fas fa-book-open"></i>
                </div>`;
    } else if (item.location) {
      itemType = "Place";
      typeIcon = `<div class="type-icon type-place flex items-center gap-1 text-green-500" title="Place">
                  <i class="fas fa-map-marker-alt"></i>
                </div>`;
    }

    const favoriteCard = document.createElement('div');
    favoriteCard.className = 'favorite-card bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300';
    favoriteCard.setAttribute('data-id', item.id);
    favoriteCard.setAttribute('data-type', itemType);
    favoriteCard.innerHTML = `
      <div class="card-image-container h-40 overflow-hidden rounded-t-lg">
        <img src="${item.image || 'default-image.jpg'}" alt="${item.name}" class="card-image w-full h-full object-cover">
      </div>
      <div class="card-content p-4">
        <h3 class="card-title text-lg font-semibold text-gray-900 mb-2">${item.name}</h3>
        <p class="card-description text-sm text-gray-600 mb-3">${item.description || 'No description available.'}</p>
        <div class="card-actions flex items-center gap-3 text-gray-500">
          <button class="action-btn like-btn flex items-center gap-1 hover:text-red-500" title="Favorited">
            <i class="fas fa-heart"></i>
          </button>
          <button class="action-btn share-btn flex items-center gap-1 hover:text-blue-500" title="Share">
            <i class="fas fa-share-alt"></i>
          </button>
          ${typeIcon}
        </div>
      </div>
      <button class="remove-btn absolute top-3 right-3 text-gray-400 hover:text-red-600" title="Remove Favorite" onclick="removeFavorite('${item.id}')">
        <i class="fas fa-times-circle text-xl"></i>
      </button>
    `;
    // Add click event listener to navigate to detail page
    favoriteCard.addEventListener('click', (e) => {
      // Prevent navigation if clicking on action buttons
      if (e.target.closest('.action-btn') || e.target.closest('.remove-btn')) {
        return;
      }
      window.location.href = `recipe_detail.html?id=${item.id}`;
    });
    favoritesListContainer.appendChild(favoriteCard);
  });
}

// --- EVENT LISTENERS ---

function handleSort() {
  const selectedCategory = sortDropdown.value;
  const allFavorites = getFavorites();

  if (selectedCategory === 'All') {
    renderFavorites(allFavorites);
  } else {
    const filteredFavorites = allFavorites.filter(item => {
      if (selectedCategory === 'Recipes') {
        return item.cuisine;
      } else if (selectedCategory === 'Guides') {
        return item.steps;
      } else if (selectedCategory === 'Places') {
        return item.location;
      }
      return false;
    });
    renderFavorites(filteredFavorites);
  }
}

sortDropdown.addEventListener('change', handleSort);

// Listen for changes in localStorage from other tabs
window.addEventListener('storage', (event) => {
  if (event.key.startsWith('favorites_')) {
    console.log('Favorites updated in another tab. Reloading list.');
    renderFavorites();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  renderFavorites();
});