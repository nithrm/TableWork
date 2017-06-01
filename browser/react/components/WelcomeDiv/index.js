import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import WelcomeText from '../WelcomeText';
import TheTable from '../TheTable';

const WelcomeDiv = ({
  welcomeText,
  handleSubmit,
  isInitialized
}) => (
  <div style={styles.container}>
    <WelcomeText
      handleSubmit={handleSubmit}
      welcomeText={welcomeText}
      isInitialized={isInitialized}
    />
    <TheTable />
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
