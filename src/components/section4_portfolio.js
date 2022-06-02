import { isWebpSupported } from 'react-image-webp/dist/utils';
import { Picture } from 'react-responsive-picture';
import ClickBtn from "./c_clickBtn"
import portfolioData from "./s4_portfolioData"

function Project(props) {
    let items=props.txt;
    console.log(items);
    // let projectTxtArry =[2,3,4];
    let projectTxtArry = items.map((i) =>
        <div className='projectTxtItem' key={i.item}>{i.item}</div>
        // console.log(i)
    );
    console.log(props.txt);
    return (
        <figure className="projectCard">
            <span className="projectContent">
                <div className="projectPhotoCon">
                    {isWebpSupported() ? (<>
                        <Picture
                            sources={props.file1Webp}
                            alt="banner"
                            className="projectPhoto1"
                        />
                        <Picture
                            sources={props.file2Webp}
                            alt="banner"
                            className="projectPhoto2"
                        />
                    </>) : (<>
                        <Picture
                            sources={props.file1Jpg}
                            alt="banner"
                            className="projectPhoto1"
                        />
                        <Picture
                            sources={props.file2Jpg}
                            alt="banner"
                            className="projectPhoto2"
                        />
                    </>)}
                </div>
                <figcaption className="projectInfo">
                    <hr className="lineTop" />
                    <p className="projectType">{props.type}</p>
                    <p className="projectTitle">{props.title}</p>
                    <p className="projectTxt">{projectTxtArry}</p>
                    <a href={props.link} target="_blank" rel="noopener noreferrer">
                        <ClickBtn txt="View" />
                    </a>
                    {props.title ==="家居品牌前台官網"? (<a href="https://reurl.cc/k11oLb" target="_blank" rel="noopener noreferrer" className="liferoomLink"><ClickBtn txt="系統文件" /></a>):""}
                    <hr className="lineBottom" />
                </figcaption>
            </span>
        </figure>
    )
}

function Portfolio() {
    let cardArray = portfolioData.map((o) =>
        <Project key={o.title} type={o.type} title={o.title} txt={o.txt} link={o.link} file1Webp={o.file1Webp} file2Webp={o.file2Webp} file1Jpg={o.file1Jpg} file2Jpg={o.file2Jpg} />

    );
    return (
        <>
            <h2 className="title">Portfolio</h2>
            <div className="portfolioContent">{cardArray}</div>
        </>
    )
}
export default Portfolio;