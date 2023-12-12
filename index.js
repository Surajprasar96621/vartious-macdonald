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
  const foodImage = selectedFood.dataset.image;
  orderIdElement.innerText = `Order ID: <span class="math-inline">\{Math\.random\(\)\.toString\(36\)\.substring\(2, 15\)\}\`;
// Create a promise that resolves after a random delay
const promise \= new Promise\(\(resolve\) \=\> \{
const randomTime \= Math\.floor\(Math\.random\(\) \* 5\) \+ 2; // Random delay between 2 and 5 seconds
setTimeout\(\(\) \=\> resolve\(\), randomTime \* 1000\);
\}\);
// Show loading animation while promise is pending
// TODO\: Implement loading animation
promise\.then\(\(\) \=\> \{
// Hide loading animation
// TODO\: Hide loading animation
foodImageElement\.src \= \`images/</span>{foodImage}`;
    foodImageElement.style.display = 'block';
  });
