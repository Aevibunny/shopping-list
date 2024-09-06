import './style.css'
import { sortArray } from './sort-array';
import { accordionButtons } from './accordion-buttons';
import { saveCheckboxState, getCheckboxState } from './checkbox-state';

const basicsContainer = document.getElementById('basics-container');
const householdContainer = document.getElementById('household-container');
const shoppingListContainer = document.getElementById('shopping-list-container');

const shoppingList = [];
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
    {
        name: 'Sugar',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Salt',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Baking Powder',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Baking Soda',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Vanilla',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Garlic Powder',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Onion Powder',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Pepper',
        type: 'basics',
        store: 'Costco',
    },
    {
        name: 'Oatmeal',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Cornstarch',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Mustard',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Ketchup',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'BBQ',
        type: 'basics',
        store: 'Costco',
    },
    {
        name: 'Mayo',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Olive Oil',
        type: 'basics',
        store: 'Costco',
    },
    {
        name: 'Salsa',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Spaghetti Sauce',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Pasta',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Bullion',
        type: 'basics',
        store: 'Costco',
    },
    {
        name: 'Beef',
        type: 'basics',
        store: 'Safeway',
    },
    {
        name: 'Chicken',
        type: 'basics',
        store: 'Safeway',
    },
    {
        name: 'Panko',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Tuna',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Tomato Sauce',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Canned Tomatoes',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Refried Beans',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Cereal',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Garlic Salt',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Clams',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Lipton Onion',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Cream of Mushroom',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Cream of Chicken',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Tomato',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Canned Fruit',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Raisins',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Peanut Butter',
        type: 'basics',
        store: 'Kylie',
    },
    {
        name: 'Jelly',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Applesauce',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Green Chiles',
        type: 'basics',
        store: 'Costco',
    },
    {
        name: 'Baked Beans',
        type: 'basics',
        store: 'Costco',
    },
    {
        name: 'Chicken Stock',
        type: 'basics',
        store: 'Costco',
    },
    {
        name: 'Tea Bags',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Crackers',
        type: 'basics',
        store: 'Bashas',
    },
    {
        name: 'Powdered Sugar',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Brown Sugar',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Cocoa',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Cornbread',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Syrup',
        type: 'basics',
        store: 'Costco',
    },
    {
        name: 'Ranch',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Au Jus',
        type: 'basics',
        store: 'Bashas',
    },
    {
        name: 'Honey',
        type: 'basics',
        store: 'Costco',
    },
    {
        name: 'Vegetable Oil',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Pudding',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Jello',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Juice',
        type: 'basics',
        store: 'Walmart',
    },
    {
        name: 'Toilet Paper',
        type: 'household',
        store: 'Costco',
    },
    {
        name: 'Charmin',
        type: 'household',
        store: 'Ronda',
    },
    {
        name: 'Shampoo',
        type: 'household',
        store: 'Amazon',
    },
    {
        name: 'Conditioner',
        type: 'household',
        store: 'Amazon',
    },
    {
        name: 'Soap',
        type: 'household',
        store: 'Ronda',
    },
    {
        name: 'Laundry Soap',
        type: 'household',
        store: 'Costco',
    },
    {
        name: 'Persil',
        type: 'household',
        store: 'Ronda',
    },
    {
        name: 'Ziploc Quart',
        type: 'household',
        store: 'Amazon',
    },
    {
        name: 'Ziploc Gallon',
        type: 'household',
        store: 'Amazon',
    },
    {
        name: 'Dish Soap',
        type: 'household',
        store: 'Amazon',
    },
    {
        name: 'Hand Soap',
        type: 'household',
        store: 'Ronda',
    },
    {
        name: 'Tylenol',
        type: 'household',
        store: 'Walgreens',
    },
    {
        name: 'Advil',
        type: 'household',
        store: 'Costco',
    },
    {
        name: 'Kleenex',
        type: 'household',
        store: 'Walgreens',
    },
    {
        name: 'Salt Blocks',
        type: 'household',
        store: 'TSC',
    },
    {
        name: 'Cascade',
        type: 'household',
        store: 'Amazon',
    },
    {
        name: 'Trash Bags',
        type: 'household',
        store: 'Amazon',
    },
];

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
                saveData()
                renderShoppingList();
            }
            renderShoppingList();
        })
        if (item.type === 'basics') {
            basicsContainer.appendChild(basicItem);
        } else if (item.type === 'household') {
            householdContainer.appendChild(basicItem);
        }
    })
    saveData();
}

// Render Shopping List
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

            const checkboxId = `${store}-${product}`;
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = product;
            checkbox.checked = getCheckboxState(checkboxId);

            checkbox.addEventListener('change', () => {
                saveCheckboxState(checkboxId, checkbox.checked);
            })
        
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
                // Remove checkbox states for the store being cleared
                storeGroups[storeName].forEach((product) => {
                    const uniqueId = `${storeName}-${product}`;
                    removeCheckboxState(uniqueId);
                });
                const filteredShoppingList = shoppingList.filter(item => item.store !== storeName)
                shoppingList.splice(0, shoppingList.length, ...filteredShoppingList);
                renderShoppingList();
            })
        }
        shoppingListContainer.appendChild(storeContainer);
    }
    saveData();
}

// Function to remove checkbox state from localStorage
const removeCheckboxState = (uniqueId) => {
    const checkboxStates = JSON.parse(localStorage.getItem('checkboxStates')) || {};
    delete checkboxStates[uniqueId];  // Remove the specific checkbox state
    localStorage.setItem('checkboxStates', JSON.stringify(checkboxStates));
};

//save local storage
const saveData = () => {
    try {
        localStorage.setItem('itemsArray', JSON.stringify(itemsArray));
        localStorage.setItem('shoppingArray', JSON.stringify(shoppingList));
    } catch (error) {
        console.error('Error saving data to localStorage:', error);
    }
};
  
const loadData = () => {
        try {
            // Retrieve items and shopping list from localStorage
            let retrievedItemsList = localStorage.getItem('itemsArray');
            let retrievedShoppingList = localStorage.getItem('shoppingArray');
    
            // Fallback to default arrays if nothing is in localStorage
            let fixedItemsList = retrievedItemsList ? JSON.parse(retrievedItemsList) : [...itemsArray];
            let fixedShoppingList = retrievedShoppingList ? JSON.parse(retrievedShoppingList) : [...shoppingList];
    
            // Replace current arrays with loaded or fallback data
            itemsArray.splice(0, itemsArray.length, ...fixedItemsList);
            shoppingList.splice(0, shoppingList.length, ...fixedShoppingList);
        } catch (error) {
            console.error('Error loading data from localStorage:', error);
        }
};

loadData();
accordionButtons(); // add click events
renderItemsList();
renderShoppingList();