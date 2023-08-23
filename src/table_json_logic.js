const jsonUrl = 'https://macrohq.dev/subst.json';

fetch(jsonUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
    })
    .then(jsonDataArray => {
        jsonDataArray.forEach(jsonData => {
            const parts = jsonData["date"].split('-');
            const year = parts[0].substring(2);
            const month = parts[1];
            const day = parts[2];
            const formattedDate = `${day}.${month}.${year}`;
           dates.push(formattedDate);
           dates.sort(compareDates);
        });
        loadDates()
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });

function loadDates() {
    dates.forEach(date => {
        const newLink = document.createElement("a");
        newLink.href = "#";
        newLink.className = "desktop-dropdown-item";
        newLink.setAttribute("role", "menuitem");
        newLink.textContent = date;
        const parentElement = document.getElementById("daySelectDropdownElementContainer");
        parentElement.appendChild(newLink);
    });
}

function compareDates(dateStr1, dateStr2) {
    const [day1, month1, year1] = dateStr1.split('.').map(Number);
    const [day2, month2, year2] = dateStr2.split('.').map(Number);

    // Compare years
    if (year1 !== year2) {
        return year1 - year2;
    }

    // Compare months
    if (month1 !== month2) {
        return month1 - month2;
    }

    // Compare days
    return day1 - day2;
}