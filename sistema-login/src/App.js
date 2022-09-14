import React from 'react'
import RoutesApp from './routes';
import GlobalStyle from './styles/global'
import { AuthProvider } from './contexts/authGoogle';


const App = () => {
  return (
    <AuthProvider>
    <RoutesApp />
    <GlobalStyle />
    </AuthProvider>
  );
};

export default App;