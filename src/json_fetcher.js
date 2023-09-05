const jsonUrl = 'https://macrohq.dev/subst.json';

fetch(jsonUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
    })
    .then(jsonDataArray => {
        window.substJson = jsonDataArray
        loadDates()
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });