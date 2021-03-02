import React, { useState, useEffect } from "react";
import { 
  SpriteImg, 
  AnimationStep, 
  LastFrame, 
  AnimationSpeed, 
  SpriteW, 
  SpriteH, 
  StyleClass
} from '../../interfaces'

type SpriteProps = SpriteImg & AnimationStep & LastFrame & AnimationSpeed & SpriteW & SpriteH & StyleClass

const SpriteAni: React.FC<SpriteProps>= (props) => {

  const {path, step, lastFrame, speed, width, height, styleClass } = props as SpriteProps
  const [positionNum, setPositionNum] = useState(0);

  useEffect(
    () => {
      const maxNum = lastFrame;
      const diffNum = step;
      let initialNum = 0;
        let newInterval = setInterval(() => {
          if (initialNum < maxNum){
            clearTimeout(newInterval)
            return null
          } else {
            initialNum -= diffNum;
            setPositionNum(initialNum);
          }
        }, speed)
      return () => {
        clearTimeout(newInterval)
      }
    },
    [positionNum] 
  )
    return (
          <div
            id="sprite-animation"
            className={`${styleClass}`}
            style = {{ 
              backgroundImage:`url(${path})`,
              backgroundPosition: `${positionNum}px 0px`,
              backgroundRepeat: 'no-repeat',
              height: `${height}px`,
              width: `${width}px`
              }}
          ></div>
    )
}

export default SpriteAni;