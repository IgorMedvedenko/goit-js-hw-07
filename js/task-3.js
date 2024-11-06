const inputName = document.getElementById(`name-input`);
const outputName = document.getElementById(`name-output`);
inputName.addEventListener(`input`, () => {
  const name = inputName.value.trim();
  outputName.textContent = name ? `${name}` : `Anonymous`;
});
