import React, {Component} from "react";
import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import {client} from "./groq";
import defaultImage from "../../../public/assets/how2.jpg";
const maxCharLength = 90;

class ListRenderer extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
    };
  }

  render() {
    const {element, noImage} = this.props;
    const builder = imageUrlBuilder(client);
    if (element.length !== 0) {
      return element.map((e, i) => {
        // console.log(i);
        const about = e.excerpt;
        const aboutLength = about ? about.length : 0;

        return (
          <Link key={e.slug.current} href={"/meals/" + e.slug.current}>
            <div className="w-full px-1 p-5 rounded-lg h-full group flex flex-col justify-between">
              <div className="relative w-full h-64 mb-4 md:group-hover:scale-90 transition-transform ease-in-out">
                <Image
                  fill
                  src={
                    noImage
                      ? defaultImage
                      : builder.image(e.mainImage.asset).url()
                  }
                  alt={e.title}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:px-1 md:group-hover:scale-90 transition-transform ease-in-out flex flex-col">
                <p className="font-bold text-xl text-neutral-700">{e.title}</p>
                <p className="text-sm font-medium text-[#9C574A]">
                  {aboutLength > maxCharLength
                    ? about.substring(0, maxCharLength) + "..."
                    : about}
                </p>
              </div>
              <div className=" md:group-hover:scale-90 transition-transform ease-in-out text-sm font-bold text-[#9C574A] pt-5 items-end">
                <span className="border-2 hover:bg-[#F2330D] hover:text-[#ffffff] px-5 py-2 rounded-lg border-[#F2330D]">
                  ₹{e.price}
                </span>
              </div>
            </div>
          </Link>
        );
      });
    } else {
      return null;
    }
  }
}

export default ListRenderer;
