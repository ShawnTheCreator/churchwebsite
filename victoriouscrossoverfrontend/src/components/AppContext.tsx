import React, { createContext, useState, useContext, useEffect } from 'react';

interface AuthContextType {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
  logout: () => void;
  deleteAccount: (email: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(() => {
    // Check localStorage for user data
    const storedUser = localStorage.getItem('user');
    console.log('Initial user state:', storedUser);
    return storedUser;
  });

  // Enhanced logout function with debugging logs
  const logout = () => {
    console.error('FULL LOGOUT PROCESS STARTED');
    console.error('Current localStorage:', {
      user: localStorage.getItem('user'),
      token: localStorage.getItem('token')
    });

    try {
      // Clear everything explicitly
      setUser(null); // Clear user state
      localStorage.removeItem('user'); // Remove user from localStorage
      localStorage.removeItem('token'); // Remove token from localStorage

      console.error('LOGOUT: State and storage cleared');
      
      // Force redirect
      window.location.replace('/');
    } catch (error) {
      console.error('CRITICAL LOGOUT FAILURE:', error);
    }
  };

  // Delete account function
  const deleteAccount = async (email: string) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('No valid token found. Please log in again.');
        return;
      }

      const response = await fetch('http://localhost:5000/auth/delete-account', {
        method: 'DELETE',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.href = '/'; // Force full page reload after account deletion
      } else {
        const data = await response.json();
        alert(data.message || 'Failed to delete account');
      }
    } catch (error) {
      console.error('Delete account error:', error);
      alert('An error occurred while deleting account');
    }
  };

  // Effect to update localStorage whenever the user state changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', user); // Set user to localStorage if it's set
    } else {
      localStorage.removeItem('user'); // Remove user from localStorage if not set
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser, logout, deleteAccount }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
