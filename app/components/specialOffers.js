import Image from "next/image";
import React, {Component} from "react";
import How1 from "../../public/assets/how1.jpg";
import How2 from "../../public/assets/how2.jpg";
import How3 from "../../public/assets/how3.jpg";
import ListRenderer, {ListRendererContainer} from "./utils/listRenderer";
import {GetFood} from "./utils/groq";

export class specialOffers extends Component {
  constructor() {
    super();
    this.state = {
      food: [],
    };
  }

  async componentDidMount() {
    let food = await GetFood(
      '*[_type == "food" && specialOffers == true]'
    ).then(async (e) => {
      this.setState({food: e});
    });
  }
  render() {
    return (
      <div className="md:mt-10 font-epilogue p-4 md:p-0">
        <div className="font-bold text-2xl mb-3 md:mb-5">Special Offers </div>
        <div className="">
          <ListRendererContainer>
            <ListRenderer element={this.state.food} />
          </ListRendererContainer>
        </div>
      </div>
    );
  }
}

export default specialOffers;
