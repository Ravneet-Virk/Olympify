import "./Home.css";
import React from "react";
import Layout from "./../Layout/Layout";
import CountDownTimer from "./CountDownTimer/CountDownTimer";
import Card from "./NewsCard/Card";

function Home() {
  return (
    <Layout>
      <div className="header-">
        <div className="container-">
          <div className="row-">
            <div className="col-2-">
              <h1 id="yo">
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
            <div className="col-2-">
              <img src={`Images/FI.png`} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* ------ Carousal HTML --------- */}
      <div className="carousal-container">
        <div className="carousal-row">

          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={`/Images/CR 1.png`} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={`/Images/CR 2.png`} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={`/Images/CR 3.png`} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={`/Images/CR 4.png`} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-target="#carouselExampleControls"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-target="#carouselExampleControls"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </button>
          </div>
          
        </div>
      </div>

      {/* --------- CountDownTimer ------------- */}
      {/* <div className='CDT-container'>
        <div className='CDT-row'>
          <h4>Olympic Games Paris 2024 : 26 July - 11 August, 2024</h4>
          <CountDownTimer countdownTimestampMs={1721952000000} />
        </div>
      </div> */}

      {/* -------- Header HTML ------- */}

      {/* <div className="header">
        <div className="header-container">
          <div className="header-row">
            <div id="column-1" className="header-row-col">
              <h1>OLYMPIC GAMES</h1>
            </div>
            <div id="column-2" className="header-row-col">
              <p>The Olympic Games are the world's only truly global, multi-sport, celebratory athletics competition. With more than 200 countries participating in over 400 events across the Summer and Winter Games, the Olympics are where the world comes to compete, feel inspired, and be together.</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* ----------- News HTML ------------ */}
      <div className="News-container">
        <h1>LATEST NEWS</h1>
        <div className="News-row">
          <Card
            Image="/Images/N 1.png"
            text="Hong Kong Open 2023: Treesa Jolly-Gayatri Gopichand lose in the pre-quarterfinals as India's campaign ends"
          ></Card>
          <Card
            Image="/Images/N 2.png"
            text="Asian Games 2023: Sunil Chhetri in Indian men’s football team in Hangzhou - full squad"
          ></Card>
          <Card
            Image="/Images/N 3.png"
            text="AFC U23 Asian Cup 2024 qualifiers: Indian football team's campaign ends, finishes third in group - all results, scores"
          ></Card>
          <Card
            Image="/Images/N4.png"
            text="Indian Grand Prix 5 2023 athletics: Vithya Ramraj short by 0.01s of PT Usha’s 39-year-old 400m hurdles record<"
          ></Card>
          <Card
            Image="/Images/N 5.png"
            text="US Open 2023 men's singles final: Novak Djokovic beats Daniil Medvedev to equal Open era slam singles titles record"
          ></Card>
          <Card
            Image="/Images/N 5.png"
            text="US Open 2023 men's singles final: Novak Djokovic beats Daniil Medvedev to equal Open era slam singles titles record"
          ></Card>
        </div>
      </div>

      {/* ---------- Summer Challenge Layout --------- */}
      {/* <div className="SCL-container">
        <div className="SCL-row">
          <div id="SCL-col-1" className="SCL-col">
            <img src={`Images/SC.png`} width={`600px`} />
          </div>
          <div id="SCL-col-2" className="SCL-col">
            <h1>Take Part in the Olympic Street Challenge!</h1>
            <p>
              Get ready to film your 30” skate, breaking, or BMX video!
              Submissions open September 23 for a unique chance to win exclusive
              Olympics experience!
            </p>
          </div>
        </div>
      </div> */}

      {/* ---------------- New Summer Challenge --------------- */}

      <div className="S-offer">
        <div className="S-small-container">
          <div className="S-row">
            <div className="col-2">
              <img src={`Images/Logo 2.png`} className="offer-img" />
            </div>
            <div className="col-2">
              <h1 id="smart">Take Part in the Olympic Street Challenge!</h1>
              <small>
                Get ready to film your 30” skate, breaking, or BMX video!
                Submissions open September 23 for a unique chance to win
                exclusive Olympics experience!
              </small>
              <br />
              <a href="" className="btn">
                Register Now &#8594;
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Brands ---------- */}

      <div className="brands">
        <div className="BSC">
            <div className="BR">
                <div className="col-5">
                    <img src={`/Images/logo-godrej.png`}/>
                </div>
                <div className="col-5">
                    <img src="Images/logo-oppo.png"/>
                </div>
                <div className="col-5">
                    <img src="Images/logo-coca-cola.png"/>
                </div>
                <div className="col-5">
                    <img src="Images/logo-paypal.png"/>
                </div>
                <div className="col-5">
                    <img src="Images/logo-philips.png"/>
                </div>
            </div>
        </div>
    </div>

    </Layout>
  );
}

export default Home;
