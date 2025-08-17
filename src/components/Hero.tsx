import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, Phone, Mail, Cpu, Zap, Wifi, Code, Server, Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const profileImageUrl = "https://avatars.githubusercontent.com/u/21116110?v=4";

export const Hero = () => {
    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        // Load particles.js script dynamically
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        script.async = true;
        script.onload = () => {
            if (typeof (window as any).particlesJS !== 'undefined') {
                (window as any).particlesJS('particles-js', {
                    particles: {
                        number: { value: 80, density: { enable: true, value_area: 800 } },
                        color: { value: "#00c6ff" },
                        shape: { type: "circle" },
                        opacity: { value: 0.5, random: true },
                        size: { value: 3, random: true },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: "#00c6ff",
                            opacity: 0.2,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 2,
                            direction: "none",
                            random: true,
                            straight: false,
                            out_mode: "out",
                            bounce: false
                        }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: { enable: true, mode: "repulse" },
                            onclick: { enable: true, mode: "push" }
                        }
                    }
                });
            }
        };
        document.body.appendChild(script);

        // Add 3D tilt effect to profile image
        const heroImgBox = document.querySelector('.profile-image-container');
        if (heroImgBox) {
            const handleMouseMove = (e: MouseEvent) => {
                const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
                (heroImgBox as HTMLElement).style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            };

            const handleMouseLeave = () => {
                (heroImgBox as HTMLElement).style.transform = 'rotateY(0) rotateX(0)';
            };

            heroImgBox.addEventListener('mousemove', handleMouseMove);
            heroImgBox.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                heroImgBox.removeEventListener('mousemove', handleMouseMove);
                heroImgBox.removeEventListener('mouseleave', handleMouseLeave);
            };
        }

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    // Tech icons data
    const techIcons = [
        { icon: <Cpu className="h-6 w-6" />, color: "#00c6ff" },
        { icon: <Zap className="h-6 w-6" />, color: "#6eff89" },
        { icon: <Wifi className="h-6 w-6" />, color: "#0072ff" },
        { icon: <Code className="h-6 w-6" />, color: "#ff2d75" },
        { icon: <Server className="h-6 w-6" />, color: "#4dff4d" },
        { icon: <Cog className="h-6 w-6" />, color: "#ffcc00" },
    ];

    return (
        <section id="home" className="min-h-screen flex items-center hero-gradient section-padding relative overflow-hidden">
            {/* Particles.js container */}
            <div id="particles-js" className="absolute top-0 left-0 w-full h-full" />

            {/* Floating tech elements */}
            {techIcons.map((tech, index) => (
                <motion.div
                    key={index}
                    className="absolute text-2xl floating-tech"
                    style={{
                        top: `${10 + (index * 10)}%`,
                        left: `${5 + (index * 10)}%`,
                        color: tech.color,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5,
                    }}
                >
                    {tech.icon}
                </motion.div>
            ))}

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="heading-xl"
                            >
                                Hi,<br />
                                I'm <span className="text-gradient">MD Anaet</span>
                            </motion.h1>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="heading-md text-muted-foreground"
                            >
                                Embedded System Engineer 🔧
                            </motion.h2>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Button
                                onClick={scrollToContact}
                                className="btn-glow text-lg px-8 py-3 h-auto"
                            >
                                Contact Me
                            </Button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="space-y-4"
                        >
                            <div className="flex flex-wrap gap-4">
                                <Button
                                    variant="outline"
                                    className="flex items-center gap-2"
                                    asChild
                                >
                                    <a href="https://github.com/jewel3g" target="_blank" rel="noopener noreferrer">
                                        <Github className="h-4 w-4" />
                                        GitHub
                                    </a>
                                </Button>

                                <Button
                                    variant="outline"
                                    className="flex items-center gap-2"
                                    asChild
                                >
                                    <a href="https://www.linkedin.com/in/jewel3g" target="_blank" rel="noopener noreferrer">
                                        <Linkedin className="h-4 w-4" />
                                        LinkedIn
                                    </a>
                                </Button>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Button
                                    variant="outline"
                                    className="flex items-center gap-2"
                                    asChild
                                >
                                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                        <FileText className="h-4 w-4" />
                                        Digital Resume
                                    </a>
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative profile-image-container transition-transform duration-500 ease-out">
                            <motion.div
                                className="relative w-80 h-80 rounded-3xl overflow-hidden card-gradient"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img
                                    src={profileImageUrl}
                                    alt="MD Anaet Ullah"
                                    className="w-full h-full object-cover"
                                />

                                {/* Decorative elements */}
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full float" />
                                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary-light/30 rounded-full float" style={{ animationDelay: '1s' }} />
                                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-primary-glow/25 rounded-full float" style={{ animationDelay: '2s' }} />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};