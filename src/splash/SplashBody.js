import React from 'react';

// Components
import ItemCompare from './ItemCompare';

export default class SplashBody extends React.Component {
  render() {
    return (
      <div id="SplashBody">
        <h3>YOU COULD BUY:</h3>
        <ul id='itemCompare-container'>
          <ItemCompare
            topItemUrl={`https://res.cloudinary.com/ddgtwtbre/image/upload/v1506469150/paper_towel_oosxkg.png`}
            topItemText={`24 rolls of paper towels`}
            botItemUrl={`https://res.cloudinary.com/ddgtwtbre/image/upload/v1506469151/stethoscope_epjq2u.png`}
            botItemText={`provide for a child’s medical care and advocacy for a month`}
          />

          <ItemCompare
            topItemUrl={`https://res.cloudinary.com/ddgtwtbre/image/upload/v1506469150/netflix_nihmej.png`}
            topItemText={`4 months of Netflix`}
            botItemUrl={`https://res.cloudinary.com/ddgtwtbre/image/upload/v1506469150/mentorship_eohwnj.png`}
            botItemText={`Ongoing mentorship and connecting a child with mentors that truly care about them past the classroom door, even past graduation`}
          />
        </ul>
      </div>
    );
  }
}
