import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Slider from 'rc-slider';
import Checkbox from 'components/_shared/Checkbox/Checkbox';

import {
  durationFilter,
  durationFilterSlider,
  durationFilterSliderActive,
} from './DurationFilter.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import pointsSelectors from 'ducks/points/selectors';
import pointsActions from 'ducks/points/actions';

const DurationFilter = ({
  duration,
  setDuration,
  times,
  checked,
  setChecked,
}) => {
  // const dispatch = useDispatch();
  // const times = [10, 15, 30, 45, 60];
  // const [checked, setChecked] = useState(false);
  // const [duration, setDuration] = useState(times[0]);
  // const points = useSelector(state => pointsSelectors.getPoints(state));
  // const checked = useSelector(state =>
  //   pointsSelectors.getUseDurationFilter(state),
  // );

  const handleChange = value => {
    setDuration(times[value]);
  };

  // useEffect(() => {
  //   if (checked) {
  //     handleFilter();
  //   } else {
  //     dispatch(pointsActions.setFilteredPoints(points));
  //   }
  // }, [checked, dispatch, handleFilter, points]);

  // const handleFilter = useCallback(() => {
  //   const filterPoints = points.filter(
  //     ({ duration: pointDuration }) => pointDuration <= duration,
  //   );

  //   dispatch(pointsActions.setFilteredPoints(filterPoints));
  // });

  // useEffect(() => {
  //   handleFilter();
  // }, [duration, handleFilter]);

  const sliderClasses = classNames({
    [`${durationFilterSlider}`]: true,
    [`${durationFilterSliderActive}`]: checked,
  });

  // const setChecked = value => {
  //   dispatch(pointsActions.setUseDuration(value));
  // };

  return (
    <div className={durationFilter}>
      <Checkbox
        onChange={setChecked}
        label="Hide data less than duration"
        id="durationFilter"
        align="left"
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
