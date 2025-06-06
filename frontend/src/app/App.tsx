import { WidgetAuth } from '../widgets/auth';
import { WidgetBag } from '../widgets/bag';
import { AppProvider } from './providers';
import { AppRouter } from './router';
import './styles/app.scss';

function App() {
  return (
    <AppProvider>
      <WidgetAuth />
      <WidgetBag />
      <AppRouter />
    </AppProvider>
  );
}

export default App;
