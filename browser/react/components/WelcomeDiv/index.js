import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import WelcomeText from '../WelcomeText';
import TheTable from '../TheTable';

const WelcomeDiv = ({
  welcomeText,
  isInitialized,
  dataList,
  handleSubmit,
  checkABox,
  updateCount
}) => (
  <div style={styles.container}>
    <WelcomeText
      handleSubmit={handleSubmit}
      welcomeText={welcomeText}
      isInitialized={isInitialized}
    />
    <div style={{height: '1em'}} />
    <TheTable
      dataList={dataList}
      checkABox={checkABox}
      updateCount={updateCount}
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
  isInitialized: PropTypes.bool,
  dataList: PropTypes.object,
  checkABox: PropTypes.func,
  updateCount: PropTypes.number
};

export default WelcomeDiv;
