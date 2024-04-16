const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close');
const submitButton = document.querySelector('.submitBtn');
const userInput = document.querySelector('.userInput');
const result = document.querySelector('.result');

modal.style.display = 'block';

closeButton.onclick = function() {
  modal.style.display = 'none';
};

submitButton.onclick = function() {
  result.textContent = userInput.value;
  modal.style.display = 'none';
};
