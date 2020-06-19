import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Slider from 'rc-slider';

import {
  durationFilter,
  durationFilterSlider,
  durationFilterSliderActive,
} from './DurationFilter.module.scss';
import Checkbox from 'components/_shared/ControlledCheckbox/Checkbox';

const DurationFilter = ({
  duration,
  setDuration,
  times,
  checked,
  setChecked,
}) => {
  const handleChange = value => {
    setDuration(times[value]);
  };

  const sliderClasses = classNames({
    [`${durationFilterSlider}`]: true,
    [`${durationFilterSliderActive}`]: checked,
  });

  return (
    <div className={durationFilter}>
      <Checkbox
        onChange={setChecked}
        label="Hide data less than duration"
        id="durationFilter"
        align="left"
        isChecked={checked}
      />
      <div className={sliderClasses}>
        <Slider
          min={0}
          max={times.length - 1}
          step={1}
          onChange={handleChange}
          disabled={!checked}
        />
        <span>{duration} mins.</span>
      </div>
    </div>
  );
};

DurationFilter.propTypes = {};

export default DurationFilter;
