const stars = document.querySelectorAll('.rating label');
let selectedRating = 0;

// When user clicks a star
stars.forEach((star) => {
  star.addEventListener('click', () => {
    selectedRating = parseInt(star.getAttribute('data-value'));
    updateStars();
  });

  // Hover effect
  star.addEventListener('mouseover', () => {
    const hoverValue = parseInt(star.getAttribute('data-value'));
    updateStars(hoverValue);
  });

  // Remove hover, return to selected
  star.addEventListener('mouseout', () => {
    updateStars();
  });
});

function updateStars(hoverValue = 0) {
  stars.forEach((star) => {
    const value = parseInt(star.getAttribute('data-value'));
    if (hoverValue) {
      star.classList.toggle('active', value <= hoverValue);
    } else {
      star.classList.toggle('active', value <= selectedRating);
    }
  });
}

document.getElementById('feedbackForm').addEventListener('submit', function(e) {
  e.preventDefault();
  if (selectedRating === 0) {
    alert("Please select a rating before submitting.");
  } else {
    alert(`Thank you! You rated us ${selectedRating} star(s).`);
  }
});