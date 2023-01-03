import ListTxt from "./s5_listTxt"
import experiencesData from "./s5_experiencesData"

function ListComponents(props) {


    const {listtitle,listtxt} = props.expArrary;
    const bgStyle = {
        backgroundColor: `${listtitle === "Education" ? "#fff" : ""}`
    }


    const listArrary = listtxt.map((item, i) => {
        return (
            <ListTxt year={item.year} content={item.content} detail={item.detail} key={i} bgStyle={bgStyle} />
        )
    })


    return (
        <div className="ListContainer" style={{marginTop:'3rem',marginBottom:'3rem',borderBottom: `${listtitle!=='Education'?'0.75px solid #c4c4c4':'none'}`}}>
            <p className="ListTitle" style={{marginBottom:'3rem'}} >{listtitle}</p>
        {/* <div className="ListContainer" style={{marginTop:'3rem',marginBottom:'3rem',borderBottom: '0.75px solid #c4c4c4'}}>
            <p className="ListTitle" style={{marginBottom:'3rem'}} >{propsArrary.listtitle}</p> */}

                {listArrary}

        </div>
    )
}


function Experiences() {

    const expArrary = experiencesData.map((item, i) => {
        return (
            <ListComponents expArrary={item} key={i} />
        )
    }).reverse();


    return (<>
        {/* <section className="section4" id="Contact"> */}
        <h2 className="title">Experiences</h2>
        <div className="ExpContainer">
            {expArrary}
        </div>
    </>)
}




export default Experiences;