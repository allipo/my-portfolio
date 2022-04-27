import React from "react";
import NavBar from "../../components/nav-bar/navbar";
import PageTitle from "../../components/page-title/PageTitle";
import ContentHolder from "../../components/content-holder/ContentHolder";
import Footer from "../../components/footer/footer";

let oddsAndEndsTitle = "Odds & Ends";

function OddsAndEnds() {
  return (
    <>
      <NavBar />
      <PageTitle title={oddsAndEndsTitle} />
      <ContentHolder />
      <Footer />
    </>
  );
}

export default OddsAndEnds;
