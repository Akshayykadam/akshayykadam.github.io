// ========================================
// PROJECT DATA
// ========================================
const projects = [
    {
        id: 2,
        name: "Atmos - Read the Air",
        folder: "Atmos - Read the Air",
        images: ["536398415-56a7b9fc-c916-48b1-b8f1-8ff75b6a7f7a.png", "536398445-29ce993b-378a-4f99-99dd-67f51cc982bc.png", "536398468-7f2fbe04-dbba-40de-8644-6ae8d10003d4.png", "536398482-5bf0e2d7-218f-4418-b481-fcbec605a6b5.png", "536398508-79e42e65-4589-40ea-a7f0-a5e156000ad7.png"],
        description: "A beautiful React Native app that provides real-time air quality data with an intuitive, immersive interface. Features AI-powered insights and comprehensive AQI monitoring.",
        tech: ["React Native", "APIs", "AQI Data"],
        github: "https://github.com/Akshayykadam/Atmos-Read-the-air",
        emoji: "🌬️",
        category: "mobile"
    },
    {
        id: 4,
        name: "HalloDeutsch",
        folder: "HalloDeutsch",
        images: ["536047679-e7dac5f7-a596-4fbc-9215-337499989891.png", "536047685-e32f2d72-8a3a-43f5-8cbb-8891d1dc2e3a.png", "536047719-8160f3eb-4bc2-472b-b561-4c33f6ec3d18.png", "536047725-d1120c21-cd54-4e92-9e7f-9890ca956c51.png", "536047748-c10c36a9-cf02-419a-ba6c-48b04d607e2d.png"],
        description: "A German language learning app built with React Native. Features interactive lessons, vocabulary practice with flashcards, and audio pronunciations for an immersive learning experience.",
        tech: ["React Native", "Language Learning"],
        github: "https://github.com/Akshayykadam/HalloDeutsch",
        emoji: "🇩🇪",
        category: "mobile"
    },
    {
        id: 9,
        name: "AI Expense Tracker",
        folder: "AI-Powered Expense Tracker",
        images: ["Screenshot_20251231-045713.png", "Screenshot_20251231-100936.png", "Screenshot_20251231-100943.png", "Screenshot_20251231-101019.png", "Screenshot_20251231-101026.png"],
        description: "An intelligent expense tracking app powered by AI. Automatically categorizes transactions, provides insights, and helps you understand your spending patterns.",
        tech: ["AI", "React Native"],
        github: "https://github.com/Akshayykadam/AI-Powered-Expense-Tracker",
        emoji: "💰",
        category: "ai"
    },
    {
        id: 11,
        name: "Liftly - Workout Buddy",
        folder: "Liftly - Workout & Wellness Tracker",
        images: ["528054108-00165087-39ed-4de5-938a-d7164bdfe8e4.png", "528054137-5e8e3849-409b-4465-9bfa-5079c02ab909.png", "528054141-613f95c0-d305-4ab2-a2ae-c04c46d2ac77.png", "528054441-4520e1b9-8c80-4985-8a1f-878681c35098.png", "528054450-57883d41-2fb0-491f-9197-de53966e6acf.png"],
        description: "Your personal workout companion. Features customizable workout plans, exercise tracking, progress visualization, and motivational features to keep you on track.",
        tech: ["React Native", "Fitness"],
        github: "https://github.com/Akshayykadam/Liftly-The-Workout-Buddy",
        emoji: "🏋️",
        category: "mobile"
    },
    {
        id: 12,
        name: "Cosmic Companion",
        folder: "Cosmic Companion",
        images: ["526189915-a42efb51-6d3d-477f-8ff1-e6abb383e45a.png", "526189921-0862dd21-ee5a-47a1-a924-4b73a04db7c7.png", "526189927-3dfb7a24-bc4e-492f-9678-ebc5b0dee369.png", "526189932-9e853d9a-ec7e-4783-b8cb-b2358b0e470d.png", "526189933-daef0955-74cb-40ef-b5e0-8fab4847da48.png"],
        description: "Your daily window to the universe. A beautiful React Native app featuring NASA's stunning space imagery, asteroid tracking, Earth views, and AI-powered explanations.",
        tech: ["React Native", "Space APIs"],
        github: "https://github.com/Akshayykadam/Cosmic-Companion-App",
        emoji: "🌌",
        category: "mobile"
    },
    {
        id: 14,
        name: "Wavefy",
        folder: "Wavefy",
        images: ["523415391-78ebb282-eced-43ad-a2c1-cd1e615a633c.png", "523415402-8d18c16b-09ba-44fe-824e-76aa85724d00.png", "523415407-0eba11cd-6450-4b20-9752-37c09c31092f.png", "523415410-77521de1-8d72-451d-b268-1d9f4946f936.png", "523415414-cbbd9016-c537-4b55-b350-cb45693239e1.png"],
        description: "A modern, premium podcast player with dark-mode UI, offline listening, sleep timer, and playback speed control. Built for the best audio experience.",
        tech: ["Mobile App", "Audio/UI"],
        github: "https://github.com/Akshayykadam/Wavefy",
        emoji: "🎵",
        category: "mobile"
    },
    {
        id: 7,
        name: "OpenTV",
        folder: "OpenTV",
        images: ["531697276-ec53d827-f3a9-4273-939d-42b19a16526b.png", "531697277-d226d59c-ea8d-40fb-9f50-fcc544c5bd7f.png", "531697280-5b6de8dd-1620-46c6-8a32-f4030ea09779.png", "531697283-f84a808b-88f1-4c2d-aa4f-dc13d3e7458b.png", "531697284-2601e452-872f-4b2b-8fa6-654b90586441.png"],
        description: "A media streaming application built with React Native. Browse and stream content with a sleek, modern interface designed for the best viewing experience.",
        tech: ["React Native", "Media Streaming"],
        github: "https://github.com/Akshayykadam/OpenTV",
        emoji: "�",
        category: "mobile"
    },
    {
        id: 6,
        name: "FuelMate",
        folder: "FuelMate",
        images: ["Simulator Screenshot - iPhone 16e - 2025-12-31 at 23.36.00.png", "Simulator Screenshot - iPhone 16e - 2025-12-31 at 23.36.10.png", "Simulator Screenshot - iPhone 16e - 2025-12-31 at 23.36.19.png", "Simulator Screenshot - iPhone 16e - 2025-12-31 at 23.36.36.png", "Simulator Screenshot - iPhone 16e - 2025-12-31 at 23.36.42.png"],
        description: "A comprehensive fuel tracking and vehicle management app. Track fuel expenses, calculate mileage, and monitor your vehicle's performance with beautiful charts and analytics.",
        tech: ["React Native", "Firebase"],
        github: "https://github.com/Akshayykadam/FuelMate",
        emoji: "⛽",
        category: "mobile"
    },
    {
        id: 5,
        name: "Local AI Unity Tool",
        folder: "Local AI ",
        images: ["529724915-e067bbb8-d08b-4176-9793-41a9eda9d359.png", "529724933-fb74575e-3caa-4976-a115-ad0cc08292d6.png", "529724939-9d6d4cf6-224c-4a57-83da-c705b371e962.png", "529724950-2c158764-e918-43fb-a404-a79862a41028.png", "529724956-d1c9c2dd-243d-4c36-8945-c15b665bd063.png"],
        description: "A Unity Editor tool that integrates local AI capabilities directly into your game development workflow. Generate code, analyze scenes, and get AI assistance without leaving Unity.",
        tech: ["Unity", "C#", "Local AI"],
        github: "https://github.com/Akshayykadam/Local-AI-Unity-Tool",
        emoji: "🤖",
        category: "ai"
    },
    {
        id: 3,
        name: "TrueCam",
        folder: "TrueCam",
        images: ["529585447-7207c155-9b2e-454b-a112-5c58836bd768.png", "529585467-91a69da0-f9b6-47d0-8a30-ee1cd7f4cf5b.png", "529585474-b5f7b40d-5da2-42f6-bc4e-4f7816a3acbe.png"],
        description: "A zero-processing Android camera app that captures true-to-life images without any AI enhancement or filters. Pure, unprocessed photography at its finest.",
        tech: ["Android", "Camera API", "Image Processing"],
        github: "https://github.com/Akshayykadam/TrueCam-Zero-Processing-Camera",
        emoji: "📷",
        category: "mobile"
    },
    {
        id: 15,
        name: "PixelNest",
        folder: "PixelNest",
        images: ["523440390-d98539ef-3e94-4028-befe-37de7748be85.png", "523440396-d60901c7-79ae-44a3-9eba-b7da7134777c.png", "523440423-2e5a9f90-53ac-47f1-b0f5-b5a7684201b3.png"],
        description: "A beautiful and immersive wallpaper discovery application. Browse, search, and download high-quality images from a vast collection with a stunning UI.",
        tech: ["UI/UX", "Frontend"],
        github: "https://github.com/Akshayykadam/PixelNest",
        emoji: "🖼️",
        category: "mobile"
    },
    {
        id: 16,
        name: "MoviesPlus",
        folder: "MoviesPlus",
        images: ["Simulator Screenshot - iPhone 15 Pro - 2024-08-15 at 10.08.42.png", "Simulator Screenshot - iPhone 15 Pro - 2024-08-15 at 10.08.47.png", "Simulator Screenshot - iPhone 15 Pro - 2024-08-15 at 10.08.51.png", "Simulator Screenshot - iPhone 15 Pro - 2024-08-15 at 10.09.17.png", "Simulator Screenshot - iPhone 15 Pro - 2024-08-15 at 10.09.21.png"],
        description: "A React Native movie discovery app. Browse trending movies, search for titles, view detailed information, and save your favorites.",
        tech: ["React Native", "Movie APIs"],
        github: "https://github.com/Akshayykadam/MoviesPlus-React-Native-App",
        emoji: "🎬",
        category: "mobile"
    },
    // Projects without images - show icons instead
    {
        id: 10,
        name: "Health Plus",
        folder: "HealthPlus",
        images: ["530419350-9db595d4-50a5-4f8e-b60d-91c3159c9cdb.png", "530419353-4f50f2aa-6acd-4a30-80ed-b3d84b94f273.png", "530419357-39ce4f77-5769-4df6-8038-590a1b5ef698.png", "530419360-3707c312-b743-4664-b270-6f92797f6a16.png", "530419361-5b8f5e5f-7622-476d-9050-75e429f90444.png"],
        description: "A comprehensive health tracking application. Monitor your fitness goals, track daily activities, and maintain a healthy lifestyle with personalized recommendations.",
        tech: ["React Native", "Health Tracking"],
        github: "https://github.com/Akshayykadam/Health-Plus",
        emoji: "💪",
        category: "mobile"
    },
    {
        id: 1,
        name: "Sword Warrior RPG 2D",
        description: "A Unity-built 2D RPG where you control a warrior navigating levels, battling enemies and progressing through action stages. Features melee combat, enemy AI, character movement, and platforming mechanics.",
        tech: ["Unity", "C#", "2D Game Dev"],
        github: "https://github.com/Akshayykadam/sword-warrior-RPG-2D",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.5 17.5L3 6V3h3l11.5 11.5M13 19l6-6M19.5 19.5L21 21"/><path d="M6 6L3 9M9 9L3 15"/></svg>',
        category: "game"
    },
    {
        id: 8,
        name: "Refine AI",
        description: "An AI/ML backend service that provides intelligent data refinement and processing capabilities through clean, well-documented APIs.",
        tech: ["AI/ML", "Backend APIs"],
        github: "https://github.com/Akshayykadam/Refine-AI",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>',
        category: "ai"
    },
    {
        id: 13,
        name: "Real-Time Pose Tracking",
        description: "Unity application integrating MediaPipe for real-time pose and hand tracking. Perfect for motion capture, gesture recognition, and interactive experiences.",
        tech: ["Unity", "MediaPipe", "Computer Vision"],
        github: "https://github.com/Akshayykadam/Real-Time-Pose-Hand-Tracking",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a3 3 0 100 6 3 3 0 000-6zM12 8v3M8 14l-2 8M16 14l2 8M12 11l-4 3M12 11l4 3M8 14h8"/></svg>',
        category: "ai"
    },
    {
        id: 17,
        name: "YouTube Auto PlayPause",
        description: "A browser extension that automatically pauses YouTube videos when you switch tabs and resumes when you return. Smart, simple, and useful.",
        tech: ["JavaScript", "Browser Extension"],
        github: "https://github.com/Akshayykadam/Youtube-Auto-PlayPause-extension",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><polygon points="10,8 16,12 10,16" fill="currentColor"/></svg>',
        category: "other"
    }
];

