import React from "react";
import Loader from "../../public/assets/loading.gif";
import Image from "next/image";

function LoadingItems() {
  return (
    <div>
      <Image src={Loader} alt="loading" width={150} height={24} />
    </div>
  );
}

export default LoadingItems;
