document.addEventListener('DOMContentLoaded', () => {
    const recommendationList = document.getElementById('recommendation-list');

    // Assume the data from other files is available globally or can be imported.
    // We will simulate this by checking for their existence.
    const recipesData = typeof recipes !== 'undefined' ? recipes : [];
    const localFoodsData = typeof localFoods !== 'undefined' ? localFoods : [];
    const stallsData = typeof stalls !== 'undefined' ? stalls.stalls : [];

    // Normalize the data from localFoods to match the recipes format
    const normalizedLocalFoods = localFoodsData.map(item => ({
        id: item.name.replace(/\s+/g, '-').toLowerCase(),
        name: item.name,
        image: item.img,
        cuisine: item.area,
        type: item.category,
        popularity: item.rating * 100, // A simple way to generate a numeric value for consistency
        rating: item.rating,
        url: '#' // Placeholder URL
    }));

    // Normalize the data from stalls.json to match the recipes format
    const normalizedStalls = stallsData.map(item => ({
        id: item.id,
        name: item.name,
        image: 'https://placehold.co/100x100/E2E8F0/4A5568?text=Stall', // Use a placeholder since images are not provided
        cuisine: item.area,
        type: item.type,
        popularity: 1000, // Placeholder
        rating: 5, // Placeholder
        url: '#' // Placeholder URL
    }));

    // Combine all content into one array
    const allContent = [...recipesData, ...normalizedLocalFoods, ...normalizedStalls];

    function generateSuggestions(count) {
        // Clear existing suggestions
        recommendationList.innerHTML = '';

        if (allContent.length === 0) {
            recommendationList.innerHTML = '<p class="text-sm text-gray-500">No suggestions available right now.</p>';
            return;
        }

        // Shuffle the array to get random items
        const shuffled = allContent.sort(() => 0.5 - Math.random());

        // Get sub-array of first n elements after shuffling
        let selected = shuffled.slice(0, count);

        // Render the suggestions
        selected.forEach(item => {
            const suggestionLink = document.createElement('a');
            suggestionLink.href = item.url || '#'; // Fallback to '#' if no URL
            suggestionLink.className = 'flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-100 transition text-gray-900 no-underline';
            
            const suggestionHTML = `
                <img src="${item.image}" alt="${item.name}"
                    class="w-16 h-16 object-cover rounded-md" 
                    onerror="this.src='https://placehold.co/64x64/E2E8F0/4A5568?text=Suggestion'">
                <div>
                    <h4 class="font-bold">${item.name}</h4>
                    <p class="text-gray-600 text-sm">${`A delicious ${item.cuisine} ${item.type}.`}</p>
                </div>
            `;
            suggestionLink.innerHTML = suggestionHTML;
            recommendationList.appendChild(suggestionLink);
        });
    }

    // Call the function to generate and display 3 suggestions when the page loads
    generateSuggestions(3);
});
