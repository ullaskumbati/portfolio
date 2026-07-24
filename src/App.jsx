import React from 'react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-300 font-sans selection:bg-cyan-500 selection:text-white">
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-24">

        {/* HERO SECTION */}
        <header className="space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Ullas Kumbati
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-100">
            MERN Stack Developer
          </h2>

          {/* CONTACT & LINKS BAR */}
          <div className="flex flex-wrap items-center gap-4 pt-2 pb-2 text-sm font-medium">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 border border-gray-800 rounded-lg text-gray-400">
              📍 Bengaluru, India
            </div>
            <a href="mailto:your.email@example.com" className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 border border-gray-800 hover:border-cyan-500 rounded-lg text-gray-300 hover:text-cyan-400 transition-all">
              📧 ullasbkumbati@gmail.com
            </a>
            <a href="tel:+910000000000" className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 border border-gray-800 hover:border-blue-500 rounded-lg text-gray-300 hover:text-blue-400 transition-all">
              📱 +91 7892564006
            </a>
            <a href="https://www.linkedin.com/in/ullas-kumbati-415456225/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 border border-gray-800 hover:border-purple-500 rounded-lg text-gray-300 hover:text-purple-400 transition-all">
              💼 LinkedIn
            </a>
            <a href="https://github.com/ullaskumbati" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 border border-gray-800 hover:border-pink-500 rounded-lg text-gray-300 hover:text-pink-400 transition-all">
              💻 GitHub
            </a>
          </div>

          <p className="text-lg text-gray-400 max-w-3xl leading-relaxed mt-6 border-t border-gray-800 pt-6">
            4+ years of experience architecting scalable web applications, leading cross-functional teams, and driving massive cost optimizations by replacing expensive third-party APIs with robust, custom-built internal infrastructure.
          </p>
        </header>

        {/* SKILLS SECTION */}
        <section>
          <h3 className="text-3xl font-bold text-gray-100 mb-8 border-b border-gray-800 pb-4">Technical Arsenal</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Frontend */}
            <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-colors">
              <h4 className="text-cyan-400 font-semibold mb-4 text-lg">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Redux', 'Tailwind CSS', 'Tiptap', 'ProseMirror'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-800 text-sm rounded-md text-gray-300 border border-gray-700">{tech}</span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors">
              <h4 className="text-blue-400 font-semibold mb-4 text-lg">Backend & Cloud</h4>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'MongoDB', 'AWS S3', 'REST APIs'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-800 text-sm rounded-md text-gray-300 border border-gray-700">{tech}</span>
                ))}
              </div>
            </div>

            {/* Cross-Platform */}
            <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-colors">
              <h4 className="text-purple-400 font-semibold mb-4 text-lg">Cross-Platform</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C#', 'LibreOffice CLI', 'Microservices'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-800 text-sm rounded-md text-gray-300 border border-gray-700">{tech}</span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* EXPERIENCE / PROJECTS */}
        <section>
          <h3 className="text-3xl font-bold text-gray-100 mb-8 border-b border-gray-800 pb-4">Key Engineering Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card 1: Rich Text Editor */}
            <div className="group relative bg-gray-900/80 p-8 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(8,145,178,0.1)]">
              <h4 className="text-2xl font-bold text-gray-100 mb-3">Custom Rich Text Editor Engine</h4>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Engineered a highly complex WYSIWYG editor using React, Tiptap, and ProseMirror. Handled advanced DOM manipulations, isolated multi-editor states, and custom schema generation.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/50 text-cyan-400 text-sm font-medium border border-cyan-900/50">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Deprecated paid Froala subscription
              </div>
            </div>

            {/* Card 2: LibreOffice (Solo) */}
            <div className="group relative bg-gray-900/80 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)]">
              <h4 className="text-2xl font-bold text-gray-100 mb-3">Enterprise PDF Conversion Engine</h4>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Independently built a custom LibreOffice module capable of flawlessly converting industry-grade Word documents to PDFs, including full dynamic Table of Contents (TOC) support.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/50 text-blue-400 text-sm font-medium border border-blue-900/50">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                Replaced paid Filestack API
              </div>
            </div>

            {/* Card 3: Docxtemplater (Team Lead) */}
            <div className="group relative bg-gray-900/80 p-8 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(99,102,241,0.1)]">
              <h4 className="text-2xl font-bold text-gray-100 mb-3">Automated Document Microservice</h4>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Led an engineering team to develop a robust, Python-based document templating engine, scaling document generation workflows and managing complex data injections.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/50 text-indigo-400 text-sm font-medium border border-indigo-900/50">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                Replaced paid Docxtemplater service
              </div>
            </div>

            {/* Card 4: S3 Migration */}
            <div className="group relative bg-gray-900/80 p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(168,85,247,0.1)]">
              <h4 className="text-2xl font-bold text-gray-100 mb-3">Cloud Storage Architecture</h4>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Architected and migrated the enterprise file management system to AWS S3. Built custom handlers for secure, scalable, and highly available asset processing.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/50 text-purple-400 text-sm font-medium border border-purple-900/50">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                Removed heavy-lifting API dependencies
              </div>
            </div>

            {/* Card 5: C# Connector */}
            <div className="group relative md:col-span-2 bg-gray-900/80 p-8 rounded-2xl border border-gray-800 hover:border-pink-500/50 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(236,72,153,0.1)]">
              <h4 className="text-2xl font-bold text-gray-100 mb-3">SolidWorks Desktop Connector</h4>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-3xl">
                Led a cross-functional engineering team to build a secure C# connector, establishing seamless, real-time data synchronization between the core MERN web application and SolidWorks desktop software.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-950/50 text-pink-400 text-sm font-medium border border-pink-900/50">
                <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
                Bridged web and desktop workflows
              </div>
            </div>

          </div>
        </section>
        {/* CAREER TIMELINE */}
        <section>
          <h3 className="text-3xl font-bold text-gray-100 mb-8 border-b border-gray-800 pb-4">Experience</h3>

          <div className="ml-3 border-l-2 border-gray-800 pl-8 space-y-12">

            {/* DealDox - Current */}
            <div className="relative group">
              <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-gray-950 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all"></span>

              <h4 className="text-2xl font-bold text-gray-100">Software Developer</h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-lg mt-1 mb-3">
                <span className="text-cyan-400 font-medium">DealDox.io</span>
                <span className="hidden sm:inline text-gray-600">•</span>
                <span className="text-gray-400 font-mono text-sm">Jul 2024 - Present</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Driving innovation and R&D for CPQ (Configure, Price, Quote) solutions. Architecting robust, highly scalable software infrastructure utilizing the MERN stack to deliver enterprise-grade performance.
              </p>
            </div>

            {/* DealDox - Junior */}
            <div className="relative group">
              <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-950 group-hover:bg-blue-400 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all"></span>

              <h4 className="text-2xl font-bold text-gray-100">Junior Software Developer</h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-lg mt-1 mb-3">
                <span className="text-blue-400 font-medium">DealDox.io</span>
                <span className="hidden sm:inline text-gray-600">•</span>
                <span className="text-gray-400 font-mono text-sm">Jan 2023 - Jun 2024</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Successfully developed and deployed core product features using MongoDB, Express.js, React.js, and Node.js. Designed responsive user interfaces, integrated third-party APIs, and executed performance optimization strategies for speed and efficiency.
              </p>
            </div>

            {/* Bristlecone */}
            <div className="relative group">
              <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-purple-500 border-4 border-gray-950 group-hover:bg-purple-400 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.8)] transition-all"></span>

              <h4 className="text-2xl font-bold text-gray-100">Associate Software Engineer</h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-lg mt-1 mb-3">
                <span className="text-purple-400 font-medium">Bristlecone India Limited (Mahindra Group)</span>
                <span className="hidden sm:inline text-gray-600">•</span>
                <span className="text-gray-400 font-mono text-sm">Mar 2022 - Oct 2022</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Focused on front-end development, engineering responsive and dynamic enterprise web pages utilizing HTML, CSS, JavaScript, and Bootstrap frameworks.
              </p>
            </div>

            {/* XworkZ */}
            <div className="relative group">
              <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-gray-600 border-4 border-gray-950 group-hover:bg-gray-400 group-hover:shadow-[0_0_10px_rgba(156,163,175,0.8)] transition-all"></span>

              <h4 className="text-2xl font-bold text-gray-100">Software Development Trainee</h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-lg mt-1 mb-3">
                <span className="text-gray-300 font-medium">XworkZ ODC</span>
                <span className="hidden sm:inline text-gray-600">•</span>
                <span className="text-gray-400 font-mono text-sm">Oct 2021 - Feb 2022</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Completed an intensive, hands-on training program focused on Java-based modules. Developed applications utilizing Core Java, OOPs concepts, and multithreading while building cross-platform UI screens.
              </p>
            </div>

          </div>
        </section>
        {/* EDUCATION SECTION */}
        <section>
          <h3 className="text-3xl font-bold text-gray-100 mb-8 border-b border-gray-800 pb-4">Education</h3>
          <div className="group relative bg-gray-900/80 p-8 rounded-2xl border border-gray-800 hover:border-emerald-500/50 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h4 className="text-2xl font-bold text-gray-100 mb-2">Bachelor of Mechanical Engineering</h4>
                <p className="text-emerald-400 font-medium text-lg">PESITM • Shivamogga</p>
              </div>
            </div>
          </div>
        </section>
        {/* FIXED FLOATING BACK TO TOP BUTTON */}
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center justify-center w-12 h-12 bg-gray-800 border border-gray-700 hover:border-cyan-500 hover:bg-gray-700 text-gray-300 hover:text-cyan-400 rounded-full shadow-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all hover:-translate-y-1"
            aria-label="Back to top"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
        {/* FOOTER */}
        <footer className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Ullas Kumbati. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Built with 
            <span className="text-cyan-500/70 font-medium">React</span> & 
            <span className="text-cyan-500/70 font-medium">Tailwind</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;