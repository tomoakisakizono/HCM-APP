import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost/api/login', { email, password });
      setToken(response.data.access_token);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost/api/logout', {}, { headers: { Authorization: `Bearer ${token}` } });
      setToken('');
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-96 p-6 shadow-xl rounded-2xl">
        <CardContent>
          {!isLoggedIn ? (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-4 border rounded" />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-4 border rounded" />
              <Button onClick={handleLogin} className="w-full">Login</Button>
              <Button onClick={() => navigate('/register')} className="w-full mt-4">Register</Button>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
              <Button onClick={handleLogout} className="w-full">Logout</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthComponent;
