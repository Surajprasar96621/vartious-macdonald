const orderFoodButton = document.getElementById('order-food');
const foodChoices = document.getElementById('food-choices');
const orderIdElement = document.getElementById('order-id');
const foodImageElement = document.getElementById('food-image');

orderFoodButton.addEventListener('click', () => {
  const selectedFood = document.querySelector('input[type="checkbox"]:checked');
  if (!selectedFood) {
    alert('Please select a food item to order!');
    return;
  }
  const orderIdElement = document.getElementById('order-id');
const customInputField = document.getElementById('custom-order-id');

orderIdElement.innerText = `Order ID: Zomato-PATNA-AI-BigMacFriesNuggetsMcFlurry-12111716`;

customInputField.addEventListener('change', (event) => {
  orderIdElement.innerText = `Order ID: ${event.target.value}`;
});

    foodImageElement.style.display = 'block';
  });
