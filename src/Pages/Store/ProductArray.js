import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./ProductArray.module.css";
import CartContext from "../../Components/Context/CartContext";
import { NavLink } from "react-router-dom";

export const products_list = [
    {
        id: "m",
        title: "Blush stix",
        price: 18,
        image: "https://colourpop.com/cdn/shop/files/CP_Infographic_BlushStix.jpg?v=1707957979",
    },
    {
        id: "m2",
        title: "Lover era",
        price: 26,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIUWzAV3ykOZLyWFgO0S_7ZWKNE25Ro2EJ6g&s",
    },
    {
        id: "m3",
        title: "Shoutout to cupid",
        price: 30,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSRswg2QvOV5hJ8W3J8pEUnwHpskD59VaRf_-pmUI3akL-BBN4yaMaKxQ4VLdyEiFVOjeComjKqX4WM25TeX3W13Mm923Np7Lg5mNfNN8I&usqp=CAE",
    },
    {
        id: "m4",
        title: "Brownie points",
        price: 40,
        image: "https://colourpop.com/cdn/shop/files/1_BROWNIE_POINTS_BFF_MASCARA2.jpg?v=1700000625&width=988",
    },
];

const ProductArray = () => {
    const ctx = useContext(CartContext);

    const addItemHandler = (product) => {
        console.log(ctx.items);
        ctx.addItem(product);
    };

    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                {products_list.map((product) => (
                    <Col key={product.id} xs={12} md={6} lg={3}>
                        <div className={classes.card}>
                            <Card>
                                <NavLink to={`/store/${product.id}`}>
                                    <Card.Img variant="top" src={product.image} alt={product.title} />
                                </NavLink>
                                <Card.Body>
                                    <NavLink to={`/store/${product.id}`}>
                                        <Card.Title className={classes.title}>{product.title}</Card.Title>
                                    </NavLink>
                                    <Card.Text>${product.price}</Card.Text>
                                    <Button variant="success" onClick={() => addItemHandler(product)}>
                                        Add To Cart
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductArray;
