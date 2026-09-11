// ===========================
// Typewriter Effect
// ===========================
const rolesData = {
    en: [
        'Cybersecurity Technical Delivery Engineer',
        'P9 Senior Engineer',
        'PMP-Certified Project Delivery',
        'CCIE · Cybersecurity',
    ],
    zh: [
        '网络安全技术交付工程师',
        'P9 资深工程师',
        'PMP 认证 · 项目交付',
        'CCIE · 网络安全',
    ],
};

let currentLang = localStorage.getItem('lang') || 'en';
let roles = rolesData[currentLang];
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
        title: {
            en: 'Smart City XX Bureau Project ｜ Big Data Security Architecture',
            zh: '某地市 XX 局智慧项目 · 大数据安全体系建设',
        },
        status: {
            en: 'Final Acceptance Passed (Dec 2022)',
            zh: '已完成终验（2022.12）',
        },
        icon: '🏛️',
        overview: {
            en: 'The project was a security infrastructure build under a big data transformation initiative. The company was responsible for the Zero Trust architecture (security policies and environment awareness, 2/6), foundational security products, a security service platform, and a security operations center.',
            zh: '项目为大数据实战转型背景下的安全基础设施建设，公司承担零信任体系建设（安全策略与环境感知，2/6）、部分基础安全产品、安全服务平台以及安全管理中心的建设。',
        },
        highlights: {
            en: [
                'Big data security architecture met the requirements of the national standard, and the system functions aligned with business scenarios',
                'The project generated over a hundred customized features, all delivered on schedule except those tied to the national-standard assessment',
            ],
            zh: [
                '大数据安全体系建设符合部标要求，系统功能契合业务场景需求',
                '项目共产生大小定制功能百余条，除与部标测评相关的需求外，其余均已按期交付',
            ],
        },
        phases: [
            {
                title: {
                    en: 'Security Technical Engineer (Jan 2021 – Dec 2021)',
                    zh: '安全技术工程师（2021.01 – 2021.12）',
                },
                items: {
                    en: [
                        'Worked in the project delivery team, responsible for product delivery and customized feature updates',
                        'Reported deployment and debugging progress to the project manager and coordinated product, R&D, and testing teams to ensure requirements were effectively delivered',
                    ],
                    zh: [
                        '任职于项目交付小组，负责产品交付与定制功能更新',
                        '向项目经理汇报部署调试进展，协调产品、研发与测试人员，确保需求有效落地',
                    ],
                },
            },
            {
                title: {
                    en: 'Project Manager & Security Technical Engineer (Dec 2021 – Dec 2022)',
                    zh: '项目经理兼安全技术工程师（2021.12 – 2022.12）',
                },
                items: {
                    en: [
                        'During the post-initial-acceptance trial operation phase, took full responsibility after the original project manager departed',
                        'Communicated directly with clients on improvement needs, addressed various assessments, and coordinated with multiple vendors',
                        'Coordinated closely with on-site staff and allocated company resources to ensure stable system operation during trial',
                    ],
                    zh: [
                        '初验后试运行阶段，原项目经理离场后独立承担主要职责',
                        '对外直接与客户沟通改进需求、应对各项测评、对接各厂商',
                        '对内与驻场人员密切配合，调度公司资源，保障系统试运行期间稳定运行',
                    ],
                },
            },
        ],
    },
    'project-2': {
        title: {
            en: 'XX Command & Coordination Platform Project',
            zh: '某地市 XX 协调指挥平台项目',
        },
        status: {
            en: 'Under Construction',
            zh: '项目在建中',
        },
        icon: '🖥️',
        overview: {
            en: 'The project focused on platform building under a digital transformation initiative. The company was responsible for building the full platform, along with parts of MLPS and commercial cryptography security.',
            zh: '项目为数字化建设背景下的平台建设，公司负责全套平台建设、部分等保安全建设以及部分商密安全建设。',
        },
        highlights: {
            en: [
                'Project team consisted of 3 people (1 general contractor PM, 1 supervisor, and myself)',
                'Served as Project Manager and Security Delivery Engineer, driving the project from start to finish',
            ],
            zh: [
                '项目小组共 3 人（总包项目经理 1 人、监理 1 人、本人 1 人）',
                '以项目经理兼安全交付工程师身份全程统筹推进',
            ],
        },
        phases: [
            {
                title: {
                    en: 'Project Manager & Security Delivery Engineer',
                    zh: '项目经理兼安全交付工程师',
                },
                items: {
                    en: [
                        'Responsible for producing and organizing project documentation',
                        'Responsible for platform system delivery and customized feature communication',
                        'Responsible for product debugging and feature refinement',
                    ],
                    zh: [
                        '负责项目材料的输出与整理',
                        '负责平台系统交付与定制功能沟通',
                        '负责产品调试与功能完善',
                    ],
                },
            },
        ],
    },
    'project-3': {
        title: {
            en: 'Municipal Cybersecurity Competition Preparation & Question-Setting',
            zh: '某市级网络安全大赛筹备与命题',
        },
        status: {
            en: 'Ongoing (2021 – 2026)',
            zh: '持续进行（2021 – 2026）',
        },
        icon: '🏆',
        overview: {
            en: 'Deeply involved in organizing and setting questions for municipal cybersecurity competitions, contributing to talent development and the promotion of cybersecurity knowledge.',
            zh: '深度参与市级网络安全赛事的组织与命题工作，为行业人才培养与网络安全知识普及贡献力量。',
        },
        highlights: {
            en: [
                'Led the preparation and question-setting of six editions of a municipal cybersecurity competition (2021–2026)',
                'Provided technical guidance and question-setting for competitions in cities B, C, and D',
            ],
            zh: [
                '主导 2021–2026 年六届市级网络安全赛项的筹备与命题',
                '协助乙、丙、丁地市开展赛事技术指导与命题',
            ],
        },
        phases: [
            {
                title: {
                    en: 'Event Organization & Question-Setting',
                    zh: '赛事组织与命题',
                },
                items: {
                    en: [
                        'Responsible for the preparation and question-setting of municipal cybersecurity competitions',
                        'Provided technical guidance and question-setting support for multi-city competitions',
                        'Consistently giving back to industry and education with frontline practical experience',
                    ],
                    zh: [
                        '负责市级网络安全赛项的赛事筹备与命题工作',
                        '为多地市赛事提供技术指导与命题支持',
                        '持续以一线实战经验回馈行业与教育',
                    ],
                },
            },
        ],
    },
    'project-4': {
        title: {
            en: 'Multi-City Security Project Delivery System',
            zh: '多地市安全项目交付体系',
        },
        status: {
            en: 'In Daily Operation',
            zh: '日常运营中',
        },
        icon: '📦',
        overview: {
            en: 'Overseeing security project delivery, testing, and post-sales coordination across multiple cities, establishing a standardized delivery process to ensure the schedule and quality of parallel project delivery.',
            zh: '统筹多地市安全项目的交付、测试与售后协调，建立标准化交付流程，保障多项目并行交付的进度与质量。',
        },
        highlights: {
            en: [
                'Oversaw security project delivery, pre-sales testing, and post-sales coordination across four cities (A, B, C, D)',
                'Helped the office achieve an annual ten-millions-level market revenue target',
            ],
            zh: [
                '统筹甲、乙、丙、丁四地市的安全项目交付、售前测试与售后协调',
                '协助办事处达成每年千万级的市场盈利目标',
            ],
        },
        phases: [
            {
                title: {
                    en: 'Regional Delivery Coordination',
                    zh: '区域交付统筹',
                },
                items: {
                    en: [
                        'Established a standardized delivery process to improve delivery efficiency and consistency',
                        'Coordinated multiple resources to ensure the quality of parallel project delivery',
                        'Drove product improvement through practice and relaying real market needs',
                    ],
                    zh: [
                        '建立标准化交付流程，提升交付效率与一致性',
                        '协调多方资源，保障多项目并行交付的质量',
                        '通过实践促进产品良性发展，反馈市场实际需求',
                    ],
                },
            },
        ],
    },
};

