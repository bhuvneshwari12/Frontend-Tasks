import React, { Fragment } from "react";
import mealsImage from "../../Assests/Meal.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Carousel from "react-bootstrap/Carousel";
import picture1 from "../../Assests/Meal.jpg";
import picture2 from "../../Assests/copy5.jpg";
import picture3 from "../../Assests/copy6.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2 className={classes.reactmeals}>React Meals</h2>
        <HeaderCartButton cartShowHandler={props.cartShowHandler} />
      </header>
      <div className={classes["main-image"]}>
        <Carousel interval={3000}>
          <Carousel.Item>
            <img src={picture3}></img>
            <Carousel.Caption>
              <h3>welcomel</h3>
              <p>delicious food,delivered to you</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={picture2}></img>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>delicious food,delivered to you</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={picture1}></img>
            <Carousel.Caption>
              <h3>welcome</h3>
              <p>delicious food,delivered to you</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Fragment>
  );
};
export default Header;