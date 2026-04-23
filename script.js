// ========================================
// PROJECT DATA
// ========================================
const projects = [
    {
        id: 23,
        name: "Pixio",
        folder: "Pixio",
        images: ["Simulator Screenshot - iPhone 16 Pro - 2026-04-22 at 13.05.17.png", "Simulator Screenshot - iPhone 16 Pro - 2026-04-22 at 13.03.21.png", "Simulator Screenshot - iPhone 16 Pro - 2026-04-22 at 13.13.38.png", "Simulator Screenshot - iPhone 16 Pro - 2026-04-22 at 13.13.19.png", "Simulator Screenshot - iPhone 16 Pro - 2026-04-22 at 12.19.13.png"],
        description: "A premium, open-source wallpaper app with AMOLED Pure Black design and dynamic Glassmorphism UI. Features Spotlight discovery, Mood-based color search, one-tap wallpaper setting, and high-res downloads — all powered by the Pexels API.",
        tech: ["React Native", "Expo", "Pexels API"],
        github: "https://github.com/Akshayykadam/Pixio",
        release: "https://github.com/Akshayykadam/Pixio/releases",
        releaseVersion: "Latest",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/><path d="M14 14l3-3 4 4"/></svg>',
        category: "mobile"
    },
    {
        id: 18,
        name: "TrainIQ",
        folder: "TrainIQ",
        images: ["Screenshot_1768888951.png", "Screenshot_1768888956.png", "Screenshot_1768888958.png", "Screenshot_1768888965.png", "Screenshot_20260120-114309.png"],
        description: "A smart training assistant designed to optimize your workouts. Features intelligent tracking, performance analytics, and personalized recommendations to elevate your fitness journey.",
        tech: ["React Native", "Fitness", "Analytics"],
        github: "https://github.com/Akshayykadam/TrainIQ",
        release: "https://github.com/Akshayykadam/TrainIQ/releases",
        releaseVersion: "Latest",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a7 7 0 017 7c0 2.5-1.5 4.5-3 6l-1 4H9l-1-4c-1.5-1.5-3-3.5-3-6a7 7 0 017-7z"/><path d="M9 19h6M10 22h4"/></svg>',
        category: "mobile"
    },
    {
        id: 2,
        name: "Atmos - Read the Air",
        folder: "Atmos - Read the Air",
        images: ["536398415-56a7b9fc-c916-48b1-b8f1-8ff75b6a7f7a.png", "536398445-29ce993b-378a-4f99-99dd-67f51cc982bc.png", "536398468-7f2fbe04-dbba-40de-8644-6ae8d10003d4.png", "536398482-5bf0e2d7-218f-4418-b481-fcbec605a6b5.png", "536398508-79e42e65-4589-40ea-a7f0-a5e156000ad7.png"],
        description: "A beautiful React Native app that provides real-time air quality data with an intuitive, immersive interface. Features AI-powered insights and comprehensive AQI monitoring.",
        tech: ["React Native", "APIs", "AQI Data"],
        github: "https://github.com/Akshayykadam/Atmos-Read-the-air",
        release: "https://github.com/Akshayykadam/Atmos-Read-the-air/releases",
        releaseVersion: "Latest",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/></svg>',
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
        release: "https://github.com/Akshayykadam/HalloDeutsch/releases",
        releaseVersion: "Latest",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M4 14.5A2.5 2.5 0 016.5 12H20"/><path d="M4 9.5A2.5 2.5 0 016.5 7H20"/><path d="M4 4.5A2.5 2.5 0 016.5 2H20"/></svg>',
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
        release: "https://github.com/Akshayykadam/AI-Powered-Expense-Tracker/releases",
        releaseVersion: "Latest",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6"/></svg>',
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
        release: "https://github.com/Akshayykadam/Liftly-The-Workout-Buddy/releases",
        releaseVersion: "Latest",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6.5 6.5l11 11M6.5 17.5l11-11"/><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>',
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
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
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
        release: "https://github.com/Akshayykadam/Wavefy/releases",
        releaseVersion: "Latest",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
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
        release: "https://github.com/Akshayykadam/OpenTV/releases",
        releaseVersion: "Latest",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
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
        release: "https://github.com/Akshayykadam/FuelMate/releases",
        releaseVersion: "Latest",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 22V6a2 2 0 012-2h8a2 2 0 012 2v16"/><path d="M15 10h2a2 2 0 012 2v3a2 2 0 004 0V8l-3-3"/><path d="M5 10h8"/></svg>',
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
        release: "https://github.com/Akshayykadam/Local-AI-Unity-Tool/releases",
        releaseVersion: "Latest",
        releaseLabel: "Download Package",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M12 2v6M7 13h0M17 13h0M9 17h6"/><circle cx="7" cy="2" r="0" /><path d="M3 14h-1M22 14h-1"/></svg>',
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
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>',
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
        release: "https://github.com/Akshayykadam/PixelNest/releases",
        releaseVersion: "Latest",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>',
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
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="2.18"/><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5"/></svg>',
        category: "mobile"
    },
    {
        id: 10,
        name: "Health Plus",
        folder: "HealthPlus",
        images: ["530419350-9db595d4-50a5-4f8e-b60d-91c3159c9cdb.png", "530419353-4f50f2aa-6acd-4a30-80ed-b3d84b94f273.png", "530419357-39ce4f77-5769-4df6-8038-590a1b5ef698.png", "530419360-3707c312-b743-4664-b270-6f92797f6a16.png", "530419361-5b8f5e5f-7622-476d-9050-75e429f90444.png"],
        description: "A comprehensive health tracking application. Monitor your fitness goals, track daily activities, and maintain a healthy lifestyle with personalized recommendations.",
        tech: ["React Native", "Health Tracking"],
        github: "https://github.com/Akshayykadam/Health-Plus",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
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
    },
    {
        id: 19,
        name: "GitHub Contributions Wallpaper",
        folder: "GitHub Contributions Live Wallpaper",
        images: ["1.png", "2.png", "3.png"],
        description: "A premium Android Live Wallpaper that brings your GitHub contributions graph right to your home screen. Beautiful, real-time visualization of your coding activity.",
        tech: ["Android", "Kotlin", "Live Wallpaper"],
        github: "https://github.com/Akshayykadam/GitHub-Contributions-Live-Wallpaper",
        release: "https://github.com/Akshayykadam/GitHub-Contributions-Live-Wallpaper/releases",
        releaseVersion: "Latest",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
        category: "mobile"
    },
    {
        id: 20,
        name: "OpenCity3D Engine",
        folder: "GeoCity3D — OpenStreetMap 3D City Generator",
        images: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"],
        description: "Generate real-world 3D cities in Unity directly from OpenStreetMap data with a single click. No external tools or complex parsing required.",
        tech: ["Unity", "C#", "OpenStreetMap"],
        github: "https://github.com/Akshayykadam/OpenCity3D-Engine",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 21h18M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6M9 9h0M15 9h0M9 13h0M15 13h0"/></svg>',
        category: "game",
        featured: true
    },
    {
        id: 21,
        name: "UnityLink Chat",
        description: "Drop-in Unity chat plugin with 1-to-1 messaging, groups, media sharing, reactions, and E2E encryption. Built on Firebase, works on Android, iOS, and Desktop.",
        tech: ["Unity", "Firebase", "Chat SDK"],
        github: "https://github.com/Akshayykadam/UnityLink-Chat",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>',
        category: "game"
    },
    {
        id: 22,
        name: "InnerLoop",
        description: "A voice-first AI companion for mental well-being. Real-time empathetic coaching sessions with privacy-first architecture and emotional intelligence assessment.",
        tech: ["React Native", "AI", "Voice"],
        github: "https://github.com/Akshayykadam/InnerLoop",
        release: "https://github.com/Akshayykadam/InnerLoop/releases",
        releaseVersion: "Latest",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>',
        category: "ai"
    },
    {
        id: 24,
        name: "ChopLight",
        description: "A super lightweight, headless Android utility that toggles your flashlight with a quick double karate chop gesture. No UI, no bloat — just ~400KB of pure Kotlin running as a battery-optimized foreground service.",
        tech: ["Android", "Kotlin"],
        github: "https://github.com/Akshayykadam/ChopLight",
        release: "https://github.com/Akshayykadam/ChopLight/releases",
        releaseVersion: "1.0.0",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/><circle cx="12" cy="12" r="4"/><path d="M12 8v4l2 2"/></svg>',
        category: "mobile"
    }
];

