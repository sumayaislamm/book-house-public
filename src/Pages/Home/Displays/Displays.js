import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import './Displays.css'


const Displays = () => {

  const [displays, setDisplays] = useState([]);

  useEffect ( ()=>{
      fetch('http://localhost:5000/data')
      .then(res => res.json())
      .then (data => setDisplays(data));
  })

  return (
    <div className="mt-3 pt-5 mb-5">
     <h1 className="text-dark text-center py-4 mb-3">Our Items</h1>
      <hr className="border border-4 border-dark rounded-pill w-25 m-auto" />
      <div className="container item-container mt-5">
      {
        displays.map( displays =>
          <Display 
          key={displays._id}
          displays={displays}
          ></Display>
        )
      }
    </div>
    </div>
  );
};

export default Displays;