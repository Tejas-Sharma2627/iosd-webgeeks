import React from 'react'
import { useEffect } from 'react'
import Footer from './Footer/Footer'
const About = () => {
    useEffect(() => {
        document.title = "About us"
    }, [])
    return (<>
        <div className='container my-4'>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About CoviNews & Tracker
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
     <strong>CoviNews & Tracker </strong>is an API based app made using React JS which fetches you latest news related to health from all over the world. It also comes with a tracker which lets you see corona cases from all over the world.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Packages used 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>CoviNews & Tracker</strong> This app is using fetch API to fetch latest news related to health from all over the world on a single click. It is using components made by us as well as from material UI. It uses packages like- leaflet for map, numeral for number formatting, react-chartjs2 for graph, react-router-dom to create routes in navbar, react-infinite-scroll package to create an infinte scroll bar for news component<br />
    
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Made By Team Webgeeks
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Kshitiz Singh Chauhan<br/>
        Tejas Sharma <br />
        Harsh <br />
        Ritik Panchal <br /></strong> 
      </div>
    </div>
  </div>
</div>

        </div>
        <Footer/></>
    )
}

export default About
