
<script>

    submitForm.addEventListener('submit', e => {
      e.preventDefault();               // stop page reload

      const value = Number(numInput.value);
    });
   
// Function to check if a number is between 1 and 100   
    let inputEl = document.getElementById('numInput');
// Validate on form submit
    inputEl.addEventListener('submit', () => {
    const ok = isBetweenOneAndHundred(inputEl.value);
     if (ok) {
    console.log('✅ Value is within 1‑100');
    // You can clear any error UI here
  } else {
    console.warn('❌ Value must be a number between 1 and 100');
    // Show an error message to the user, e.g.:

    
    
   function randomInt1to100() {
  // Math.random() → [0, 1)
  // Multiply by 100 → [0, 100)
  // Math.floor → integer in [0, 99]
  // Add 1 → integer in [1, 100]
  return Math.floor(Math.random() * 100) + 1;
}

/* ------------------- Demo ------------ */
//console.log('Random number (1‑100):', randomInt1to100());


 const randomNumber = randomInt(1, 100);
      const isMatch = (randomNumber === numInput.value);

      // Show the outcome
      resultBox.textContent = isMatch ? 'True' : 'False';
      resultBox.classList.remove('hidden');
      console.log('Random number:', randomNumber, 'User guess:', numInput.value, 'Match:', isMatch);
    });


  </script>

