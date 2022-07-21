import "./Btn.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Btn = () =>{
    return(
       <Link to="/start" className="btno">
          إبدأ الآن
             <FontAwesomeIcon className="ic" icon={faAngleLeft}/>
         
       </Link> 
    )
}
export default Btn;