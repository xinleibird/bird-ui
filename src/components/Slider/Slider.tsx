import cxs from 'classnames';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { prefix } from '../prefix';

interface SliderProps {
  className?: string;
  defaultValue?: number;
  width?: number;
  range?: number;
  name?: string;
}

const Slider: FunctionComponent<SliderProps> = ({
  className,
  defaultValue = 0,
  width = 160,
  range = 100,
  name = 'slider',
}) => {
  const classes = cxs(`${prefix}-slider`, className, {});

  const [sliderValue, setSliderValue] = useState({
    trackWidth: `${(defaultValue / range) * width}px`,
    thumbOffset: `${(defaultValue / range) * width - 8}px`,
    inputValue: `${defaultValue}`,
  });

  const thumbClick = useRef(false);
  const thumbRef = useRef(null as any);

  useEffect(() => {
    const mouseMoveHandler = () => {
      return (e: MouseEvent) => {
        if (thumbClick.current) {
          const origin = thumbRef.current.parentElement?.offsetLeft || 0;

          let calTrack = e.pageX - origin;

          if (calTrack > width) {
            calTrack = width;
          }
          if (calTrack < 0) {
            calTrack = 0;
          }

          const calOffset = calTrack - 8;

          let calInput = Math.round(((e.clientX - origin) / width) * (range + 1));
          if (calInput > range) {
            calInput = range;
          }
          if (calInput < 0) {
            calInput = 0;
          }

          setSliderValue({
            trackWidth: `${calTrack}px`,
            thumbOffset: `${calOffset}px`,
            inputValue: `${calInput}`,
          });
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
    document.addEventListener('dragend', mouseUpHandler());
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseMoveHandler);
      document.removeEventListener('dragend', mouseMoveHandler);
    };
  }, [range, width]);

  return (
    <div style={{ display: 'inline-block' }} className={classes}>
      <span className={`${prefix}-slider-group`}>
        <span
          className={`${prefix}-slider-rail-click`}
          style={{ width: `${width}px` }}
          onClick={(e) => {
            const origin = e.currentTarget.parentElement?.offsetLeft || 0;

            if (e.clientX - origin < width && e.clientX - origin >= 0) {
              let calTrack = e.clientX - origin;
              let calOffset = calTrack;
              let calInput = Math.round((calTrack / width) * (range + 1));
              if (calInput > range) {
                calInput = range;
              }
              if (calInput < 0) {
                calInput = 0;
              }

              setSliderValue({
                trackWidth: `${calTrack}px`,
                thumbOffset: `${calOffset - 8}px`,
                inputValue: `${calInput}`,
              });
            }
          }}
        />
        <span className={`${prefix}-slider-rail`} style={{ width: `${width}px` }} />
        <span className={`${prefix}-slider-track`} style={{ width: sliderValue.trackWidth }} />
        <span
          className={`${prefix}-slider-thumb`}
          style={{ left: sliderValue.thumbOffset }}
          ref={(ref) => {
            thumbRef.current = ref;
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            thumbClick.current = true;
          }}
          onDragStart={(e) => {
            e.preventDefault();
            thumbClick.current = true;
          }}
        />
        <input type="hidden" name={name} value={sliderValue.inputValue} />
      </span>
      <div className={`${prefix}-slider-marks`}>{sliderValue.inputValue}</div>
    </div>
  );
};

export default Slider;
