const dropdownBtn = document.getElementById('daySelectButton');
const dropdown = document.getElementById('daySelectDropdown');

dropdownBtn.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
});

function loadDates() {
    const dates = []

    substJson.forEach(jsonData => {
        const parts = jsonData["date"].split('-');
        const year = parts[0].substring(2);
        const month = parts[1];
        const day = parts[2];
        const formattedDate = `${day}.${month}.${year}`;
        dates.push(formattedDate);
        dates.sort(compareDates);
    });

    loadTable(dates[0])

    const parentElement = document.getElementById("daySelectDropdownElementContainer");

    dates.forEach(date => {
        const newLink = document.createElement("a");
        newLink.href = "#";
        newLink.className = "desktop-dropdown-item";
        newLink.setAttribute("role", "menuitem");
        newLink.textContent = date;
        newLink.addEventListener('click', () => {
            loadTable(newLink.textContent);
        });
        parentElement.appendChild(newLink);
    });
}

function compareDates(dateStr1, dateStr2) {
    const [day1, month1, year1] = dateStr1.split('.').map(Number);
    const [day2, month2, year2] = dateStr2.split('.').map(Number);
    if (year1 !== year2) {
        return year1 - year2;
    }
    if (month1 !== month2) {
        return month1 - month2;
    }
    return day1 - day2;
}

window.addEventListener('click', (event) => {
    if (!dropdownBtn.contains(event.target)) {
        dropdown.classList.add('hidden');
    }
});