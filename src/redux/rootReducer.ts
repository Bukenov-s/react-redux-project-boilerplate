import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import thingsReducer from './things/reducers';
// import moduleNameReducer from './module_folder_name/reducers';

const thingsPersistConfig = {
  key: 'auth',
  storage,
};

const rootReducer = (history: ReturnType<typeof createBrowserHistory>) =>
  combineReducers({
    things: persistReducer(thingsPersistConfig, thingsReducer),
    // moduleName: moduleNameReducer,
    router: connectRouter(history),
  });

export default rootReducer;
