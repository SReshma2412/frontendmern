import Axios from "axios";
import {useEffect,useState} from "react";
import UserQuizListRow from './UserQuizListRow';
import {Link} from "react-router-dom";
//http://localhost:3001/quizRoute/
function UserQuizList(){
    const [arr,setArr]=useState([]);
    useEffect(()=>{
        Axios.get("https://crud-backend-intern.onrender.com/quizRoute/")
        .then((res)=>{
            if(res.status===200)
              setArr(res.data);
            else
             Promise.reject();
        })
        .catch((err)=>console.log(err));
    })
    const ListItems=()=>{
        return arr.map((val,ind)=>{
            return <UserQuizListRow obj={val} />
        })
    }
    
    return(
        
        <div>
            <nav className="navbar bg-info">
        <Link to="/" className="navbar-brand mx-3">Attend Quiz</Link>
        <div className="nav">
         
          <Link to="/quizzes" className="nav-link">Logout</Link>
        </div>
      </nav>
            <div class="quiz">
            <form style={{width:"400px",height:"100%",margin:"0 auto",padding:"20px"}}>
               {ListItems()}
               {/* <button>submit</button> */}
            </form>
           
        </div>
        </div>
    //     <table class="table table-bordered table-striped table-success">
    //         <thead>
    //             <tr>
    //                 <th class="text-center">Question</th>
    //                 <th class="text-center">Option1</th>
    //                 <th class="text-center">Option2</th>
    //                 <th class="text-center">Option3</th>
    //                 <th class="text-center">Option4</th>
    //                 <th class="text-center">answer</th>
    //                 <th class="text-center">Action</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {ListItems()}
    //         </tbody>
    //     </table>
    )
}
export default UserQuizList;