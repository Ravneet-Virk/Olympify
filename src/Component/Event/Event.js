import React from "react";
import Layout from "../Layout/Layout";
import EventDiv from "./EventDiv";
import "./Event-Back.css";
import "./Event.css";

function Event() {
  const EventList = [
    {
      title: "Wednesday 24 July 2024",
      details: [
        { point: "Football: 1500-2300: M group stage (8 matches)" },
        { point: "Rugby sevens: 1530-2200: M pool rounds" },
      ],
    },
    {
      title: "Thursday 25 July 2024",
      details: [
        {
          point:
            "Archery: 0930-1230: W ranking round; 1415-1715: M ranking round",
        },
        { point: "Football: 1700-2300: W group stage (6 matches)" },
        {
          point:
            "Handball: 0900-1230: W preliminaries (2 matches); 1400-1730: W preliminaries (2 matches); 1900-2230: W preliminaries (2 matches)",
        },
        {
          point:
            "Rugby sevens: 1400-1700: M pool rounds; 2000-2300: M placement matches, quarters",
        },
      ],
    },
    {
      title: "Friday 26 July 2024",
      details: [{ point: "Opening Ceremony" }],
    },
    {
      title: "Saturday 27 July 2024 (14 gold medal events)",
      details: [
        {
          point:
            "Artistic gymnastics: 1100-1330; 1530-1800; 2000-2230: M qualifications",
        },
        {
          point:
            "Badminton: 0830-1200: M/W/Mixed singles & doubles group stage; 1400-1730: M/W/Mixed singles & doubles group stage; 1930-2300: M/W singles & doubles group stage",
        },
        {
          point:
            "Basketball: 1100-1515: M group phase (2 matches); 1715-1900: M group phase (1 match); 2100-2245: M group phase (1 match)",
        },
        {
          point:
            "Beach volleyball: 1400-1600: M/W preliminary phase (2 matches); 1800-2000: M/W preliminary phase (2 matches); 2200-0000: M/W preliminary phase (2 matches)",
        },
        {
          point:
            "Boxing: 1530-1755: W 54kg, W 60kg, M 63.5kg, M 80kg round of 32 or round of 16; 2000-2255: W 54kg, W 60kg, M 63.5kg, M 80kg round of 32 or round of 16",
        },
        {
          point: "Canoe slalom: 1500-1910: M C1 heats, W K1 heats",
        },
        { point: "Diving: 1100-1200: W synchro 3m springboard final" },
        { point: "Equestrian: 0930-1830: Eventing dressage" },
        {
          point:
            "Fencing: 1000-1640: W épée, M sabre through quarters; 1900-2250: W épée, M sabre semis, medal finals",
        },
        { point: "Football: 1500-2300: M group stage (8 matches)" },
        {
          point:
            "Handball: 0900-1230: M preliminaries (2 matches); 1400-1730: M preliminaries (2 matches); 1900-2230: M preliminaries (2 matches)",
        },
        {
          point:
            "Hockey: 1000-1500: M pool stage (2 matches); 1030-1530: M pool stage (2 matches); 1700-2200: M/W pool stage (2 matches); 1730-2230: M/W pool stage (2 matches)",
        },
        {
          point:
            "Judo: 1000-1400: W -48kg, M -60kg elimination rounds; 1600-1900: W -48kg, M -60kg medal rounds",
        },
        { point: "Road cycling: 1430-1830: M/W ind. time trial finals" },
        {
          point:
            "Rowing: 0900-1310: M single sculls, W single sculls, M double sculls, W double sculls, M quadruple sculls, W quadruple sculls heats",
        },
        {
          point:
            "Rugby sevens: 1430-2045: M placement matches, semis, medal finals",
        },
        {
          point:
            "Shooting: 0900-1345: M/W 10m air pistol, Mixed team 10m air rifle qualification; 1030-1150: Mixed team 10m air rifle finals",
        },
        {
          point:
            "Skateboard: 1200-1530: M street preliminaries; 1700-1900: M street medal final",
        },
        { point: "Surfing: 1900-0430 (0700-1630 Tahiti time): M/W round 1" },
        {
          point:
            "Swimming: 1100-1300: W 100m fly, W 400m free, M 100m breast, M 400m free, W 4x100m free relay, M 4x100m free relay heats; 2030-2230: W 100m fly semis, M 400m free, W 400m free finals, M 100m breast semis, W 4x100m free relay, M 4x100m free relay finals",
        },
        {
          point:
            "Table tennis: 1500-1800: M/W singles preliminary round, Mixed doubles round of 16; 2000-2300: M/W singles round 1",
        },
        {
          point:
            "Tennis: 1200-1700 (Court Philippe Chartrier): M/W singles; 1900-2300 (Court Philippe Chartrier): M/W singles; 1200-1900 (Court Suzanne Lenglen): M/W singles, doubles; 1200-1900 (Court Simonne Mathieu): M/W singles, doubles; 1200-1900 (outside courts): M/W singles, doubles",
        },
        {
          point:
            "Volleyball: 0900-1130: M preliminary round; 1300-1530: M preliminary round; 1700-1930: M preliminary round; 2100-2330: M preliminary round",
        },
        {
          point:
            "Water polo: 1400-1700: W preliminary round (2 matches); 1830-2130: W preliminary round (2 matches)",
        },
      ],
    },
    {
      title: "Sunday 28 July 2024 (13 gold medal events)",
      details: [
        {
          point:
            "Archery: 0930-1105: W team eliminations; 1415-1755: W team medal rounds",
        },
        {
          point:
            "Artistic gymnastics: 0930-1320; 1450-1630; 1800-1940; 2110-2250: W qualifications",
        },
        {
          point:
            "Badminton: 0830-1200: M/W/Mixed singles & doubles group stage; 1400-1730: M/W/Mixed singles & doubles group stage; 1930-2300: M/W/Mixed singles & doubles group stage",
        },
        {
          point:
            "Basketball: 1100-1515: M/W group phase (2 matches); 1715-1900: M/W group phase (1 match); 2100-2245: M/W group phase (1 match)",
        },
        {
          point:
            "Beach volleyball: 0900-1300: M/W preliminary phase (4 matches); 1500-1800: M/W preliminary phase (3 matches); 2000-2300: M/W preliminary phase (3 matches)",
        },
        {
          point:
            "Boxing: 1100-1310: W 50kg, W 66kg, M 51kg, M 57kg, M 71kg, M 92kg round of 32 or round of 16; 1530-1740: W 50kg, W 66kg, M 51kg, M 57kg, M 71kg, M 92kg round of 32 or round of 16; 2000-2210: W 50kg, W 75kg, M 71kg, M 92kg round of 32 or round of 16",
        },
        { point: "Canoe slalom: 1530-1850: W K1 semis, finals" },
        { point: "Equestrian: 1030-1500: Eventing cross-country" },
        {
          point:
            "Fencing: 0930-1650: M épée, W foil through quarters; 1900-2310: M épée, W foil semis, medal finals",
        },
        { point: "Football: 1700-2300: W group stage (6 matches)" },
        {
          point:
            "Handball: 0900-1230: W preliminaries (2 matches); 1400-1730: W preliminaries (2 matches); 1900-2230: W preliminaries (2 matches)",
        },
        {
          point:
            "Hockey: 1000-1500: W pool stage (2 matches); 1030-1530: W pool stage (2 matches); 1700-2200: M pool stage (2 matches); 1730-2230",
        },
        {
          point:
            "Judo: 1000-1400: W -52kg, M -66kg elimination rounds; 1600-1900: W -52kg, M -66kg medal rounds",
        },
        { point: "Mountain bike: 1400-1630: W cross-country final" },
        {
          point:
            "Rowing: 0900-1310: W single sculls, M single sculls, W double sculls, M double sculls repechage, W coxless pair, M coxless pair, W lightweight double sculls, M lightweight double sculls, W coxless four, M coxless four heats",
        },
        { point: "Rugby sevens: 1530-2200: W pool rounds" },
        { point: "Sailing: 1100-1900: M/W windsurfing, skiff" },
        {
          point:
            "Shooting: 0915-1230: M/W 10m air rifle qualification; 0930-1305: M/W 10m air pistol finals",
        },
        {
          point:
            "Skateboard: 1200-1530: W street preliminaries; 1700-1900: W street medal final",
        },
        { point: "Surfing: 1900-0430 (0700-1630 Tahiti time): M/W round 2" },
        {
          point:
            "Swimming: 1100-1300: M 200m free, M 400m IM, W 100m breast, M 100m back, W 200m free heats; 2030-2230: M 400m IM, W 100m fly finals, M 200m free, W 100m breast, M 100m back semis, M 100m breast final, W 200m free semis",
        },
        {
          point:
            "Table tennis: 1000-1400: M/W singles round 1; 1600-1800: Mixed doubles quarters; 2000-2300: M/W singles round 1",
        },
        {
          point:
            "Tennis: 1200-1700 (Court Philippe Chartrier): M/W singles; 1900-2300 (Court Philippe Chartrier): M/W singles; 1200-1900 (Court Suzanne Lenglen): M/W singles, doubles; 1200-1900 (Court Simonne Mathieu): M/W singles, doubles; 1200-1900 (outside courts): M/W singles, doubles",
        },
        {
          point:
            "Volleyball: 0900-1130: W preliminary round; 1300-1530: W preliminary round; 1700-1930: M preliminary round; 2100-2330: M preliminary round",
        },
        {
          point:
            "Water polo: 1030-1330: M preliminary round (2 matches); 1500-1800: M preliminary round (2 matches); 1930-2230: M preliminary round (2 matches)",
        },
      ],
    },
    {
      title: "Monday 29 July 2024 (18 gold medal events)",
      details: [
        {
          point:
            "Archery: 0930-1105: M team eliminations; 1415-1755: M team medal rounds",
        },
        { point: "Artistic gymnastics: 1730-2030: M team final" },
        {
          point:
            "Badminton: 0830-1200: M/W/Mixed singles & doubles group stage; 1400-1730: M/W/Mixed singles & doubles group stage; 1930-2300: M/W/Mixed singles & doubles group stage",
        },
        {
          point:
            "Basketball: 1100-1515: W group phase (2 matches); 1715-1900: W group phase (1 match); 2100-2245: W group phase (1 match)",
        },
        {
          point:
            "Beach volleyball: 0900-1300: M/W preliminary phase (4 matches); 1500-1800: M/W preliminary phase (3 matches); 2000-2300: M/W preliminary phase (3 matches)",
        },
        {
          point:
            "Boxing: 1100-1310: W 60kg, M 63.5kg, M +92kg round of 32 or round of 16; 1530-1740: W 60kg, M 63.5kg, M +92kg round of 32 or round of 16; 2000-2210: W 60kg, M 63.5kg, M +92kg round of 32 or round of 16",
        },
        { point: "Canoe slalom: 1530-1830: M C1 semis, finals" },
        { point: "Diving: 1100-1200: M synchro 10m platform final" },
        {
          point:
            "Equestrian: 1100-1630: Eventing jumping team final, eventing jumping ind. final",
        },
        {
          point:
            "Fencing: 0930-1650: M foil, W sabre through quarters; 1900-2310: M foil, W sabre semis, medal finals",
        },
        {
          point:
            "Handball: 0900-1230: M preliminaries (2 matches); 1400-1730: M preliminaries (2 matches); 1900-2230: M preliminaries (2 matches)",
        },
        {
          point:
            "Hockey: 1000-1500: M pool stage (2 matches); 1030-1530: W pool stage (2 matches); 1700-2200: W pool stage (2 matches); 1730-2230",
        },
        {
          point:
            "Judo: 1000-1400: W -57kg, M -73kg elimination rounds; 1600-1900: W -57kg, M -73kg medal rounds",
        },
        { point: "Mountain bike: 1400-1630: M cross-country final" },
        {
          point:
            "Rowing: 0930-1220: M single sculls, W single sculls semis E/F, M coxless pair, W pais, M lightweight double sculls, W lightweight double sculls, M quadruple sculls, W quadruple sculls repechage, M eight, W eight heats",
        },
        {
          point:
            "Rugby sevens: 1400-1700: W pool rounds; 2000-2300: W placement matches, quarters",
        },
        { point: "Sailing: 1100-1900: M/W windsurfing, skiff" },
        {
          point:
            "Shooting: 0915-1305: Mixed team 10m air pistol qualification, M/W 10m air rifle finals; 0900-1600: M trap qualification day 1",
        },
        { point: "Surfing: 1900-0430 (0700-1630 Tahiti time): M/W round 3" },
        {
          point:
            "Swimming: 1100-1300: W 400m IM, W 100m back, M 800m free heats; 2030-2230: W 400m IM, M 200m free finals, W 100m back semis, M 100m back, W 100m breast, W 200m free finals",
        },
        {
          point:
            "Table tennis: 1000-1400: M/W singles round 1; 1600-1800: Mixed doubles semis; 2000-2300: M/W singles round 2",
        },
        {
          point:
            "Tennis: 1200-1700 (Court Philippe Chartrier): M/W singles; 1900-2300 (Court Philippe Chartrier): M/W singles; 1200-1900 (Court Suzanne Lenglen): M/W singles, M/W/Mixed doubles; 1200-1900 (Court Simonne Mathieu): M/W singles, M/W/Mixed doubles; 1200-1900 (outside courts): M/W singles, M/W/Mixed doubles",
        },
        {
          point:
            "Volleyball: 0900-1130: W preliminary round; 1300-1530: W preliminary round; 1700-1930: W preliminary round; 2100-2330: W preliminary round",
        },
        {
          point:
            "Water polo: 1400-1700: W preliminary round (2 matches); 1830-2130: W preliminary round (2 matches)",
        },
      ],
    },
    {
      title: "Tuesday 30 July 2024 (14 gold medal events)",
      details: [
        {
          point:
            "Archery: 1200-1555: M/W ind. eliminations; 1745-2025: M/W ind. eliminations",
        },
        { point: "Artistic gymnastics: 1815-2030: W team final" },
        {
          point:
            "Badminton: 0830-1200: M/W singles & doubles group stage; 1400-1730: M/W singles & doubles group stage; 1930-2300: M/W singles & doubles group stage",
        },
        {
          point:
            "Basketball: 1100-1515: M group phase (2 matches); 1715-1900: M group phase (1 match); 2100-2245: M group phase (1 match)",
        },
        {
          point:
            "Basketball 3X3: 1730-1930: M/W pool round (4 matches); 2100-2300: M/W pool round (4 matches)",
        },
        {
          point:
            "Beach volleyball: 0900-1300: M/W preliminary phase (4 matches); 1500-1800: M/W preliminary phase (3 matches); 2000-2300: M/W preliminary phase (3 matches)",
        },
        { point: "BMX freestyle: 1325-1630: M/W seeding round" },
        {
          point:
            "Boxing: 1100-1340: W 54kg, W 57kg, M 51kg, M 80kg round of 32 or round of 16; 1530-1810: W 54kg, W 57kg, M 51kg, M 80kg round of 32 or round of 16; 2000-2240: W 54kg, W 57kg, M 51kg, M 80kg round of 32 or round of 16",
        },
        { point: "Canoe slalom: 1500-1910: M K1 heats, W C1 heats" },
        { point: "Equestrian: 1100-1630: Dressage Grand Prix qualifier" },
        {
          point:
            "Fencing: 1200-1730: W épée team through semis, placement matches; 1930-2140: W épée team medal finals",
        },
        { point: "Football: 1500-2300: M group stage (8 matches)" },
        {
          point:
            "Handball: 0900-1230: W preliminaries (2 matches); 1400-1730: W preliminaries (2 matches); 1900-2230: W preliminaries (2 matches)",
        },
        {
          point:
            "Hockey: 1000-1500: M pool stage (2 matches); 1030-1530: M pool stage (2 matches); 1700-2200: M pool stage (2 matches)",
        },
        {
          point:
            "Judo: 1000-1400: W -63kg, M -81kg elimination rounds; 1600-1900: W -63kg, M -81 kg medal rounds",
        },
        {
          point:
            "Rowing: 0930-1150: W single sculls, M single sculls quarters, W double sculls, M double sculls semis, W four, M four repechage",
        },
        {
          point:
            "Rugby sevens: 1430-2045: W placement matches, semis, medal finals",
        },
        { point: "Sailing: 1100-1900: M/W windsurfing, skiff" },
        {
          point:
            "Shooting: 0930-1050: Mixed team 10m air pistol finals; 0900-1705: W trap qualification day 1, M trap qualification day 2 and finals",
        },
        {
          point:
            "Surfing: 1900-0450 (0700-1650 Tahiti time): M/W quarters, semis, finals",
        },
        {
          point:
            "Swimming: 1100-1300: W 200m fly, M 100m free, W 1500m free, W 100m free, M 200m breast, M 4x200m free relay heats; 2030-2230: M 100m free, W 200m fly semis, W 100m back, M 800m free finals, W 100m free, M 200m breast semis, M 4x200m free relay final",
        },
        {
          point:
            "Table tennis: 1000-1200: M/W singles round 2; 1330-1600: Mixed doubles medal finals",
        },
        {
          point:
            "Tennis: 1200-1700 (Court Philippe Chartrier): M/W singles; 1900-2300 (Court Philippe Chartrier): M/W singles; 1200-1900 (Court Suzanne Lenglen): M/W singles, M/W/Mixed doubles; 1200-1900 (Court Simonne Mathieu): M/W singles, M/W/Mixed doubles; 1200-1900 (outside courts): M/W singles, M/W/Mixed doubles",
        },
        { point: "Triathlon: 0800-1030: M ind. final" },
        {
          point:
            "Volleyball: 0900-1130: M preliminary round; 1300-1530: M preliminary round; 1700-1930: M preliminary round; 2100-2330: M preliminary round",
        },
        {
          point:
            "Water polo: 1030-1330: M preliminary round (2 matches); 1500-1800: M preliminary round (2 matches); 1930-2230: M preliminary round (2 matches)",
        },
      ],
    },
    {
      title: "Wednesday 31 July 2024 (17 gold medal events)",
      details: [
        {
          point:
            "Archery: 1200-1555: M/W ind. eliminations; 1745-2025: M/W ind. eliminations",
        },
        { point: "Artistic gymnastics: 1730-2015: M ind. all-around final" },
        {
          point:
            "Badminton: 0830-1200: M/W singles group stage; 1400-1730: M/W singles group stage; 1930-2300: M/W singles group play stage, Mixed doubles quarters",
        },
        {
          point:
            "Basketball: 1100-1515: M/W group phase (2 matches); 1715-1900: M/W group phase (1 match); 2100-2245: M/W group phase (1 match)",
        },
        {
          point:
            "Basketball 3X3: 1730-1930: M/W pool round (4 matches); 2100-2300: M/W pool round (4 matches)",
        },
        {
          point:
            "Beach volleyball: 0900-1300: M/W preliminary phase (4 matches); 1500-1800: M/W preliminary phase (3 matches); 2000-2300: M/W preliminary phase (3 matches)",
        },
        { point: "BMX freestyle: 1310-1630: M/W final" },
        {
          point:
            "Boxing: 1100-1325: W 60kg quarters, W 66kg, M 57kg, M 71kg round of 32 or round of 16; 1530-1810: W 60kg quarters, W 66kg, M 57kg, M 71kg round of 32 or round of 16; 2000-2225: W 60kg quarters, W 66kg, M 57kg, M 71kg round of 32 or round of 16",
        },
        { point: "Canoe slalom: 1530-1830: W C1 semis, finals" },
        { point: "Diving: 1100-1200: W synchro 10m platform final" },
        { point: "Equestrian: 1000-1530: Dressage Grand Prix qualifier" },
        {
          point:
            "Fencing: 1200-1730: M sabre team through semis, placement matches; 1930-2140: M sabre team medal finals",
        },
        { point: "Football: 1700-2300: W group stage (6 matches)" },
        {
          point:
            "Handball: 0900-1230: M preliminaries (2 matches); 1400-1730: M preliminaries (2 matches); 1900-2230: M preliminaries (2 matches)",
        },
        {
          point:
            "Hockey: 1000-1500: W pool stage (2 matches); 1030-1530: W pool stage (2 matches); 1700-2200: M/W pool stage (2 matches); 1730-2230: M/W pool stage (2 matches)",
        },
        {
          point:
            "Judo: 1000-1400: W -70kg, M -90kg elimination rounds; 1600-1900: W -70kg, M -90kg medal rounds",
        },
        {
          point:
            "Rowing: 0930-1310: M lightweight double sculls, W lightweight double sculls final C, M single sculls, W single sculls semis C/D, M coxless pair, W coxless pair, M lightweight double sculls, W lightweight double sculls semis, M quadruple sculls, W quadruple sculls final B and medal final",
        },
        { point: "Sailing: 1100-1900: M/W skiff" },
        {
          point:
            "Shooting: 0900-1030: M 50m rifle 3 pos. qualification; 0900-1705: W trap qualification day 2 and finals",
        },
        { point: "Surfing: Reserve day" },
        {
          point:
            "Swimming: 1100-1300: W 200m breast, M 200m back, W 200m fly heats; 2030-2230: W 100m free, M 200m fly, M 200m breast, W 1500m free finals, M 200m back, W 200m breast, M 200m fly semis, M 100m free final",
        },
        {
          point:
            "Table tennis: 1000-1300: M/W singles round 2; 1500-1800: M/W singles round 3; 2000-2300: M/W singles round 3",
        },
        {
          point:
            "Tennis: 1200-1700 (Court Philippe Chartrier): M/W singles; 1900-2300 (Court Philippe Chartrier): M/W singles; 1200-1900 (Court Suzanne Lenglen): M/W singles, M/W/Mixed doubles; 1200-1900 (Court Simonne Mathieu): M/W singles, M/W/Mixed doubles; 1200-1900 (outside courts): M singles, W/Mixed doubles",
        },
        { point: "Triathlon: 0800-1040: W ind. final" },
        {
          point:
            "Volleyball: 0900-1130: M preliminary round; 1300-1530: M preliminary round; 1700-1930: W preliminary round; 2100-2330: W preliminary round",
        },
        {
          point:
            "Water polo: 1400-1700: W preliminary round (2 matches); 1830-2130: W preliminary round (2 matches)",
        },
      ],
    },
    {
      title: "Thursday 1 August 2024 (18 gold medal events)",
      details: [
        {
          point:
            "Archery: 0930-1325: M/W ind. eliminations; 1530-1925: M/W ind. eliminations",
        },
        { point: "Artistic gymnastics: 1815-2025: W ind. all-around final" },
        {
          point:
            "Athletics (track and field): 0730-0905: M 20km race walk final; 0920-1105: W 20km race walk final",
        },
        {
          point:
            "Badminton: 0830-1100: M singles round of 16, W doubles quarters; 1300-1630: M doubles quarters, M singles round of 16; 1830-2200: W singles round of 16, Mixed doubles semis",
        },
        {
          point:
            "Basketball: 1100-1515: W group phase (2 matches); 1715-1900: W group phase (1 match); 2100-2245: W group phase (1 match)",
        },
        {
          point:
            "Basketball 3X3: 0900-1100: M/W pool round (4 matches); 1230-1430: M/W pool round (4 matches); 1800-2000: M/W pool round (4 matches); 2130-2330: M/W pool round (4 matches)",
        },
        {
          point:
            "Beach volleyball: 0900-1300: M/W preliminary phase (4 matches); 1500-1800: M/W preliminary phase (3 matches); 2000-2300: M/W preliminary phase (3 matches)",
        },
        { point: "BMX racing: 2000-2220: M/W quarters and last-chance runs" },
        {
          point:
            "Boxing: 1100-1325: W 50kg, W 75kg round of 32 or round of 16, W 54kg, M 63.5kg, M 92kg quarters; 1530-1810: W 50kg, W 75kg round of 32 or round of 16, W 54kg, M 63.5kg, M 92kg quarters; 2000-2225: W 50kg, W 75kg round of 32 or round of 16, W 54kg, M 63.5kg, M 92kg quarters",
        },
        { point: "Canoe slalom: 1530-1835: M K1 semis, finals" },
        { point: "Equestrian: 1100-1400: Jumping team qualifier" },
        {
          point:
            "Fencing: 1000-1710: W foil team through semis, placement matches; 1910-2200: W foil team medal finals",
        },
        { point: "Golf: 0900-1800: M golf round 1" },
        {
          point:
            "Handball: 0900-1230: W preliminaries (2 matches); 1400-1730: W preliminaries (2 matches); 1900-2230: W preliminaries (2 matches)",
        },
        {
          point:
            "Hockey: 1000-1500: M pool stage (2 matches); 1030-1530: M pool stage (2 matches); 1700-2200: W pool stage (2 matches); 1730-2230",
        },
        {
          point:
            "Judo: 1000-1400: W -78kg, M -100kg elimination rounds; 1600-1900: W -78kg, M -100kg medal rounds",
        },
        {
          point:
            "Rowing: 0930-1240: W single sculls, M single sculls semis, W eight, M eight repechage, W double sculls, M double sculls, W coxless four, M coxless four final B, W double sculls, M double sculls, W coxless four, M coxless four medal final",
        },
        {
          point:
            "Sailing: 1100-1900: M/W skiff medal races, M/W windsurfing, dinghy",
        },
        {
          point:
            "Shooting: 0930-1050: M 50m rifle 3 pos. finals; 1200-1330: W 50m rifle 3 pos. qualification",
        },
        { point: "Surfing: Reserve day" },
        {
          point:
            "Swimming: 1100-1300: W 200m back, M 50m free, M 200m IM, W 4x200m free relay heats; 2030-2230: W 200m fly, M 200m back finals, W 200m back semis, W 200m breast final, M 200m IM, M 50m free semis, W 4x200m free relay final",
        },
        {
          point:
            "Table tennis: 1000-1300: M/W singles quarters; 1500-1800: M/W singles quarters; 2000-2300: M/W singles quarters",
        },
        {
          point:
            "Tennis: 1200-1700 (Court Philippe Chartrier): M singles quarters, W singles semis; 1900-2300 (Court Philippe Chartrier): M singles quarters, W singles semis; 1200-1900 (Court Suzanne Lenglen): M singles quarters, W/Mixed doubles semis; 1200-1900 (Court Simonne Mathieu): W/Mixed doubles semis",
        },
        {
          point:
            "Volleyball: 0900-1130: W preliminary round; 1300-1530: W preliminary round; 1700-1930: W preliminary round; 2100-2330: W preliminary round",
        },
        {
          point:
            "Water polo: 1030-1330: M preliminary round (2 matches); 1500-1800: M preliminary round (2 matches); 1930-2230: M preliminary round (2 matches)",
        },
      ],
    },
    {
      title: "Friday 2 August 2024 (23 gold medal events)",
      details: [
        {
          point:
            "Archery: 0930-1205: Mixed team eliminations; 1415-1725: Mixed team medal rounds",
        },
        {
          point:
            "Athletics (track and field): 1005: M decathlon 100m; 1010: M hammer throw qualification A; 1015: W high jump qualification; 1035: W 100m preliminary round; 1055: M decathlon long jump; 1105: M 1500m round 1; 1135: M hammer throw qualification B; 1150: W 100m round 1; 1215: M decathlon shot put; 1800: M decathlon high jump; 1810: W 5000m round 1; 1815: W triple jump qualification; 1855: W discus throw qualification A; 1910: Mixed 4x400m relay round 1; 1945: W 800m round 1; 2010: M shot put qualification; 2020: W discus throw qualification B; 2050: M decathlon 400m; 2120: M 10,000m final",
        },
        {
          point:
            "Badminton: 0830-1300: M/W doubles semis; 1500-2230: M singles quarters, Mixed doubles medal matches",
        },
        {
          point:
            "Basketball: 1100-1515: M group phase (2 matches); 1715-1900: M group phase (1 match); 2100-2245: M group phase (1 match)",
        },
        {
          point:
            "Basketball 3X3: 0900-1100: M/W pool round (4 matches); 1230-1430: M/W pool round (4 matches); 1730-1930: M/W pool round (4 matches); 2100-2300: M/W pool round (4 matches)",
        },
        {
          point:
            "Beach volleyball: 0900-1300: M/W preliminary phase (4 matches); 1500-1800: M/W preliminary phase (3 matches); 2000-2300: M/W preliminary phase (3 matches)",
        },
        { point: "BMX racing: 2000-2230: M/W semis and finals" },
        {
          point:
            "Boxing: 1530-1810: W 57kg round of 32 or round of 16, M 51kg, M 80kg, M +92kg quarters; 2000-2240: W 57kg round of 32 or round of 16, M 51kg, M 80kg, M +92kg quarters",
        },
        { point: "Diving: 1100-1200: M synchro 3m springboard final" },
        { point: "Equestrian: 1400-1630: Jumping team final" },
        {
          point:
            "Fencing: 1200-1730: M épée team through semis, placement matches; 1930-2140: M épée team medal finals",
        },
        { point: "Football: 1500-0000: M quarters (4 matches)" },
        { point: "Golf: 0900-1800: M golf round 2" },
        {
          point:
            "Handball: 0900-1230: M preliminaries (2 matches); 1400-1730: M preliminaries (2 matches); 1900-2230: M preliminaries (2 matches)",
        },
        {
          point:
            "Hockey: 1000-1500: W pool stage (2 matches); 1030-1530: M pool stage (2 matches); 1700-2200: M pool stage (2 matches); 1730-2230",
        },
        {
          point:
            "Judo: 1000-1400: W +78kg, M +100kg elimination rounds; 1600-1900: W +78kg, M +100kg medal rounds",
        },
        {
          point:
            "Rowing: 0930-1250: M single sculls, W single sculls finals F/E/D, M coxless pair, W coxless pair, M lightweight double sculls, W lightweight double sculls final B, M coxless pair, W coxless pair, M lighweight double sculls, W lightweight double sculls medal final",
        },
        {
          point:
            "Sailing: 1100-1900: M/W windsurfing medal series, M/W/Mixed dinghy",
        },
        {
          point:
            "Shooting: 0900-1400: W 25m pistol qualification; 0930-1050: W 50m rifle 3 pos. finals; 0900-1430: M skeet qualification day 1",
        },
        { point: "Surfing: Reserve day" },
        {
          point:
            "Swimming: 1100-1300: M 100m fly, W 200m IM, W 800m free, Mixed 4x100m medley relay heats; 2030-2230: M 50m free, W 200m back, M 200m IM finals, M 100m fly, W 200m IM semis",
        },
        {
          point:
            "Table tennis: 1000-1200: M/W singles semis; 1330-1530: M/W singles semis",
        },
        {
          point:
            "Tennis: 1200-1700 (Court Philippe Chartrier): M singles semis, W singles bronze medal final; 1900-2330 (Court Philippe Chartrier): M singles semis, Mixed doubles gold medal final; 1200-1700 (Court Suzanne Lenglen): M/Mixed doubles bronze medal final",
        },
        {
          point:
            "Trampoline gymnastics: 1200-1430: W final; 1800-2030: M final",
        },
        {
          point:
            "Volleyball: 0900-1130: M preliminary round; 1300-1530: M preliminary round; 1700-1930: M preliminary round; 2100-2330: M preliminary round",
        },
        {
          point:
            "Water polo: 1400-1700: W preliminary round (2 matches); 1830-2130: W preliminary round (2 matches)",
        },
      ],
    },
    {
      title: "Saturday 3 August 2024 (28 gold medal events)",
      details: [
        {
          point:
            "Archery: 0930-1115: W ind. eliminations; 1300-1520: W ind. medal rounds",
        },
        { point: "Artistic gymnastics: 1500-1800: Apparatus finals" },
        {
          point:
            "Athletics (track and field): 1005: M decathlon 110m hurdles; 1010: M pole vault qualification; 1035: M 100m preliminary round; 1055: M decathlon discus throw A; 1110: W 800m repechage; 1145: M 100m round 1; 1200: M decathlon discus throw B; 1340: M decathlon pole vault; 1910: M decathlon javelin throw A; 1915: M 1500m repechage; 1935: M shot put final; 1950: W 100m semis; 2010: M decathlon javelin throw B; 2020: W triple jump final; 2055: Mixed 4x400m relay final; 2120: W 100m final; 2145: M decathlon 1500m final",
        },
        {
          point:
            "Badminton: 0830-1300: W singles quarters; 1500-1730: W doubles medal matches",
        },
        {
          point:
            "Basketball: 1100-1515: M/W group phase (2 matches); 1715-1900: M/W group phase (1 match); 2100-2245: M/W group phase (1 match)",
        },
        {
          point:
            "Basketball 3X3: 1730-1930: W Pool round (4 matches); 2130-2230: W Play-in round (2 matches)",
        },
        {
          point:
            "Beach volleyball: 0900-1300: M/W preliminary phase (4 matches); 1600-1900: M/W preliminary phase or lucky loser round (3 matches); 2100-0000: M/W lucky loser round (3 matches)",
        },
        {
          point:
            "Boxing: 1530-1755: W 50kg, W 66kg, M 57kg, M 71kg quarters, W 60kg semis; 2000-2225: W 50kg, W 66kg, M 57kg, M 71kg quarters, W 60kg semis",
        },
        {
          point:
            "Canoe slalom: 1530-1915: M/W kayak cross single time trials and repechage rounds",
        },
        {
          point:
            "Equestrian: 1000-1630: Dressage Grand Prix Special team final",
        },
        {
          point:
            "Fencing: 1130-1700: W sabre team through semis, placement matches; 1900-2110: W sabre team medal finals",
        },
        { point: "Football: 1500-0000: W quarters (4 matches)" },
        { point: "Golf: 0900-1800: M golf round 3" },
        {
          point:
            "Handball: 0900-1230: W preliminaries (2 matches); 1400-1730: W preliminaries (2 matches); 1900-2230: W preliminaries (2 matches)",
        },
        {
          point:
            "Hockey: 1000-1500: W pool stage (2 matches); 1030-1530: W pool stage (2 matches); 1700-2200: W pool stage (2 matches)",
        },
        {
          point:
            "Judo: 0800-1400: Mixed team elimination rounds, repechage, semis; 1600-1900: Mixed team medal rounds",
        },
        { point: "Road cycling: 1100-1815: M road race" },
        {
          point:
            "Rowing: 0930-1140: W single sculls, M single sculls finals C/B and medal final, W eight, M eight medal final",
        },
        { point: "Sailing: 1100-1900: M/W/Mixed dinghy, Mixed multihull" },
        {
          point:
            "Shooting: 0930-1050: W 25m pistol finals; 0900-1705: W skeet qualification day 1, M skeet qualification day 2 and finals",
        },
        { point: "Surfing: Reserve day" },
        {
          point:
            "Swimming: 1100-1300: W 50m free, M 1500m free, M 4x100m medley relay, W 4x100m medley relay heats; 2030-2230: M 100m fly final, W 50m free semis, W 200m IM, W 800m free, Mixed 4x100m medley relay finals",
        },
        { point: "Table tennis: 1330-1600: W singles medal finals" },
        {
          point:
            "Tennis: 1200-1900 (Court Philippe Chartrier): M singles bronze medal final, W singles, M doubles gold medal finals",
        },
        {
          point:
            "Volleyball: 0900-1130: W preliminary round; 1300-1530: W preliminary round; 1700-1930: M preliminary round; 2100-2330: M preliminary round",
        },
        {
          point:
            "Volleyball: 0900-1130: W preliminary round; 1300-1530: W preliminary round; 1700-1930: M preliminary round; 2100-2330: M preliminary round",
        },
      ],
    },
    {
      title: "Sunday 4 August 2024 (20 gold medal events)",
      details: [
        {
          point:
            "Archery: 0930-1115: M ind. eliminations; 1300-1520: M ind. medal rounds",
        },
        { point: "Artistic gymnastics: 1500-1725: Apparatus finals" },
        {
          point:
            "Athletics (track and field): 1005: W 3000m steeplechase round 1; 1020: W hammer throw qualification A; 1055: W 200m round 1; 1100: M long jump qualification; 1145: W hammer throw qualification B; 1150: M 110m hurdles round 1; 1235: W 400m hurdles round 1; 1905: M 400m round 1; 1950: W high jump final; 2000: M 100m semis; 2030: M hammer throw final; 2035: W 800m semis; 2110: M 1500m semis; 2150: M 100m final",
        },
        {
          point:
            "Badminton: 0830-1300: M/W singles semis; 1500-1730: M doubles medal matches",
        },
        {
          point:
            "Basketball: 1100-1515: W group phase (2 matches); 1715-1900: W group phase (1 match); 2100-2245: W group phase (1 match)",
        },
        {
          point:
            "Basketball 3X3: 1730-1930: M pool round (4 matches); 2130-2230: M Play-in round (2 matches)",
        },
        {
          point:
            "Beach volleyball: 0900-1100: M/W round of 16 (2 matches); 1300-1500: M/W round of 16 (2 matches); 1700-1900: M/W round of 16 (2 matches); 2100-2300: M/W round of 16 (2 matches)",
        },
        {
          point:
            "Boxing: 1100-1325: W 57kg, W 75kg quarters, W 54kg, M 51kg, M 63.5kg, M 80kg, M 92kg semis; 1530-1755: W 57kg, W 75kg quarters, W 54kg, M 51kg, M 63.5kg, M 80kg, M 92kg semis",
        },
        { point: "Canoe slalom: 1530-1725: M/W kayak cross single heats" },
        {
          point:
            "Equestrian: 1000-1400: Dressage Grand Prix Freestyle ind. final",
        },
        {
          point:
            "Fencing: 1000-1710: M foil team through semis, placement matches; 1910-2200: M foil team medal finals",
        },
        { point: "Golf: 0900-1830: M golf round 4 (medal final)" },
        {
          point:
            "Handball: 0900-1230: M preliminaries (2 matches); 1400-1730: M preliminaries (2 matches); 1900-2230: M preliminaries (2 matches)",
        },
        {
          point:
            "Hockey: 1000-1500: M quarters (2 matches); 1730-2230: M quarters (2 matches)",
        },
        { point: "Road cycling: 1400-1845: W road race" },
        { point: "Rowing: Reserve day" },
        {
          point:
            "Sailing: 1100-1900: M/W Kite, M/W/Mixed dinghy, Mixed multihull",
        },
        {
          point:
            "Shooting: 0900-1700: M 25m rapid fire pistol qualification; 0930-1705: W skeet qualification day 2 and finals",
        },
        { point: "Surfing: Reserve day" },
        {
          point:
            "Swimming: 1830-2030: W 50m free, M 1500m free, M 4x100m medley relay, W 4x100m medley relay finals",
        },
        { point: "Table tennis: 1330-1600: M singles medal finals" },
        {
          point:
            "Tennis: 1200-1900 (Court Philippe Chartrier): W doubles bronze, gold medal finals, M singles gold medal final",
        },
        {
          point:
            "Volleyball: 0900-1130: W preliminary round; 1300-1530: W preliminary round; 1700-1930: W preliminary round; 2100-2330: W preliminary round",
        },
        {
          point:
            "Water polo: 1400-1700: W preliminary round (2 matches); 1830-2130: W preliminary round (2 matches)",
        },
      ],
    },
    {
      title: "Monday 5 August 2024 (17 gold medal events)",
      details: [
        { point: "Artistic gymnastics: 1200-1515: Apparatus finals" },
        { point: "Artistic swimming: 1930-2100: Team technical routine" },
        {
          point:
            "Athletics (track and field): 1005: M 400m hurdles round 1; 1010: M discus throw qualification A; 1040: W pole vault qualification; 1050: W 400m hurdles repechage; 1120: M 400m repechage; 1135: M discus throw qualification B; 1155: W 400m round 1; 1250: W 200m repechage; 1900: M pole vault final; 1904: M 3000m steeplechase round 1; 1955: M 200m round 1; 2035: W discus throw final; 2045: W 200m semis; 2110: W 5000m final; 2145: W 800m final",
        },
        {
          point:
            "Badminton: 0945-1230: W singles medal matches; 1430-1730: M singles medal matches",
        },
        {
          point:
            "Basketball 3X3: 1730-1930: M/W semis; 2100-2320: M/W medal finals",
        },
        {
          point:
            "Beach volleyball: 0900-1100: M/W round of 16 (2 matches); 1300-1500: M/W round of 16 (2 matches); 1700-1900: M/W round of 16 (2 matches); 2100-2300: M/W round of 16 (2 matches)",
        },
        { point: "Canoe slalom: 1530-1730: M/W kayak cross semis, finals" },
        {
          point:
            "Diving: 1000-1210: W 10m platform preliminary; 1500-1700: W 10m platform semis",
        },
        { point: "Equestrian: 1400-1800: Jumping ind. qualifier" },
        { point: "Football: 1800-2100; 2100-0000: M semis" },
        {
          point:
            "Hockey: 1000-1500: W quarters (2 matches); 1730-2230: W quarters (2 matches)",
        },
        {
          point:
            "Sailing: 1100-1900: M/W Kite, M/W/Mixed dinghy, Mixed multihull",
        },
        {
          point:
            "Shooting: 0930-1050: M 25m rapid fire pistol finals; 0900-1635: Mixed team skeet qualification and finals",
        },
        {
          point:
            "Sport climbing: 1000-1400: M boulder/lead semis (boulder), W speed qualification",
        },
        {
          point:
            "Table tennis: 1000-1300: M/W team round of 16; 1500-1800: M/W team round of 16; 2000-2300: M/W team round of 16",
        },
        {
          point:
            "Track cycling: 1700-1940: M team sprint qualifying, M team pursuit qualifying, W team sprint qualifying, first round, medal finals",
        },
        { point: "Triathlon: 0800-1010: Mixed team relay final" },
        {
          point:
            "Volleyball: 0900-1130: M quarters; 1300-1530: M quarters; 1700-1930: M quarters; 2100-2330: M quarters",
        },
        {
          point:
            "Water polo: 1200-1630: M preliminary round (3 matches); 1830-2300: M preliminary round (3 matches)",
        },
        {
          point:
            "Wrestling: 1500-1700: M Greco-Roman 60kg, M Greco-Roman 130kg, W freestyle 68kg round of 16, quarters; 2100-2200: M Greco-Roman 60kg, M Greco-Roman 130kg, W freestyle 68kg semis",
        },
      ],
    },
    {
      title: "Tuesday 6 August 2024 (15 gold medal events)",
      details: [
        { point: "Artistic swimming: 1930-2100: Team free routine" },
        {
          point:
            "Athletics (track and field): 1005: W 1500m round 1; 1020: M javelin throw qualification A; 1050: M 110m hurdles repechage; 1115: W long jump qualification; 1120: W 400m repechage; 1150: M javelin throw qualification B; 1200: M 400m hurdles repechage; 1230: M 200m repechage; 1935: M 400m semis; 1955: W hammer throw final; 2007: W 400m hurdles semis; 2015: M long jump final; 2050: M 1500m final; 2110: W 3000m steeplechase final; 2140: W 200m final",
        },
        {
          point:
            "Basketball: 1100-1300: M quarters; 1430-1630: M quarters; 1800-2000: M quarters; 2130-2330: M quarters",
        },
        {
          point:
            "Beach volleyball: 1700-1900: M/W quarters (2 matches); 2100-2300: M/W quarters (2 matches)",
        },
        {
          point:
            "Boxing: 2130-2330: W 50kg, W 66kg, M 71kg semis, W 60kg final",
        },
        {
          point:
            "Canoe sprint: 0930-1450: M C2 500m, M K1 1000m, M K4 500m, W C2 500m, W K1 500m, W K4 500m heats and quarters",
        },
        {
          point:
            "Diving: 1000-1200: M 3m springboard preliminary; 1500-1700: W 10m platform final",
        },
        { point: "Equestrian: 1000-1230: Jumping ind. final" },
        { point: "Football: 1800-2100; 2100-0000: W semis" },
        {
          point:
            "Handball: 0930-1130: W quarters; 1330-1530: W quarters; 1730-1930: W quarters; 2130-2330: W quarters",
        },
        { point: "Hockey: 1400-1600: M semis; 1900-2100: M semis" },
        {
          point:
            "Sailing: 1100-1900: M/W dinghy medal races, M/W Kite, Mixed dinghy, Mixed multihull",
        },
        {
          point:
            "Skateboard: 1230-1600: W park preliminaries; 1730-1900: W park medal final",
        },
        {
          point:
            "Sport climbing: 1000-1400: W boulder/lead semis (boulder), M speed qualification",
        },
        {
          point:
            "Table tennis: 1000-1300: M/W team round of 16; 1500-1800: M/W team quarters; 2000-2300: M/W team quarters",
        },
        {
          point:
            "Track cycling: 1730-1955: M team sprint first round, medal finals, M team pursuit first round, W team pursuit qualifying",
        },
        {
          point:
            "Volleyball: 0900-1130: W quarters; 1300-1530: W quarters; 1700-1930: W quarters; 2100-2330: W quarters",
        },
        {
          point:
            "Water polo: 1400-1700: W quarters (2 matches); 1900-2200: W quarters (2 matches)",
        },
        {
          point:
            "Wrestling: 1100-1330: M Greco-Roman 60kg, M Greco-Roman 130kg, W freestyle 68kg repechage, M Greco-Roman 77kg, M Greco-Roman 97kg, W freestyle 50kg round of 16 and quarters; 1815-2200: M Greco-Roman 77kg, M Greco-Roman 97kg, W freestyle 50kg semis, M Greco-Roman 60kg, M Greco-Roman 130kg, W freestyle 68kg medal finals",
        },
      ],
    },
    {
      title: "Wednesday 7 August 2024 (21 gold medal events)",
      details: [
        {
          point:
            "Artistic swimming: 1930-2115: Team acrobatic routine (medal final)",
        },
        {
          point:
            "Athletics (track and field): 0730-1045: Marathon race walk mixed relay final; 1005: M high jump qualification; 1015: W 100m hurdles round 1; 1025: W javelin throw qualification A; 1100: M 5000m round 1; 1145: M 800m round 1; 1150: W javelin throw qualification B; 1235: W 1500m repechage; 1900: W pole vault final; 1905: M 110m hurdles semis; 1915: M triple jump qualification; 1935: M 400m hurdles semis; 2002: M 200m semis; 2025: M discus throw final; 2045: W 400m semis; 2120: M 400m final; 2140: M 3000m steeplechase final",
        },
        {
          point:
            "Basketball: 1100-1300: W quarters; 1430-1630: W quarters; 1800-2000: W quarters; 2130-2330: W quarters",
        },
        {
          point:
            "Beach volleyball: 1700-1900: M/W quarters (2 matches); 2100-2300: M/W quarters (2 matches)",
        },
        {
          point:
            "Boxing: 2130-2330: W 57kg, M +92kg semis, M 63.5kg, M 80kg final",
        },
        {
          point:
            "Canoe sprint: 0930-1510: M C1 1000m, M K2 500m, W C1 200m, W K2 500m heats and quarters",
        },
        {
          point:
            "Diving: 1000-1200: M 3m springboard semis; 1500-1700: W 3m springboard preliminary",
        },
        { point: "Golf: 0900-1800: W golf round 1" },
        {
          point:
            "Handball: 0930-1130: M quarters; 1330-1530: M quarters; 1730-1930: M quarters; 2130-2330: M quarters",
        },
        { point: "Hockey: 1400-1600: W semis; 1900-2100: W semis" },
        {
          point:
            "Sailing: 1100-1900: Mixed dinghy, Mixed multihull medal races, M/W Kite",
        },
        {
          point:
            "Skateboard: 1230-1600: M park preliminaries; 1730-1900: M park medal final",
        },
        {
          point:
            "Sport climbing: 1000-1315: M boulder/lead semis (lead), W speed medal finals",
        },
        {
          point:
            "Table tennis: 1000-1300: M/W team quarters; 1500-1800: M/W team quarters; 2000-2300: M team semis",
        },
        {
          point:
            "Taekwondo: 0900-1230: M 58kg, W 49kg qualification rounds; 1430-1730: M 58kg, W 49kg quarters, semis; 1930-2300: M 58kg, W 49kg repechage rounds and medal finals",
        },
        {
          point:
            "Track cycling: 1245-1530: M sprint qualifying, early rounds, repechage rounds, W keirin first round, repechage, W team pursuit first round; 1730-1950: M sprint early rounds, repechage rounds, M team pursuit medal finals, W team pursuit medal finals",
        },
        { point: "Volleyball: 1600-1830: M semis; 2000-2230: M semis" },
        {
          point:
            "Water polo: 1400-1700: M quarters (2 matches); 1900-2200: M quarters (2 matches)",
        },
        {
          point:
            "Weightlifting: 1500-1730: Men’s 61kg final; 1930-2200: W 49kg final",
        },
        {
          point:
            "Wrestling: 1100-1330: M Greco-Roman 77kg, M Greco-Roman 97kg, W freestyle 50kg repechage, M Greco-Roman 67kg, M Greco-Roman 87kg, W freestyle 53kg round of 16 and quarters; 1815-2200: M Greco-Roman 67kg, M Greco-Roman 87kg, W freestyle 53kg semis, M Greco-Roman 77kg, M Greco-Roman 97kg, W freestyle 50kg medal finals",
        },
      ],
    },
    {
      title: "Thursday 8 August 2024 (26 gold medal events)",
      details: [
        {
          point:
            "Athletics (track and field): 1005: W heptathlon 100m hurdles; 1025: W shot put qualification; 1035: W 100m hurdles repechage; 1105: W heptathlon high jump; 1110: W 4x100m relay round 1; 1135: M 4x100m relay round 1; 1200: M 800m repechage; 1935: W heptathlon shot put; 1935: W 1500m semis; 2000: W long jump final; 2025: M javelin throw final; 2030: M 200m final; 2055: W heptathlon 200m; 2125: W 400m hurdles final; 2145: M 110m hurdles final",
        },
        { point: "Basketball: 1730-1930: M semis; 2100-2300: M semis" },
        {
          point:
            "Beach volleyball: 1700-1900: M/W semis (2 matches); 2100-2300: M/W semis (2 matches)",
        },
        {
          point:
            "Boxing: 2130-2330: W 75kg, M 57kg semis, W 54kg, M 51kg final",
        },
        {
          point:
            "Canoe sprint: 1030-1430: M C2 500m, M K4 500m, W C2 500m, W K4 500m semis and finals",
        },
        {
          point:
            "Diving: 1000-1200: W 3m springboard semis; 1500-1700: M 3m springboard final",
        },
        { point: "Football: 1700-2000: M bronze-medal game" },
        { point: "Golf: 0900-1800: W golf round 2" },
        { point: "Handball: 1630-1830: W semis; 2130-2330: W semis" },
        {
          point:
            "Hockey: 1400-1600: M bronze-medal game; 1900-2130: M gold-medal game",
        },
        { point: "Modern pentathlon: 1100-1730: M/W fencing ranking round" },
        {
          point:
            "Rhythmic gymnastics: 1000-1300: Ind. All-around qualification; 1500-1800: Ind. all-around qualification",
        },
        { point: "Sailing: 1100-1900: M/W Kite medal series" },
        {
          point:
            "Sport climbing: 1000-1315: W boulder/lead semis (lead), M speed medal finals",
        },
        { point: "Swimming: 0730-1030: W 10km marathon final" },
        {
          point:
            "Table tennis: 1000-1300: M team semis; 1500-1800: W team semis; 2000-2300: W team semis",
        },
        {
          point:
            "Taekwondo: 0900-1230: M 68kg, W 57kg qualification rounds; 1430-1730: M 68kg, W 57kg quarters, semis; 1930-2300: M 68kg, W 57kg repechage rounds and medal finals",
        },
        {
          point:
            "Track cycling: 1700-1955: M sprint quarters, classification races, M omnium (medal final), W keirin quarters, semis, medal final",
        },
        { point: "Volleyball: 1600-1830: W semis; 2000-2230: W semis" },
        {
          point:
            "Water polo: 1300-1600: W classification matches & semis (2 matches); 1800-2100: W classification matches & semis (2 matches)",
        },
        {
          point:
            "Weightlifting: 1500-1730: W 59kg final; 1930-2200: M 73kg final",
        },
        {
          point:
            "Wrestling: 1100-1330: M Greco-Roman 67kg, M Greco-Roman 87kg, W freestyle 53kg repechage, M freestyle 57kg, M freestyle 86kg, W freestyle 57kg round of 16 and quarters; 1815-2200: M freestyle 57kg, M freestyle 86kg, W freestyle 57kg semis, M Greco-Roman 67kg, M Greco-Roman 87kg, W freestyle 53kg medal finals",
        },
      ],
    },
    {
      title: "Friday 9 August 2024 (33 gold medal events)",
      details: [
        { point: "Artistic swimming: 1930-2130: Duet technical routine" },
        {
          point:
            "Athletics (track and field): 1005: W heptathlon long jump; 1040: W 4x400m relay round 1; 1105: M 4x400m relay round 1; 1120: W heptathlon javelin throw A; 1130: M 800m semis; 1205: W 100m hurdles semis; 1230: W heptathlon javelin throw B; 1930: W 4x100m relay final; 1940: W shot put final; 1945: M 4x100m relay final; 2000: W 400m final; 2010: M triple jump final; 2015: W heptathlon 800m final; 2055: W 10,000m final; 2145: M 400m hurdles final",
        },
        { point: "Basketball: 1730-1930: W semis; 2100-2300: W semis" },
        {
          point: "Beach volleyball: 2100-0000: M or W medal finals (2 matches)",
        },
        { point: "Boxing: 2130-2330: W 50kg, W 66kg, M 71kg, M 92kg final" },
        {
          point:
            "Breaking: 1600-1800: W ind. qualifying; 2000-2200: W ind. final",
        },
        {
          point:
            "Canoe sprint: 1030-1440: M K2 500m, W C1 200m, W K2 500m semis and finals",
        },
        {
          point:
            "Diving: 1000-1200: M 10m platform preliminary; 1500-1700: W 3m springboard final",
        },
        {
          point:
            "Football: 1500-1800: W bronze-medal game; 1800-2130: M gold-medal game",
        },
        { point: "Golf: 0900-1800: W golf round 3" },
        { point: "Handball: 1630-1830: M semis; 2130-2330: M semis" },
        {
          point:
            "Hockey: 1400-1600: W bronze-medal game; 2000-2230: W gold-medal game",
        },
        {
          point:
            "Modern pentathlon: 1300-1900: M swimming, fencing bonus round, riding",
        },
        {
          point:
            "Rhythmic gymnastics: 1000-1230: Group all-around qualification; 1430-1700: Ind. all-around final",
        },
        { point: "Sport climbing: 1000-1320: M boulder/lead medal final" },
        { point: "Swimming: 0730-1030: M 10km marathon final" },
        {
          point:
            "Table tennis: 1000-1300: M team bronze medal final; 1500-1830: M team gold medal final",
        },
        {
          point:
            "Taekwondo: 0900-1230: M 80kg, W 67kg qualification rounds; 1430-1730: M 80kg, W 67kg quarters, semis; 1930-2300: M 80kg, W 67kg repechage rounds and medal finals",
        },
        {
          point:
            "Track cycling: 1400-1545: M sprint semis, W sprint qualifying, early rounds, repechage rounds; 1800-1955: M sprint medal finals, W Madison final, W sprint early rounds, repechage rounds",
        },
        { point: "Volleyball: 1600-1830: M bronze-medal game" },
        {
          point:
            "Water polo: 1300-1600: M classification matches & semis (2 matches); 1800-2100: M classification matches & semis (2 matches)",
        },
        {
          point:
            "Weightlifting: 1500-1730: M 89kg final; 1930-2200: W 71kg final",
        },
        {
          point:
            "Wrestling: 1100-1330: M freestyle 57kg, M freestyle 86kg, W freestyle 57kg repechage, M freestyle 74kg, M freestyle 125kg, W freestyle 62kg round of 16 and quarters; 1815-2200: M freestyle 74kg, M freestyle 125kg, W freestyle 62kg semis, M freestyle 57kg, M freestyle 86kg, W freestyle 57kg medal finals",
        },
      ],
    },
    {
      title: "Saturday 10 August 2024 (39 gold medal events)",
      details: [
        {
          point:
            "Artistic swimming: 1930-2200: Duet free routine (medal final)",
        },
        {
          point:
            "Athletics (track and field): 0800-1100: M marathon final; 1910: M high jump final; 1925: M 800m final; 1940: W javelin throw final; 1945: W 100m hurdles final; 2000: M 5000m final; 2025: W 1500m final; 2112: M 4x400m relay final; 2122: W 4x400m relay final",
        },
        {
          point:
            "Basketball: 1100-1300: M bronze-medal game; 2130-0000: M gold-medal game",
        },
        {
          point: "Beach volleyball: 2100-0000: M or W medal finals (2 matches)",
        },
        { point: "Boxing: 2130-2330: W 57kg, W 75kg, M 57kg, M +92kg final" },
        {
          point:
            "Breaking: 1600-1800: M ind. qualifying; 2000-2200: M ind. final",
        },
        {
          point:
            "Canoe sprint: 1030-1420: M C1 1000m, M K1 1000m, W K1 500m semis and finals",
        },
        {
          point:
            "Diving: 1000-1200: M 10m platform semis; 1500-1700: M 10m platform final",
        },
        { point: "Football: 1700-2030: W gold-medal game" },
        { point: "Golf: 0900-1830: W golf round 4 (medal final)" },
        {
          point:
            "Handball: 1000-1200: W bronze-medal game; 1500-1730: W gold-medal game",
        },
        {
          point:
            "Modern pentathlon: 0930-1530: W swimming, fencing bonus round, riding; 1730-2000: M laser run final",
        },
        { point: "Rhythmic gymnastics: 1400-1545: Group all-around final" },
        { point: "Sport climbing: 1000-1320: W boulder/lead medal final" },
        {
          point:
            "Table tennis: 1000-1300: W team bronze medal final; 1500-1830: W team gold medal final",
        },
        {
          point:
            "Taekwondo: 0900-1230: M +80kg, W +67kg qualification rounds; 1430-1730: M +80kg, W +67kg quarters, semis; 1930-2300: M +80kg, W +67kg repechage rounds and medal finals",
        },
        {
          point:
            "Track cycling: 1700-1950: M keirin first round, repechage, M Madison final, W sprint quarters, classification races",
        },
        {
          point:
            "Volleyball: 1300-1545: M gold-medal game; 1715-1945: W bronze-medal game",
        },
        {
          point:
            "Water polo: 0900-1200: W bronze-medal game; 1400-2100: W/M classification matches, W gold-medal game",
        },
        {
          point:
            "Weightlifting: 1130-1400: M 102kg final; 1600-1830: W 81kg final; 2030-2300: M +102kg final",
        },
        {
          point:
            "Wrestling: 1100-1330: M freestyle 74kg, M freestyle 125kg, W freestyle 62kg repechage, M freestyle 65kg, M freestyle 97kg, W freestyle 76kg round of 16 and quarters; 1815-2200: M freestyle 65kg, M freestyle 97kg, W freestyle 76kg semis, M freestyle 74kg, M freestyle 125kg, W freestyle 62kg medal finals",
        },
      ],
    },
    {
      title: "Sunday 11 August 2024 (13 gold medal events)",
      details: [
        { point: "Athletics (track and field): 0800-1115: W marathon final" },
        {
          point:
            "Basketball: 1130-1330: W bronze-medal game; 1530-1800: W gold-medal game",
        },
        {
          point:
            "Handball: 0900-1100: M bronze-medal game; 1330-1600: M gold-medal game",
        },
        { point: "Modern pentathlon: 1100-1330: W laser run final" },
        {
          point:
            "Track cycling: 1100-1415: M keirin quarters, semis, medal finals, W sprint semis, medal finals, W omnium (medal final)",
        },
        { point: "Volleyball: 1300-1545: W gold-medal game" },
        {
          point:
            "Water polo: 0900-1200: M bronze-medal game; 1400-1550: M gold-medal game",
        },
        { point: "Weightlifting: 1130-1400: W +81kg final" },
        {
          point:
            "Wrestling: 1100-1430: M freestyle 65kg, M freestyle 97kg, W freestyle 76kg repechage and medal finals",
        },
        { point: "Closing Ceremony" },
      ],
    },
  ];

  return (
    <body>
      <Layout>
        <div className="Event-Container">
          <h1>
            Olympic Games Paris 2024: Full schedule and day-by-day competitions
          </h1>
          <p>
            Discover the preliminary daily competition schedule for all sports
            at the Paris 2024 Olympic Games.
          </p>
          <div className="Event-Container-Image">
            <img src={`/Images/Event Page Image.jpg`} />
          </div>
        </div>

        {/* ------------- HTML For the Event list ----------- */}

        <div className="Event-Detail">
          <div className="Event-Detail-Inner">
            {EventList.map((obj1) => (
              <EventDiv
                heading={obj1.title}
                list={obj1.details.map((obj2) => (
                  <li>{obj2.point}</li>
                ))}
              ></EventDiv>
            ))}

            {/* <div className="Event-Detail-row">
            <h2>Hello</h2>
            <ul>
              <li>R</li>
              <li>A</li>
              <li>V</li>
            </ul>
          </div> */}
          </div>
        </div>
      </Layout>
    </body>
  );
}

export default Event;
{
  /* 
      {
        EventList.map((obj1) => 
        <div> 
          <h3>{obj1.title}</h3>
          <ul>
            {
              obj1.details.map((obj2) => <li>{obj2.point}</li>)
            }
          </ul>
        </div>
        )
      }  */
}
