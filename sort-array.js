export const sortArray = (array) => {
    let sortedArray = array.sort((a, b) => {
        let aName = a.name.toLowerCase();
        let bName = b.name.toLowerCase();
        if (aName < bName) 
            return -1;
        if (aName > bName)
            return 1;
        return 0;
    })

    return sortedArray;
}