
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Zap, Menu, X, UserCircle, LogOut } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export const NavigationWithAuth = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="py-4 px-4 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <span className="font-display text-xl font-bold bg-accent-gradient text-transparent bg-clip-text">
            AgentFlux
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${
              isActive("/") ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            to="/create"
            className={`text-sm font-medium transition-colors ${
              isActive("/create") ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            Create
          </Link>
          <Link
            to="/my-agents"
            className={`text-sm font-medium transition-colors ${
              isActive("/my-agents") ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            My Agents
          </Link>
          <Link
            to="/templates"
            className={`text-sm font-medium transition-colors ${
              isActive("/templates") ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            Templates
          </Link>
        </nav>

        {/* Auth Controls */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <UserCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{user.name}</span>
              </div>
              <button
                onClick={signOut}
                className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm">Sign Out</span>
              </button>
            </div>
          ) : (
            <Link
              to="/auth"
              className="px-4 py-2 rounded-md bg-primary/20 hover:bg-primary/30 transition-colors text-white text-sm font-medium"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background pt-16 px-4 md:hidden">
          <nav className="flex flex-col gap-6">
            <Link
              to="/"
              className={`text-lg font-medium transition-colors ${
                isActive("/") ? "text-white" : "text-gray-400"
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/create"
              className={`text-lg font-medium transition-colors ${
                isActive("/create") ? "text-white" : "text-gray-400"
              }`}
              onClick={closeMenu}
            >
              Create
            </Link>
            <Link
              to="/my-agents"
              className={`text-lg font-medium transition-colors ${
                isActive("/my-agents") ? "text-white" : "text-gray-400"
              }`}
              onClick={closeMenu}
            >
              My Agents
            </Link>
            <Link
              to="/templates"
              className={`text-lg font-medium transition-colors ${
                isActive("/templates") ? "text-white" : "text-gray-400"
              }`}
              onClick={closeMenu}
            >
              Templates
            </Link>
            
            <div className="mt-4 pt-4 border-t border-white/10">
              {user ? (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <UserCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{user.name}</span>
                  </div>
                  <button
                    onClick={() => {
                      signOut();
                      closeMenu();
                    }}
                    className="flex items-center gap-2 px-4 py-3 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <Link
                  to="/auth"
                  className="w-full py-3 rounded-md bg-primary/20 hover:bg-primary/30 transition-colors text-white text-center font-medium"
                  onClick={closeMenu}
                >
                  Sign In
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
