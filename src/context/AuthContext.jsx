import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    // Simulating different users (replace with real authentication logic)
    const mockUsers = [
      {
        id: "1",
        name: "John Doe",
        email: "user@example.com",
        role: "user",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
        password: "12345678",
      },
      {
        id: "2",
        name: "Admin User",
        email: "admin@example.com",
        role: "admin",
        avatar:
          "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop",
        password: "12345678",
      },
      // Adding the new admin user
      {
        id: "3",
        name: "Vijay Negi",
        email: "negijay700@gmail.com",
        role: "admin",
        avatar:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
        password: "12345678", // Adding password field for validation
      },
    ];

    // Find a mock user by email
    const user = mockUsers.find((u) => u.email === email);

    if (user && (!user.password || user.password === password)) {
      setUser(user); // Set user if found and password is correct
    } else {
      alert("Invalid email or password");
    }
  };

  const logout = () => {
    setUser(null); // Clear the user on logout
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
