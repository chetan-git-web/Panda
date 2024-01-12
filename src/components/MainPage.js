import React from "react";

import girlmap from "../miscelenous/Vector.jpg"






import { FooterWithSitemap } from "./FooterWithSitemap";
import HeaderComp from "./HeaderComp";
import MainComp from "./MainComp";
import CardsComp from "./CardsComp";
import CardsWithEarthComp from "./CardsWithEarthComp";
import MirrorRightComp from "./MirrorRightComp";
import MirrorleftComp from "./MirrorleftComp";
import AppsComp from "./AppsComp";
import ThreeColComp from "./ThreeColComp";
import ThreeColDataComp from "./ThreeColDataComp";
import ThreeBlocksComp from "./ThreeBlocksComp";
import NotesComp from "./NotesComp";
import Top5Comp from "./Top5Comp";
import LineComp from "./LineComp";
import FinalNote from "./FinalNote";





const MainPage = () => {
  return (
    <div className="bg-[#f5f1ed]">
      {/* header  */}
      <HeaderComp />
      <body>
        {/* main  */}

        <MainComp />

        {/* cards */}
        <CardsComp />



        {/* cards with earth  */}
        <CardsWithEarthComp />


        {/* mirror right  */}
        <MirrorRightComp />


        {/* mirror left  */}
        <MirrorleftComp />


        {/* apps  */}
        <AppsComp />



        {/* three colums */}
        <ThreeColComp />

        {/* three column */}

        <ThreeColDataComp />


        {/* three blocks  */}

        <ThreeBlocksComp />

        {/* note */}
        <NotesComp />

        {/* top5 */}
        <Top5Comp />
        {/* line  */}
        <LineComp />
        {/* final note  */}
        <FinalNote />

      </body>

      <FooterWithSitemap />







    </div>
  );
};

export default MainPage;
