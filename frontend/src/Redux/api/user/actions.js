import { CALL_API } from 'redux-api-middleware';

export const fetchUser = data => ({
  [CALL_API]: {
    types: ['FETCH_USER', 'FETCH_USER_SUCCESS', 'FETCH_USER_FAILURE'],
    endpoint: `${process.env.REACT_APP_SERVER_END_POINT}/login`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  },
});

export const addUser = data => ({
  [CALL_API]: {
    types: ['ADD_USER', 'ADD_USER_SUCCESS', 'ADD_USER_FAILURE'],
    endpoint: `${process.env.REACT_APP_SERVER_END_POINT}/signup`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  },
});

export const addUserWithSocialAccount = data => ({
  [CALL_API]: {
    types: [
      'ADD_USER_WITH_SOCIAL',
      'ADD_USER_WITH_SOCIAL_SUCCESS',
      'ADD_USER_WITH_SOCIAL_FAILURE',
    ],
    endpoint: `${
      process.env.REACT_APP_SERVER_END_POINT
    }/signupWithSocialAccount`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  },
});

export const verifyToken = () => ({
  [CALL_API]: {
    types: ['VERIFY_TOKEN', 'VERIFY_TOKEN_SUCCESS', 'VERIFY_TOKEN_FAILURE'],
    endpoint: `${process.env.REACT_APP_SERVER_END_POINT}/verifyToken`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: localStorage.getItem('token') }),
  },
});

export const logout = () => ({
  type: 'LOGOUT_REQUEST',
});
