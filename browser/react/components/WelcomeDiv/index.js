import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import WelcomeText from '../WelcomeText';

const WelcomeDiv = ({
  welcomeText,
  isInitialized,
  handleSubmit
}) => (
  <div style={styles.container}>
    <WelcomeText
      handleSubmit={handleSubmit}
      welcomeText={welcomeText}
      isInitialized={isInitialized}
    />
  </div>
);

WelcomeDiv.defaultProps = {
  handleSubmit: () => {
    console.log('Still fetching dispatch from server...');
  }
};

WelcomeDiv.propTypes = {
  welcomeText: PropTypes.string,
  handleSubmit: PropTypes.func,
  isInitialized: PropTypes.bool
};

export default WelcomeDiv;
