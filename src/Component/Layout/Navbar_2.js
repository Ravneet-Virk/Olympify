import React from "react";
import "./Navbar_2.css";

function Navbar_2() {

  // let MenuItems = document.getElementById("MenuItems");

  //     MenuItems.style.maxHeight = "0px";

  //     function MenuToggle() {
  //       if (MenuItems.style.maxHeight == "0px") {
  //         MenuItems.style.maxHeight = "200px";
  //       } else {
  //         MenuItems.style.maxHeight = "0px";
  //       }
  //     }

  return (
    <>
      {/* <div className="header">
        <div className="container"> */}
          <div className="navbar">
            <div className="logo">
              <img src={`Images/L1.png`} width="100px" />
            </div>
            <nav>
              <ul id="MenuItems">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/Event">Events</a>
                </li>
                <li>
                  <a href="/Sports">Sports</a>
                </li>
                <li>
                  <a href="http://localhost:8501/">Analysis</a>
                </li>
                <li>
                  <a href="http://localhost:5173/">OlympiBot</a>
                </li>
              </ul>
            </nav>
            {/* <img src="Images/cart.png" width="27px" height="27px" /> */}
            <img
              src="Images/menu.png"
              className="menu-icon"
              onclick="MenuToggle()"
            />
          </div>

          {/* <div className="row">
            <div className="col-2">
              <h1>
                OLYMPIC
                <br />
                GAMES
              </h1>
              <p>
                The Olympic Games are the world's only truly global,
                multi-sport, celebratory athletics competition. With more than
                200 countries participating in over 400 events across the Summer
                and Winter Games, the Olympics are where the world comes to
                compete, feel inspired, and be together.
              </p>
            </div>
            <div className="col-2">
              <img src={`Images/FI.png`} alt="" />
            </div>
          </div> */}

        {/* </div>
      </div> */}
    </>
  );
}

export default Navbar_2;
