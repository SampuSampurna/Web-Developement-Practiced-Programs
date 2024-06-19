let allData;
let currentPage = 0;
let dataContainer = document.getElementById('data-container');
const modelPopup = document.getElementById('dailog');
modelPopup.classList.add('dailog');

function viewMore(user) {
    const modelBody = document.querySelector('.model-body');
    modelBody.innerHTML = `<p><span class="side-heading">Address${'\xa0\xa0\xa0\xa0'}:</span> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p> <p><span class="side-heading">Geo${'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'}:</span> ${user.address.geo.lat}, ${user.address.geo.lng}</p> <p><span class="side-heading">Phone${'\xa0\xa0\xa0\xa0\xa0\xa0\xa0'}:</span> ${user.phone}</p> <p><span class="side-heading">Website${'\xa0\xa0\xa0\xa0'}:</span> ${user.website}</p> <p><span class="side-heading">Company : </span> ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>`;

    modelPopup.style.display = 'block';
    document.body.classList.add('modal-open'); // Add modal-open class to body
}

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            allData = data;
            displayData(data);
        })
}

function displayData(data) {
    data.forEach(item => {
        const row = document.createElement('div');
        row.classList.add('row');

        const id = document.createElement('p');
        id.innerHTML = `<span class="side-heading">Id${'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'} :</span> ${item.id}`;
        row.appendChild(id);

        const name = document.createElement('p');
        name.innerHTML = `<span class="side-heading">Name${'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'}:</span> ${item.name}`;
        row.appendChild(name);

        const username = document.createElement('p');
        username.innerHTML = `<span class="side-heading">UserName :</span> ${item.username}`;
        row.appendChild(username);

        const email = document.createElement('p');
        email.innerHTML = `<span class="side-heading">Email${'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'} :</span> ${item.email}`;
        row.appendChild(email);

        const address = document.createElement('div');
        address.classList.add('remaining-details');
        address.innerHTML = `<span class="side-heading">Address:</span> ${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}`;
        row.appendChild(address);

        const button = document.createElement('button');
        button.innerText = "more..";
        button.style.float="right";
        button.style.marginRight="10px";
        button.style.padding="5px";
        button.style.backgroundColor="#91cee5";
        button.style.borderColor="#91cee5";
        button.style.borderRadius="9px";
        button.addEventListener('click', function() {
            const user = this.parentNode.querySelector('.user-data').dataset.user;
            viewMore(JSON.parse(user));
            const dataContainer = document.getElementById('data-container')
            dataContainer.style.opacity = '0.5'
            dataContainer.style.pointerEvents = 'none'
        });
        
        row.appendChild(button);

        const userData = document.createElement('div');
        userData.classList.add('user-data');
        userData.dataset.user = JSON.stringify(item);
        row.appendChild(userData);

        dataContainer.appendChild(row);

        row.querySelectorAll('.remaining-details').forEach(function(element) {
            element.style.display = 'none';
        });

        row.addEventListener('click', function(event) {
            if (event.target !== button) {
                viewMore(item);
            }
        });
    });
}

fetchData();

document.getElementById('ok-button').addEventListener('click', function() {
    // Hide the dialog
    const modelPopup = document.getElementById('dailog');
    modelPopup.style.display = 'none';
    // Enable background content
    const dataContainer = document.getElementById('data-container')
    dataContainer.style.opacity = '1'
    dataContainer.style.pointerEvents = 'auto'
});
