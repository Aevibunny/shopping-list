import './style.css'
import { sortArray } from './sort-array';
import { accordionButtons } from './accordion-buttons';

const basicsContainer = document.getElementById('basics-container');
const householdContainer = document.getElementById('household-container');
const shoppingListContainer = document.getElementById('shopping-list-container');

const shoppingList = [
    // {
    //     name: 'Rice',
    //     type: 'basics',
    //     store: 'Walmart',
    // },
    // {
    //     name: 'Paper Towels',
    //     type: 'household',
    //     store: 'Sams Club',
    // },
    // {
    //     name: 'Flour',
    //     type: 'basics',
    //     store: 'Walmart',
    // },
];
const itemsArray = [
    {
        name: 'Rice',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Paper Towels',
        type: 'household',
        store: 'Sams Club',
    },
    {
        name: 'Flour',
        type: 'basics',
        store: 'Walmart',
    },
]

// Render Items list array into Basics and Household
const renderItemsList = () => {
    sortArray(itemsArray).forEach((item) => {
        const basicItem = document.createElement('button');

        basicItem.classList.add('add-item-btn');
        basicItem.textContent = '+ ' + item.name;
        basicItem.value = item.name;

        basicItem.addEventListener('click', (e) => {
            let itemIndex = itemsArray.findIndex(item => item.name === e.target.value);
            if (!shoppingList.find(item => item.name === basicItem.value)) {
                shoppingList.push(itemsArray[itemIndex]);
                renderShoppingList(shoppingList);
                console.log(shoppingList)
            }
            renderShoppingList(shoppingList);
        })
        if (item.type === 'basics') {
            basicsContainer.appendChild(basicItem);
        } else if (item.type === 'household') {
            householdContainer.appendChild(basicItem);
        }
    })
}

const renderShoppingList = () => {
    shoppingListContainer.innerHTML = '';

    const storeGroups = {};

    const sortedArray = sortArray(shoppingList);

    // Group stores into object
    sortedArray.forEach(item => {
        if (!storeGroups[item.store]) {
            storeGroups[item.store] = [];
        }
        storeGroups[item.store].push(item.name);
    })

    // Render stores and items
    for (const store in storeGroups) {

        // Store container
        const storeContainer = document.createElement('div');
        storeContainer.id = store;
        storeContainer.className = 'store-container';
        
        // Store Header
        const storeHeader = document.createElement('h3');
        storeHeader.classList.add('store-name');
        storeHeader.textContent = store;
        storeContainer.appendChild(storeHeader);

        // Ul
        const ulContainer = document.createElement('ul');

        // Create Items
        storeGroups[store].forEach (product => {
            const item = document.createElement('li');
            item.classList.add('store-item')

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = product;
        
            const label = document.createElement('label');
            label.htmlFor = product;
            label.textContent = ' ' + product;
    
            // Append Items
            item.appendChild(checkbox);
            item.appendChild(label);
            ulContainer.appendChild(item);
        });
        // Append Ul
        storeContainer.appendChild(ulContainer); 

        // Create and append Clear Button
        if (shoppingList.length > 0) {
            const clearButton = document.createElement('button');
            clearButton.textContent = 'Clear';
            clearButton.classList.add('clear-btn');
            clearButton.id = 'clear-btn';
            storeContainer.appendChild(clearButton);

            // Add Event Listener to Clear Button
            clearButton.addEventListener('click', (e) => {
                const storeName = e.target.parentElement.id;
                const filteredShoppingList = shoppingList.filter(item => item.store !== storeName)
                shoppingList.splice(0, shoppingList.length, ...filteredShoppingList);
                renderShoppingList();
                console.log(shoppingList);
            })
        }
        shoppingListContainer.appendChild(storeContainer);
    }

}

// add click events
accordionButtons();

renderItemsList();
renderShoppingList();