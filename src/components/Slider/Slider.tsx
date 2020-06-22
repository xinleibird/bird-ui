import cxs from 'classnames';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { prefix } from '../prefix';

interface SliderProps {
  className?: string;
  defaultValue?: number;
  range?: number;
}

const Slider: FunctionComponent<SliderProps> = ({
  className,
  defaultValue = 0,
  range = 100,
}) => {
  const classes = cxs(`${prefix}-slider`, className, {});

  const [trackWidth, setTrackWidth] = useState(`${(defaultValue / 100) * 150}px`);
  const [thumbOffset, setThumbOffset] = useState(`${(defaultValue / 100) * 150 - 8}px`);

  const [inputValue, setInputValue] = useState(defaultValue.toString());

  const thumbClick = useRef(false);
  const thumbRef = useRef(null as any);

  useEffect(() => {
    const mouseMoveHandler = () => {
      return (e: MouseEvent) => {
        if (thumbClick.current) {
          const origin = thumbRef.current.parentElement?.offsetLeft || 0;
          let calOffset = e.pageX - origin;
          if (calOffset < 0) {
            calOffset = 0;
          }
          if (calOffset > 150) {
            calOffset = 150;
          }
          setTrackWidth(`${calOffset}px`);
          setThumbOffset(`${calOffset - 8}px`);

          let calInput = Math.round(((e.clientX - origin) / 150) * (range + 1));
          if (calInput > range) {
            calInput = range;
          }
          if (calInput < 0) {
            calInput = 0;
          }
          setInputValue(`${calInput}`);
        }
      };
    };

    const mouseUpHandler = () => {
      return (e: MouseEvent) => {
        thumbClick.current = false;
      };
    };

    document.addEventListener('mousemove', mouseMoveHandler());
    document.addEventListener('mouseup', mouseUpHandler());
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseMoveHandler);
    };
  }, [range]);

  return (
    <div style={{ display: 'inline-block' }} className={classes}>
      <span className={`${prefix}-slider-group`}>
        <span
          className={`${prefix}-slider-rail-click`}
          style={{ width: '150px' }}
          onClick={(e) => {
            const origin = e.currentTarget.parentElement?.offsetLeft || 0;

            if (e.clientX - origin < 150) {
              let calTrack = e.clientX - origin;

              if (calTrack < 0) {
                calTrack = 0;
              }
              setTrackWidth(`${calTrack}px`);

              let calOffset = e.clientX - origin;
              if (calOffset < 0) {
                calOffset = 0;
              }
              setThumbOffset(`${calOffset - 8}px`);

              let calInput = Math.round(((e.clientX - origin) / 150) * (range + 1));
              if (calInput > range) {
                calInput = range;
              }
              if (calInput < 0) {
                calInput = 0;
              }

              setInputValue(`${calInput}`);
            }
          }}
        />
        <span className={`${prefix}-slider-rail`} style={{ width: '150px' }} />
        <span className={`${prefix}-slider-track`} style={{ width: trackWidth }} />
        <span
          className={`${prefix}-slider-thumb`}
          style={{ left: thumbOffset }}
          ref={(ref) => {
            thumbRef.current = ref;
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            thumbClick.current = true;
          }}
        />
        <input type="hidden" value={inputValue} />
      </span>
      <div className={`${prefix}-slider-marks`}>{inputValue}</div>
    </div>
  );
};

export default Slider;