// ========================================
// DOM REFERENCES
// ========================================
const cursorDot = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const featuredGrid = document.getElementById('featured-projects');
const projectsGrid = document.getElementById('projects-grid');
const moreList = document.getElementById('more-list');
const modal = document.getElementById('project-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalTech = document.getElementById('modal-tech');
const modalImage = document.getElementById('modal-image');
const modalGithub = document.getElementById('modal-github');
const typedRole = document.getElementById('typed-role');
const gridCanvas = document.getElementById('grid-canvas');

// ========================================
// ANIMATED GRID BACKGROUND
// ========================================
function initGrid() {
    const ctx = gridCanvas.getContext('2d');
    let w, h;
    const CELL = 60;
    const dots = [];

    function resize() {
        w = gridCanvas.width = window.innerWidth;
        h = gridCanvas.height = window.innerHeight;
        // Rebuild dot grid
        dots.length = 0;
        for (let x = 0; x <= w; x += CELL) {
            for (let y = 0; y <= h; y += CELL) {
                dots.push({ x, y, phase: Math.random() * Math.PI * 2 });
            }
        }
    }

    resize();
    window.addEventListener('resize', resize);

    let time = 0;
    let lastTime = 0;
    function draw(timestamp) {
        if (!lastTime) lastTime = timestamp;
        const deltaTime = timestamp - lastTime;
        lastTime = timestamp;

        // 0.015 per frame at 60fps (~16.67ms) is approx deltaTime * 0.0009
        time += deltaTime * 0.0009;
        ctx.clearRect(0, 0, w, h);

        // Draw grid lines
        ctx.strokeStyle = 'rgba(57, 211, 83, 0.04)';
        ctx.lineWidth = 0.5;
        for (let x = 0; x <= w; x += CELL) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
            ctx.stroke();
        }
        for (let y = 0; y <= h; y += CELL) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
        }

        // Draw glowing dots at intersections
        dots.forEach(dot => {
            const pulse = Math.sin(time + dot.phase) * 0.5 + 0.5;
            const alpha = 0.05 + pulse * 0.15;
            const radius = 1 + pulse * 1.5;

            ctx.beginPath();
            ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(57, 211, 83, ${alpha})`;
            ctx.fill();

            // Glow
            if (pulse > 0.7) {
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, radius + 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(57, 211, 83, ${(pulse - 0.7) * 0.15})`;
                ctx.fill();
            }

            // Interactive Cursor Connection
            if (!isTouchDevice) {
                const dx = dot.x - mouseX;
                const dy = dot.y - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    const intensity = 1 - (dist / 150);
                    
                    // Thicker/brighter dot
                    ctx.beginPath();
                    ctx.arc(dot.x, dot.y, radius + intensity * 2, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(57, 211, 83, ${alpha + intensity * 0.5})`;
                    ctx.fill();

                    // Connecting line
                    ctx.beginPath();
                    ctx.moveTo(dot.x, dot.y);
                    ctx.lineTo(mouseX, mouseY);
                    ctx.strokeStyle = `rgba(57, 211, 83, ${intensity * 0.2})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        });

        requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
}

// ========================================
// MAGNETIC CURSOR
// ========================================
let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;
const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

if (!isTouchDevice) {
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    let lastCursorTime = 0;
    function animateCursor(timestamp) {
        if (!lastCursorTime) lastCursorTime = timestamp;
        const deltaTime = timestamp - lastCursorTime;
        lastCursorTime = timestamp;

        // Dot follows instantly
        if (cursorDot) {
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        }

        // Ring lags behind smoothly
        // Original factor was 0.12 at 60fps (16.67ms)
        const factor = 1 - Math.pow(1 - 0.12, deltaTime / 16.666);
        ringX += (mouseX - ringX) * factor;
        ringY += (mouseY - ringY) * factor;

        if (cursorRing) {
            cursorRing.style.left = ringX + 'px';
            cursorRing.style.top = ringY + 'px';
        }

        requestAnimationFrame(animateCursor);
    }

    requestAnimationFrame(animateCursor);

    // Expand on interactive elements
    document.addEventListener('mouseover', (e) => {
        const interactive = e.target.closest('a, button, .btn, .project-card, .skill-tag, .connect-card, .more-item, .featured-card');
        if (interactive) {
            cursorDot?.classList.add('active');
            cursorRing?.classList.add('active');
        }
    });

    document.addEventListener('mouseout', (e) => {
        const interactive = e.target.closest('a, button, .btn, .project-card, .skill-tag, .connect-card, .more-item, .featured-card');
        if (interactive) {
            cursorDot?.classList.remove('active');
            cursorRing?.classList.remove('active');
        }
    });
}

// ========================================
// TYPING EFFECT
// ========================================
const roles = [
    'Game Developer',
    'Mobile Engineer',
    'AI Integrator',
    'Unity Specialist',
    'React Native Dev',
    'Problem Solver'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 80;

function typeRole() {
    const current = roles[roleIndex];

    if (!isDeleting) {
        typedRole.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            isDeleting = true;
            typingSpeed = 2000; // pause before deleting
        } else {
            typingSpeed = 80 + Math.random() * 40;
        }
    } else {
        typedRole.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 400;
        } else {
            typingSpeed = 40;
        }
    }

    setTimeout(typeRole, typingSpeed);
}

