
function List(){

    const fruits = [{id: 1, name: "Banana", calories: 40}, 
                    {id: 2, name: "Apple", calories: 70}, 
                    {id: 3, name: "Mango", calories: 30}, 
                    {id: 4, name: "Orange", calories: 60}];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical
    // fruits.sort((a, b) => a.calories - b.calories); // numeric
    // fruits.sort((a, b) => b.calories - a.calories); // reverse numeric
    // const localeFruits = fruits.filter(fruit => fruit.calories < 100)
    // const localeFruits = fruits.filter(fruit => fruit.calories > 100)

    const ListItems = fruits.map(fruits => <li key={fruits.id}>{fruits.name}: &nbsp; <b>{fruits.calories}</b></li>)

    return(<ol>{ListItems}</ol>);
}

export default List