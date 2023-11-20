import React from 'react';
import {Link} from "react-router-dom";

import img1 from '../images/cat.jpg'
import img2 from '../images/dog.jpg'
import img3 from "../images/cow.jpg"
import img4 from "../images/lion.jpg"
import img5 from "../images/tiger.jpg"
import img6 from "../images/elephant.jpg"
import img7 from "../images/hibiscus.jpg"
import img8 from "../images/jasmine.jpg"
import img9 from "../images/lily.jpg"
import img10 from "../images/rose.jpg"
import img11 from "../images/sunflower.jpg"
import img12 from "../images/lotus.jpg"
import img13 from "../images/columbidae.jpg"
import img14 from "../images/crow.jpg"
import img15 from "../images/eagle.jpg"
import img16 from "../images/kingfisher.jpg"
import img17 from "../images/owl.jpg"
import img18 from "../images/swans.jpg"



const FrenchLesson6 = () => {


  return (
    <div >
        <nav className="navbar bg-info">
                  <Link to="/" className="navbar-brand mx-3">Language Learning</Link>
             <div className="nav">
                  <Link to="/french" className="nav-link">Logout</Link>
            </div>
            </nav>
      <h1 style={{ textAlign: 'center',fontSize:30 }}>Flowers---fleurs</h1>
      <table>
        <tr>
          <td>
            <h1 style={{fontSize:"20px"}}>hibiscus - hibiscus</h1>
            <img src={img7} alt="" style={{ width: 200, height: 200,margin:"20px"}} ></img>
          </td>
          <td>
            <h1 style={{fontSize:"20px"}}>jasmine - jasmin</h1>
            <img src={img8} alt="" style={{ width: 200, height: 200,margin:"20px"}} ></img>
          </td>
          <td>
            <h1 style={{fontSize:"20px"}}>lily - lys</h1>
            <img src={img9} alt="" style={{ width: 200, height: 200,margin:"20px"}} ></img>
          </td>
        </tr>
        <tr>
          <td>
            <h1 style={{fontSize:"20px"}}>rose - rose</h1>
            <img src={img10} alt="" style={{ width: 200, height: 200,margin:"20px"}} ></img>
          </td>
          <td>
            <h1 style={{fontSize:"20px"}}>sunflower - tournesol</h1>
            <img src={img11} alt="" style={{ width: 200, height: 200,margin:"20px"}} ></img>
          </td>
          <td>
            <h1 style={{fontSize:"20px"}}>lotus - lotus</h1>
            <img src={img12} alt="" style={{ width: 200, height: 200,margin:"20px" }} ></img>
          </td>
        </tr>
      </table>

      <h1 style={{ textAlign: 'center' ,fontSize:30 }}>Animals---animaux</h1>

      <table>

        <tr>

          <td>
            <h1 style={{fontSize:"20px"}}>Cat - Chat</h1>
            <img src={img1} alt="cat" style={{ width:200, height: 200,margin:"20px" }}></img>
          </td>

          <td>
            <h1 style={{fontSize:"20px"}}>Dog - Chien</h1>
            <img src={img2} alt="dog" style={{ width: 200, height: 200,margin:"20px"}}></img>
          </td>

          <td>
            <h1 style={{fontSize:"20px"}}>Cow - Vache</h1>
            <img src={img3} alt="cow" style={{ width: 200, height: 200 ,margin:"20px"}}></img>
          </td>

        </tr>
        <tr>

          <td>
            <h1 style={{fontSize:"20px"}}>Lion - Lion</h1>
            <img src={img4} alt="lion" style={{ width: 200, height: 200,margin:"20px"}}></img>
          </td>

          <td>
            <h1 style={{fontSize:"20px"}}>Tiger-Tigre</h1>
            <img src={img5} alt="tiger" style={{ width: 200, height: 200,margin:"20px" }}></img>
          </td>

          <td>
            <h1 style={{fontSize:"20px"}}>Elephant - e'le'phant</h1>
            <img src={img6} alt="elephant" style={{ width: 200, height: 200,margin:"20px"}}></img>
          </td>

        </tr>


      </table>


      
      <h1 style={{ textAlign: 'center',fontSize:30  }}>Birds---oiseaux</h1>

      <table>

        <tr>

          <td>
            <h1 style={{fontSize:"20px"}}>columbidae - olombide's</h1>
            <img src={img13} alt="columbidae" style={{ width: 200, height: 200 ,margin:"20px"}}></img>
          </td>

          <td>
            <h1 style={{fontSize:"20px"}}>crow - corbeau</h1>
            <img src={img14} alt="crow" style={{ width: 200, height: 200,margin:"20px" }}></img>
          </td>

          <td>
            <h1 style={{fontSize:"20px"}}>eagle - aigle</h1>
            <img src={img15} alt="eagle" style={{ width: 200, height: 200,margin:"20px" }}></img>
          </td>

        </tr>
        <tr>

          <td>
            <h1 style={{fontSize:"20px"}}>kingfisher - martin-pecheur</h1>
            <img src={img16} alt="kingfisher" style={{ width: 200, height: 200,margin:"20px"}}></img>
          </td>

          <td>
            <h1 style={{fontSize:"20px"}}>owl - hibou or chouette</h1>
            <img src={img17} alt="owl" style={{ width: 200, height: 200,margin:"20px"}}></img>
          </td>

          <td>
            <h1 style={{fontSize:"20px"}}>swans - cygnes</h1>
            <img src={img18} alt="swans" style={{ width: 200, height: 200,margin:"20px"}}></img>
          </td>

        </tr>


      </table>


    </div>
  );
};

export default FrenchLesson6;