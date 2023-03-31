import { StoreProvider } from './store/Store';
import router from './routes/routes';
import { RouterProvider } from 'react-router-dom';


function App() {
  return (
    <StoreProvider>
      <RouterProvider router={router}>
        

      </RouterProvider>      
    </StoreProvider>
  );
}

export default App;