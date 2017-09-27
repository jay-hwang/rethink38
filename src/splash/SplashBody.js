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

          <ItemCompare
            topItemUrl={`https://res.cloudinary.com/ddgtwtbre/image/upload/v1506469150/movie_tix_soda_ydh7ek.png`}
            topItemText={`2 movie tickets and 2 large sodas`}
            botItemUrl={`http://res.cloudinary.com/ddgtwtbre/image/upload/v1506469150/groceries_fwdm4z.png`}
            botItemText={`Meeting the immediate weekly needs of hunger that plague children and families`}
          />

          <ItemCompare
            topItemUrl={`https://res.cloudinary.com/ddgtwtbre/image/upload/v1506469150/coffee_csfujh.png`}
            topItemText={`2 weeks of coffee`}
            botItemUrl={`https://res.cloudinary.com/ddgtwtbre/image/upload/v1506469151/school_supplies_jzvpf9.png`}
            botItemText={`Making sure a child is not without the necessities for school each month`}
          />

          <ItemCompare
            topItemUrl={`https://res.cloudinary.com/ddgtwtbre/image/upload/v1506475215/xbox_e4cffh.png`}
            topItemText={`6 months of Xbox Live`}
            botItemUrl={`https://res.cloudinary.com/ddgtwtbre/image/upload/v1506475216/extra_uqifvy.png`}
            botItemText={`Provide outlets and opportunities to children to partake in music, sports and the arts`}
          />
        </ul>
      </div>
    );
  }
}