// ========================================
// NAVIGATION
// ========================================
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========================================
// PROJECT RENDERING
// ========================================

// Build image collage HTML for a project
function buildCollageHtml(project, containerClass) {
    if (!project.folder || !project.images || project.images.length === 0) {
        const placeholder = project.icon
            ? `<span class="project-icon-placeholder">${project.icon}</span>`
            : `<span class="project-icon-placeholder">${project.icon}</span>`;
        return `<div class="${containerClass}">${placeholder}</div>`;
    }

    const images = project.images.slice(0, 5);
    const folderPath = `assets/projects/${project.folder}`;
    const positions = ['collage-far-left', 'collage-left', 'collage-center', 'collage-right', 'collage-far-right'];

    const ordered = [];
    const count = images.length;

    if (count === 1) {
        ordered.push({ img: images[0], pos: 'collage-center' });
    } else if (count === 2) {
        ordered.push({ img: images[0], pos: 'collage-left' });
        ordered.push({ img: images[1], pos: 'collage-right' });
    } else if (count === 3) {
        ordered.push({ img: images[1], pos: 'collage-center' });
        ordered.push({ img: images[0], pos: 'collage-left' });
        ordered.push({ img: images[2], pos: 'collage-right' });
    } else if (count === 4) {
        ordered.push({ img: images[1], pos: 'collage-center' });
        ordered.push({ img: images[0], pos: 'collage-left' });
        ordered.push({ img: images[2], pos: 'collage-right' });
        ordered.push({ img: images[3], pos: 'collage-far-right' });
    } else if (count >= 5) {
        ordered.push({ img: images[2], pos: 'collage-center' });
        ordered.push({ img: images[1], pos: 'collage-left' });
        ordered.push({ img: images[3], pos: 'collage-right' });
        ordered.push({ img: images[0], pos: 'collage-far-left' });
        ordered.push({ img: images[4], pos: 'collage-far-right' });
    }

    const items = ordered.map(item =>
        `<img src="${folderPath}/${item.img}" alt="${project.name}" class="collage-screen ${item.pos}" loading="lazy">`
    ).join('');

    return `<div class="${containerClass}">${items}</div>`;
}

