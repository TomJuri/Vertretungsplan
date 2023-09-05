function loadTable(date) {
    const table = document.getElementById("the-table");
    let child = table.lastElementChild
    while(child) {
        table.removeChild(child)
        child = table.lastElementChild
    }

    const hourMain = document.createElement("div")
    hourMain.className = "table-row-a"
    hourMain.textContent = "Stunde"
    table.appendChild(hourMain)
    const clazzMain = document.createElement("div")
    clazzMain.className = "table-row-a"
    clazzMain.textContent = "Klasse"
    table.appendChild(clazzMain)
    const subjectMain = document.createElement("div")
    subjectMain.className = "table-row-a"
    subjectMain.textContent = "Fach"
    table.appendChild(subjectMain)
    const teacherMain = document.createElement("div")
    teacherMain.className = "table-row-a"
    teacherMain.textContent = "Lehrer"
    table.appendChild(teacherMain)
    const roomMain = document.createElement("div")
    roomMain.className = "table-row-b"
    roomMain.textContent = "Raum"
    table.appendChild(roomMain)

    const parts = date.split(".")
    const day = parts[0]
    const month = parts[1]
    const year = `20${parts[2]}`
    const newDate = `${year}-${month}-${day}`
    substJson.forEach(jsonObject => {
        if(jsonObject["date"] !== newDate) {
            return;
        }
        jsonObject["substitutions"].forEach(substitution => {
            const hour = document.createElement("div")
            hour.className = "table-row-a"
            hour.textContent = substitution["hour"]
            table.appendChild(hour)
            const clazz = document.createElement("div")
            clazz.className = "table-row-a"
            clazz.textContent = substitution["class"]
            table.appendChild(clazz)
            const subject = document.createElement("div")
            subject.className = "table-row-a"
            subject.textContent = substitution["subject"]
            table.appendChild(subject)
            const teacher = document.createElement("div")
            teacher.className = "table-row-a"
            teacher.textContent = substitution["teacher"]
            table.appendChild(teacher)
            const room = document.createElement("div")
            room.className = "table-row-b"
            room.textContent = substitution["room"]
            table.appendChild(room)
        })
    });
    document.getElementById("loading-spinner").classList.add("hidden")
}