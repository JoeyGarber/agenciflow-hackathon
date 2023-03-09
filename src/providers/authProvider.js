import React, { useState, createContext, useContext } from 'react'

const AuthContext = createContext(null)

const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error("useAuth was used outside of its provider")
  }

  return context
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  // This is how we pass functions via a provider
  const value = {
    user,
    setUser
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, useAuth }