import { isWebpSupported } from 'react-image-webp/dist/utils';
import { Picture } from 'react-responsive-picture';

import banner01_w_max from "../image/index01-w-blg.webp"
import banner01_w_lg from "../image/index01-w-lg.webp"
import banner01_w_sm from "../image/index01-w-sm.webp"
import banner01_w_s from "../image/index01-w-s.webp"
import banner01_w_xs from "../image/index01-w-xs.webp"
import banner01_j_max from "../image/index01-j-blg.jpg"
import banner01_j_lg from "../image/index01-j-lg.jpg"
import banner01_j_sm from "../image/index01-j-sm.jpg"
import banner01_j_s from "../image/index01-j-s.jpg"
import banner01_j_xs from "../image/index01-j-xs.jpg"
  
import Wipe from './s1_wipe.js';
import React, { useRef, useEffect, useReducer, useCallback } from 'react';
export const canvasContainer = React.createContext();


const initialState = { canvaWidth: null, canvaHeight: null, onloaded: false };
const reducer = (state, action) => {
    switch (action.type) {
        case 'DRAW': return { ...state, canvaWidth: action.width, canvaHeight: action.height, onloaded: action.onloaded};
        default: return state;
    }
};


function Section1() {
    const [sizes, dispatch] = useReducer(reducer, initialState);
    const bannerRef = useRef()

    function reSetBannerSize(banner) {
        const { width, height } = banner.getBoundingClientRect();
        dispatch({ type: 'DRAW', width: width, height: height, onloaded: true });
    }
    const getBannerSizeToSetCanvasSize = useCallback(() => {
        const banner = bannerRef.current;
        const bgBanner = bannerRef.current.firstChild.lastChild;
        if (!bgBanner.complete) {
            bgBanner.onload = function () {
                reSetBannerSize(banner);
            }
        } else {
            reSetBannerSize(banner);
        }
    }, []);

    useEffect(() => {
        getBannerSizeToSetCanvasSize();
        window.addEventListener("resize", getBannerSizeToSetCanvasSize);
    }, [getBannerSizeToSetCanvasSize])

    return <>
        <canvasContainer.Provider value={sizes}>
            <figure className="banner" ref={bannerRef}>
                {isWebpSupported() ? (<>
                    <Picture
                        sources={[
                            {
                                srcSet: banner01_w_xs,
                                media: "(max-width: 479.98px)",
                                type: "image/webp",
                            },
                            {
                                srcSet: banner01_w_s,
                                media: "(max-width: 575.98px)",
                                type: "image/webp",
                            },
                            {
                                srcSet: banner01_w_sm,
                                media: "(max-width: 767.98px)",
                                type: "image/webp",
                            },
                            {
                                srcSet: banner01_w_lg,
                                media: "(max-width: 767.98px)",
                                type: "image/webp",
                            },
                            {
                                srcSet: banner01_w_max,
                                type: "image/webp",
                            }
                        ]}
                        alt="banner"
                    />
                </>) : (<>
                    <Picture
                        sources={[
                            {
                                srcSet: banner01_j_xs,
                                media: "(max-width: 479.98px)",
                            },
                            {
                                srcSet: banner01_j_s,
                                media: "(max-width: 575.98px)",
                            },
                            {
                                srcSet: banner01_j_sm,
                                media: "(max-width: 767.98px)",
                            },
                            {
                                srcSet: banner01_j_lg,
                                media: "(max-width: 767.98px)",
                            },
                            {
                                srcSet: banner01_j_max,
                            }
                        ]}
                        alt="banner"
                    /></>)}
                <Wipe />
            </figure>
        </canvasContainer.Provider>
    </>
}

export default Section1;