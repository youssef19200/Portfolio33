import { useState, useEffect } from 'react';
import { Menu, X, Code, Smartphone, Zap, GraduationCap, Briefcase, Mail, Send, ExternalLink, ChevronDown, Shield, CreditCard, Bell, Database } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-xl md:text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Portfolio
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-gray-900">
              Hi, I'm <span className="text-blue-600">Amine Boudjeddar</span>
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl text-gray-600 mb-8">
              Senior Mobile Developer
            </p>
            <p className="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto mb-12">
              Senior Mobile Developer with extensive experience building high-performance cross-platform and native mobile applications using React Native, Flutter, Swift, and Kotlin. Specialized in fintech solutions, biometric authentication, and scalable mobile architectures.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all"
              >
                Contact Me
              </button>
            </div>

            <div className="flex gap-6 justify-center mb-12">
              <a href="mailto:boudjeddar.amine2023.2026@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={28} />
              </a>
            </div>

            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-500 hover:text-blue-600 transition-colors animate-bounce"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-gray-900">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzI4NDEyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional developer" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl mb-4 text-gray-900">Senior Mobile Developer</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Senior Mobile Developer with extensive experience building high-performance cross-platform and native mobile applications using React Native, Flutter, Swift, and Kotlin. Strong background in modern mobile architecture, scalable application development, and secure mobile solutions for fintech-style platforms and real-time digital services.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Experienced in integrating payment systems, API-driven architectures, biometric authentication, and performance optimization to deliver reliable and scalable products. Proven ability to collaborate with cross-functional teams, lead technical decisions, and deliver production-ready mobile applications successfully deployed to the Apple App Store and Google Play.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Based in France, I'm passionate about creating exceptional mobile experiences that combine security, performance, and user-centered design.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="text-blue-600" size={32} />
              </div>
              <h4 className="text-xl mb-2 text-gray-900">Mobile Development</h4>
              <p className="text-gray-600">Expert in React Native, Flutter, Swift, and Kotlin for cross-platform and native mobile applications</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h4 className="text-xl mb-2 text-gray-900">Secure Authentication</h4>
              <p className="text-gray-600">Implementing biometric authentication (Face ID, Touch ID) and token-based security systems</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-blue-600" size={32} />
              </div>
              <h4 className="text-xl mb-2 text-gray-900">Performance Optimization</h4>
              <p className="text-gray-600">Optimizing mobile applications for scalability, maintainability, and exceptional user experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-gray-900">Experience & Education</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl mb-6 text-gray-900 flex items-center gap-2">
              <GraduationCap className="text-blue-600" size={32} />
              Education
            </h3>
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-xl text-gray-900 mb-1">Bachelor / Equivalent Studies in Computer Science</h4>
                  <p className="text-gray-600">Strong foundation in software engineering, algorithms, and modern development practices.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl mb-6 text-gray-900 flex items-center gap-2">
              <Briefcase className="text-blue-600" size={32} />
              Professional Experience
            </h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-gray-300 hover:border-blue-600 transition-colors">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Briefcase className="text-gray-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl text-gray-900 mb-1">React Native Developer</h4>
                    <p className="text-blue-600 mb-1">EFFICIENCE</p>
                    <p className="text-sm text-blue-600 mb-3">Mar 2025 - Jan 2026</p>
                    <ul className="text-gray-600 space-y-1 list-disc list-inside">
                      <li>Developed scalable mobile applications using React Native and TypeScript for high-performance digital platforms</li>
                      <li>Integrated REST APIs and GraphQL services to support real-time data synchronization and dynamic content delivery</li>
                      <li>Implemented secure authentication systems including biometric login and token-based authentication</li>
                      <li>Built push notification systems using Firebase Cloud Messaging to improve user engagement</li>
                      <li>Optimized mobile performance and refactored application architecture to ensure scalability and maintainability</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-gray-300 hover:border-blue-600 transition-colors">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Briefcase className="text-gray-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl text-gray-900 mb-1">CTO & React Native Developer</h4>
                    <p className="text-blue-600 mb-1">COAXES</p>
                    <p className="text-sm text-blue-600 mb-3">May 2024 - Feb 2025</p>
                    <ul className="text-gray-600 space-y-1 list-disc list-inside">
                      <li>Led the architecture and development of scalable mobile applications using React Native</li>
                      <li>Designed secure payment workflows integrating Stripe and PayPal APIs for fintech-style mobile products</li>
                      <li>Managed the full mobile development lifecycle including architecture design, development, and deployment</li>
                      <li>Implemented modern state management solutions to support complex application workflows</li>
                      <li>Oversaw deployment processes for Apple App Store and Google Play Store releases</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-gray-300 hover:border-blue-600 transition-colors">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Briefcase className="text-gray-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl text-gray-900 mb-1">iOS Developer (Swift & Flutter)</h4>
                    <p className="text-blue-600 mb-1">DONF</p>
                    <p className="text-sm text-blue-600 mb-3">Mar 2023 - May 2024</p>
                    <ul className="text-gray-600 space-y-1 list-disc list-inside">
                      <li>Developed native iOS applications using Swift and cross-platform applications with Flutter</li>
                      <li>Integrated secure payment systems and authentication technologies including Face ID and Touch ID</li>
                      <li>Implemented REST API integrations to support scalable backend services</li>
                      <li>Managed application releases using TestFlight and App Store distribution workflows</li>
                      <li>Collaborated with product and design teams to deliver high-quality user experiences</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-gray-300 hover:border-blue-600 transition-colors">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Briefcase className="text-gray-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl text-gray-900 mb-1">Senior React Native Developer</h4>
                    <p className="text-blue-600 mb-1">MYDESYN</p>
                    <p className="text-sm text-blue-600 mb-3">Jan 2022 - Feb 2023</p>
                    <ul className="text-gray-600 space-y-1 list-disc list-inside">
                      <li>Built cross-platform mobile applications using React Native and modern JavaScript frameworks</li>
                      <li>Implemented Redux-based state management for scalable application architecture</li>
                      <li>Integrated multiple APIs to support real-time mobile services</li>
                      <li>Developed push notification systems and background services to improve user engagement</li>
                      <li>Contributed to performance improvements and codebase scalability</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-gray-900">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCategory title="Mobile Development" skills={[
              { name: 'React Native', level: 95 },
              { name: 'Flutter', level: 88 },
              { name: 'Swift', level: 85 },
              { name: 'Kotlin', level: 82 }
            ]} />
            
            <SkillCategory title="Frontend Technologies" skills={[
              { name: 'TypeScript', level: 92 },
              { name: 'JavaScript (ES6+)', level: 95 },
              { name: 'Redux / State Management', level: 90 },
              { name: 'Mobile UI/UX', level: 88 }
            ]} />
            
            <SkillCategory title="Backend & APIs" skills={[
              { name: 'REST API Integration', level: 93 },
              { name: 'GraphQL', level: 87 },
              { name: 'Firebase', level: 90 },
              { name: 'Real-Time Data Sync', level: 88 }
            ]} />

            <SkillCategory title="Security & Authentication" skills={[
              { name: 'Biometric Authentication', level: 90 },
              { name: 'Token-Based Auth', level: 92 },
              { name: 'Payment Gateway Integration', level: 88 },
              { name: 'Secure Mobile Solutions', level: 90 }
            ]} />
            
            <SkillCategory title="Architecture & Patterns" skills={[
              { name: 'MVVM Architecture', level: 90 },
              { name: 'Clean Architecture', level: 88 },
              { name: 'Modular Design', level: 87 },
              { name: 'Scalable Applications', level: 92 }
            ]} />
            
            <SkillCategory title="Tools & Deployment" skills={[
              { name: 'App Store Deployment', level: 95 },
              { name: 'Google Play Deployment', level: 95 },
              { name: 'TestFlight', level: 93 },
              { name: 'Performance Optimization', level: 90 }
            ]} />
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
            <h3 className="text-2xl mb-6 text-gray-900 text-center">Areas of Expertise</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                'React Native', 'Flutter', 'Swift', 'Kotlin', 'JavaScript (ES6+)', 'TypeScript',
                'REST API Integration', 'GraphQL', 'Redux', 'State Management', 
                'Push Notifications', 'Biometric Authentication', 'Payment Gateway Integration',
                'Real-Time Data Synchronization', 'Mobile App Optimization', 
                'App Store & Google Play Deployment', 'MVVM', 'Clean Architecture'
              ].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white text-gray-700 rounded-full shadow-sm hover:shadow-md transition-shadow">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-gray-900">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="High-Performance Digital Platform"
              description="Scalable mobile application built with React Native and TypeScript, featuring real-time data synchronization and dynamic content delivery."
              image="https://images.unsplash.com/photo-1630442923896-244dd3717b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzI4NDEyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              tags={['React Native', 'TypeScript', 'GraphQL', 'Firebase']}
              icon={<Smartphone className="text-blue-600" size={20} />}
            />
            
            <ProjectCard
              title="Fintech Payment Application"
              description="Secure payment workflow system integrating Stripe and PayPal APIs for fintech-style mobile products with complete transaction management."
              image="https://images.unsplash.com/photo-1758274252132-a9599113429d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwcGF5bWVudCUyMHNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI4NDEyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              tags={['React Native', 'Stripe', 'PayPal', 'Redux']}
              icon={<CreditCard className="text-blue-600" size={20} />}
            />
            
            <ProjectCard
              title="iOS Authentication System"
              description="Native iOS application with biometric authentication (Face ID, Touch ID) and secure payment integration using Swift and Flutter."
              image="https://images.unsplash.com/photo-1690743300330-d190ad8f97dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpb3MlMjBzd2lmdCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3Mjg0MTI3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              tags={['Swift', 'Flutter', 'Face ID', 'Touch ID']}
              icon={<Shield className="text-blue-600" size={20} />}
            />
            
            <ProjectCard
              title="Cross-Platform Mobile App"
              description="Multi-platform application with Redux state management, real-time API integration, and optimized performance for iOS and Android."
              image="https://images.unsplash.com/photo-1618318201012-0538f9fc95b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMG5hdGl2ZSUyMG1vYmlsZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzI4NDEyNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              tags={['React Native', 'Redux', 'REST API', 'Mobile Optimization']}
              icon={<Code className="text-blue-600" size={20} />}
            />
            
            <ProjectCard
              title="Real-Time Data Synchronization"
              description="Advanced mobile application with GraphQL integration for real-time data updates, offline support, and seamless backend communication."
              image="https://images.unsplash.com/photo-1551302175-952301267d19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwdGltZSUyMGRhdGElMjBzeW5jaHJvbml6YXRpb258ZW58MXx8fHwxNzcyODQxMjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              tags={['GraphQL', 'Real-Time Sync', 'Offline Support', 'TypeScript']}
              icon={<Database className="text-blue-600" size={20} />}
            />
            
            <ProjectCard
              title="Push Notification System"
              description="Comprehensive push notification platform using Firebase Cloud Messaging with background services to enhance user engagement and retention."
              image="https://images.unsplash.com/photo-1772618375204-06b8348417e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXNoJTIwbm90aWZpY2F0aW9uJTIwbW9iaWxlfGVufDF8fHx8MTc3Mjg0MTI3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              tags={['Firebase', 'Cloud Messaging', 'Push Notifications', 'Background Services']}
              icon={<Bell className="text-blue-600" size={20} />}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-gray-900">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Interested in collaborating on a mobile project? Let's create something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl mb-6 text-gray-900">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Email</h4>
                    <a href="mailto:boudjeddar.amine2023.2026@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                      boudjeddar.amine2023.2026@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-100">
                <h4 className="text-xl mb-4 text-gray-900">Location</h4>
                <p className="text-gray-600 mb-4">
                  📍 France
                </p>
                <h4 className="text-xl mb-4 text-gray-900">Availability</h4>
                <p className="text-gray-600">
                  Available for freelance projects and full-time opportunities. Specializing in React Native, Flutter, Swift, and Kotlin development for mobile applications.
                </p>
              </div>
            </div>

            <div>
              <form className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-100">
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                    placeholder="Project inquiry"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl mb-4">Amine Boudjeddar</h3>
              <p className="text-gray-400">
                Senior Mobile Developer specializing in React Native, Flutter, Swift, and Kotlin development.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl mb-4">Connect</h3>
              <div className="flex gap-4">
                <a href="mailto:boudjeddar.amine2023.2026@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Amine Boudjeddar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: { name: string; level: number }[] }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl mb-6 text-gray-900">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">{skill.name}</span>
              <span className="text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, description, image, tags, icon }: { 
  title: string; 
  description: string; 
  image: string; 
  tags: string[];
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
      <div className="overflow-hidden h-48">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <h3 className="text-xl text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
