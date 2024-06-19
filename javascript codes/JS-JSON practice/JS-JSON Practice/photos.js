let allData;
let currentPage = 0;
const dataContainer = document.getElementById('data-container');
const modelPopup = document.getElementById('dailog1');
const button = document.querySelector('button');
modelPopup.classList.add('dailog');
function viewMore(){
    modelPopup.style.display = "block";
}
function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => {
            allData = data;
            displayData(data);
        });
}

function displayData(data) {
    const startIndex = currentPage * 20;
    const endIndex = startIndex + 20;
    const slicedData = data.slice(startIndex, endIndex);

    slicedData.forEach(item => {
        const row = document.createElement('div');
        row.classList.add('row');
        const id = document.createElement('p');
        id.innerHTML = `<span class="side-heading">Id${'\xa0\xa0\xa0\xa0\xa0'}:</span> ${item.id}`;
        const title = document.createElement('p');
        title.innerHTML = `<span class="side-heading">Title :</span> ${item.title}`;
        const url = document.createElement('a');
        url.href = item.url;
        url.target = '_blank';
        url.innerHTML = `<span class="side-heading">URL :</span> ${item.url}`;

        const button = document.createElement('button');
        button.innerText ="more.."
        button.addEventListener('click', viewMore);
        row.appendChild(id);
        row.appendChild(title);
        row.appendChild(url);
        row.appendChild(button);
        dataContainer.appendChild(row);
    });
}

function loadMore() {
    currentPage++;
    displayData(allData);
}

button.addEventListener('click', loadMore);

fetchData();
