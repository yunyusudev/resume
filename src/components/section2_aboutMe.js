import { isWebpSupported } from 'react-image-webp/dist/utils';
import { Picture } from 'react-responsive-picture';

import rebecca_w_max from "../image/rebecca-w-blg.webp"
import rebecca_w_lg from "../image/rebecca-w-lg.webp"
import rebecca_p_max from "../image/rebecca-p-blg.png"
import rebecca_p_lg from "../image/rebecca-p-lg.png"

// import file from "../file/RebeccaResume.pdf"
import DownloadIcon from "./s2_downloadIcon"
import ClickBtn from "./c_clickBtn"
import goScrollTo from "../hooks/goScrollTo"

function AboutMe() {
    const handleScroll = (goToElement) => {
        goScrollTo(goToElement)
    }
    return <>
        <h2 className="title">About Me </h2>
        <figure>
                <div className="imgCardContainer">
                    <div className="imgCard">
                        {isWebpSupported() ? (
                            <div className="beccaPhoto" >
                                <Picture
                                    sources={[
                                        {
                                            srcSet: rebecca_w_lg,
                                            media: "(max-width: 767.98px)",
                                            type: "image/webp",
                                        },
                                        {
                                            srcSet: rebecca_w_max,
                                            type: "image/webp",
                                        }
                                    ]}
                                    alt="rebeccaPhoto"
                                />
                            </div>) : (<div className="beccaPhoto" >
                                <Picture
                                    sources={[
                                        {
                                            srcSet: rebecca_p_lg,
                                            media: "(max-width: 767.98px)",
                                        },
                                        {
                                            srcSet: rebecca_p_max,
                                        }
                                    ]}
                                    alt="rebeccaPhoto"
                                /></div>)}
                        <svg className='photoCircle' version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="289px" height="347.4px" viewBox="0 0 289 347.4">
                            <defs>
                                <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-54.7839" y1="210.6858" x2="108.7076" y2="210.6858" gradientTransform="matrix(0.7071 -0.7071 0.7071 0.7071 -86.2966 135.7406)">
                                    <stop offset="0" stopColor="#E89E89" />
                                    <stop offset="1" stopColor="#DF8A95" />
                                    <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="150.1301" y1="117.7502" x2="282.3356" y2="117.7502" gradientTransform="matrix(0.7071 -0.7071 0.7071 0.7071 -86.2966 135.7406)">
                                        <stop offset="0" stopColor="#E89E89" />
                                        <stop offset="1" stopColor="#DF8A95" />
                                    </linearGradient>
                                    <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="241.7261" y1="223.2045" x2="296.1939" y2="223.2045" gradientTransform="matrix(0.7071 -0.7071 0.7071 0.7071 -86.2966 135.7406)">
                                        <stop offset="0" stopColor="#E89E89" />
                                        <stop offset="1" stopColor="#DF8A95" />
                                    </linearGradient>
                                </linearGradient>
                            </defs>
                            <g>
                                <circle fill={`url(#${"SVGID_1_"})`} className='dot1' cx="81.7" cy="265.7" r="81.7" />
                                <circle fill={`url(#${"SVGID_2_"})`} className='dot2' cy="66.1"  cx="149.9" r="66.1" />
                                <circle fill={`url(#${"SVGID_3_"})`} className='dot3' cx="261.7" cy="103.4" r="27.2" />
                            </g>
                        </svg>
                    </div>
                </div>
            <figcaption>
                <h2 className="hello">Hello,I'm Rebecca! </h2>
                <p>擁有邏輯脈絡性思維的理性，同時具有想像力及探索未知的感性；喜歡傳遞生活中的美好。</p>
                <ul className="btnList">
                    <li onClick={() => handleScroll('#Skills')}><ClickBtn txt="Skills" /></li>
                    <li onClick={() => handleScroll('#Portfolio')}><ClickBtn txt="Portfolio" /></li>
                    <li onClick={() => handleScroll('#Experiences')}><ClickBtn txt="Experiences" /></li>
                </ul>
            </figcaption>
        </figure>
        <div className="pointTo">☟</div>
        <a href={`https://reurl.cc/x1bqO1`} target="_blank"  rel="noreferrer" className="downloadBtn" >
        {/* <a href={file} className="downloadBtn" download="RebeccaSu_resume.pdf"> */}
        <span className="xxsHidden">Click to </span>Download <span className="sHidden">RebeccaSu's </span>Resume<span className="fixHeight">'</span>
            <DownloadIcon />
        </a>
    </>
}


export default AboutMe;