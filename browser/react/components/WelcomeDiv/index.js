import React, { Component } from 'react';
import styles from './styles';
import WelcomeText from '../WelcomeText';

export default class WelcomeDiv extends Component {
  render () {
    const { welcomeText, handleSubmit, isInitialized } = this.props;

    return (
      <div style={styles.container}>
        <WelcomeText
          handleSubmit={handleSubmit}
          welcomeText={welcomeText}
          isInitialized={isInitialized}
        />
      </div>
    );
  }
}

WelcomeDiv.defaultProps = {
  handleSubmit: () => {
    console.log('Still fetching dispatch from server...');
  }
};

WelcomeDiv.propTypes = {
  welcomeText: React.PropTypes.string,
  handleSubmit: React.PropTypes.func,
  isInitialized: React.PropTypes.bool,
};
