import React from "react";
import {Col, Card, Button} from "antd";

function FoodBox(props) {
    const {food: { name, image, calories, servings }, handleDelete} = props;
    return (
        <Col>
            <Card
                className="card"
                title={name}
                style={{ width: 230, height: 300, margin: 10 }}
            >
                <img src={image} height={60} alt={name} />
                <p>Calories: {calories}</p>
                <p>Servings: {servings}</p>
                <p>
                <b>Total Calories: {calories*servings}</b> kcal
                </p>
                <Button className="button" type="primary" onClick={() => handleDelete(name)}> Delete </Button>
            </Card>
        </Col>
    );
}

export default FoodBox;