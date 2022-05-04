import { useState, useEffect, useRef, useCallback } from 'react';
import { useContext } from 'react';
import { canvasContainer } from './section1';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import { Picture } from 'react-responsive-picture';

import banner02_w_max from "../image/index02-w-blg.webp"
import banner02_w_lg from "../image/index02-w-lg.webp"
import banner02_w_sm from "../image/index02-w-sm.webp"
import banner02_w_s from "../image/index02-w-s.webp"
import banner02_w_xs from "../image/index02-w-xs.webp"
import banner02_j_max from "../image/index02-j-blg.jpg"
import banner02_j_lg from "../image/index02-j-lg.jpg"
import banner02_j_sm from "../image/index02-j-sm.jpg"
import banner02_j_s from "../image/index02-j-s.jpg"
import banner02_j_xs from "../image/index02-j-xs.jpg"

import IndexFinger from './s1_indexFinger.js';


function Scratch() {
  const [canvasClear, setCanvasClear] = useState(false);
  const [fixCancasFlickerState, setFixCancasFlickerState] = useState(false);
  const canvasRef = useRef();
  const lastPositionRef = useRef({ x: null, y: null });
  const drawSizeRef = useRef();

  const canvasContainerInfo = useContext(canvasContainer);
  const width = canvasContainerInfo.canvaWidth;
  const height = canvasContainerInfo.canvaHeight;

  function queryMatchMedia() {
    const blg = window.matchMedia("(max-width: 1365.98px)");
    const lg = window.matchMedia("(max-width:  1199.98px)");
    const md = window.matchMedia("(max-width: 991.98px)");
    const sm = window.matchMedia("(max-width: 767.98px))");
    const s = window.matchMedia("(max-width: 575.98px)");
    const xs = window.matchMedia("(max-width:  479.98px)");
    const xxs = window.matchMedia("(max-width: 374.98px)");
    if (xxs.matches) {
      return { drawSize: 50, canvasSrc: banner02_j_xs };
    } else if (xs.matches) {
      return { drawSize: 70, canvasSrc: banner02_j_xs };
    } else if (s.matches) {
      return { drawSize: 80, canvasSrc: banner02_j_s };
    } else if (sm.matches) {
      return { drawSize: 100, canvasSrc: banner02_j_sm };
    } else if (md.matches) {
      return { drawSize: 120, canvasSrc: banner02_j_lg };
    } else if (lg.matches) {
      return { drawSize: 115, canvasSrc: banner02_j_lg };
    } else if (blg.matches) {
      return { drawSize: 120, canvasSrc: banner02_j_lg };
    } else {
      return { drawSize: 180, canvasSrc: banner02_w_max };
    };
  }

  const basicInfo = useCallback(draw => {
    const drawCanvas = draw.getContext('2d')
    const img = canvasRef.current.nextSibling.lastChild;
    img.onload = function () {
      drawCanvas.drawImage(img, 0, 0, width, height);
    }
    img.src = queryMatchMedia().canvasSrc;
  }, [height, width]);

  // 以座標位置去計算繪製筆刷的起始點（非中心點）
  const getBrushPos = useCallback((xRef, yRef) => {
    const draw = canvasRef.current;
    const drawRect = draw.getBoundingClientRect();
    return {
      x: Math.floor(xRef - drawRect.left),
      y: Math.floor(yRef - drawRect.top)
    };
  }, []);
  // 取得滑鼠座標後，繪製自製游標設定與位置
  const drawDot = useCallback((mouseX, mouseY) => {
    // if (mouseIn) {
    const draw = canvasRef.current;
    const drawCanvas = draw.getContext('2d');
    drawCanvas.beginPath();
    drawCanvas.lineWidth = drawSizeRef.current;
    drawCanvas.lineJoin = 'round';
    drawCanvas.moveTo(lastPositionRef.current.x, lastPositionRef.current.y);
    drawCanvas.lineTo(mouseX, mouseY);
    drawCanvas.closePath();
    drawCanvas.globalCompositeOperation = "destination-out";
    drawCanvas.stroke();
    lastPositionRef.current = {
      x: mouseX,
      y: mouseY
    }
    // }
  }, []);

  // 取得已刷比例並在一定比例清除
  const getCanvaScratchedPercent = useCallback((e) => {
    if (width !== null) {
      const clearAllPercent = e;
      const draw = canvasRef.current;
      const drawCanvas = draw.getContext('2d');
      const imgData = drawCanvas.getImageData(0, 0, width, height);
      const pixels = imgData.data;
      const transPixels = [];
      for (var i = 0; i < pixels.length; i += 4) {
        // 每個像素的透明度(RGBA中的Alpha)等於零時推到陣列中儲存(代表已經塗掉)
        if (pixels[i + 3] === 0) {
          transPixels.push(pixels[i + 3]);
        }
      }
      // 目前已經塗掉的百分比 = 已經塗掉素長度 / 總共像素長度
      const scratchedPercent = transPixels.length / (pixels.length / 4) * 100
      if (scratchedPercent > clearAllPercent) {
        setCanvasClear(true);
      }
    }

  }, [height, width]);

  const handleMouseDown = useCallback(e => {
    setFixCancasFlickerState(false);
    var brushPos = getBrushPos(e.clientX, e.clientY);
    lastPositionRef.current = {
      x: brushPos.x,
      y: brushPos.y
    }
  }, [getBrushPos]);

  const handleMouseMove = useCallback(e => {
    setFixCancasFlickerState(false);
    var brushPos = getBrushPos(e.clientX, e.clientY);
    if (!lastPositionRef.current.x) {
      lastPositionRef.current = {
        x: brushPos.x,
        y: brushPos.y
      }
    }
    drawDot(brushPos.x, brushPos.y);
    getCanvaScratchedPercent(95);
  }, [getBrushPos, drawDot, getCanvaScratchedPercent]);

  const handleTouchStart = useCallback(e => {
    setFixCancasFlickerState(false);
    // e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
      var brushPos = getBrushPos(touch.pageX, touch.pageY);
      lastPositionRef.current = {
        x: brushPos.x,
        y: brushPos.y
      }
    }
  }, [getBrushPos]);

  const handleTouchMove = useCallback(e => {
    setFixCancasFlickerState(false);
    // e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
      var brushPos = getBrushPos(touch.pageX, touch.pageY);
      if (!lastPositionRef.current.x) {
        lastPositionRef.current = {
          x: brushPos.x,
          y: brushPos.y
        }
      }
      drawDot(brushPos.x, brushPos.y);
      // getCanvaScratchedPercent(95);
    }
  }, [drawDot, getBrushPos]);

  const handleResize = useCallback(() => {
    setFixCancasFlickerState(true);
    setCanvasClear(false);
  }, []);

  useEffect(() => {
    drawSizeRef.current = queryMatchMedia().drawSize;
    const draw = canvasRef.current;
    if (draw.getContext) {
      basicInfo(draw);
      var passiveSupported = false;
      try {
        var options = Object.defineProperty({}, "passive", {
          get: function () {
           return passiveSupported = true;
          }
        });
        window.addEventListener("test", null, options);
      } catch (err) { }
      draw.addEventListener("mouseenter", handleMouseDown);
      draw.addEventListener("mousedown", handleMouseDown);
      draw.addEventListener("mousemove", handleMouseMove);
      draw.addEventListener("touchstart", handleTouchStart, passiveSupported ? { passive: true } : false);
      draw.addEventListener("touchmove", handleTouchMove, passiveSupported ? { passive: true } : false);
      window.addEventListener("resize", handleResize);
    }
  }, [basicInfo, canvasContainerInfo, handleResize, handleMouseDown, handleMouseMove, handleTouchStart, handleTouchMove])

  return (
    <>
      <figure className="bannerUp">
        <canvas className={`canvas${canvasClear ? " canvasHidden" : ""}`} width={width} height={height} ref={canvasRef}></canvas>
        {isWebpSupported() ? (<>
          <Picture
            className={`fixCancasFlickerPic${fixCancasFlickerState ? "" : " hidden"}`}
            sources={[
              {
                srcSet: banner02_w_xs,
                media: "(max-width: 479.98px)",
                type: "image/webp",
              },
              {
                srcSet: banner02_w_s,
                media: "(max-width: 575.98px)",
                type: "image/webp",
              },
              {
                srcSet: banner02_w_sm,
                media: "(max-width: 767.98px)",
                type: "image/webp",
              },
              {
                srcSet: banner02_w_lg,
                media: "(max-width: 767.98px)",
                type: "image/webp",
              },
              {
                srcSet: banner02_w_max,
                type: "image/webp",
              }
            ]}
            alt="banner"

          />
        </>) : (<>
          <Picture
            className={`fixCancasFlickerPic${fixCancasFlickerState ? "" : " hidden"}`}
            sources={[
              {
                srcSet: banner02_j_xs,
                media: "(max-width: 479.98px)",
              },
              {
                srcSet: banner02_j_s,
                media: "(max-width: 575.98px)",
              },
              {
                srcSet: banner02_j_sm,
                media: "(max-width: 767.98px)",
              },
              {
                srcSet: banner02_j_lg,
                media: "(max-width: 767.98px)",
              },
              {
                srcSet: banner02_j_max,
              }
            ]}
            alt="banner"
          /></>)}
        <IndexFinger />
      </figure>
    </>
  )
};

export default Scratch;

