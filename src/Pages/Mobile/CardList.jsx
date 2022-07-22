import Card from "./Card";


const CardList = ({ database , fn}) =>{
    const newData = database.map((el, i) =>{
        return(
            <Card 
                id = {el.i}
                name = {el.name}
                title = {el.title}
                text = {el.text}
                url = {el.url}
                link = {el.link}
                go = {el.go}
                fn = {fn}
            />
        )
    });

    return(
        <div className="mcontent">
          {newData}
        </div>
    )
}
export default CardList;