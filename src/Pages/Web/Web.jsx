import data from "./data";
import CardList from "../Mobile/CardList";
import "./Web.scss";


const Web = () => {
    return(
        <div className="Web py-5">
            <CardList database={data}/>
        
        </div>
    )
}
export default Web;