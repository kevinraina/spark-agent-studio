
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router-dom";

interface GlowingButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "accent";
}

export const GlowingButton = ({
  children,
  to,
  onClick,
  className,
  size = "md",
  variant = "primary",
}: GlowingButtonProps) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary: "bg-accent-gradient text-white",
    secondary: "bg-white/10 backdrop-blur-sm text-white border border-white/20",
    accent: "bg-gradient-to-r from-[#FFD700] to-[#FF61EF] text-white",
  };

  const buttonClasses = cn(
    "rounded-full font-medium relative group overflow-hidden transition-all duration-300",
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const ButtonContent = () => (
    <>
      <span className="relative z-10">{children}</span>
      
      {/* Inner glow effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10"
        initial={false}
        whileHover={{ scale: 1.5 }}
      />
      
      {/* Outer glow effect */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 blur-md group-hover:opacity-70 transition-all duration-300 -z-10"></div>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        <ButtonContent />
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      <ButtonContent />
    </button>
  );
};
