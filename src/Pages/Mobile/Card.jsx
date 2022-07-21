import { faEye, faBook} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

const Card = ({id,url,name, title, text, link,fn}) =>{
    return(
        <div className="mcontent_card" key={id} onClick = {fn}>
             <div className="mcontent_card_head">
             <img src={url} alt="log"/>
             <span>{ name}</span>
             </div>
             <h3>{title}</h3>
             <p>{text}</p>
             <div className="mcontent_card_links">
                <a href="">
                <span>
                تحميل
                </span><FontAwesomeIcon icon={faEye} /></a>
                <Link to="" >
                    <span>اقرأ المزيد</span>
                    <FontAwesomeIcon icon={faBook} />
                </Link>
             </div>
        </div>
    )
}

export default Card;