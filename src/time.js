function updateCurrentTime() {
    const timeElement = document.getElementById('time');
    const currentTime = new Date();

    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');

    const day = String(currentTime.getDate()).padStart(2, '0');
    const month = String(currentTime.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = currentTime.getFullYear();

    timeElement.textContent = `${hours}:${minutes}:${seconds} ${day}.${month}.${year.toString().slice(2, 4)}`;
}

updateCurrentTime();

setInterval(updateCurrentTime, 1000);