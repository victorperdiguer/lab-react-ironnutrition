import './App.css';
import foodData from './foods.json';
import { useState, useEffect } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFood';
import Search from './components/Search';
import { Card, Row, Col, Divider, Input, Button } from "antd";

function App() {
  const [foods, setFoods] = useState(foodData);
  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(false);
  const [search, setSearch] = useState('');

  const handleShowList = () => {
    setShowList(prev => !prev);
  }

  const handleShowForm = () => {
    setShowForm(prev => !prev);
  }

  const handleAddFood = (newFood) => {
    setFoods([...foods, newFood]);
    setShowForm(false);
  }

  const handleSearchFilter = (searchInput) => {
    setSearch(searchInput);
  }

  const displayFood = (search) => {
    return foods.filter(food => food.name.toLowerCase().includes(search.toLowerCase()))
  }
  
  const handleDelete = (deleteName) => {
    const filteredFoods = foods.filter(elem => elem.name !== deleteName);
    setFoods(filteredFoods);
  }

  return (
    <div className="App">
      <Divider onClick={handleShowForm}>Add Food</Divider>
      {showForm && <AddFoodForm handleAddFood={handleAddFood}/>}
      <Divider onClick={handleShowList}>Food List</Divider>
      {showList && <div className='food-list-container'>
        <Search handleSearchFilter={handleSearchFilter}/>
        <div className='food-list'>
          {displayFood(search).map((food, i) => {
            return (
                <FoodBox key={i} food={food} handleDelete={handleDelete}/>
            )
          })}
        </div>
      </div>}
    </div>
  );
}

export default App;
