import React from 'react';
import PropTypes from 'prop-types';
// import styles from './styles';
import CircularProgress from 'material-ui/CircularProgress';

const initialLoading = ({
  size = 50,
  thickness = 7
}) => (
  <CircularProgress size={size} thickness={thickness} />
);

initialLoading.defaultProps = {
  size: 50,
  thickness: 7
};

initialLoading.propTypes = {
  size: PropTypes.number,
  thickness: PropTypes.number
};

export default initialLoading;