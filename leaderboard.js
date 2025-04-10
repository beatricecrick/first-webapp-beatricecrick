// Sortable Table
const data = [
    {
        name: 'Shark',
        overall: 52500,
        speed: 8500,
        strength: 9000,
        beauty: 5000,
        favorability: 6500,
        intellegence: 7500,
        PredatorPrey: 'Predator',
        specialSkill: 6000,

    },
    {
        name: 'Dolphin',
        overall: 56800,
        speed: 9000,
        strength: 6500,
        beauty: 9000,
        favorability: 10000,
        intellegence: 9800,
        PredatorPrey: 'Both',
        specialSkill: 7500,
    },
    {
        name: 'Turtle',
        overall: 36500,
        speed: 3500,
        strength: 5000,
        beauty: 8000,
        favorability: 9500,
        intellegence: 6500,
        PredatorPrey: 'Prey',
        specialSkill: 4000,
    },
    {
        name: 'Whale',
        overall: 52000,
        speed: 4500,
        strength: 9500,
        beauty: 8000,
        favorability: 9000,
        intellegence: 8500,
        PredatorPrey: 'Both',
        specialSkill: 7500,
    },
    {
        name: 'Jellyfish',
        overall: 28000,
        speed: 2500,
        strength: 1000,
        beauty: 9000,
        favorability: 4000,
        intellegence: 1500,
        PredatorPrey: 'Prey',
        specialSkill: 10000,
    },
    {
        name: 'Clownfish',
        overall: 39000,
        speed: 5000,
        strength: 2500,
        beauty: 9500,
        favorability: 10000,
        intellegence: 5500,
        PredatorPrey: 'Prey',
        specialSkill: 6500,
    },
    {
        name: 'Seahorse',
        overall: 33700,
        speed: 1500,
        strength: 2000,
        beauty: 9500,
        favorability: 9000,
        intellegence: 3500,
        PredatorPrey: 'Prey',
        specialSkill: 8200,
    },
    {
        name: 'Electric eel',
        overall: 45800,
        speed: 6500,
        strength: 7000,
        beauty: 3500,
        favorability: 7500,
        intellegence: 6500,
        PredatorPrey: 'Both',
        specialSkill: 9800,
    },
    {
        name: 'Orca',
        overall: 64300,
        speed: 9500,
        strength: 10000,
        beauty: 9000,
        favorability: 9000,
        intellegence: 10000,
        PredatorPrey: 'Predator',
        specialSkill: 6800,
    },
    {
        name: 'Narwhal',
        overall: 53100,
        speed: 7500,
        strength: 6500,
        beauty: 9000,
        favorability: 9500,
        intellegence: 7000,
        PredatorPrey: 'Both',
        specialSkill: 8600,
    },
];
const createTable = productData => {
    const tableElem = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tbody');

    const headers = Object.keys(productData[0]);
    tableHead.appendChild(createHeaderRow(headers));

    productData.forEach(rowData => {
        tableBody.appendChild(createProductRow(rowData));
    })
    
    tableElem.appendChild(tableHead);
    tableElem.appendChild(tableBody);

    return tableElem;
}
const createHeaderRow = columnNames => {
    const tr = document.createElement('tr');
    columnNames.forEach(columnName => {
        const th = document.createElement('th');
        th.textContent = columnName[0].toUpperCase() + columnName.slice(1);
        const searchUp = document.createElement('span');
        searchUp.textContent = '🔼';
        const searchDown = document.createElement('span');
        searchDown.textContent = '🔽';

        searchUp.onclick = () => sortDataBy(columnName, 'ASC');
        searchDown.onclick = () => sortDataBy(columnName, 'DESC');
        
        th.appendChild(searchDown);
        th.appendChild(searchUp);
        tr.appendChild(th);
    })

    return tr;
}
const createProductRow = product => {
    const tr = document.createElement('tr');
    Object.values(product).forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        tr.appendChild(td); 
    });

    return tr;
}
const sortDataBy = (columnName, direction) => {
    const sortedASCData = [...data.sort((a, b) => a[columnName] > b[columnName] ? 1 : -1)];
    const sortedDESCData = [...data.sort((a, b) => a[columnName] < b[columnName] ? 1 : -1)];
    renderTable(direction === 'ASC' ? sortedASCData : sortedDESCData);
};
const renderTable = productData => {
    const sortableTableElement = document.getElementById('sortableTable');
    sortableTableElement.innerHTML = '';
    sortableTableElement.appendChild(createTable(productData));
};
renderTable(data);