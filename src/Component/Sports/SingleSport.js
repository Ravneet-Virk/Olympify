import React from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom';
import SportDesc from './SportDesc';
import { Sport } from './Sport';

function SingleSport() {
    const {id} = useParams();
    const sport = Sport.find((sport)=>sport.title1===id);
    // console.log(sport.title1);

    
  return (
    <Layout>
      <h1>{sport.title1}</h1>
        <SportDesc sport={sport} />
    </Layout>
  )
}

export default SingleSport
