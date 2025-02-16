import Navbar from './components/navbar.component';
import RouterProvider from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import { RoutesUrls } from './routes/routes.type';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './config/queryClient';

function App() {
  return (
    <BrowserRouter basename={RoutesUrls.HOME}>
      <Navbar />
      <div className="min-h-[--max-view-height]">
        <QueryClientProvider client={queryClient}>
          <RouterProvider />
        </QueryClientProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
