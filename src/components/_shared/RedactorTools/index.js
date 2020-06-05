import React from 'react';

import RedactorToolsHeader from 'components/_shared/RedactorTools/Header';
import DateSelector from 'components/_shared/RedactorTools/DateSelector';
import FilterData from 'components/_shared/RedactorTools/FilterData';
import DurationFilter from 'components/_shared/RedactorTools/FilterData/DurationFilter';
import TravellingFilter from 'components/_shared/RedactorTools/FilterData/TravellingFilter';
import SelectedDataList from 'components/_shared/SelectedData';
import casesSelectors from 'ducks/cases/selectors';
import { useSelector } from 'react-redux';
import pointsSelectors from '../../../ducks/points/selectors';

const RedactorTools = () => {
  const activeCase = useSelector(state => casesSelectors.getActiveCase(state));
  const dates = useSelector(state => pointsSelectors.getPointsDates(state));

  return (
    <>
      <RedactorToolsHeader />
      <>
        <DateSelector dates={dates} />
        <FilterData>
          <DurationFilter />
          <TravellingFilter />
        </FilterData>
      </>
      <SelectedDataList items={activeCase?.points} />
    </>
  );
};

export default RedactorTools;
