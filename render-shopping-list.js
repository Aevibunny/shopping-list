import { sortArray } from "./sort-array";

const shoppingListContainer = document.getElementById('shopping-list-container');

export const renderShoppingList = (array) => {
    shoppingListContainer.innerHTML = '';

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
        if (array.length > 0) {
            const clearButton = document.createElement('button');
            clearButton.textContent = 'Clear';
            clearButton.classList.add('clear-btn');
            clearButton.id = 'clear-btn';
            storeContainer.appendChild(clearButton);

            // Add Event Listener to Clear Button
            clearButton.addEventListener('click', (e) => {
                const storeName = e.target.parentElement.id;
                array = array.filter(item => item.store !== storeName);
                renderShoppingList(array);
                console.log(array);
            })
        }
        shoppingListContainer.appendChild(storeContainer);
    }

}