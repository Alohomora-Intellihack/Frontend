import React from 'react';
import { UserContext } from './UserContext';

const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = React.useState('');
  
  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
