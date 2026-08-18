// ===========================
// Typewriter Effect
// ===========================
const roles = [
    '网络安全技术交付工程师',
    'P9 资深工程师',
    'PMP 认证 · 项目交付',
    'CCIE · 网络安全',
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
// Project Details Modal（项目详情模态框）
// ===========================
const projectData = {
    'project-1': {
        title: '某地市 XX 局智慧项目 · 大数据安全体系建设',
        status: '已完成终验（2022.12）',
        icon: '🏛️',
        overview: '项目为大数据实战转型背景下的安全基础设施建设，公司承担零信任体系建设（安全策略与环境感知，2/6）、部分基础安全产品、安全服务平台以及安全管理中心的建设。',
        highlights: [
            '大数据安全体系建设符合部标要求，系统功能契合业务场景需求',
            '项目共产生大小定制功能百余条，除与部标测评相关的需求外，其余均已按期交付',
        ],
        phases: [
            {
                title: '安全技术工程师（2021.01 – 2021.12）',
                items: [
                    '任职于项目交付小组，负责产品交付与定制功能更新',
                    '向项目经理汇报部署调试进展，协调产品、研发与测试人员，确保需求有效落地',
                ],
            },
            {
                title: '项目经理兼安全技术工程师（2021.12 – 2022.12）',
                items: [
                    '初验后试运行阶段，原项目经理离场后独立承担主要职责',
                    '对外直接与客户沟通改进需求、应对各项测评、对接各厂商',
                    '对内与驻场人员密切配合，调度公司资源，保障系统试运行期间稳定运行',
                ],
            },
        ],
    },
    'project-2': {
        title: '某地市 XX 协调指挥平台项目',
        status: '项目在建中',
        icon: '🖥️',
        overview: '项目为数字化建设背景下的平台建设，公司负责全套平台建设、部分等保安全建设以及部分商密安全建设。',
        highlights: [
            '项目小组共 3 人（总包项目经理 1 人、监理 1 人、本人 1 人）',
            '以项目经理兼安全交付工程师身份全程统筹推进',
        ],
        phases: [
            {
                title: '项目经理兼安全交付工程师',
                items: [
                    '负责项目材料的输出与整理',
                    '负责平台系统交付与定制功能沟通',
                    '负责产品调试与功能完善',
                ],
            },
        ],
    },
    'project-3': {
        title: '某市级网络安全大赛筹备与命题',
        status: '持续进行（2021 – 2026）',
        icon: '🏆',
        overview: '深度参与市级网络安全赛事的组织与命题工作，为行业人才培养与网络安全知识普及贡献力量。',
        highlights: [
            '主导 2021–2026 年六届市级网络安全赛项的筹备与命题',
            '协助乙、丙、丁地市开展赛事技术指导与命题',
        ],
        phases: [
            {
                title: '赛事组织与命题',
                items: [
                    '负责市级网络安全赛项的赛事筹备与命题工作',
                    '为多地市赛事提供技术指导与命题支持',
                    '持续以一线实战经验回馈行业与教育',
                ],
            },
        ],
    },
    'project-4': {
        title: '多地市安全项目交付体系',
        status: '日常运营中',
        icon: '📦',
        overview: '统筹多地市安全项目的交付、测试与售后协调，建立标准化交付流程，保障多项目并行交付的进度与质量。',
        highlights: [
            '统筹甲、乙、丙、丁四地市的安全项目交付、售前测试与售后协调',
            '协助办事处达成每年千万级的市场盈利目标',
        ],
        phases: [
            {
                title: '区域交付统筹',
                items: [
                    '建立标准化交付流程，提升交付效率与一致性',
                    '协调多方资源，保障多项目并行交付的质量',
                    '通过实践促进产品良性发展，反馈市场实际需求',
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
            <h4>项目背景</h4>
            <p>${data.overview}</p>
        </div>
    `;

    if (data.highlights.length) {
        html += `<div class="modal-section">
            <h4>项目亮点</h4>
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

// 点击遮罩关闭
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Esc 键关闭
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