// Featured projects (full-width)
function renderFeatured() {
    const featured = projects.filter(p => p.featured);
    featured.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'featured-card reveal';
        card.style.transitionDelay = `${index * 0.15}s`;

        const imgHtml = buildCollageHtml(project, 'featured-image');
        const techHtml = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');

        card.innerHTML = `
            ${imgHtml}
            <div class="featured-info">
                <h3 class="featured-title scramble">${project.name}</h3>
                <p class="featured-desc">${project.description}</p>
                <div class="featured-tech">${techHtml}</div>
                <a href="${project.github}" target="_blank" rel="noopener" class="featured-link" onclick="event.stopPropagation();">
                    View on GitHub
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </a>
            </div>
        `;

        card.addEventListener('click', () => openModal(project));
        featuredGrid.appendChild(card);
    });
}

// Grid projects (3-column) — non-featured with images
function renderGridProjects() {
    const gridProjects = projects.filter(p => !p.featured && p.folder && p.images && p.images.length > 0);
    const show = gridProjects.slice(0, 9);

    show.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card reveal';
        card.style.transitionDelay = `${index * 0.1}s`;

        const imgHtml = buildCollageHtml(project, 'project-image');
        const techHtml = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');

        const downloadBtn = project.release ? `
            <a href="${project.release}" target="_blank" rel="noopener" class="download-btn" onclick="event.stopPropagation();">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                <span>${project.releaseLabel || 'Download APK'}</span>
                <span class="version-tag">${project.releaseVersion}</span>
            </a>
        ` : '';

        card.innerHTML = `
            ${imgHtml}
            <div class="project-content">
                <h3 class="project-title">
                    <span class="scramble">${project.name}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                </h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">${techHtml}</div>
                ${downloadBtn}
            </div>
        `;

        card.addEventListener('click', () => openModal(project));
        projectsGrid.appendChild(card);
    });
}

