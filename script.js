
/* -------------------------------------------------------------
   Number‑Guessing Game
   – reads the user’s guess (1‑100)
   – generates a random integer 1‑100
   – shows “True” if the numbers match, otherwise “False”
   – validates the input and gives a friendly error message
   ------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  // -----------------------------------------------------------------
  // Grab the elements we need only once
  // -----------------------------------------------------------------
  const form      = document.getElementById('calcForm');
  const numInput  = document.getElementById('numInput');
  const resultBox = document.getElementById('resultBox');

  // -----------------------------------------------------------------
  // Generate a random integer inclusive of both bounds
  // -----------------------------------------------------------------
  const randomInt = (min = 1, max = 100) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  // -----------------------------------------------------------------
  // Validation routine – returns true if the value is an integer
  //    between 1 and 100 (inclusive)
  // -----------------------------------------------------------------
  const isValidGuess = (value) => {
    const n = Number(value);
    return Number.isInteger(n) && n >= 1 && n <= 100;
  };

  // -----------------------------------------------------------------
  // Form submit handler – core logic
  // -----------------------------------------------------------------
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // stop the page from reloading

    const userValue = numInput.value.trim();

    // ---- Validate ------------------------------------------------
    if (!isValidGuess(userValue)) {
      resultBox.textContent = 'Please enter an integer between 1 and 100.';
      resultBox.classList.remove('hidden');
     // Red‑error styling
      resultBox.classList.remove(
        'border-indigo-500',
        'bg-indigo-50',
        'text-indigo-800'
      );
      resultBox.classList.add('border-red-500', 'bg-red-50', 'text-red-800');
      return;
    }

    // ---- Core game ------------------------------------------------
    const guess   = Number(userValue);
    const random  = randomInt(1, 100);
    const success = guess === random;

    // ---- Show result -----------------------------------------------
    resultBox.textContent = success ? 'True' : 'False';
    resultBox.classList.remove('hidden');

    // Normal (indigo) styling for a regular result
    resultBox.classList.remove('border-red-500', 'bg-red-50', 'text-red-800');
    resultBox.classList.add('border-indigo-500', 'bg-indigo-50', 'text-indigo-800');
  });

  // -----------------------------------------------------------------
  // Live validation while the user types
  // -----------------------------------------------------------------
  numInput.addEventListener('input', () => {
    const val = numInput.value;
    if (val === '' || !isValidGuess(val)) {
      // mark as invalid
      numInput.classList.remove('border-green-500');
      numInput.classList.add('border-red-500');
    } else {
      // mark as valid
      numInput.classList.remove('border-red-500');
      numInput.classList.add('border-green-500');
    }
  });
});