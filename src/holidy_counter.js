function updateCurrentTime() {
    const targetDate = new Date("2023-09-02 15:30:00");
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference < 0) {
        return "00:00:00:00";
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const formattedTime = `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const timeElement = document.getElementById('holiday-counter');
    timeElement.textContent = formattedTime
}

updateCurrentTime();
setInterval(updateCurrentTime, 1000);
