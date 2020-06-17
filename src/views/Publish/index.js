import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import applicationSelectors from 'ducks/application/selectors';
import applicationActions from 'ducks/application/actions';
import PublishToolActions from 'views/Publish/Actions/ToolActions';
import PublishLoadActions from 'views/Publish/Actions/LoadActions';

import { publish } from './Publish.module.scss';

import Map from 'components/_shared/Map';
import RedactorTools from 'components/_shared/RedactorTools';
import SidebarWrapper from 'components/_shared/Sidebar/SidebarWrapper';
import SidebarHeader from 'components/_shared/Sidebar/SidebarHeader';
import RecordsTable from 'components/_shared/RecordsTable';
import PublishData from 'views/Publish/PublishData';
import ErrorBoundary from 'components/_global/errorBoundary';
import { useLastLocation } from 'react-router-last-location';

const Publish = ({ record }) => {
  const { pathname } = useLastLocation();
  const dispatch = useDispatch();
  const renderEditor = useSelector(state =>
    applicationSelectors.getRenderEditor(state),
  );
  const appStatus = useSelector(state => applicationSelectors.getStatus(state));
  const appMode = useSelector(state => applicationSelectors.getMode(state));
  useEffect(() => {
    if (!pathname.includes('settings')) {
      dispatch({
        type: 'RESET_VIEW',
      });
    }
  }, [pathname]);

  useEffect(() => {
    dispatch(applicationActions.setMode('publish'));
  }, [appMode, dispatch]);

  return (
    <>
      <div className={publish}>
        <SidebarWrapper>
          {renderEditor ? (
            <>
              <RedactorTools />
              <PublishToolActions />
            </>
          ) : (
            <>
              <SidebarHeader
                title="Publish Data"
                copy="Review and edit patient location data before publishing to your health authority subscribers."
              />
              <PublishLoadActions />
            </>
          )}
        </SidebarWrapper>
        <ErrorBoundary>
          <Map />
        </ErrorBoundary>
      </div>
      {appStatus === 'SUBMIT FOR PUBLISHING' && <PublishData />}
      {appStatus === 'CASES ADDED' && <RecordsTable />}
    </>
  );
};

export default Publish;
