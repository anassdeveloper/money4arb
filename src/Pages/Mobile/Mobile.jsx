import data from "./Data";
import CardList from "./CardList";
import Card from "./Card";
import "./Mobile.scss";
import { useState } from "react";

const Mobile = () => {

    const [article, setarticle] = useState(false);

    const onSbt = () => {
        setarticle(true);
    }

    return(
        <div className="mobile">
            <main>
                { article ? null : <CardList database = {data} fn = {onSbt} />}
            </main>
        </div>
    )
}
export default Mobile;