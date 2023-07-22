import React, { useState, createRef } from 'react';
import './App.css';


const Item = ({name, price}) => (
  <li>{name}, ${price}</li>
)

const App = props => {
  let [items, setItems] = useState([
      { id: 1, name: 'Durian', price: 0.99 },
      { id: 2, name: 'Orange', price: 0.89 },
    ]
  )

  let nameRef = createRef();
  let priceRef = createRef();
  
  let add = () => {
    let id = items.length + 1;
    let name = nameRef.current.value;
    let price = priceRef.current.value;

    setItems([
        ...items,
        { id, name, price }
      ]);
    }

  return (
    <div>
      <h1>Hello React</h1>
      <ul>
          {items.map(i => (
          
              <Item
                key={i.id} //DOM
                name={i.name}
                price={i.price}
              />
             
          ))}
      </ul>
      <div>
        <input type='text' ref={nameRef} /><br/><br/>
        <input type='text' ref={priceRef} /><br/><br/>
        <button onClick={add}>Add</button>
      </div>
    </div>
  )

}
export default App;