// More projects (compact 2-column list)
function renderMoreProjects() {
    // Everything not featured and not in the main grid
    const gridProjects = projects.filter(p => !p.featured && p.folder && p.images && p.images.length > 0).slice(0, 9);
    const gridIds = new Set(gridProjects.map(p => p.id));
    const featuredIds = new Set(projects.filter(p => p.featured).map(p => p.id));

    const remaining = projects.filter(p => !featuredIds.has(p.id) && !gridIds.has(p.id));

    remaining.forEach((project, index) => {
        const item = document.createElement('a');
        item.className = 'more-item reveal';
        item.href = project.github;
        item.target = '_blank';
        item.rel = 'noopener';
        item.style.transitionDelay = `${index * 0.08}s`;

        const icon = project.icon
            ? `<div class="more-icon">${project.icon}</div>`
            : `<div class="more-icon">${project.icon}</div>`;

        const techTags = project.tech.slice(0, 2).map(t => `<span class="tech-tag">${t}</span>`).join('');

        item.innerHTML = `
            ${icon}
            <div class="more-info">
                <span class="more-name scramble">${project.name}</span>
                <div class="more-tech-tags">${techTags}</div>
            </div>
            <span class="more-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
            </span>
        `;

        moreList.appendChild(item);
    });
}

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

    if (project.folder && project.images && project.images.length > 0) {
        currentImages = project.images.map(img => `assets/projects/${project.folder}/${img}`);
        currentSlide = Math.floor(currentImages.length / 2);

        const imageItems = currentImages.map((img, index) =>
            `<img src="${img}" alt="${project.name}" class="modal-collage-img ${index === currentSlide ? 'focused' : ''}" data-index="${index}">`
        ).join('');

        const dots = currentImages.map((_, index) =>
            `<span class="modal-dot ${index === currentSlide ? 'active' : ''}" data-index="${index}"></span>`
        ).join('');

        modalImage.innerHTML = `
            <div class="modal-collage" id="modal-collage">${imageItems}</div>
            <div class="modal-dots-slider" id="modal-dots">${dots}</div>
        `;

        updateCollagePositions();

        document.querySelectorAll('.modal-dot').forEach(dot => {
            dot.addEventListener('click', () => focusImage(parseInt(dot.dataset.index)));
        });

        document.querySelectorAll('.modal-collage-img').forEach(img => {
            img.addEventListener('click', () => focusImage(parseInt(img.dataset.index)));
        });

        const collage = document.getElementById('modal-collage');
        collage.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (e.deltaY > 0 || e.deltaX > 0) {
                focusImage(Math.min(currentSlide + 1, currentImages.length - 1));
            } else {
                focusImage(Math.max(currentSlide - 1, 0));
            }
        });
    } else {
        currentImages = [];
        const displayContent = project.icon
            ? `<span class="modal-icon">${project.icon}</span>`
            : `<span class="modal-icon">${project.icon}</span>`;
        modalImage.innerHTML = displayContent;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function focusImage(index) {
    currentSlide = index;
    updateCollagePositions();
    document.querySelectorAll('.modal-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function updateCollagePositions() {
    const images = document.querySelectorAll('.modal-collage-img');
    images.forEach((img, i) => {
        img.classList.remove('focused', 'left-1', 'left-2', 'right-1', 'right-2', 'hidden-left', 'hidden-right');
        const offset = i - currentSlide;
        if (offset === 0) img.classList.add('focused');
        else if (offset === -1) img.classList.add('left-1');
        else if (offset === -2) img.classList.add('left-2');
        else if (offset === 1) img.classList.add('right-1');
        else if (offset === 2) img.classList.add('right-2');
        else if (offset < -2) img.classList.add('hidden-left');
        else if (offset > 2) img.classList.add('hidden-right');
    });
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});

// ========================================
// SCROLL REVEAL (staggered)
// ========================================
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ========================================
// SMOOTH SCROLL
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
            window.scrollTo({ top: targetPos, behavior: 'smooth' });
        }
    });
});

