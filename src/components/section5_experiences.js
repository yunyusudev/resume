import ListTxt from "./s5_listTxt"
import experiencesData from "./s5_experiencesData"

function ListComponents(props) {
    const propsArrary = props.expArrary;
    const bgStyle = {
        backgroundColor: `${propsArrary.listtitle === "Education" ? "#fff" : ""}`
    }
    const listArrary = propsArrary.listtxt.map((item, i) => {
        return (
            <ListTxt year={item.year} content={item.content} detail={item.detail} key={i} bgStyle={bgStyle} />
        )
    })
    return (<>
        <div className="ListContainer">
            <p className="ListTitle" >{propsArrary.listtitle}</p>
            <div>
                {listArrary}
            </div>
        </div>
    </>)
}

function Experiences() {
    const expArrary = experiencesData.map((item, i) => {
        return (
            <ListComponents expArrary={item} key={i} />
        )
    }).reverse();
    return (<>
        <h2 className="title">Experiences</h2>
        <div className="expContainer">
            {expArrary}
        </div>
    </>)
}




export default Experiences;