const getData = async () => {
    let arrayData = [];
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        arrayData = await response.json();
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
    return arrayData;
}

document.addEventListener('DOMContentLoaded', async function () {
    let data = await getData();
    let currentPage = 0;
    const rowsPerPage = 10;

    const filterData = () => {
        const table = document.getElementById('data-table');
        const startIndex = currentPage * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        const currentData = data?.slice(startIndex, endIndex);

        table.innerHTML = '';
        currentData.forEach(post => {
            const row = table.insertRow();
            const idCell = row.insertCell(0);
            const titleCell = row.insertCell(1);
            const bodyCell = row.insertCell(2);

            idCell.textContent = post.id;
            titleCell.textContent = post.title;
            bodyCell.textContent = post.body;
        });

        const backButton = document.getElementById('back-button');
        backButton.disabled = currentPage === 0;

        const nextButton = document.getElementById('next-button');
        nextButton.disabled = currentPage === Math.floor((data.length - 1) / rowsPerPage);
    }

    setTimeout(() => { filterData(); }, 2000);

    document.getElementById('next-button').addEventListener('click', function () {
        currentPage++;
        filterData();
    });

    document.getElementById('back-button').addEventListener('click', function () {
        if (currentPage > 0) {
            currentPage--;
            filterData();
        }
    });
});
