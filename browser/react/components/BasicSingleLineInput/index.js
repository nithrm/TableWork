import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import styles from './styles';

const BasicSingleLineInput = ({
  handleSubmit
}) => (
  <div style={styles.container}>
    <form type='submit' onSubmit={handleSubmit}>
      <TextField hintText={'Would you like a different welcome text?'} underlineShow={false} name={'textField'} autoComplete={'off'} />
    </form>
  </div>
);

BasicSingleLineInput.defaultProps = {
  handleSubmit: () => {
    console.log('Still fetching dispatch from server...');
  }
};

BasicSingleLineInput.propTypes = {
  handleSubmit: PropTypes.func
};

export default BasicSingleLineInput;
