import { useState, useRef } from "react";
import { Home, Users, Car, Wrench, Menu, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const drawerRef = useRef<HTMLDivElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    const navLinks = [
        { name: "Rent", path: "/main/rent", icon: Home },
        { name: "Maid", path: "/main/find-service/Maid", icon: Users },
        { name: "Home Shifter", path: "/main/find-service/Home Shifter", icon: Car },
        { name: "Plumber", path: "/main/find-service/Plumber", icon: Wrench },
    ];

    useGSAP(() => {
        if (isMenuOpen) {
            // Show overlay
            gsap.to(overlayRef.current, {
                autoAlpha: 1,
                duration: 0.4,
                ease: "power2.out",
            });

            // Slide drawer in
            gsap.fromTo(
                drawerRef.current,
                { x: "-100%" },
                { x: "0%", duration: 0.6, ease: "power1.out" }
            );

            // Stagger links
            gsap.fromTo(
                linkRefs.current,
                { y: 0, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    ease: "power3.out",
                    delay: 0.2,
                }
            );
        } else {
            // Hide overlay and drawer
            gsap.to(overlayRef.current, {
                autoAlpha: 0,
                duration: 0.4,
                ease: "power2.in",
            });
            gsap.to(drawerRef.current, {
                x: "-100%",
                duration: 0.4,
                ease: "power3.in",
            });
        }
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    return (
        <>
            {/* Main Navbar */}
            <nav className="bg-white shadow-sm border-b border-gray-200 relative z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo/Brand */}
                        <div className="flex-shrink-0">
                            <span className="text-xl font-semibold text-gray-900">LogoIpsum</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinks.map((link) => {
                                const IconComponent = link.icon;
                                return (
                                    <a
                                        key={link.name}
                                        href={link.path}
                                        className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-50"
                                    >
                                        <IconComponent className="h-4 w-4" />
                                        <span>{link.name}</span>
                                    </a>
                                );
                            })}
                        </div>

                        {/* Desktop Button */}
                        <div className="hidden lg:block">
                            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md">
                                Button
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-700 hover:text-gray-900 p-2 rounded-lg transition-colors duration-200"
                            >
                                <Menu className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Overlay */}
            <div
                ref={overlayRef}
                onClick={toggleMenu}
                className="fixed inset-0 bg-black/30 invisible opacity-0 lg:hidden z-40"
            />

            {/* Mobile Navigation Drawer */}
            <div
                ref={drawerRef}
                className="fixed top-0 left-0 w-80 h-full bg-white shadow-2xl lg:hidden z-50 transform -translate-x-full"
            >
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <span className="text-xl font-semibold text-gray-900">LogoIpsum</span>
                    <button
                        onClick={toggleMenu}
                        className="text-gray-500 hover:text-gray-700 p-2 rounded-lg transition-colors duration-200"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Mobile Navigation Items */}
                <div className="py-6 flex flex-col gap-2">
                    {navLinks.map((link, i) => {
                        const IconComponent = link.icon;
                        return (
                            <a
                                key={link.name}
                                href={link.path}
                                ref={(el) => { linkRefs.current[i] = el; }}
                                onClick={toggleMenu}
                                className="flex items-center space-x-4 px-6 py-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 border-l-4 border-transparent hover:border-gray-800"
                            >
                                <IconComponent className="h-5 w-5" />
                                <span className="text-base font-medium">{link.name}</span>
                            </a>
                        );
                    })}
                </div>

                {/* Mobile Button */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-white">
                    <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg text-base font-medium transition-all duration-200 hover:shadow-lg">
                        Button
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
