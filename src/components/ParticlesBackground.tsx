
import { useEffect, useRef } from "react";

export const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 80; // Increased particle count
    const mouseRadius = 100;
    
    // Mouse position tracking
    let mousePosition = {
      x: 0,
      y: 0
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      baseSize: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseSize = Math.random() * 2 + 0.5;
        this.size = this.baseSize;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = getRandomColor();
        this.opacity = Math.random() * 0.6 + 0.2;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Mouse interaction - particles grow when near the mouse
        const dx = this.x - mousePosition.x;
        const dy = this.y - mousePosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseRadius) {
          const scale = 1 + (mouseRadius - distance) / mouseRadius;
          this.size = this.baseSize * scale * 2;
        } else {
          this.size = this.baseSize;
        }
        
        // Wrap around screen edges
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect to particles
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
      }
    }
    
    // Colors - more vibrant and varied
    function getRandomColor() {
      const colors = [
        "#9B6DFF", // Primary purple
        "#4DCCFF", // Secondary blue
        "#FFD700", // Accent gold
        "#FF61EF", // Pink
        "#61FFCE"  // Teal
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Initialize particles
    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    
    // Connect particles with lines
    const connectParticles = () => {
      const maxDistance = 150;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(155, 109, 255, ${0.1 * (1 - distance / maxDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      // Clear with a semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(10, 11, 20, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Reset shadow effects before drawing
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
      
      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      
      // Connect particles with lines
      connectParticles();
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-60"
    />
  );
};
