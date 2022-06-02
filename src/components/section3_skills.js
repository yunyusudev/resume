import Card3D from "./c_card3D"

function Skills() {
    let cells = [];
    let skill_items = [];
    // let skill_names = ["網站視覺設計", "網頁前端功能", "網站後端串接", "商業設計領域"];
    let skill_names = ["Web Design", "Front-end", "Back-end", "Commercial Design"];

    for (let i = 0; i < skill_names.length; i++) {
        let items = []
        switch (skill_names[i]) {
            // case "網站視覺設計":
            case "Web Design":
                skill_items = ["Html5", "Css3", "Scss", "Rwd", "Bootstrap5", "AdobeXD", "Figma", "Dreamweaver"];
                break;
            case "Front-end":
                // case "網頁前端功能":
                skill_items = ["JavaScript", "Ajax", "jQuery", "Webpack", "React", "Redux", "SourceTree", "Github"];
                break;
            case "Back-end":
                // case "網站後端串接":
                skill_items = ["Php7", "MySQL"];
                break;
            case "Commercial Design":
                // case "商業設計領域":
                skill_items = ["VI Design", "Package", "Graphic", "Mascot", "MICE"];
                break;
            default:
        }
        for (let i = 0; i < skill_items.length; i++) {
            items.push(<li key={i} className="skillItem">{skill_items[i]}</li>)
        }
        cells.push(<Card3D key={i} ><li className="skillName">{skill_names[i]}<ul className="skillItemList">{items}</ul></li></Card3D>);
    }
    return (
        <>
            <h2 className="title" >Skills</h2>
            <ul className="skillList">{cells}
            </ul>
        </>
    )
}



export default Skills;