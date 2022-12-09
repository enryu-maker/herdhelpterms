import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "./Theme/Image";
import { COLORS, FONTS } from "./Theme/Theme";

import useMediaQuery from "./useMediaQuery";
import "./Navbar.css";

function NavBar({ page, navStyle }) {
  const matches = useMediaQuery("(max-width:820px)");
  const mobile = useMediaQuery("(min-width:460px)");
  return (
    <>
      <nav
        style={{
          position: "fixed",
          right: 0,
          left: 0,
          top: 0,
          zIndex: 1030,
          paddingInline: mobile ? (matches ? 30 : 30) : 0,
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: COLORS.white,
          alignSelf: "center",
          height: 60,
          width: "fit-windows",
          maxWidth: "100%",
          ...navStyle,
        }}
      >
        <Link to="/">
          <img
            src={IMAGES.herdhelp}
            alt="logo"
            style={{
              height: mobile ? (matches ? 60 : 60) : 40,
              width: mobile ? (matches ? 200 : 200) : 125,
              margin: mobile ? (matches ? 0 : 0) : "10%",
              alignSelf: "center",
              justifyContent: "space-around",
              display: "flex",
            }}
          />
        </Link>
        <div
          style={{
            display: "flex",
            flexFlow: "row",
            justifyContent: "center",
            alignSelf: "center",
            right: 40,
          }}
        >
          {mobile ? (
            <>
              <img
                src={IMAGES.appstore}
                alt={""}
                style={{
                  height: mobile ? (matches ? 40 : 40) : 30,
                  width: mobile ? (matches ? 120 : 120) : 80,
                  boxShadow: "0px 0px 10px 0px rgba(0,154,72,0.85)",
                }}
                onClick={() => {
                  window.open(
                    "https://apps.apple.com/in/app/herdhelp/id1627766617",
                    "_blank"
                  );
                }}
              />
              <img
                src={IMAGES.playstore}
                alt={""}
                onClick={() => {
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.herdhelp",
                    "_blank"
                  );
                }}
                style={{
                  height: mobile ? (matches ? 40 : 40) : 30,
                  width: mobile ? (matches ? 120 : 120) : 80,
                  marginInline: 30,
                  boxShadow: "0px 0px 10px 0px rgba(0,154,72,0.85)",
                }}
              />
            </>
          ) : null}
          <button
          onClick={()=>{
            window.open("https://herdhelp.com/", "_blank")
          }}
            style={{
              color: COLORS.Primary,
              // marginLeft:2,
              ...FONTS.h2,
              marginBlock:0,
              border:"none",
              backgroundColor:"transparent",
              textDecoration: "none",
              
            }}
          >
            Home
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
