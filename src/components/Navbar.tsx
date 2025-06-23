import React, { useState } from 'react';

const Navbar = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  // Simple form handlers (no backend)
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSignIn(false);
  };
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSignUp(false);
  };

  return (
    <>
      <nav className="fixed w-full z-30 bg-gray-900/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">AutoElite</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#inventory" className="text-gray-300 hover:text-white transition-colors">Inventory</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              {/* Sign In/Up Buttons */}
              <button
                className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-gray-200 bg-white/10 hover:bg-white/20 transition-all duration-300"
                onClick={() => setShowSignIn(true)}
              >
                Sign In
              </button>
              <button
                className="ml-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-px"
                onClick={() => setShowSignUp(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

      {/* Sign In Modal */}
      {showSignIn && (
        <>
          <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"></div>
          <div className="fixed inset-0 z-50 flex justify-center items-center" onClick={() => setShowSignIn(false)}>
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md mx-4 p-8 bg-white rounded-2xl shadow-xl relative transform transition-all"
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
                onClick={() => setShowSignIn(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
                <p className="text-gray-600 mt-2">Sign in to access your account.</p>
              </div>
              <form onSubmit={handleSignIn} className="space-y-6">
                <div>
                    <label className="text-sm font-medium text-gray-700" htmlFor="signin-email">Email Address</label>
                    <div className="mt-1">
                        <input
                        id="signin-email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700" htmlFor="signin-password">Password</label>
                    <div className="mt-1">
                        <input
                        id="signin-password"
                        type="password"
                        required
                        placeholder="••••••••"
                        className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-105"
                >
                    Sign In
                </button>
                <p className="text-center text-sm text-gray-500">
                    Don't have an account?{' '}
                    <button
                        type="button"
                        className="font-medium text-blue-600 hover:text-blue-500"
                        onClick={() => {
                            setShowSignIn(false);
                            setShowSignUp(true);
                        }}
                    >
                        Sign up
                    </button>
                </p>
              </form>
            </div>
          </div>
        </>
      )}
      {/* Sign Up Modal */}
      {showSignUp && (
        <>
          <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"></div>
          <div className="fixed inset-0 z-50 flex justify-center items-center" onClick={() => setShowSignUp(false)}>
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md mx-4 p-8 bg-white rounded-2xl shadow-xl relative transform transition-all"
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
                onClick={() => setShowSignUp(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">Create an Account</h2>
                  <p className="text-gray-600 mt-2">Join us and start your journey.</p>
              </div>
              <form onSubmit={handleSignUp} className="space-y-6">
                <div>
                    <label className="text-sm font-medium text-gray-700" htmlFor="signup-name">Full Name</label>
                    <div className="mt-1">
                        <input
                        id="signup-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                        />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700" htmlFor="signup-email">Email Address</label>
                    <div className="mt-1">
                        <input
                        id="signup-email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                        />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700" htmlFor="signup-password">Password</label>
                    <div className="mt-1">
                        <input
                        id="signup-password"
                        type="password"
                        required
                        placeholder="••••••••"
                        className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all transform hover:scale-105"
                >
                    Create Account
                </button>
                <p className="text-center text-sm text-gray-500">
                    Already have an account?{' '}
                    <button
                        type="button"
                        className="font-medium text-green-600 hover:text-green-500"
                        onClick={() => {
                            setShowSignUp(false);
                            setShowSignIn(true);
                        }}
                    >
                        Sign in
                    </button>
                </p>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Navbar
