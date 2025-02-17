import Navbar from './components/navbar.component';
import RouterProvider from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './config/queryClient';

function App() {
  return (
    <BrowserRouter basename="/f1-insights">
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
