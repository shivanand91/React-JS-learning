
function List(props){

    const category = props.category;
    const itemList = props.items;

    const fruits = [{id: 1, name: "Banana", calories: 40}, 
                    {id: 2, name: "Apple", calories: 70}, 
                    {id: 3, name: "Mango", calories: 30}, 
                    {id: 4, name: "Orange", calories: 60}];

    const vegetable = [{id: 5, name: "Onion", calories: 40}, 
                      {id: 6, name: "Brinjal", calories: 70}, 
                      {id: 7, name: "Patato", calories: 30}, 
                      {id: 8, name: "Tamato", calories: 60}];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical
    // fruits.sort((a, b) => a.calories - b.calories); // numeric
    // fruits.sort((a, b) => b.calories - a.calories); // reverse numeric
    // const localeFruits = fruits.filter(fruit => fruit.calories < 100)
    // const localeFruits = fruits.filter(fruit => fruit.calories > 100)

    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>)

    return(<>

            <h3>{category}</h3>
            <ol>{listItems}</ol>
    
          </>);
}

export default List