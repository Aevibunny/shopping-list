import { sortArray } from "./sort-array";

const shoppingListContainer = document.getElementById('shopping-list-container');

export const renderShoppingList = (array) => {
    const storeGroups = {};

    const sortedArray = sortArray(array);

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
    
            item.appendChild(checkbox);
            item.appendChild(label);
            ulContainer.appendChild(item);
        });

        storeContainer.appendChild(ulContainer); 
        shoppingListContainer.appendChild(storeContainer);
    }
    // Create Clear Button
    if (array.length > 0) {
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Clear All';
    clearButton.classList.add('clear-btn');
    clearButton.id = 'clear-btn';
    shoppingListContainer.appendChild(clearButton);
    }
}