// ========================================
// DATA SCRAMBLE EFFECT
// ========================================
function initScrambleEffect() {
    const chars = '!<>-_\\\\/[]{}—=+*^?#________';
    document.querySelectorAll('.scramble').forEach(el => {
        const originalText = el.innerText;
        el.addEventListener('mouseenter', () => {
            let iterations = 0;
            const interval = setInterval(() => {
                el.innerText = originalText.split('')
                    .map((char, i) => {
                        if (i < iterations) return char;
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('');
                if (iterations >= originalText.length) clearInterval(interval);
                iterations += 1/3;
            }, 30);
        });
    });
}

// ========================================
// TERMINAL TYPING EFFECT
// ========================================
function initTerminalTyping() {
    const terminalLine = document.querySelector('.terminal-line');
    if (!terminalLine) return;
    
    const promptHtml = '<span class="t-prompt">$</span> ';
    const textToType = 'cat skills.json';
    terminalLine.innerHTML = promptHtml; // Start empty with just prompt
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let i = 0;
                const interval = setInterval(() => {
                    terminalLine.innerHTML = promptHtml + textToType.substring(0, i) + '<span class="terminal-cursor">█</span>';
                    i++;
                    if (i > textToType.length) {
                        clearInterval(interval);
                        setTimeout(() => {
                            terminalLine.innerHTML = promptHtml + textToType;
                        }, 500);
                    }
                }, 100); // Typing speed
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(document.querySelector('.terminal-widget'));
}

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initGrid();
    typeRole();
    renderFeatured();
    renderGridProjects();
    renderMoreProjects();
    initScrambleEffect();
    initTerminalTyping();

    // Delay scroll reveal init so elements are in DOM
    requestAnimationFrame(() => {
        initScrollReveal();
    });
});
