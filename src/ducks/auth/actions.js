import authTypes from './types';

const { onboarding, login } = authTypes;

const authActions = {
  logout: () => ({
    type: login.LOGOUT,
  }),
  loginRequest: data => ({
    type: login.REQUEST,
    data,
  }),
  loginSuccess: data => ({
    type: login.SUCCESS,
    data,
  }),
  loginFailure: error => ({
    type: login.FAILURE,
    error,
  }),
  onboardingRequest: data => ({
    type: onboarding.REQUEST,
    data,
  }),
  onboardingSuccess: data => ({
    type: onboarding.SUCCESS,
    data,
  }),
  onboardingFailure: error => ({
    type: onboarding.FAILURE,
    error,
  }),
};

export default authActions;
