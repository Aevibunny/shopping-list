import './style.css'
import { sortArray } from './sort-array';
import { accordionButtons } from './accordion-buttons';
import { renderShoppingList } from './render-shopping-list';

const basicsContainer = document.getElementById('basics-container');
const householdContainer = document.getElementById('household-container');

const shoppingList = [
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
            let itemStore = itemsArray[itemIndex].store
            console.log(itemStore);
        })
        if (item.type === 'basics') {
            basicsContainer.appendChild(basicItem);
        } else if (item.type === 'household') {
            householdContainer.appendChild(basicItem);
        }
    })
}

// add click events
accordionButtons();

renderItemsList();
renderShoppingList(shoppingList);