import React, { useState, useEffect, useRef, useCallback } from 'react';

// --- Inline SVG Icons ---
// Home Icon
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

// User Icon
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

// Briefcase Icon
const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase">
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);

// Code Icon
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);

// Mail Icon
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

// Award Icon
const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award">
    <circle cx="12" cy="8" r="7"/>
    <polyline points="8.21 13.89 7 22 12 18 17 22 15.79 13.89"/>
  </svg>
);

// Instagram Icon
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/>
  </svg>
);

// Twitter Icon
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-17 17 2.1 0 3.6-.5 6-2 0 0 1.5-.5 2.5-1.5C18 13 22 4 22 4z"/>
    <path d="M12 15c-1.5 0-3-.5-4.5-1.5C5.5 12.5 4 11 4 9.5c0-1.5.5-3 1.5-4.5C7.5 3.5 9 2 10.5 2c1.5 0 3 .5 4.5 1.5C16.5 5.5 18 7 18 8.5c0 1.5-.5 3-1.5 4.5C14.5 14.5 13 15 12 15z"/>
  </svg>
);

// Github Icon
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.46 0 0-1.09 0-3 1.5a9.2 9.2 0 0 0-6 0c-1.91-1.5-3-1.5-3-1.5A4.8 4.8 0 0 0 2 13.5c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

// Linkedin Icon
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

// HackerRank Icon (Custom SVG as it's not in Lucide by default)
const HackerRankIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c4.954 0 8.909 3.955 8.909 8.909 0 4.954-3.955 8.909-8.909 8.909-4.954 0-8.909-3.955-8.909-8.909 0-4.954 3.955-8.909 8.909-8.909zM8.318 6.545c-.482 0-.873.391-.873.873v8.727c0 .482.391.873.873.873h7.364c.482 0 .873-.391.873-.873V7.418c0-.482-.391-.873-.873-.873H8.318zm.873 1.745h5.618c.241 0 .436.195.436.436s-.195.436-.436.436H9.191c-.241 0-.436-.195-.436-.436s.195-.436.436-.436zm0 2.618h5.618c.241 0 .436.195.436.436s-.195.436-.436.436H9.191c-.241 0-.436-.195-.436-.436s.195-.436.436-.436zm0 2.618h5.618c.241 0 .436.195.436.436s-.195.436-.436.436H9.191c-.241 0-.436-.195-.436-.436s.195-.436.436-.436z"/>
  </svg>
);

// Phone Icon
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2.003 19.5 19.5 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.07-8.63A2 2 0 0 1 4.08 2H7a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-1.18 2.19l-.7.69a12 12 0 0 0 6.62 6.62l.69-.7a2 2 0 0 1 2.19-1.18 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

// Map Pin Icon
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
    <path d="M12 18.7l-6.5-6.5a7 7 0 1 1 9.9-9.9L12 5.1l-2.4 2.4"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);


// Typewriter Effect Component
const Typewriter = ({ texts, speed = 100, delay = 1500 }) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeoutId;

    const handleTyping = () => {
      if (!isDeleting && charIndex < currentText.length) {
        // Typing
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        // Finished typing, start deleting after delay
        timeoutId = setTimeout(() => setIsDeleting(true), delay);
        return;
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next text after a short pause
        timeoutId = setTimeout(() => {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, speed); // Small delay before starting next text
        return;
      }
    };

    // Schedule the next character/deletion based on state
    timeoutId = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeoutId); // Cleanup timeout on unmount or re-render
  }, [charIndex, isDeleting, textIndex, texts, speed, delay]);

  return <span className="typewriter-text">{displayText}</span>;
};


