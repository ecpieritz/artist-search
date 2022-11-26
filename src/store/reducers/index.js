import { combineReducers} from 'redux';
import search from './searchRD';
import startVideo from './startvideoRD';

const getReducers = combineReducers({
  search, startVideo
});

export default getReducers;