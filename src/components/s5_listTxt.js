function ListTxt({ year, content, detail, bgStyle }) {
    const detailArry = detail.map((item, i) => {
        return (
            <li key={i} className="ListDetailitem">{item}</li>
        )
    })
    return (<>
        <div className="ListTxt">
            <p className="ListYear">{year}</p>
            <div className="ListContent" ><span className="ListContentTitle" style={bgStyle}>{content}</span>
                <ul className="ListDetail">{detailArry}</ul>
            </div>
        </div>
    </>)
}
export default ListTxt;


