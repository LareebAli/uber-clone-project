import { createContext, useState } from "react";

// Create the context
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // Use useState inside the component
  const [user, setUser] = useState({
    email: "",
    fullName: {
      firstName: "",
      lastName: "",
    },
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
