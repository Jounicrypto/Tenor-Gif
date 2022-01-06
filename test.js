const button = document.getElementById('search');
const subject = document.getElementById('gif');
const num = document.getElementById('number');
const display = document.getElementById('giphydisplay');


button.addEventListener('click', tenorSearch);

function tenorSearch() {

    let my_subject = subject.value;
    let my_number = num.value;
    let my_key = '1O5CXGZZKOGG';

    fetch(`https://api.tenor.com/v1/search?q=${my_subject}&key=${my_key}&limit=${my_number}`)
        .then(res => res.json())
        .then(data => {
            let responseTenors = data.results
            display.innerHTML = '';
            responseTenors.forEach((tenor) => {

                display.innerHTML += `<img src=${tenor.media[0].gif.url} >`;

            });
        })
        .catch((error) => {
            console.error('Error:', error);

        })

}