const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');

const modalLabels = {
    en: { overview: 'Overview', highlights: 'Highlights' },
    zh: { overview: '项目背景', highlights: '项目亮点' },
};

function renderModal(key) {
    const data = projectData[key];
    if (!data) return;

    const L = modalLabels[currentLang];
    const title = data.title[currentLang];
    const status = data.status[currentLang];
    const overview = data.overview[currentLang];
    const highlights = data.highlights[currentLang] || [];

    let html = `
        <div class="modal-head">
            <div class="modal-icon">${data.icon}</div>
            <div>
                <span class="modal-status">${status}</span>
                <h3>${title}</h3>
            </div>
        </div>
        <div class="modal-section">
            <h4>${L.overview}</h4>
            <p>${overview}</p>
        </div>
    `;

    if (highlights.length) {
        html += `<div class="modal-section">
            <h4>${L.highlights}</h4>
            <ul class="modal-list">`;
        highlights.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += `</ul></div>`;
    }

    if (data.phases.length) {
        data.phases.forEach(phase => {
            html += `<div class="modal-section">
                <h4>${phase.title[currentLang]}</h4>
                <ul class="modal-list">`;
            (phase.items[currentLang] || []).forEach(item => {
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
        modal.setAttribute('data-current', target);
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

// ===========================
// Language Switch（中英文切换）
// ===========================
function applyLanguage(lang) {
    currentLang = lang;

    // 更新所有带双语属性的元素文本
    document.querySelectorAll('[data-en][data-zh]').forEach(el => {
        const text = el.getAttribute('data-' + lang);
        if (text) {
            el.textContent = text;
        }
    });

    // 更新 html lang 属性
    document.documentElement.lang = (lang === 'zh') ? 'zh-CN' : 'en';

    // 更新切换按钮高亮
    document.querySelectorAll('.lang-code').forEach(code => {
        code.classList.toggle('active', code.getAttribute('data-lang') === lang);
    });

    // 更新打字机内容
    roles = rolesData[lang];
    roleIndex = 0;
    charIndex = 0;
    isDeleting = false;

    // 若模态框已打开，重新渲染为当前语言
    const openBtn = document.querySelector('.project-detail-btn[data-target]');
    if (modal.classList.contains('open')) {
        const activeKey = modal.getAttribute('data-current');
        if (activeKey) {
            renderModal(activeKey);
        }
    }

    localStorage.setItem('lang', lang);
}

document.getElementById('langSwitch').addEventListener('click', (e) => {
    const clicked = e.target.closest('.lang-code');
    if (clicked) {
        applyLanguage(clicked.getAttribute('data-lang'));
    } else {
        // 点击按钮空白区时切换
        applyLanguage(currentLang === 'en' ? 'zh' : 'en');
    }
});

// 页面加载时应用保存的语言（或默认英文）
applyLanguage(currentLang);
