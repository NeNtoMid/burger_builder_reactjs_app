import React, { useEffect } from 'react';

import { Redirect } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { logoutUser, deleteAllOrders } from './../../../store/actions/index';

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutUser());

    return () => {
      dispatch(deleteAllOrders());
    };
  }, [dispatch]);
  return <Redirect to='/' />;
};

export default Logout;
