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
      CoviNews & Tracker is an API based app made using React JS which fetches you latest news related to health from all over the world
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
        <strong>Covid Tracker</strong> Covid tracker is using pacakges, leaflet for Map, Material Ui for styled components, numeral for number formating and react-chartjs2 for the graph.
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
        Ritik <br /></strong> 
      </div>
    </div>
  </div>
</div>

        </div>
        <Footer/></>
    )
}

export default About
