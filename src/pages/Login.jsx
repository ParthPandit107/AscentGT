import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, AlertCircle } from 'lucide-react';
import useSeo from '../hooks/useSeo';

export default function Login({ isAuthenticated, onLogin }) {
  useSeo(
    'Admin Login | AGTPL',
    'Administrator login screen for managing product estimated pricing and availability.'
  );

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!username.trim() || !password.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    // Load admin credentials from environment or default fallbacks
    const expectedUser = import.meta.env.VITE_ADMIN_USER || 'admin';
    const expectedPass = import.meta.env.VITE_ADMIN_PASSWORD || 'password123';

    if (username === expectedUser && password === expectedPass) {
      onLogin();
      navigate('/admin');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="w-full min-h-[70vh] font-body bg-light-bg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-light-surface border border-border p-8 sm:p-10 rounded-sm shadow-xs relative">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-sky"></div>

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 w-12 h-12 bg-sky-pale text-sky-deep rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock size={24} />
          </div>
          <h2 className="font-headings text-2xl font-normal text-text-dark">Admin Console</h2>
          <p className="text-xs text-text-muted-light">
            Authorized management login for Ascent Green Technologies.
          </p>
        </div>

        {/* Error message block */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-3.5 rounded-sm flex items-start gap-2.5 text-xs">
            <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-text-dark uppercase tracking-wider mb-1.5">
                Username
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted-light">
                  <User size={16} />
                </span>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs border border-border rounded-sm focus:outline-none focus:border-sky bg-white text-text-dark"
                  placeholder="Enter username"
                  autoFocus
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-text-dark uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted-light">
                  <Lock size={16} />
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs border border-border rounded-sm focus:outline-none focus:border-sky bg-white text-text-dark"
                  placeholder="Enter password"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-dark-bg hover:bg-dark-surface text-white py-3 px-4 font-bold text-xs uppercase tracking-wider rounded-sm transition-colors cursor-pointer text-center flex items-center justify-center"
            >
              Sign In to Console
            </button>
          </div>
        </form>

        <div className="text-center pt-2">
          <p className="text-[10px] text-text-muted-light">
            Demo login credentials: <code className="bg-sky-pale px-1 py-0.5 rounded-sm text-text-dark">admin</code> / <code className="bg-sky-pale px-1 py-0.5 rounded-sm text-text-dark">password123</code>
          </p>
        </div>
      </div>
    </div>
  );
}
