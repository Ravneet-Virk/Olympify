import React from "react";
import Layout from "./../Layout/Layout";
import "./SportDesc.css";
import { useParams } from "react-router-dom";
import { Sport } from "./Sport";

function SportDesc() {
  const { id } = useParams();
  const sport = Sport.find((sport) => sport.title1 === id);

  return (
    <Layout>
      <div className="SD-Container">

        <div className="SD-Container-Head">
          <div className="Image-box">
              <img src={`/Images/${sport.img}.png`} />
          </div>
          <h1>{sport.title1}</h1>
        </div>

        <div className="SD-row">
          <div className="SD-column1 SD-common-item">
            <h2>History of</h2>
            <h4>{sport.title1}</h4>
          </div>

          <div className="SD-column2 SD-common-item">
            <h2>What is {sport.title2}?</h2>
            <p>{sport.desc1}</p>

            <h2>By whom, where and when was {sport.title2} invented?</h2>
            <p>{sport.desc2}</p>

            <h2>What are the rules of {sport.title2}?</h2>
            <p>{sport.desc3}</p>

            <h2>How is {sport.title2} scored?</h2>
            <p>{sport.desc4}</p>

            <h2>{sport.title1} and the Olympics</h2>
            <p>{sport.desc5}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SportDesc;
