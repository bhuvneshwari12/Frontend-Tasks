import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [id, setId] = useState('');
  const [price, setPrice] = useState('');
  const [selectedITEM, setSelectedITEM] = useState('');
  const [ElectronicData, setElectronicData] = useState([]);
  const [SkinCareData, setSkinCareData] = useState([]);
  const [FoodData, setFoodData] = useState([]);

  // USEEFFECT : 

  useEffect(() => {
    const ElectronicLocalData = localStorage.getItem("Electronic")
    const SkinCareLocalData = localStorage.getItem("SkinCare")
    const FoodLocalData = localStorage.getItem("Food")

    if (ElectronicLocalData) {
      setElectronicData(JSON.parse(ElectronicLocalData))
    }
    if (SkinCareLocalData) {
      setSkinCareData(JSON.parse(SkinCareLocalData))
    }
    if (FoodLocalData) {
      setFoodData(JSON.parse(FoodLocalData))
    }

  }, [])

  const addToBill = () => {
    const newItem = { id, price, uniqueId: Date.now() };
    switch (selectedITEM) {
      case 'electronic':
        setElectronicData([...ElectronicData, newItem]);
        localStorage.setItem('Electronic', JSON.stringify([...ElectronicData, newItem]));
        break;
      case 'skincare':
        setSkinCareData([...SkinCareData, newItem]);
        localStorage.setItem('SkinCare', JSON.stringify([...SkinCareData, newItem]));
        break;
      case 'food':
        setFoodData([...FoodData, newItem]);
        localStorage.setItem('Food', JSON.stringify([...FoodData, newItem]));
        break;
      default:
        break;
    }
    // Reset input fields after adding to the bill
    setId('');
    setPrice('');
  };


  const DeleteItem = (table, uniqueId) => {
    switch (table) {
      case 'Electronic':
        setElectronicData(ElectronicData.filter(item => item.uniqueId !== uniqueId));
        localStorage.setItem('Electronic', JSON.stringify(ElectronicData.filter(item => item.uniqueId !== uniqueId)));
        break;
      case 'SkinCare':
        setSkinCareData(SkinCareData.filter(item => item.uniqueId !== uniqueId));
        localStorage.setItem('SkinCare', JSON.stringify(SkinCareData.filter(item => item.uniqueId !== uniqueId)));
        break;
      case 'Food':
        setFoodData(FoodData.filter(item => item.uniqueId !== uniqueId));
        localStorage.setItem('Food', JSON.stringify(FoodData.filter(item => item.uniqueId !== uniqueId)));
        break;
      default:
        break;
    }
  };



  return (
    <div className="App">
      <h1>ELECTRONIC SYSTEM</h1>

      <div>
        <label>
          ID:
          <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
      </div>

      <div>
        <label>
          Choose Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
      </div>

      <div>
        <label>
          Choose a Table:
          <select value={selectedITEM} onChange={(e) => setSelectedITEM(e.target.value)}>
            <option value="">Select ITEM</option>
            <option value="electronic">Electronic</option>
            <option value="skincare">SkinCare</option>
            <option value="food">Food</option>
          </select>
        </label>
      </div>

      <div>
        <button onClick={addToBill}>Add to Bill</button>
      </div>

      <div>
        <h2>ELECTRONIC</h2>
        <ul>
          {ElectronicData.map((item) => (
            <li key={item.uniqueId}>
              {`ID: ${item.id}, Price: ${item.price}`}
              <button onClick={ ()=> DeleteItem ( 'Electronic' , item.uniqueId )}  > Delete </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>SKINCARE</h2>
        <ul>
          {SkinCareData.map((item) => (
            <li key={item.uniqueId}>
              {`ID: ${item.id}, Price: ${item.price}`}
              <button onClick={ ()=> DeleteItem ( 'SkinCare' , item.uniqueId )}  > Delete </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>FOOD</h2>
        <ul>
          {FoodData.map((item) => (
            <li key={item.uniqueId}>
              {`ID: ${item.id}, Price: ${item.price}`}
              <button onClick={ ()=> DeleteItem ( 'Food' , item.uniqueId )}  > Delete </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