// NavItem Component for reusability and active state
const NavItem = ({ icon, label, id, activeSection, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition duration-300 ease-in-out
      ${activeSection === id
        ? 'bg-teal-500 text-white shadow-md'
        : 'text-gray-700 hover:text-gray-900 hover:bg-blue-200' // Adjusted text and hover colors
      }
      focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50
    `}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </button>
);

// SkillCard Component for reusability
const SkillCard = ({ iconUrl, name }) => (
  <div className="flex flex-col items-center justify-center text-center transform hover:scale-105 transition duration-300 ease-in-out group relative">
    {/* Circular frame for the icon */}
    <div className="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center mb-3 shadow-md group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 overflow-hidden">
      <img
        src={iconUrl}
        alt={`${name} icon`}
        className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300" // Adjust size as needed
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/48x48/CCCCCC/000000?text=?" }} // Fallback for broken images
      />
    </div>
    <h3 className="text-xl font-semibold text-gray-800">{name}</h3> {/* Adjusted text color */}
  </div>
);

// ProjectCard Component for reusability
const ProjectCard = ({ title, imageUrl, githubLink, liveLink }) => (
  <div className="bg-white p-8 rounded-lg shadow-xl border border-blue-200 flex flex-col h-full transform hover:scale-[1.02] transition duration-300 ease-in-out group relative overflow-hidden
    group-hover:shadow-2xl group-hover:border-teal-400 group-hover:-translate-y-1"> {/* Added new hover effects */}
    <h3 className="text-3xl font-bold text-purple-600 mb-4 text-center">{title}</h3> {/* Adjusted title color and centered */}
    {/* Changed image container to have a fixed height for a more "cuboid" look */}
    <div className="w-full h-56 overflow-hidden rounded-md border border-gray-200 mb-6">
      <img
        src={imageUrl}
        alt={`${title} snapshot`}
        className="w-full h-full object-cover rounded-md transform group-hover:scale-105 transition duration-300 ease-in-out"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/E0F2F7/2D3748?text=Project+Snapshot" }} // Fallback for broken images
      />
    </div>
    <div className="flex space-x-4 mt-auto">
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-md text-center shadow-lg transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 group relative overflow-hidden"
      >
        <span className="relative z-10">View Code</span> {/* Changed from GitHub */}
        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
      </a>
      <a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-md text-center shadow-lg transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50 group relative overflow-hidden"
      >
        <span className="relative z-10">Live Demo</span>
        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
      </a>
    </div>
    {/* Removed the dimming overlay span */}
  </div>
);

// New TimelineItem Component for Experience Section
const TimelineItem = ({ title, company, duration, isLeft, delay }) => (
  <div
    className={`mb-8 flex items-center w-full transition-all duration-700 ease-out transform translate-y-10 opacity-0 ${isLeft ? 'flex-row-reverse' : ''}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {/* Content Box */}
    <div className={`order-1 w-5/12 p-6 rounded-lg shadow-xl border border-blue-200 bg-white transform hover:scale-[1.02] transition duration-300 ease-in-out ${isLeft ? 'text-right mr-8' : 'text-left ml-8'}`}>
      <h3 className="text-xl font-bold text-teal-600 mb-1">{title}</h3>
      <p className="text-md font-semibold text-purple-600 mb-1">{company}</p>
      <p className="text-sm text-gray-500">{duration}</p>
    </div>
    {/* Circle Marker */}
    <div className="z-10 flex items-center order-1 bg-teal-500 shadow-xl w-8 h-8 rounded-full">
      <h1 className="mx-auto font-semibold text-lg text-white"></h1>
    </div>
    {/* Empty Spacer */}
    <div className="order-1 w-5/12"></div>
  </div>
);


// Main App Component
const App = () => {
  // State to manage the active section for navigation
  const [activeSection, setActiveSection] = useState('home');
  // State to manage visibility of sections for scroll animations
  const [visibleSections, setVisibleSections] = useState({});

  // Refs for each section to observe their intersection
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  // Data for skills with placeholder image URLs
  const skillsData = [
    { name: "C/C++", iconUrl: "https://placehold.co/48x48/00599C/FFFFFF?text=C%2B%2B" },
    { name: "Python", iconUrl: "data:image/jpeg;base64,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" },
    { name: "JavaScript", iconUrl: "https://placehold.co/48x48/F7DF1E/000000?text=JS" },
    { name: "Java", iconUrl: "https://placehold.co/48x48/007396/FFFFFF?text=Java" },
    { name: "HTML", iconUrl: "https://placehold.co/48x48/E34F26/FFFFFF?text=HTML" },
    { name: "React.js", iconUrl: "https://placehold.co/48x48/61DAFB/000000?text=React" },
    { name: "Next.js", iconUrl: "https://placehold.co/48x48/000000/FFFFFF?text=Next" },
    { name: "Node.js", iconUrl: "https://placehold.co/48x48/339933/FFFFFF?text=Node" },
    { name: "Express.js", iconUrl: "https://placehold.co/48x48/000000/FFFFFF?text=Express" },
    { name: "Tailwind CSS", iconUrl: "https://placehold.co/48x48/06B6D4/FFFFFF?text=Tailwind" },
    { name: ".NET", iconUrl: "https://placehold.co/48x48/512BD4/FFFFFF?text=.NET" },
    { name: "MongoDB", iconUrl: "https://placehold.co/48x48/47A248/FFFFFF?text=Mongo" },
    { name: "Kotlin", iconUrl: "https://placehold.co/48x48/7F52FF/FFFFFF?text=Kotlin" },
    { name: "Git/GitHub", iconUrl: "https://placehold.co/48x48/181717/FFFFFF?text=Git" },
    { name: "VS Code", iconUrl: "https://placehold.co/48x48/007ACC/FFFFFF?text=VSCode" },
    { name: "Android Studio", iconUrl: "https://placehold.co/48x48/3DDC84/FFFFFF?text=Android" },
  ];

  // Data for experience section with achievements
  const experienceData = [
    {
      title: "Generative AI Intern",
      company: "Prodigy InfoTech",
      duration: "Apr 2025 - May 2025",
    },
    {
      title: "HackQuest'25",
      company: "United Institue of technology",
      duration: "April 2025",
    },
    {
      title: "Cyber Security Bootcamp",
      company: "MNNIT Allahabad",
      duration: "March 2024",
    },
    {
      title: "Java Software Developer Intern",
      company: "Softpro India",
      duration: "Sep 2024 - Nov 2024",
    },
    {
      title: "UHack 3.0 Ideathon",
      company: "UCER Prayagraj",
      duration: "September 2024",
    },
  ];

  // Data for projects section with image URLs
  const projectsData = [
    {
      title: "Aura Speaks",
      imageUrl: "https://placehold.co/600x400/E0F2F7/2D3748?text=Language+Translator", // Placeholder image
      githubLink: "#", // Replace with actual GitHub link
      liveLink: "#",   // Replace with actual Live Demo link
    },
    {
      title: "Apna_Lawyer",
      imageUrl: "https://placehold.co/600x400/E0F2F7/2D3748?text=Legal+Chatbot", // Placeholder image
      githubLink: "#", // Replace with actual GitHub link
      liveLink: "#",   // Replace with actual Live Demo link
    },
    {
      title: "RentX",
      imageUrl: "https://placehold.co/600x400/E0F2F7/2D3748?text=Car+Rental+Website", // Placeholder image
      githubLink: "#", // Replace with actual GitHub link
      liveLink: "#",   // Replace with actual Live Demo link
    },
  ];


  // Function to scroll to a section smoothly
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Intersection Observer for fade-in-on-scroll effect
  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.3, // Trigger when 30% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
        } else {
          // Optional: If you want elements to disappear when scrolled out of view
          // setVisibleSections((prev) => ({ ...prev, [entry.target.id]: false }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []); // Run once on mount

  // Effect to handle scroll-based active section highlighting (for navigation)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      let currentActive = 'home';
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section is mostly in view
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 font-inter antialiased">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-100 bg-opacity-90 backdrop-blur-md shadow-lg py-4 px-6 md:px-12 flex justify-between items-center rounded-b-xl">
        <div className="text-2xl font-bold text-teal-600">
          Aditya<span className="text-purple-600">.dev</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <NavItem icon={<HomeIcon />} label="Home" id="home" activeSection={activeSection} onClick={scrollToSection} />
          <NavItem icon={<UserIcon />} label="About" id="about" activeSection={activeSection} onClick={scrollToSection} />
          <NavItem icon={<CodeIcon />} label="Skills" id="skills" activeSection={activeSection} onClick={scrollToSection} />
          <NavItem icon={<AwardIcon />} label="Experience" id="experience" activeSection={activeSection} onClick={scrollToSection} />
          <NavItem icon={<BriefcaseIcon />} label="Projects" id="projects" activeSection={activeSection} onClick={scrollToSection} />
          <NavItem icon={<MailIcon />} label="Contact" id="contact" activeSection={activeSection} onClick={scrollToSection} />
        </div>
        {/* Mobile Menu Button (Hamburger) - Implement later */}
        <div className="md:hidden">
          {/* You'd typically add a hamburger icon here and toggle a mobile menu */}
          <button className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-20"> {/* Padding to account for fixed nav */}
        {/* Hero Section */}
        <section id="home" ref={sectionRefs.home} className="relative h-screen flex items-center justify-center overflow-hidden bg-black px-6 md:px-12"> {/* Added padding for content */}
          {/* Live Background - Animated Particles */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {[...Array(70)].map((_, i) => ( // Increased particle count
              <span
                key={i}
                className="particle absolute bg-white rounded-full opacity-0" // Changed particle color to white
                style={{
                  width: `${Math.random() * 6 + 3}px`, // Slightly larger particles
                  height: `${Math.random() * 6 + 3}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  // Custom CSS variables for animation target
                  '--target-x': `${(Math.random() - 0.5) * 400}px`, // Move +/- 200px
                  '--target-y': `${(Math.random() - 0.5) * 400}px`, // Move +/- 200px
                  animation: `particleFloat ${Math.random() * 15 + 10}s infinite ease-in-out ${Math.random() * 5}s`, // Longer duration, varied delay
                  boxShadow: `0 0 10px rgba(255, 255, 255, 0.5)`, // White glow
                }}
              ></span>
            ))}
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto py-12"> {/* Adjusted for flex layout */}
            {/* Left Section: Text Content */}
            <div className="md:w-3/5 text-left mb-10 md:mb-0"> {/* Adjusted width and alignment */}
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 animate-fade-in-up">
                Hi, I'm <span className="text-teal-400">Aditya Srivastava</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up"> {/* Removed animation-delay-500 here */}
                An Aspiring  <Typewriter texts={[
                  "Software Engineer",
                  "Full Stack Developer",
                  "Web Developer",
                  "Competitive Programmer"
                ]} />
              </p>
              <div className="flex justify-start space-x-4 animate-fade-in-up animation-delay-1000"> {/* Changed justify-center to justify-start */}
                {/* Removed "View My Work" button */}
                <a
                  href="https://drive.google.com/file/d/1kj6YMyRoe8UsLA400m1Jz_0qgtvP4TEP/view?usp=drivesdk" // Placeholder Google Drive link
                  target="_blank" // Open in new tab
                  rel="noopener noreferrer" // Security best practice
                  className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 relative overflow-hidden animate-button-glow" // Added animate-button-glow
                >
                  <span className="relative z-10">View Resume</span>
                  {/* Removed inner span for hover effect as it's replaced by continuous glow */}
                </a>
              </div>
            </div>

            {/* Right Section: Unique Image Frame (Reverted to original circular) */}
            <div className="md:w-2/5 flex justify-center items-center relative"> {/* Adjusted width and centering */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-teal-500 to-purple-500 p-1 shadow-2xl"> {/* Reverted to circular */}
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-black flex items-center justify-center">
                  <img
                    src="/iamges/Avtar.jpg" // Placeholder for your avatar
                    alt="Aditya Srivastava Avatar"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* Optional: Add a subtle inner glow or border animation */}
                <span className="absolute inset-0 rounded-full ring-4 ring-teal-300 ring-opacity-50 animate-pulse-light"></span>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section
          id="about"
          ref={sectionRefs.about}
          className={`py-20 px-6 md:px-12 bg-blue-100 text-gray-800 transition-opacity duration-1000 transform ${visibleSections.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-teal-600 mb-12">About Me</h2>
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <div className="relative w-56 h-72 md:w-72 md:h-96 p-1 bg-gradient-to-br from-teal-500 to-purple-500 rounded-xl shadow-xl flex items-center justify-center overflow-hidden"> {/* Increased size slightly */}
                    <img
                      src="/iamges/About me img.jpg" // Adjusted placeholder for light background, adjusted size
                      alt="Aditya Srivastava"
                      className="w-full h-full object-cover rounded-lg border-4 border-white" // Inner image slightly smaller with white border
                    />
                    <span className="absolute inset-0 rounded-xl ring-4 ring-teal-300 ring-opacity-50 animate-pulse-light"></span> {/* Retained pulse effect for frame */}
                </div>
              </div>
              <div className="md:w-2/3 text-lg leading-relaxed text-center md:text-left">
                <p className="mb-4">
                  I'm Aditya Srivastava, an aspiring Software Engineer with a strong passion for building innovative solutions. Currently pursuing my B.Tech in Computer Science, I specialize in web and app development, leveraging modern frameworks like React.js, Next.js, Node.js, and Express.js. My expertise also extends to Artificial Intelligence and competitive programming, always seeking new challenges to enhance my skills and contribute to impactful projects.
                </p>
                {/* Social Media Quick Links */}
                <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"> {/* Added flex-wrap and gap */}
                  <a href="https://www.linkedin.com/in/aditya-srivastava-2528ba2a3/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-200 text-gray-600 hover:bg-teal-500 hover:text-white transition duration-200 transform hover:scale-110 shadow-md">
                    <LinkedinIcon />
                  </a>
                  <a href="https://github.com/Aditya87655" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-200 text-gray-600 hover:bg-teal-500 hover:text-white transition duration-200 transform hover:scale-110 shadow-md">
                    <GithubIcon />
                  </a>
                  <a href="https://www.instagram.com/mr.___introvert__/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-200 text-gray-600 hover:bg-teal-500 hover:text-white transition duration-200 transform hover:scale-110 shadow-md">
                    <InstagramIcon />
                  </a>
                  <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-200 text-gray-600 hover:bg-teal-500 hover:text-white transition duration-200 transform hover:scale-110 shadow-md">
                    <TwitterIcon />
                  </a>
                  <a href="https://www.hackerrank.com/your-hackerrank-profile" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-200 text-gray-600 hover:bg-teal-500 hover:text-white transition duration-200 transform hover:scale-110 shadow-md">
                    <HackerRankIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          ref={sectionRefs.skills}
          className={`py-20 px-6 md:px-12 bg-blue-50 text-gray-800 transition-opacity duration-1000 transform ${visibleSections.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-purple-600 mb-12">Skills & Abilities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {skillsData.map((skill, index) => (
                <SkillCard key={index} iconUrl={skill.iconUrl} name={skill.name} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          ref={sectionRefs.experience}
          className={`py-20 px-6 md:px-12 bg-blue-100 text-gray-800 transition-opacity duration-1000 transform ${visibleSections.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="max-w-4xl mx-auto relative">
            <h2 className="text-4xl font-bold text-center text-teal-600 mb-12">Professional Experience</h2>
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-400 to-purple-400 rounded-full hidden md:block"></div>

            <div className={`relative md:space-y-10 ${visibleSections.experience ? 'animate-in-stagger' : ''}`}>
              {experienceData.map((exp, index) => (
                <TimelineItem
                  key={index}
                  title={exp.title}
                  company={exp.company}
                  duration={exp.duration}
                  isLeft={index % 2 === 0} // Alternates left/right
                  delay={index * 200} // Staggered delay for animation
                />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          ref={sectionRefs.projects}
          className={`py-20 px-6 md:px-12 bg-blue-50 text-gray-800 transition-opacity duration-1000 transform ${visibleSections.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-purple-600 mb-12">My Works</h2>
            {/* Modified grid for 2-column layout on medium/large screens, with third item centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {projectsData.map((project, index) => (
                <div key={index} className={`${index === 2 && projectsData.length === 3 ? 'md:col-span-2 flex justify-center' : ''}`}>
                  <ProjectCard
                    title={project.title}
                    imageUrl={project.imageUrl}
                    githubLink={project.githubLink}
                    liveLink={project.liveLink}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          ref={sectionRefs.contact}
          className={`py-20 px-6 md:px-12 bg-blue-100 text-gray-800 transition-opacity duration-1000 transform ${visibleSections.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-teal-600 mb-12">Got Something in Mind!</h2>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-200 flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Image Section */}
              <div className="md:w-1/2 flex justify-center items-center">
                <img
                  src="/iamges/Contact.jpg" // Placeholder for contact image
                  alt="Contact Us"
                  className="rounded-lg shadow-md w-full max-w-sm"
                />
              </div>
              {/* Form Section */}
              <div className="md:w-1/2 w-full">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-3 rounded-md bg-blue-50 border border-blue-200 text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-3 rounded-md bg-blue-50 border border-blue-200 text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full p-3 rounded-md bg-blue-50 border border-blue-200 text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                      placeholder="Phone"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="w-full p-3 rounded-md bg-blue-50 border border-blue-200 text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-md shadow-lg transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-6 md:px-12 rounded-t-xl">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Portfolio Info */}
          <div>
            <h3 className="text-2xl font-bold text-teal-400 mb-4">Aditya's Portfolio</h3>
            <p className="text-gray-300 mb-4">
              Exploring the intersection of creativity and code, Thanks for stopping by!
            </p>
            <p className="text-gray-300">
              Always eager to connect, collaborate, and learn. Let's build something amazing together.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-teal-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-teal-400 transition duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-teal-400 transition duration-200">About</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-teal-400 transition duration-200">Skills</a></li>
              <li><a href="#experience" className="text-gray-300 hover:text-teal-400 transition duration-200">Experience</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-teal-400 transition duration-200">Projects</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-teal-400 transition duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-teal-400 mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <PhoneIcon className="text-teal-400" />
                <span className="text-gray-300">+91 87XXX 87XXX</span> {/* Placeholder phone number */}
              </li>
              <li className="flex items-center space-x-3">
                <MailIcon className="text-teal-400" />
                <span className="text-gray-300">adityasrii2004@email.com</span> {/* Placeholder email */}
              </li>
              <li className="flex items-center space-x-3">
                <MapPinIcon className="text-teal-400" />
                <span className="text-gray-300">Prayagraj, India - 211019</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Aditya Srivastava. All rights reserved.</p>
          <p>Designed with ❤️ by Aditya Srivastava</p>
        </div>
      </footer>
    </div>
  );
};

export default App;