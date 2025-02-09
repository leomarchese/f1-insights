import RouterProvider from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import { RoutesUrls } from './routes/routes.type';

function App() {
  return (
    <BrowserRouter basename={RoutesUrls.HOME}>
      <div className="p-4">
        <RouterProvider />
      </div>
    </BrowserRouter>
  );
}

export default App;
