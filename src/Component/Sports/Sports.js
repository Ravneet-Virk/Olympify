import React from "react";
import Layout from "../Layout/Layout";
import "./Sports.css";
import { Link, NavLink } from 'react-router-dom';
// import GamesCard from "./GamesCard/GamesCard";

function sports() {
  // const Games = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const Games = [
    {
      alphabet: "A",
      details: [
        { games: "Acrobatic Gymnastics" },
        { games: "Alpine Skiing" },
        { games: "Archery" },
        { games: "Artistic Gymnastics" },
        { games: "Artistic Swimming" },
        { games: "Athletics" },
      ],
    },
    {
      alphabet: "B",
      details: [
        { games: "Badminton" },
        { games: "Baseball Softball" },
        { games: "Basketball" },
        { games: "Beach Handball" },
        { games: "Beach Volleyball" },
        { games: "Biathlon" },
        { games: "Bobsleigh" },
        { games: "Boxing" },
        { games: " Breakin" },
      ],
    },
    {
      alphabet: "C",
      details: [
        { games: "Canoe Flatwater" },
        { games: "Canoe Slalom" },
        { games: "Cross-Country Skiing" },
        { games: "Curling" },
        { games: "Cycling BMX Freestyle" },
        { games: "Cycling BMX Racing" },
        { games: "Cycling Mountain Bike" },
        { games: "Cycling Road" },
        { games: "Cycling Track" },
      ],
    },
    {
      alphabet: "D",
      details: [{ games: "Diving" }],
    },
    {
      alphabet: "E",
      details: [{ games: "Equestrian" }],
    },
    {
      alphabet: "F",
      details: [
        { games: "Fencing" },
        { games: "Figure Skating" },
        { games: "Football" },
        { games: "Freestyle Skiing" },
        { games: " Futsal" },
      ],
    },
    {
      alphabet: "G",
      details: [{ games: "Golf" }],
    },
    {
      alphabet: "H",
      details: [{ games: "Handball" }, { games: "Hockey" }],
    },
    {
      alphabet: "I",
      details: [{ games: "Ice Hockey" }],
    },
    {
      alphabet: "J",
      details: [{ games: "Judo" }],
    },
    {
      alphabet: "K",
      details: [{ games: "Karate" }],
    },
    {
      alphabet: "L",
      details: [{ games: "Luge" }],
    },
    {
      alphabet: "M",
      details: [{ games: "Marathon Swimming" }, { games: "Modern Pentathlon" }],
    },
    {
      alphabet: "N",
      details: [{ games: "Nordic Combined" }],
    },
    {
      alphabet: "R",
      details: [
        { games: "Rhythmic Gymnastics" },
        { games: "Roller Speed Skating" },
        { games: "Rowing" },
        { games: "Rugby Sevens" },
      ],
    },
    {
      alphabet: "S",
      details: [
        { games: "Sailing" },
        { games: "Shooting" },
        { games: "Short Track Speed Skating" },
        { games: "Skateboarding" },
        { games: "Skeleton" },
        { games: "Ski Jumping" },
        { games: "Ski Mountaineering" },
        { games: "Snowboard" },
        { games: "Speed Skating" },
        { games: "Sport Climbing" },
        { games: "Surfing" },
        { games: "Swimming" },
      ],
    },
    {
      alphabet: "T",
      details: [
        { games: "Table Tennis" },
        { games: "Taekwondo" },
        { games: "Tennis" },
        { games: "Trampoline" },
        { games: "Triathlon" },
      ],
    },
    {
      alphabet: "V",
      details: [{ games: "Volleyball" }],
    },
    {
      alphabet: "W",
      details: [
        { games: "Water Polo" },
        { games: "Weightlifting" },
        { games: "Wrestling" },
      ],
    },
  ];

  return (
    <Layout>
      {/* ------- Heading ------- */}
      <div className="Heading">
        <h1>SPORTS</h1>
      </div>

      {/* ------ Sport Container ------ */}

      {/* <div className='Sports-container'>
                <div className='Sports-row'>
                    {Games.map((games) => <GamesCard key={games.alphabet} heading={games.alphabet} list={games.details.map((sub) => <li key={sub.games}><Link to=`/sports/${sub.games}`>{sub.games}</Link></li>)} />)}
                </div>
            </div> */}

      <div className="Sports-container">
        <div className="Sports-row">
            
          <div className="Sports-row-item">
            <h1>A</h1>
            <ul>
              <li className="titu"><Link to ='/sport/Acrobatic Gymnastics'>Acrobatic Gymnastics</Link></li>
              <li><Link to ='/sport/Alpine Skiing'>Alpine Skiing</Link></li>
              <li><Link to ='/sport/Archery'>Archery</Link></li>
              <li><Link to ='/sport/Artistic Gymnastics'>Artistic Gymnastics</Link></li>
              <li><Link to ='/sport/Artistic Swimming'>Artistic Swimming</Link></li>
              <li><Link to ='/sport/Athletics'>Athletics</Link></li>
            </ul>
          </div>

          <div className="Sports-row-item">
            <h1>B</h1>
            <ul>
              <li><Link to ='/sport/Badminton'>Badminton</Link></li>
              <li><Link to ='/sport/Baseball Softball'>Baseball Softball</Link></li>
              <li><Link to ='/sport/Basketball'>Basketball</Link></li>
              <li><Link to ='/sport/Beach Handball'>Beach Handball</Link></li>
              <li><Link to ='/sport/Beach Volleyball'>Beach Volleyball</Link></li>
              <li><Link to ='/sport/Biathlon'>Biathlon</Link></li>
              <li><Link to ='/sport/Bobsleigh'>Bobsleigh</Link></li>
              <li><Link to ='/sport/Boxing'>Boxing</Link></li>
              <li><Link to ='/sport/Breakin'>Breakin</Link></li>
            </ul>
          </div>

          <div className="Sports-row-item">
            <h1>C</h1>
            <ul>
              <li><Link to ='/sport/Canoe Flatwater'>Canoe Flatwater</Link></li>
              <li><Link to ='/sport/Canoe Slalom'>Canoe Slalom</Link></li>
              <li><Link to ='/sport/Cross-Country Skiing'>Cross-Country Skiing</Link></li>
              <li><Link to ='/sport/Curling'>Curling</Link></li>
              <li><Link to ='/sport/Cycling BMX Freestyle'>Cycling BMX Freestyle</Link></li>
              <li><Link to ='/sport/Cycling BMX Racing'>Cycling BMX Racing</Link></li>
              <li><Link to ='/sport/Cycling Mountain Bike'>Cycling Mountain Bike</Link></li>
              <li><Link to ='/sport/Cycling Road'>Cycling Road</Link></li>
              <li><Link to ='/sport/Cycling Track'>Cycling Track</Link></li>
            </ul>
          </div>

          <div className="Sports-row-item">
            <h1>D</h1>
            <ul>
              <li><Link to ='/sport/Diving'>Diving</Link></li>
            </ul>
          </div>

          <div className="Sports-row-item">
            <h1>E</h1>
            <ul>
              <li><Link to ='/sport/Equestrian'>Equestrian</Link></li>
            </ul>
          </div>

          <div className="Sports-row-item">
            <h1>F</h1>
            <ul>
              <li><Link to ='/sport/Fencing'>Fencing</Link></li>
              <li><Link to ='/sport/Figure Skating'>Figure Skating</Link></li>
              <li><Link to ='/sport/Football'>Football</Link></li>
              <li><Link to ='/sport/Freestyle Skiing'>Freestyle Skiing</Link></li>
              <li><Link to ='/sport/Futsal'>Futsal</Link></li>
            </ul>
          </div>

          <div className="Sports-row-item">
            <h1>G</h1>
            <ul>
              <li><Link to ='/sport/Golf'>Golf</Link></li>
            </ul>
          </div>

          <div className="Sports-row-item">
            <h1>H</h1>
            <ul>
              <li><Link to ='/sport/Handball'>Handball</Link></li>
              <li><Link to ='/sport/Hockey'>Hockey</Link></li>
            </ul>
          </div>

          <div className="Sports-row-item">
            <h1>I</h1>
            <ul>
              <li><Link to ='/sport/Ice Hockey'>Ice Hockey</Link></li>
            </ul>
          </div>

          <div className="Sports-row-item">
            <h1>J</h1>
            <ul>
              <li><Link to ='/sport/Judo'>Judo</Link></li>
            </ul>
          </div>

          <div className="Sports-row-item">
            <h1>K</h1>
            <ul>
              <li><Link to ='/sport/Karate'>Karate</Link></li>
            </ul>
          </div>

          <div className="Sports-row-item">
            <h1>L</h1>
            <ul>
              <li><Link to ='/sport/Luge'>Luge</Link></li>
            </ul>
          </div>

          <div className="Sports-row-item">
            <h1>M</h1>
            <ul>
              <li><Link to ='/sport/Marathon Swimming'>Marathon Swimming</Link></li>
              <li><Link to ='/sport/Marathon Pentathlon'>Marathon Pentathlon</Link></li>
            </ul>
          </div>

          <div className="Sports-row-item">
            <h1>N</h1>
            <ul>
              <li><Link to ='/sport/Nordic Combined'>Nordic Combined</Link></li>
            </ul>
          </div>

          <div className="Sports-row-item">
            <h1>R</h1>
            <ul>
              <li><Link to ='/sport/Rhythmic Gymnastics'>Rhythmic Gymnastics</Link></li>
              <li><Link to ='/sport/Roller Speed Skating'>Roller Speed Skating</Link></li>
              <li><Link to ='/sport/Rowing'>Rowing</Link></li>
              <li><Link to ='/sport/Rugby Sevens'>Rugby Sevens</Link></li>
            </ul>
          </div>

          <div className="Sports-row-item">
            <h1>S</h1>
            <ul>
              <li><Link to ='/sport/Sailing'>Sailing</Link></li>
              <li><Link to ='/sport/Shooting'>Shooting</Link></li>
              <li><Link to ='/sport/Short Track Speed Skating'>Short Track Speed Skating</Link></li>
              <li><Link to ='/sport/Skateboarding'>Skateboarding</Link></li>
              <li><Link to ='/sport/Skeleton'>Skeleton</Link></li>
              <li><Link to ='/sport/Ski Jumping'>Ski Jumping</Link></li>
              <li><Link to ='/sport/Ski Mountaineering'>Ski Mountaineering</Link></li>
              <li><Link to ='/sport/Snowboard'>Snowboard</Link></li>
              <li><Link to ='/sport/Speed Skating'>Speed Skating</Link></li>
              <li><Link to ='/sport/Sport Climbing'>Sport Climbing</Link></li>
              <li><Link to ='/sport/Surfing'>Surfing</Link></li>
              <li><Link to ='/sport/Swimming'>Swimming</Link></li>
            </ul>
          </div>
   
          <div className="Sports-row-item">
            <h1>T</h1>
            <ul>
              <li><Link to ='/sport/Table Tennis'>Table Tennis</Link></li>
              <li><Link to ='/sport/Taekwondo'>Taekwondo</Link></li>
              <li><Link to ='/sport/Tennis'>Tennis</Link></li>
              <li><Link to ='/sport/Trampoline'>Trampoline</Link></li>
              <li><Link to ='/sport/Triathlon'>Triathlon</Link></li>
            </ul>
          </div>

          <div className="Sports-row-item">
            <h1>V</h1>
            <ul>
              <li><Link to ='/sport/Volleyball'>Volleyball</Link></li>
            </ul>
          </div>

          <div className="Sports-row-item">
            <h1>W</h1>
            <ul>
              <li><Link to ='/sport/Water Polo'>Water Polo</Link></li>
              <li><Link to ='/sport/Weightlifting'>Weightlifting</Link></li>
              <li><Link to ='/sport/Wrestling'>Wrestling</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default sports;
