import { ThemeProvider } from '@material-ui/core/styles';

import TaskBoard from '../TaskBoard/index';

function App() {
  return (
    <ThemeProvider>
      <TaskBoard />
    </ThemeProvider>
  );
}

export default App;
