import WelcomeDiv from '../components/WelcomeDiv';
import { connect } from 'react-redux';
import {
  changeWelcomeText,
  createCheckedBox
} from '../../redux/action-creators';

const mapStateToProps = state => ({
  welcomeText: state.welcomeText,
  isInitialized: state.isInitialized,
  dataList: state.dataList,
  updateCount: state.updateCount
});

// Handles the enter key changing the welcomeText.
const mapDispatchToProps = dispatch => ({
  handleSubmit: (evt) => {
    evt.preventDefault();
    dispatch(changeWelcomeText(evt.target.textField.value));
    evt.target.textField.value = '';
  },
  checkABox: (rowIndex) => {
    dispatch(createCheckedBox(rowIndex));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeDiv);
