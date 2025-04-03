
import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Mail, Lock, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

type AuthMode = "signin" | "signup";

export const AuthForm = () => {
  const [mode, setMode] = useState<AuthMode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // This would be replaced with actual Supabase auth when integrated
    setTimeout(() => {
      setIsLoading(false);
      navigate("/my-agents");
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-display font-bold mb-2">
          {mode === "signin" ? "Welcome Back" : "Create Your Account"}
        </h2>
        <p className="text-gray-400">
          {mode === "signin"
            ? "Sign in to access your AI agents"
            : "Sign up to start creating AI agents"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === "signup" && (
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <UserCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                id="name"
                placeholder="Enter your name"
                className="pl-10"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              id="email"
              type="email"
              placeholder="yourname@example.com"
              className="pl-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="pl-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-accent-gradient text-white font-medium"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : mode === "signin" ? (
            "Sign In"
          ) : (
            "Create Account"
          )}
        </button>

        <div className="text-center mt-4">
          {mode === "signin" ? (
            <p className="text-sm text-gray-400">
              Don't have an account?{" "}
              <button
                type="button"
                className="text-primary hover:underline"
                onClick={() => setMode("signup")}
              >
                Sign up
              </button>
            </p>
          ) : (
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <button
                type="button"
                className="text-primary hover:underline"
                onClick={() => setMode("signin")}
              >
                Sign in
              </button>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
