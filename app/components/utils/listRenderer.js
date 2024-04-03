import React, {Children, Component} from "react";
import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import {client} from "./groq";
import LoadingItems from "../loadingItems";
const maxCharLength = 90;

class ListRenderer extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
    };
  }

  render() {
    const {element} = this.props;
    const builder = imageUrlBuilder(client);
    if (element.length !== 0) {
      return element.map((e, i) => {
        // console.log(i);
        const about = e.excerpt;
        const aboutLength = about ? about.length : 0;

        return (
          <Link key={e.slug.current} href={"/meals/" + e.slug.current}>
            <div className="w-full border-r-5 shadow-[2px_1px_63px_-12px_rgba(0,0,0,0.15)] transition-all ease-linear  py-5 px-5 rounded-lg h-full group  flex flex-col justify-between">
              <div className="relative w-full h-64 mb-4 md:group-hover:scale-90 transition-transform ease-in-out">
                <Image
                  fill
                  src={builder.image(e.mainImage.asset).url()}
                  alt={e.title}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:px-1 md:group-hover:scale-90 transition-transform ease-in-out flex flex-col ">
                <p className="font-bold text-xl text-neutral-700">{e.title}</p>
                <p className="text-sm font-medium text-[#953766]">
                  {aboutLength > maxCharLength
                    ? about.substring(0, maxCharLength) + "..."
                    : about}
                </p>
              </div>
              <div className=" md:group-hover:scale-90 transition-transform ease-in-out text-sm font-bold text-[#682747] pt-5 items-end">
                <span className="border-2 bg-[#f2330ddf]  text-[#f4f5f7] px-5 py-2 rounded-[25px] border-[#F2330D]">
                  ₹ {e.price}
                </span>
              </div>
            </div>
          </Link>
        );
      });
    } else {
      return (
        <div className="md:block flex justify-center w-[full] self-center items-center md:m-0 md:my-10 m-24 ">
          <LoadingItems />
        </div>
      );
    }
  }
}

export class ListRendererContainer extends Component {
  render() {
    return (
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {this.props.children}
      </div>
    );
  }
}
export default ListRenderer;
