const dropdownBtn = document.getElementById('daySelectButton');
const dropdown = document.getElementById('daySelectDropdown');

dropdownBtn.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
});

dropdown.addEventListener('change', () => {
    dropdownBtn.textContent = dropdown.options[dropdown.selectedIndex].text;
});

window.addEventListener('click', (event) => {
    if (!dropdownBtn.contains(event.target)) {
        dropdown.classList.add('hidden');
    }
});