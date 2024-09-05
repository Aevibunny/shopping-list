import './style.css'
import { sortArray } from './sort-array';
import { accordionButtons } from './accordion-buttons';

const basicsContainer = document.getElementById('basics-container');
const householdContainer = document.getElementById('household-container');
const shoppingListContainer = document.getElementById('shopping-list-container');

const shoppingList = [
    {
        name: 'Rice',
        type: 'basics',
        store: 'walmart',
    },
];
const itemsArray = [
    {
        name: 'Rice',
        type: 'basics',
        store: 'walmart',
    },
    {
        name: 'Paper Towels',
        type: 'household',
        store: 'sams club',
    },
    {
        name: 'Flour',
        type: 'basics',
        store: 'walmart',
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

const renderShoppingList = () => {


}

// add click events
accordionButtons();

renderItemsList();