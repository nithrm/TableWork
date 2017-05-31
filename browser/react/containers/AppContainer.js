import WelcomeDiv from '../components/WelcomeDiv';
import { connect } from 'react-redux';
import { changeWelcomeText } from '../../redux/action-creators';

const mapStateToProps = state => ({
  welcomeText: state.get('welcomeText'),
  isInitialized: state.get('isInitialized')
});

// Handles the enter key changing the welcomeText.
const mapDispatchToProps = dispatch => ({
  handleSubmit: (evt) => {
    evt.preventDefault();
    dispatch(changeWelcomeText(evt.target.textField.value));
    evt.target.textField.value = '';
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeDiv);
