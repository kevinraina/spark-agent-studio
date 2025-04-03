
import { Zap } from "lucide-react";
import { AuthForm } from "../components/auth/AuthForm";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="mb-8 text-center">
        <Link to="/" className="inline-flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <span className="font-display text-xl font-bold bg-accent-gradient text-transparent bg-clip-text">
            AgentFlux
          </span>
        </Link>
      </div>
      
      <AuthForm />
      
      <p className="mt-8 text-sm text-gray-500">
        By continuing, you agree to our Terms of Service and Privacy Policy
      </p>
    </div>
  );
};

export default Auth;
