import React from 'react';
import { useState } from 'react';
import { Input } from 'antd';

function AddFoodForm({handleAddFood}) {
    const initialInput = {
        name: 'sample',
        image: 'sample',
        calories: 0,
        servings: 0
    }
    const [input, setInput] = useState(initialInput)
    const handleInput = (e) => {
        setInput((prev) => {
            return ({
                ...prev,
                [e.target.name]: e.target.value
            })
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddFood(input);
        setInput(initialInput);
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <label>Name</label>
            <Input value={input.name} name="name" type="text" onChange={handleInput} />

            <label>Image</label>
            <Input value={input.image} name="image" type="text" onChange={handleInput} />

            <label>Calories</label>
            <Input value={input.calories} name="calories" type="number" onChange={handleInput} />

            <label>Servings</label>
            <Input value={input.servings} name="servings" type="number" onChange={handleInput} />
            <button type="submit">Create</button>
        </form>
    );
}

export default AddFoodForm;