// ========================================
// DOM ELEMENTS
// ========================================
const orbsContainer = document.getElementById('orbs-container');
const particlesContainer = document.getElementById('particles-container');
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const projectsGrid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('project-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalClose = document.getElementById('modal-close');
const modalContent = document.getElementById('modal-content');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalTech = document.getElementById('modal-tech');
const modalImage = document.getElementById('modal-image');
const modalGithub = document.getElementById('modal-github');

// ========================================
// EXPERIENCE DATA
// ========================================
const experience = [
    {
        start: "March 2022",
        end: "Present",
        role: "Unity Developer",
        company: "Wizphys AI",
        location: "Pune, India",
        summary: "Building AI-powered Unity applications with real-time video processing.",
        highlights: [
            "Developed Unity applications integrated with AI using MediaPipe.",
            "Implemented robust authentication systems with industry security standards.",
            "Managed Firebase databases, cloud storage, and real-time updates.",
            "Optimized cloud storage and media handling for performance.",
            "Designed and maintained responsive, user-focused interfaces.",
            "Integrated third-party payment systems and SDKs.",
            "Documented end-to-end app development for team alignment."
        ]
    },
    {
        start: "November 2021",
        end: "March 2022",
        role: "Junior Game Developer (Freelance)",
        company: "Cypher Mobile Gaming",
        location: "Pune, India",
        summary: "Transitioned into hands-on game development using Unity.",
        highlights: [
            "Implemented character controllers, physics systems, and animations.",
            "Developed interactive gameplay mechanics in Unity.",
            "Collaborated closely with design and art teams to maintain quality.",
            "Contributed to engaging mobile game experiences."
        ]
    },
    {
        start: "July 2020",
        end: "November 2021",
        role: "QA Engineer",
        company: "Jetsynthesys",
        location: "Pune, India",
        summary: "Focused on quality assurance for applications across devices and platforms.",
        highlights: [
            "Performed game testing including guide and compliance testing.",
            "Ensured compatibility across multiple devices and platforms.",
            "Prepared detailed test cases based on requirement specifications.",
            "Executed structured test plans to validate product stability."
        ]
    }
];

// ========================================
// TIMELINE RENDERING
// ========================================
const timelineContainer = document.getElementById('timeline-container');

function renderTimeline() {
    if (!timelineContainer) return;

    // Create progress line element
    const progressLine = document.createElement('div');
    progressLine.className = 'timeline-line-progress';
    progressLine.id = 'timeline-progress';
    timelineContainer.appendChild(progressLine);

    experience.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';

        // Tags generation from specific words or simple highlight mapping if needed, 
        // but for now we'll just format the highlights as bullet points
        const highlightsHtml = item.highlights.map(h => `<li>${h}</li>`).join('');

        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="timeline-date">${item.start} - ${item.end}</span>
                <h3 class="timeline-title">${item.role}</h3>
                <div class="timeline-company">
                    ${item.company} <span class="location">📍 ${item.location}</span>
                </div>
                <p class="timeline-description">${item.summary}</p>
                <ul class="timeline-highlights" style="list-style-type: disc; padding-left: 20px; margin-top: 10px; color: var(--text-secondary); font-size: 0.9rem;">
                   ${highlightsHtml}
                </ul>
            </div>
        `;

        timelineContainer.appendChild(timelineItem);
    });

    initTimelineAnimation();
}

function initTimelineAnimation() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Light up dot
                const dot = entry.target.querySelector('.timeline-dot');
                if (dot) dot.classList.add('active');
            }
        });
    }, observerOptions);

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    // Scroll progress for the line
    window.addEventListener('scroll', updateTimelineProgress);
}

function updateTimelineProgress() {
    const timeline = document.getElementById('timeline-container');
    const progressLine = document.getElementById('timeline-progress');

    if (!timeline || !progressLine) return;

    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Start drawing when top of timeline hits 50% of screen
    const startOffset = windowHeight / 2;

    // Calculate how much of the timeline has passed the center of the screen
    let percentage = (startOffset - rect.top) / rect.height;

    // Clamp between 0 and 1
    percentage = Math.max(0, Math.min(1, percentage));

    progressLine.style.height = `${percentage * 100}%`;
}

// Call render
renderTimeline();

// ========================================
// CUSTOM CURSOR
// ========================================
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    // Smooth cursor movement
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;

    // Slower follower
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;

    if (cursor) {
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
    }

    if (cursorFollower) {
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
    }

    requestAnimationFrame(animateCursor);
}

// Cursor hover effects
const hoverElements = document.querySelectorAll('a, button, .btn, .project-card, .filter-btn, .service-card, .contact-link');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        if (cursor) cursor.classList.add('active');
        if (cursorFollower) cursorFollower.classList.add('active');
    });
    el.addEventListener('mouseleave', () => {
        if (cursor) cursor.classList.remove('active');
        if (cursorFollower) cursorFollower.classList.remove('active');
    });
});

// Start cursor animation
animateCursor();

// ========================================
// FLOATING PARTICLES
// ========================================
let particles = [];
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

// Update dimensions on resize
window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    initParticles(); // Re-initialize on resize
});

function initParticles() {
    // Clear existing
    particles.forEach(p => p.element.remove());
    particles = [];

    // Responsive count: fewer particles on mobile for performance
    const isMobile = windowWidth < 768;
    const particleCount = isMobile ? 50 : 100;

    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Random position (pixels)
    const x = Math.random() * windowWidth;
    const y = Math.random() * windowHeight;

    // Set initial position using transform for performance
    particle.style.transform = `translate3d(${x}px, ${y}px, 0)`;

    // Random size variation
    const size = 2 + Math.random() * 4;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    // Random animation timing (CSS animation still handles pulse/glow)
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (15 + Math.random() * 20) + 's';

    particlesContainer.appendChild(particle);

    // Store particle data for interaction
    const mass = 0.8 + Math.random() * 0.7; // Random mass 0.8 - 1.5

    particles.push({
        element: particle,
        x: x,
        y: y,
        originX: x,
        originY: y,
        vx: 0,
        vy: 0,
        mass: mass,
        friction: 0.92 + Math.random() * 0.04,
        springFactor: 0.003 + Math.random() * 0.002
    });
}

function createParticles() {
    initParticles();
}

// Interactive particles - respond to clicks & touch
function handleInteraction(x, y) {
    createClickRipple(x, y);

    particles.forEach(p => {
        const dx = p.x - x;
        const dy = p.y - y;
        const distSq = dx * dx + dy * dy;
        const maxDistSq = 500 * 500; // 500px radius

        if (distSq < maxDistSq) {
            const distance = Math.sqrt(distSq);
            // Wave propagation delay
            const delay = distance * 1.5;

            setTimeout(() => {
                const angle = Math.atan2(dy, dx);
                // Inverse square law for force, modified by mass
                const force = (150 * Math.exp(-distance / 200)) / p.mass;

                p.vx += Math.cos(angle) * force;
                p.vy += Math.sin(angle) * force;

                // Visual feedback
                p.element.style.transition = 'filter 0.3s ease';
                p.element.style.filter = 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.8)) text-shadow(0 0 8px rgba(6, 182, 212, 0.8))';
                // Removed scale transform from here to avoid conflict with physics transform

                setTimeout(() => {
                    p.element.style.filter = '';
                }, 600);
            }, delay);
        }
    });
}

function handleBackgroundClick(e) {
    if (e.target.closest('a, button, .btn, .project-card, .filter-btn, .service-card, .contact-link, .nav, input, textarea')) {
        return;
    }
    handleInteraction(e.clientX, e.clientY);
}

// Touch support
document.addEventListener('touchstart', (e) => {
    // Only handle single touch on background
    if (e.touches.length === 1 && !e.target.closest('a, button, input, .card')) {
        const touch = e.touches[0];
        handleInteraction(touch.clientX, touch.clientY);
    }
}, { passive: true });


// Mouse wake effect
let lastMouseX = 0;
let lastMouseY = 0;

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calculate mouse velocity
    const velX = mouseX - lastMouseX;
    const velY = mouseY - lastMouseY;
    const speedSq = velX * velX + velY * velY;

    if (speedSq > 25) { // speed > 5
        const speed = Math.sqrt(speedSq);
        particles.forEach(p => {
            const dx = p.x - mouseX;
            const dy = p.y - mouseY;
            const distSq = dx * dx + dy * dy;

            if (distSq < 22500) { // 150px radius
                const dist = Math.sqrt(distSq);
                // Drag effect (wake)
                const force = (5 / Math.max(dist, 10)) * speed * 0.1;
                p.vx += velX * force / p.mass;
                p.vy += velY * force / p.mass;
            }
        });
    }

    lastMouseX = mouseX;
    lastMouseY = mouseY;
}, { passive: true });

function createClickRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.className = 'click-ripple';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    // Ensure ripple doesn't interfere with interaction
    ripple.style.pointerEvents = 'none';
    document.body.appendChild(ripple);

    setTimeout(() => ripple.remove(), 800);
}

// Animate particles using Transform for performance
function animateParticles() {
    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Physics Loop (always run to handle gentle movement)

        // Subtle turbulence
        p.vx += (Math.random() - 0.5) * 0.05;
        p.vy += (Math.random() - 0.5) * 0.05;

        // Apply velocity
        p.x += p.vx;
        p.y += p.vy;

        // Viscous drag
        p.vx *= p.friction;
        p.vy *= p.friction;

        // Elastic return force
        const dx = p.originX - p.x;
        const dy = p.originY - p.y;

        p.vx += dx * p.springFactor;
        p.vy += dy * p.springFactor;

        // Apply transform
        // Use translate3d for GPU acceleration
        // Round to 1 decimal place for potential slight performance gain in string construction
        p.element.style.transform = `translate3d(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px, 0)`;
    }

    requestAnimationFrame(animateParticles);
}

// Start particle animation loop
document.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(animateParticles);
});

// Add click listener
document.addEventListener('click', handleBackgroundClick);


// ========================================
// FLOATING ORBS
// ========================================
function createOrbs() {
    const orbs = [
        { class: 'orb-1' },
        { class: 'orb-2' },
        { class: 'orb-3' },
        { class: 'orb-4' }
    ];

    orbs.forEach(orb => {
        const div = document.createElement('div');
        div.className = `orb ${orb.class}`;
        orbsContainer.appendChild(div);
    });
}

// ========================================
// FLOATING JELLYFISH
// ========================================
const jellyfishContainer = document.getElementById('jellyfish-container');

function createJellyfish() {
    const jellyfish = document.createElement('div');

    // Random size
    const sizes = ['size-sm', '', 'size-lg'];
    const size = sizes[Math.floor(Math.random() * sizes.length)];

    // Random color
    const colors = ['', 'color-pink', 'color-cyan'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    jellyfish.className = `jellyfish ${size} ${color}`;

    // Random starting position
    const startX = Math.random() * window.innerWidth;
    jellyfish.style.left = startX + 'px';
    jellyfish.style.bottom = '-100px';

    // Random drift and duration
    const driftX = (Math.random() - 0.5) * 300;
    const duration = 20000 + Math.random() * 15000;
    const rotation = (Math.random() - 0.5) * 30;

    jellyfish.style.setProperty('--drift-x', driftX + 'px');
    jellyfish.style.setProperty('--rotation', rotation + 'deg');

    jellyfish.innerHTML = `
        <div class="jellyfish-body">
            <div class="jellyfish-tentacles">
                <div class="tentacle"></div>
                <div class="tentacle"></div>
                <div class="tentacle"></div>
                <div class="tentacle"></div>
                <div class="tentacle"></div>
            </div>
        </div>
    `;

    jellyfishContainer.appendChild(jellyfish);

    // Animate floating up
    jellyfish.style.animation = `jellyfishFloat ${duration}ms linear forwards`;

    // Remove after animation completes
    setTimeout(() => {
        jellyfish.remove();
    }, duration);
}

function startJellyfishSpawner() {
    // Create initial jellyfish
    for (let i = 0; i < 3; i++) {
        setTimeout(() => createJellyfish(), i * 2000);
    }

    // Spawn new jellyfish periodically
    setInterval(() => {
        if (jellyfishContainer && jellyfishContainer.children.length < 6) {
            createJellyfish();
        }
    }, 4000 + Math.random() * 3000);
}

// ========================================
// NAVIGATION
// ========================================
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========================================
// PROJECT CARDS
// ========================================

// Cache for project images (folder -> first image path)
const projectImageCache = {};

// Preload project images by checking available images in each folder
async function preloadProjectImages() {
    // This will be populated dynamically as images load
    // We'll use a simple approach: try the first image and fallback to emoji
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    card.dataset.category = project.category;
    card.dataset.id = project.id;

    // Check if project has a folder with images
    let imageHtml;
    if (project.folder && project.images && project.images.length > 0) {
        // Create premium overlapping collage with up to 5 images
        const imagesToShow = project.images.slice(0, Math.min(5, project.images.length));
        const folderPath = `assets/projects/${project.folder}`;

        // Positions for each screen in the collage
        const positions = [
            'collage-far-left',  // Far left screen
            'collage-left',      // Left screen
            'collage-center',    // Center screen (most prominent)
            'collage-right',     // Right screen
            'collage-far-right'  // Far right screen
        ];

        // Build ordered images based on count
        const orderedImages = [];
        const count = imagesToShow.length;

        if (count === 1) {
            orderedImages.push({ img: imagesToShow[0], pos: 'collage-solo' });
        } else if (count === 2) {
            orderedImages.push({ img: imagesToShow[0], pos: 'collage-left' });
            orderedImages.push({ img: imagesToShow[1], pos: 'collage-right' });
        } else if (count === 3) {
            orderedImages.push({ img: imagesToShow[1], pos: 'collage-center' });
            orderedImages.push({ img: imagesToShow[0], pos: 'collage-left' });
            orderedImages.push({ img: imagesToShow[2], pos: 'collage-right' });
        } else if (count === 4) {
            orderedImages.push({ img: imagesToShow[1], pos: 'collage-center' });
            orderedImages.push({ img: imagesToShow[0], pos: 'collage-left' });
            orderedImages.push({ img: imagesToShow[2], pos: 'collage-right' });
            orderedImages.push({ img: imagesToShow[3], pos: 'collage-far-right' });
        } else if (count >= 5) {
            orderedImages.push({ img: imagesToShow[2], pos: 'collage-center' });
            orderedImages.push({ img: imagesToShow[1], pos: 'collage-left' });
            orderedImages.push({ img: imagesToShow[3], pos: 'collage-right' });
            orderedImages.push({ img: imagesToShow[0], pos: 'collage-far-left' });
            orderedImages.push({ img: imagesToShow[4], pos: 'collage-far-right' });
        }

        const collageItems = orderedImages.map(item =>
            `<img src="${folderPath}/${item.img}" alt="${project.name}" class="collage-screen ${item.pos}" loading="lazy">`
        ).join('');

        imageHtml = `
            <div class="project-image project-collage">
                ${collageItems}
                <span class="project-image-placeholder" style="display:none;">${project.emoji}</span>
            </div>
        `;
    } else {
        // Projects without images - show SVG icon or emoji
        const placeholder = project.icon
            ? `<span class="project-icon-placeholder">${project.icon}</span>`
            : `<span class="project-image-placeholder">${project.emoji}</span>`;
        imageHtml = `
            <div class="project-image">
                ${placeholder}
            </div>
        `;
    }

    card.innerHTML = `
        ${imageHtml}
        <div class="project-content">
            <h3 class="project-title">
                ${project.name}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
            </h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
        </div>
    `;

    // Handle image load errors - show placeholder if collage fails
    if (project.folder && project.images && project.images.length > 0) {
        const collageScreens = card.querySelectorAll('.collage-screen');
        const placeholder = card.querySelector('.project-image-placeholder');
        let loadedCount = 0;
        let errorCount = 0;

        collageScreens.forEach(img => {
            img.onload = () => {
                loadedCount++;
            };
            img.onerror = () => {
                errorCount++;
                img.style.display = 'none';
                // If all images failed, show placeholder
                if (errorCount === collageScreens.length) {
                    placeholder.style.display = 'flex';
                }
            };
        });
    }

    card.addEventListener('click', () => openModal(project));
    return card;
}

function renderProjects(filter = 'all') {
    projectsGrid.innerHTML = '';

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    filteredProjects.forEach((project, index) => {
        const card = createProjectCard(project);
        card.style.animationDelay = `${index * 0.1}s`;
        projectsGrid.appendChild(card);
    });

    // Trigger fade-in animation
    setTimeout(() => {
        document.querySelectorAll('.project-card.fade-in').forEach(card => {
            card.classList.add('visible');
        });
    }, 100);
}

// ========================================
// FILTER FUNCTIONALITY
// ========================================
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.dataset.filter);
    });
});

// ========================================
// MODAL
// ========================================
let currentSlide = 0;
let currentImages = [];

function openModal(project) {
    modalTitle.textContent = project.name;
    modalDescription.textContent = project.description;
    modalTech.innerHTML = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
    modalGithub.href = project.github;

    // Handle images - show collage layout like project cards
    if (project.folder && project.images && project.images.length > 0) {
        currentImages = project.images.map(img => `assets/projects/${project.folder}/${img}`);
        currentSlide = Math.floor(currentImages.length / 2); // Start with middle image focused

        // Create collage with all images visible
        const imageItems = currentImages.map((img, index) =>
            `<img src="${img}" alt="${project.name}" class="modal-collage-img ${index === currentSlide ? 'focused' : ''}" data-index="${index}">`
        ).join('');

        const dots = currentImages.map((_, index) =>
            `<span class="modal-dot ${index === currentSlide ? 'active' : ''}" data-index="${index}"></span>`
        ).join('');

        modalImage.innerHTML = `
            <div class="modal-collage" id="modal-collage">
                ${imageItems}
            </div>
            <div class="modal-dots-slider" id="modal-dots">
                ${dots}
            </div>
        `;

        // Position images based on focused index
        updateCollagePositions();

        // Add click handlers to dots
        document.querySelectorAll('.modal-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                focusImage(parseInt(dot.dataset.index));
            });
        });

        // Add click handlers to images  
        document.querySelectorAll('.modal-collage-img').forEach(img => {
            img.addEventListener('click', () => {
                focusImage(parseInt(img.dataset.index));
            });
        });

        // Add scroll/wheel handler to collage container
        const collageContainer = document.getElementById('modal-collage');
        collageContainer.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (e.deltaY > 0 || e.deltaX > 0) {
                focusImage(Math.min(currentSlide + 1, currentImages.length - 1));
            } else {
                focusImage(Math.max(currentSlide - 1, 0));
            }
        });

        // Add drag/slide functionality to dots slider (with reduced sensitivity)
        const dotsSlider = document.getElementById('modal-dots');
        let isDragging = false;
        let lastFocusedIndex = currentSlide;

        dotsSlider.addEventListener('mousedown', (e) => {
            isDragging = true;
            lastFocusedIndex = currentSlide;
            e.preventDefault();
        });

        dotsSlider.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const dot = e.target.closest('.modal-dot');
            if (dot) {
                const newIndex = parseInt(dot.dataset.index);
                // Only change if moved to a different dot
                if (newIndex !== lastFocusedIndex) {
                    lastFocusedIndex = newIndex;
                    focusImage(newIndex);
                }
            }
        });

        dotsSlider.addEventListener('mouseup', () => {
            isDragging = false;
        });

        dotsSlider.addEventListener('mouseleave', () => {
            isDragging = false;
        });

        // Touch support for mobile (also with reduced sensitivity)
        let lastTouchIndex = currentSlide;
        dotsSlider.addEventListener('touchmove', (e) => {
            const touch = e.touches[0];
            const element = document.elementFromPoint(touch.clientX, touch.clientY);
            if (element && element.classList.contains('modal-dot')) {
                const newIndex = parseInt(element.dataset.index);
                if (newIndex !== lastTouchIndex) {
                    lastTouchIndex = newIndex;
                    focusImage(newIndex);
                }
            }
        });
    } else {
        currentImages = [];
        // Show icon for projects without images
        const displayContent = project.icon
            ? `<span class="modal-icon">${project.icon}</span>`
            : `<span style="font-size: 5rem;">${project.emoji}</span>`;
        modalImage.innerHTML = displayContent;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function focusImage(index) {
    currentSlide = index;
    updateCollagePositions();

    // Update dots
    document.querySelectorAll('.modal-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function updateCollagePositions() {
    const images = document.querySelectorAll('.modal-collage-img');
    const count = images.length;

    images.forEach((img, i) => {
        img.classList.remove('focused', 'left-1', 'left-2', 'right-1', 'right-2', 'hidden-left', 'hidden-right');

        const offset = i - currentSlide;

        if (offset === 0) {
            img.classList.add('focused');
        } else if (offset === -1) {
            img.classList.add('left-1');
        } else if (offset === -2) {
            img.classList.add('left-2');
        } else if (offset === 1) {
            img.classList.add('right-1');
        } else if (offset === 2) {
            img.classList.add('right-2');
        } else if (offset < -2) {
            img.classList.add('hidden-left');
        } else if (offset > 2) {
            img.classList.add('hidden-right');
        }
    });
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ========================================
// SCROLL ANIMATIONS
// ========================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

function initScrollAnimations() {
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// ========================================
// SMOOTH SCROLL
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// PARALLAX EFFECT FOR ORBS
// ========================================
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const orbs = document.querySelectorAll('.orb');

            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 0.1;
                orb.style.transform = `translateY(${scrolled * speed}px)`;
            });

            ticking = false;
        });
        ticking = true;
    }
});

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    createOrbs();
    createParticles();
    startJellyfishSpawner();
    renderProjects();
    initScrollAnimations();
});
