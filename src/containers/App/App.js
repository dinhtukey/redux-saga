import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from '../../redux/store';

import TaskBoard from '../TaskBoard/index';

function App() {
  return (
    <Provider store={store}>
    <ThemeProvider>
      <TaskBoard />
    </ThemeProvider>
    </Provider>
  );
}

export default App;
