import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { notificationWrapper } from './Notification.module.scss';
import applicationSelectors from 'ducks/application/selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTimes } from '@fortawesome/pro-solid-svg-icons';
import applicationActions from 'ducks/application/actions';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.minimal.css';

const Notifications = () => {
  const dispatch = useDispatch();
  const notification = useSelector(state =>
    applicationSelectors.getNotification(state),
  );

  useEffect(() => {
    if (notification) {
      const { title = '', text = '' } = notification;

      toast(`${title} ${text}`, {
        className: notificationWrapper,
        onClose: () => dispatch(applicationActions.removeNotification()),
      });
    }
  }, [notification]);

  return (
    <ToastContainer
      position="bottom-right"
      hideProgressBar={true}
      newestOnTop={false}
      autoClose={2000}
      closeOnClick
      closeButton={CloseNotification}
    />
  );
};

export const CloseNotification = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(applicationActions.removeNotification());
      }}
    >
      <FontAwesomeIcon icon={faTimes} />
    </button>
  );
};

export default Notifications;
