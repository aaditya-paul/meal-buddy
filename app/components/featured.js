import React, {useState, Component} from "react";
import Image from "next/image";
import How1 from "../../public/assets/how1.jpg";
import How2 from "../../public/assets/how2.jpg";
import How3 from "../../public/assets/how3.jpg";
import ListRenderer, {ListRendererContainer} from "./utils/listRenderer";
import {GetFood} from "./utils/groq";

const featuredMeals = [
  {
    id: 1,
    title: "Craft your plan",
    about: " Create a meal plan that fits your life and goals",
    price: "69.99",
    image: How1,
    slug: "craft-your-plan",
    // rating:""
  },
  {
    id: 2,
    title: "We cook your meals",
    about:
      "Our chefs prepare your meals from scratch using fresh, seasonal ingredients",
    price: "420.32",
    image: How2,
    slug: "we-cook-your-meals",
    // rating:""
  },
  {
    id: 3,
    title: "Fresh meals, delivered",
    about:
      "Get your meals delivered to your door, ready to eat. You can also pick them up from one of our stores",
    price: "20.99",
    image: How3,
    slug: "fresh-meals-delivered",
    // rating:""
  },
  {
    id: 4,
    title: "Fresh meals, delivered",
    about:
      "Get your meals delivered to your door, ready to eat. You can also pick them up from one of our stores",
    price: "20.99",
    image: How2,
    slug: "fresh-meals-delivered",
    // rating:""
  },
];

export class Featured extends Component {
  constructor() {
    super();
    this.state = {
      food: [],
    };
  }

  async componentDidMount() {
    let food = await GetFood('*[_type == "food" && featured == true]').then(
      async (e) => {
        this.setState({food: e});
      }
    );
    // console.log(this.state.food.length);
  }

  render() {
    return (
      <div className="md:mt-10 font-epilogue p-4 md:p-0">
        <div className="font-bold text-2xl mt-5 md:mt-0 mb-3 md:mb-5 ">
          Featured Meals{" "}
        </div>
        <div className="">
          <ListRendererContainer>
            <ListRenderer element={this.state.food} />
          </ListRendererContainer>
        </div>
      </div>
    );
  }
}

export default Featured;
