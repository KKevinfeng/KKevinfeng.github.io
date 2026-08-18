// ===========================
// Typewriter Effect
// ===========================
const roles = [
    'Cybersecurity Technical Delivery Engineer',
    'P9 Senior Engineer',
    'PMP-Certified Project Delivery',
    'CCIE · Cybersecurity',
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeLoop() {
    const el = document.getElementById('typewriter');
    const current = roles[roleIndex];

    if (isDeleting) {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === current.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    setTimeout(typeLoop, typeSpeed);
}

typeLoop();

// ===========================
// Navbar Scroll Effect
// ===========================
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar style
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Back to top button
    if (scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }

    // Active nav link
    updateActiveNavLink();
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===========================
// Active Nav Link
// ===========================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ===========================
// Mobile Menu Toggle
// ===========================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// ===========================
// Scroll Reveal Animation
// ===========================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    reveals.forEach(el => {
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===========================
// Project Details Modal
// ===========================
const projectData = {
    'project-1': {
        title: 'Smart City XX Bureau Project ｜ Big Data Security Architecture',
        status: 'Final Acceptance Passed (Dec 2022)',
        icon: '🏛️',
        overview: 'The project was a security infrastructure build under a big data transformation initiative. The company was responsible for the Zero Trust architecture (security policies and environment awareness, 2/6), foundational security products, a security service platform, and a security operations center.',
        highlights: [
            'Big data security architecture met the requirements of the national standard, and the system functions aligned with business scenarios',
            'The project generated over a hundred customized features, all delivered on schedule except those tied to the national-standard assessment',
        ],
        phases: [
            {
                title: 'Security Technical Engineer (Jan 2021 – Dec 2021)',
                items: [
                    'Worked in the project delivery team, responsible for product delivery and customized feature updates',
                    'Reported deployment and debugging progress to the project manager and coordinated product, R&D, and testing teams to ensure requirements were effectively delivered',
                ],
            },
            {
                title: 'Project Manager & Security Technical Engineer (Dec 2021 – Dec 2022)',
                items: [
                    'During the post-initial-acceptance trial operation phase, took full responsibility after the original project manager departed',
                    'Communicated directly with clients on improvement needs, addressed various assessments, and coordinated with multiple vendors',
                    'Coordinated closely with on-site staff and allocated company resources to ensure stable system operation during trial',
                ],
            },
        ],
    },
    'project-2': {
        title: 'XX Command & Coordination Platform Project',
        status: 'Under Construction',
        icon: '🖥️',
        overview: 'The project focused on platform building under a digital transformation initiative. The company was responsible for building the full platform, along with parts of MLPS and commercial cryptography security.',
        highlights: [
            'Project team consisted of 3 people (1 general contractor PM, 1 supervisor, and myself)',
            'Served as Project Manager and Security Delivery Engineer, driving the project from start to finish',
        ],
        phases: [
            {
                title: 'Project Manager & Security Delivery Engineer',
                items: [
                    'Responsible for producing and organizing project documentation',
                    'Responsible for platform system delivery and customized feature communication',
                    'Responsible for product debugging and feature refinement',
                ],
            },
        ],
    },
    'project-3': {
        title: 'Municipal Cybersecurity Competition Preparation & Question-Setting',
        status: 'Ongoing (2021 – 2026)',
        icon: '🏆',
        overview: 'Deeply involved in organizing and setting questions for municipal cybersecurity competitions, contributing to talent development and the promotion of cybersecurity knowledge.',
        highlights: [
            'Led the preparation and question-setting of six editions of a municipal cybersecurity competition (2021–2026)',
            'Provided technical guidance and question-setting for competitions in cities B, C, and D',
        ],
        phases: [
            {
                title: 'Event Organization & Question-Setting',
                items: [
                    'Responsible for the preparation and question-setting of municipal cybersecurity competitions',
                    'Provided technical guidance and question-setting support for multi-city competitions',
                    'Consistently giving back to industry and education with frontline practical experience',
                ],
            },
        ],
    },
    'project-4': {
        title: 'Multi-City Security Project Delivery System',
        status: 'In Daily Operation',
        icon: '📦',
        overview: 'Overseeing security project delivery, testing, and post-sales coordination across multiple cities, establishing a standardized delivery process to ensure the schedule and quality of parallel project delivery.',
        highlights: [
            'Oversaw security project delivery, pre-sales testing, and post-sales coordination across four cities (A, B, C, D)',
            'Helped the office achieve an annual ten-millions-level market revenue target',
        ],
        phases: [
            {
                title: 'Regional Delivery Coordination',
                items: [
                    'Established a standardized delivery process to improve delivery efficiency and consistency',
                    'Coordinated multiple resources to ensure the quality of parallel project delivery',
                    'Drove product improvement through practice and relaying real market needs',
                ],
            },
        ],
    },
};

const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');

function renderModal(key) {
    const data = projectData[key];
    if (!data) return;

    let html = `
        <div class="modal-head">
            <div class="modal-icon">${data.icon}</div>
            <div>
                <span class="modal-status">${data.status}</span>
                <h3>${data.title}</h3>
            </div>
        </div>
        <div class="modal-section">
            <h4>Overview</h4>
            <p>${data.overview}</p>
        </div>
    `;

    if (data.highlights.length) {
        html += `<div class="modal-section">
            <h4>Highlights</h4>
            <ul class="modal-list">`;
        data.highlights.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += `</ul></div>`;
    }

    if (data.phases.length) {
        data.phases.forEach(phase => {
            html += `<div class="modal-section">
                <h4>${phase.title}</h4>
                <ul class="modal-list">`;
            phase.items.forEach(item => {
                html += `<li>${item}</li>`;
            });
            html += `</ul></div>`;
        });
    }

    modalBody.innerHTML = html;
}

document.querySelectorAll('.project-detail-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = btn.getAttribute('data-target');
        renderModal(target);
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);

// Close on overlay click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
