import Routers from './Routes/Routers';
import UserContextProvider from './Context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <Routers/>
    </UserContextProvider>
  );
}

export default App;
