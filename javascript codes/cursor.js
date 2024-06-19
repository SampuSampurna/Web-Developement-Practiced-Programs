let currentIndex = 2;
const circleContainer = document.querySelector('.circle-container');
const carouselCells = document.querySelectorAll('.carousel-cell');

function prevSlide() {
  currentIndex = currentIndex <= 1 ? 9 : currentIndex - 1;
  showCells(currentIndex);
}

function nextSlide() {
  currentIndex = currentIndex >= 9 ? 1 : currentIndex + 1;
  applyTransition(); // Apply transition before updating cells
  showCells(currentIndex);
}

function applyTransition() {
  carouselCells.forEach((cell, i) => {
    cell.style.transition = 'transform 4s ease';
  });
}

function removeTransition() {
  carouselCells.forEach((cell, i) => {
    cell.style.transition = '';
  });
}

function showCells(index) {
  const totalCells = carouselCells.length;
  const cellWidth = 100; // Assuming each cell has a width of 100px
  const containerWidth = totalCells * cellWidth; // Calculate total width of the container
  const spacing = (containerWidth - (totalCells * cellWidth)) / (totalCells - 1); // Calculate equal spacing
  
  // Update cell content and apply transformations
  carouselCells.forEach((cell, i) => {
    let displayIndex = (index + i - 2 + totalCells) % totalCells + 1;
    cell.textContent = displayIndex;
    if (i === 0) {
      // First cell moves to the left with decreased size and set margin-left
      cell.style.transform = `translateX(${spacing}px) scale(0.9)`;
      cell.style.marginLeft = `${spacing}px`;
      cell.style.marginRight = '0';
    } else if (i === 1) {
      // Second cell moves to the first position with increased size
      cell.style.transform = `translateX(${spacing}px) scale(1.2)`;
    } else if (i === 2) {
      // Third cell moves to the second position with its original size and set margin-right
      cell.style.transform = `translateX(${spacing}px) scale(0.9)`;
      cell.style.marginLeft = '0';
      cell.style.marginRight = `${spacing}px`;
    } else if (i === 3) {
      // Fourth cell moves to the third position with its original size
      cell.style.transform = `translateX(${(spacing + cellWidth)}px) scale(1)`;
    } else {
      // Hide other cells
      cell.style.transform = 'translateX(-200%) scale(0)';
    }
  });

  // Remove previous circles
  circleContainer.innerHTML = '';

  // Create circles
  for (let i = 1; i <= totalCells; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    if (i === index) {
      circle.classList.add('active');
    }
    circle.addEventListener('click', () => {
      showCells(i);
    });
    circleContainer.appendChild(circle);
  }
}

// Event listener for transition end
carouselCells.forEach(cell => {
  cell.addEventListener('transitionend', removeTransition);
});

// Initial call to showCells to display the circles
showCells(currentIndex);
