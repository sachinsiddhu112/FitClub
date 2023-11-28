import React from 'react'
import "./Programs.css";
import {programsData} from '../../data/programsData';
//This programsData contains an array of objects that we are rendering in cards
import RightArrow from '../../assets/rightArrow.png';
function Programs() {
  return (
    <div className='Programs' id='Programs'>
      <div className="programs-header">
        <span className='stroke-text'>Explore our</span>
        <span> Programs</span>
        <span className='stroke-text'> To shape you</span>
      </div>

      <div className="program-categories">
        {programsData.map((program)=>(
            <div className="category">
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now">
                    <span>Join Now</span><img src={RightArrow} alt="" />
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Programs
