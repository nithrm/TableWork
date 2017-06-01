import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import BasicSingleLineInput from '../BasicSingleLineInput';
import InitialLoading from '../InitialLoading';

const WelcomeText = ({
    handleSubmit,
    isInitialized,
    welcomeText
}) => (
  <div style={styles.test}>
    {
      isInitialized ? (
        <div>
          <h1> { welcomeText } </h1>
          <BasicSingleLineInput handleSubmit={handleSubmit} />
        </div>) : (
          <InitialLoading />
      )
    }
  </div>
);

WelcomeText.defaultProps = {
  handleSubmit: () => {
    console.log('Still fetching dispatch from server...');
  },
  isInitialized: false,
  welcomeText: ''
};

WelcomeText.propTypes = {
  handleSubmit: PropTypes.func,
  isInitialized: PropTypes.bool,
  welcomeText: PropTypes.string
};

export default WelcomeText;