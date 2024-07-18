import React from "react";

const UserContext = React.createContext() // we can pass default value as an argument in this function

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext