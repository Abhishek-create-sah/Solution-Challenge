document.getElementById('foodForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let foodType = document.getElementById('foodType').value;
  let foodQuantity = document.getElementById('foodQuantity').value;
  let foodLocation = document.getElementById('foodLocation').value;
  
  alert(`Food Listed: ${foodType}, Quantity: ${foodQuantity}, Location: ${foodLocation}`);
  document.getElementById('foodForm').reset();
});

function claimFood(ngoName) {
  let countElement = document.getElementById('donationCount');
  let currentCount = parseInt(countElement.textContent);
  countElement.textContent = currentCount + 1;
  alert(`${ngoName} has claimed the food.`);
}
s