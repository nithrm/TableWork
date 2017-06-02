import FakeData from '../helpers/FakeData';

// I prefer having a hardcoded initial state so we can have an idea of what it looks like.
const initialState = {
  welcomeText: 'Welcome to Meme Magic.',
  isInitialized: false,
  dataList: new FakeData(2000),
  updateCount: 0
};

export default initialState;
