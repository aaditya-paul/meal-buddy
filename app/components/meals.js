"use client";

import React, {Component} from "react";
import {GetFood} from "@/app/components/utils/groq";
import ListRenderer, {
  ListRendererContainer,
} from "@/app/components/utils/listRenderer";
export class Meals extends Component {
  constructor() {
    super();
    this.state = {
      food: [],
    };
  }

  async componentDidMount() {
    let food = await GetFood().then(async (e) => {
      this.setState({food: e});
    });
  }
  render() {
    return (
      <div className="md:mt-10 font-epilogue p-4 md:p-0">
        <div className="font-bold text-2xl mb-5">Browse Our Meals !</div>
        <div className="">
          <ListRendererContainer>
            <ListRenderer element={this.state.food} />
          </ListRendererContainer>
        </div>
      </div>
    );
  }
}

export default Meals;
