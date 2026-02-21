document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DATA STORE ---
    const siteData = {
        tr: {
            siteTitle: "Selin Avcı CV Sitesi",
            navHome: "Ana Sayfa",
            navAbout: "Hakkımda",
            navExperience: "Deneyim & Eğitim",
            navRoles: "Roller",
            navProjects: "Projeler",
            navSkills: "Beceriler",
            heroSubtitle: "Kocaeli Üniversitesi Bilişim Sistemleri Mühendisliği ve İstanbul Üniversitesi Bilgisayar Programcılığı mezunu, yenilikçi teknolojilere ve proje yönetimine tutkulu bir mühendis.",
            aboutTitle: "Hakkımda",
            aboutText: "Kocaeli Üniversitesi Teknoloji Fakültesi Bilişim Sistemleri Mühendisliği 2025 yılı mezunuyum. Aynı zamanda İstanbul Üniversitesi Bilgisayar Programcılığı bölümünden 2024 yılında mezun oldum. Öğrenim hayatım boyunca ve sonrasında, yapay zeka, mobil geliştirme ve proje yönetimi gibi alanlarda kendimi geliştirmeye odaklandım. TÜBİTAK ve Sanayi ve Teknoloji Bakanlığı gibi kurumların Ar-Ge projelerinde aktif rol alarak, akademik bilgimi pratik deneyimle birleştirdim.",
            experienceTitle: "İş Deneyimi",
            educationTitle: "Eğitim Geçmişi",
            rolesTitle: "Ulusal ve Uluslararası Projelerdeki Rollerim",
            projectsTitle: "Projeler",
            certificatesTitle: "Sertifikalar",
            skillsTitle: "Beceriler",
            viewAllCerts: "Tüm Sertifikaları Görüntüle",
            experience: [
                { company: 'CarrefourSA', title: 'Teknoloji Geliştirme Uzman Yardımcısı - Dijital Dönüşüm Proje Yöneticisi', date: 'Haziran 2025 - Günümüz' },
                { company: 'CarrefourSA', title: 'İş Yeri Mesleki Eğitimi (70 İş Günü)', date: 'Staj' },
                { company: 'Kentkart', title: 'Yazılım Stajyeri (30 İş Günü)', date: 'Staj' },
                { company: 'Bimser', title: 'Yazılım Stajyeri (30 İş Günü)', date: 'Staj' },
            ],
            education: [
                { school: 'Kocaeli Üniversitesi', degree: 'Lisans, Bilişim Sistemleri Mühendisliği (3.09/4.0)', date: '2021 - 2025' },
                { school: 'İstanbul Üniversitesi', degree: 'Önlisans, Bilgisayar Programcılığı (2.77/4.0)', date: '2022 - 2024' },
                { school: 'Edirne Bahçeşehir Fen Lisesi', degree: 'Mezuniyet (95.56/100)', date: '2020' },
            ],
            projectRoles: [
                {
                    title: "2209-A - TÜBİTAK ÜNİVERSİTE ÖĞRENCİLERİ ARAŞTIRMA PROJELERİ DESTEKLEME PROGRAMI",
                    description: "“Ruhsal Sağlıkta Yapay Zeka Çözümleri: Otomatik İzleme ve Müdahale Mekanizması” başlıklı projem, TÜBİTAK 2209-A kapsamında destek almaya hak kazanmıştır. Projemde, ruhsal sağlık alanında yapay zeka teknolojilerinin kullanımıyla, otomatik veri izleme ve erken müdahale mekanizmalarının geliştirilmesi hedeflenmiştir. Disiplinler arası bir yaklaşımla yenilikçi çözümler tasarlanmış, araştırma planlaması, veri analizi ve sonuçların değerlendirilmesi aşamalarında aktif görev alınmıştır."
                },
                {
                    title: "SANAYİ VE TEKNOLOJİ BAKANLIĞI AR-GE TEŞVİKLERİ GENEL MÜDÜRLÜĞÜ",
                    description: "Ar-Ge ve Tasarım Merkezleri başvuruları kapsamında doküman hazırlama, başvuru süreçleri ve proje yazımı alanlarında kapsamlı deneyim sahibiyim. Mevzuata uygunluk ve kalite standartlarına dikkat ederek, Ar-Ge merkezlerinin kurulması ve teşvik süreçlerinin başarıyla tamamlanması için teknik ve idari destek sağlamaktayım. Akademik işbirlikleri ile projelerin bilimsel altyapısını güçlendirmekteyim."
                },
                {
                    title: "1711 - TÜBİTAK YAPAY ZEKÂ EKOSİSTEM ÇAĞRISI",
                    description: "Yapay zekâ odaklı Ar-Ge projelerinin tasarlanması, başvuru süreçlerinin yürütülmesi ve proje yönetimi alanlarında deneyim sahibiyim. Teknik dokümanların hazırlanması, stratejik planlama ve mevzuat uyumluluğu konularında aktif rol almaktayım. Akademisyenler ve endüstri uzmanlarıyla işbirliği içinde çalışarak, projelerin yenilikçi yapay zekâ çözümleri geliştirmesine katkıda bulunuyorum."
                },
                
            ],
            projects: [
                { title: "RUHSAL SAĞLIKTA YAPAY ZEKA ÇÖZÜMLERİ", description: "Bireylerin yüz ifadelerinden duygu analizi yaparak günlük ruh hali takibi gerçekleştiren, TÜBİTAK 2209-A destekli bir sistemdir. Stres ve anksiyete gibi durumların erken tespiti hedeflenir. Kullanıcıya özel meditasyon önerileri sunar ve riskli durumlarda acil durum uyarıları üretir." },
                { title: "GÖZ HAREKET ALGILAMA DESTEKLİ SANAL KLAVYE", description: "Hareket kabiliyeti kısıtlı bireyler için Google Mediapipe kullanılarak geliştirilen, göz hareketleriyle metin girişi sağlayan uygulamadır. Göz çevresi koordinatları işlenerek bakış yönü belirlenir ve kalibrasyon ile kişiye özel optimize edilir. Akademik makale başvuruları yapılmıştır." },
                { title: "FİNANSAL DANIŞMANLIK CHATBOTU", description: "OpenAI ve LangChain ile geliştirilmiş, doğal dildeki soruları SQL sorgularına dönüştürerek anlık finansal yanıtlar veren yapay zeka sistemidir. Geçmiş verilerle analiz yapar, trendleri sunar ve diyalog sürekliliği sağlar. DergiPark'ta makale değerlendirme sürecindedir." },
                { title: "PROMOSYON ANALİZ VE ONAY SİSTEMİ", description: "Prophet zaman serisi modeli ve Next.js ile geliştirilen, promosyon etkilerini tahmin eden ve onay süreçlerini yöneten platformdur. Satış ve stok verimliliğini artırmayı hedefler. IIZS 2025 Sırbistan konferansında bildirisi kabul edilmiştir." },
                { title: "YAPAY ZEKÂ DESTEKLİ PDF ANALİZ SİSTEMİ", description: "PDF belgelerini (görüntü veya metin tabanlı) analiz ederek Excel'e dönüştüren, özetleyen ve doğal dilde sorgulama imkanı sunan sistemdir. OCR ve NLP teknikleri kullanır. Şifreli Excel dosyaları üzerinde dahi sorgulama yapabilir." }
            ],
            certificates: {
                "BTK AKADEMİ": [
                    "Swift ile iOS Programlama (14.10.2023)",
                    "Gelişmiş Seviye Algoritmalar ve Veri Yapıları (12.05.2023)",
                    "Kotlin ile Android Mobil Uygulama Geliştirme (05.09.2023)",
                    "B1 ve B2 Seviyelerinde İngilizce Dil Eğitimi (25.02.2024)",
                    "ARKit ile Artırılmış Gerçeklik Uygulamaları Geliştirme (01.03.2024)",
                    "Ağ Temelleri (05.03.2024)",
                    "Python Programlama Dili (12.10.2024)",
                    "Proteus ile Devre Tasarımı (12.10.2024)",
                    "Uygulamalı Canva (12.10.2024)"
                ],
                "TÜBİTAK BİLGEM": [
                    "YTE Bootcamp 2023: Java Eğitimi (07.10.2023)",
                    "YTE Bootcamp 2023: Kullanıcı Deneyimi ve Kullanılabilirlik Eğitimi (07.10.2023)",
                    "YTE Bootcamp 2023: Mikroservis Mimarileri Eğitimi (09.10.2023)",
                    "YTE Bootcamp 2023: Mock-Up Figma Eğitimi (09.10.2023)",
                    "YTE Bootcamp 2023: Spring Eğitimi (14.10.2023)"
                ],
                "TÜRK HAVA KURUMU ÜNİVERSİTESİ": [
                    "120 Saat Siber Güvenlik Uzmanlık Eğitimi (13.05.2024)",
                    "120 Saat Siber Suçlar Uzmanlık Eğitimi (13.05.2024)",
                    "120 Saat Etik/Beyaz Şapka Hacker Uzmanlık Eğitimi (13.05.2024)"
                ],
                "IEEC": [
                    "120 Saat Siber Güvenlik Uzmanlık Eğitimi (13.05.2024)",
                    "120 Saat Siber Suçlar Uzmanlık Eğitimi (13.05.2024)",
                    "120 Saat Etik/Beyaz Şapka Hacker Uzmanlık Eğitimi (13.05.2024)"
                ],
                "MICROSOFT": ["Sertifikalı Microsoft Yenilikçi Eğitimci (14.05.2022)"],
                "YTNK TV": ["Kariyer Planlama (18.05.2022)"],
                "GOOGLE CLOUD & ISTANBUL DATA SCIENCE ACADEMY": ["Yapay Zeka Kampı (16.04.2023)"],
                "İLGİ ALANLARI": [
                    "Tenis", "Enstrüman Eğitimi - Piyano", "Piyano Seviye 2", "Piyano Seviye 3", 
                    "İnsansız Hava Aracı (İHA) Pilotluğu IHA - 1 - Spor", "Amatör Uygulamalı Tiyatro"
                ],
                "LİSANSLAR": ["Yüzme"]
            },
            skills: {
                "Backend & Programlama": ["Python", "Java", "C#", "Node.js", "PHP", "Laravel", "Microservices", "REST API"],
                "Yapay Zeka & Veri": ["LangChain", "OpenAI API", "RAG", "NLP", "MySQL", "PostgreSQL", "Airflow", "Pandas"],
                "Mobil & Frontend": ["Swift", "Kotlin", "Flutter", "Next.js", "React", "TypeScript", "HTML/CSS", "Angular"],
                "DevOps & Araçlar": ["Docker", "Jenkins", "Git", "Jira", "Figma"]
            }
        },
        en: {
            siteTitle: "Selin Avcı CV Site",
            navHome: "Home",
            navAbout: "About",
            navExperience: "Experience & Edu",
            navRoles: "Roles",
            navProjects: "Projects",
            navSkills: "Skills",
            heroSubtitle: "A graduate of Kocaeli University Information Systems Engineering and Istanbul University Computer Programming, passionate about innovative technologies and project management.",
            aboutTitle: "About Me",
            aboutText: "I graduated from Kocaeli University, Faculty of Technology, Department of Information Systems Engineering in 2025. I also graduated from Istanbul University's Computer Programming department in 2024. Throughout my academic life and beyond, I have focused on developing myself in areas such as artificial intelligence, mobile development, and project management. By taking an active role in R&D projects for institutions like TÜBİTAK and the Ministry of Industry and Technology, I have combined my academic knowledge with practical experience.",
            experienceTitle: "Work Experience",
            educationTitle: "Education History",
            rolesTitle: "Roles in National & International Projects",
            projectsTitle: "Projects",
            certificatesTitle: "Certificates",
            skillsTitle: "Skills",
            viewAllCerts: "View All Certificates",
            experience: [
                { company: 'CarrefourSA', title: 'Technology Development Specialist Asst. - Digital Transformation Project Manager', date: 'June 2025 - Present' },
                { company: 'CarrefourSA', title: 'Vocational Training (70 Work Days)', date: 'Internship' },
                { company: 'Kentkart', title: 'Software Intern (30 Work Days)', date: 'Internship' },
                { company: 'Bimser', title: 'Software Intern (30 Work Days)', date: 'Internship' },
            ],
            education: [
                { school: 'Kocaeli University', degree: 'B.Sc., Information Systems Engineering (3.09/4.0)', date: '2021 - 2025' },
                { school: 'Istanbul University', degree: 'A.S., Computer Programming (2.77/4.0)', date: '2022 - 2024' },
                { school: 'Edirne Bahçeşehir Science High School', degree: 'Graduate (95.56/100)', date: '2020' },
            ],
            projectRoles: [
                {
                    title: "2209-A -TÜBİTAK- UNIVERSITY STUDENTS RESEARCH PROJECTS SUPPORT PROGRAM",
                    description: "My project titled 'AI Solutions in Mental Health: Automatic Monitoring and Intervention Mechanism' was awarded support under TÜBİTAK 2209-A. The project aimed to develop automatic data monitoring and early intervention mechanisms using AI in mental health. Innovative solutions were designed with an interdisciplinary approach, and I took an active role in research planning, data analysis, and result evaluation."
                },
                {
                    title: "MINISTRY OF INDUSTRY AND TECHNOLOGY R&D INCENTIVES GENERAL DIRECTORATE",
                    description: "I have extensive experience in document preparation, application processes, and project writing for R&D and Design Centers. I provide technical and administrative support for the establishment of R&D centers and the successful completion of incentive processes, ensuring compliance with legislation. I also strengthen the scientific infrastructure of projects through academic collaborations."
                },
                {
                    title: "1711 - TÜBİTAK ARTIFICIAL INTELLIGENCE ECOSYSTEM CALL",
                    description: "I have deep experience in designing AI-focused R&D projects, managing application processes, and project management. I play an active role in preparing comprehensive technical documents, strategic planning, and ensuring regulatory compliance. Working in collaboration with academics and industry experts, I contribute to the development of innovative AI solutions."
                },
                
            ],
             projects: [
                { title: "AI IN MENTAL HEALTH SOLUTIONS", description: "A TÜBİTAK 2209-A supported system that tracks daily mood by analyzing emotions from facial expressions. It aims for early detection of stress and anxiety, offering personalized meditation suggestions and generating emergency alerts in high-risk situations." },
                { title: "VIRTUAL KEYBOARD WITH EYE-TRACKING", description: "An application developed using Google Mediapipe for individuals with limited mobility, allowing text input via eye movements. It processes eye coordinates to determine gaze direction and is optimized with calibration. Academic articles have been submitted based on findings." },
                { title: "FINANCIAL ADVISORY CHATBOT", description: "An AI system developed with OpenAI and LangChain that converts natural language questions into SQL queries to provide instant financial answers. It analyzes past data, presents trends, and maintains dialogue continuity. An article is under review at DergiPark." },
                { title: "PROMOTION ANALYSIS & APPROVAL SYSTEM", description: "A platform using Prophet time series model and Next.js to forecast promotion impacts and manage approval processes. It aims to increase sales and stock efficiency. A paper on this work was accepted at the IIZS 2025 conference in Serbia." },
                { title: "AI-POWERED PDF ANALYSIS SYSTEM", description: "A system that analyzes PDF documents (image or text-based) to extract data into Excel, summarize content, and allow natural language querying. It uses OCR and NLP techniques and supports querying even on password-protected Excel files." }
            ],
            certificates: {
                "BTK ACADEMY": [
                    "iOS Programming with Swift (14.10.2023)",
                    "Advanced Algorithms and Data Structures (12.05.2023)",
                    "Android Mobile App Development with Kotlin (05.09.2023)",
                    "English Language Training B1 & B2 (25.02.2024)",
                    "AR App Development with ARKit (01.03.2024)",
                    "Network Fundamentals (05.03.2024)",
                    "Python Programming Language (12.10.2024)",
                    "Circuit Design with Proteus (12.10.2024)",
                    "Applied Canva (12.10.2024)"
                ],
                "TÜBİTAK BİLGEM": [
                    "YTE Bootcamp 2023: Java Training (07.10.2023)",
                    "YTE Bootcamp 2023: UX/UI Training (07.10.2023)",
                    "YTE Bootcamp 2023: Microservice Architectures (09.10.2023)",
                    "YTE Bootcamp 2023: Mock-Up Figma (09.10.2023)",
                    "YTE Bootcamp 2023: Spring Training (14.10.2023)"
                ],
                "UNIV. OF TURKISH AERONAUTICAL ASSOC.": [
                    "120 Hours Cyber Security Specialist Training (13.05.2024)",
                    "120 Hours Cyber Crimes Specialist Training (13.05.2024)",
                    "120 Hours Ethical/White Hat Hacker Specialist Training (13.05.2024)"
                ],
                "IEEC": [
                    "120 Hours Cyber Security Specialist Training (13.05.2024)",
                    "120 Hours Cyber Crimes Specialist Training (13.05.2024)",
                    "120 Hours Ethical/White Hat Hacker Specialist Training (13.05.2024)"
                ],
                "MICROSOFT": ["Certified Microsoft Innovative Educator (14.05.2022)"],
                "YTNK TV": ["Career Planning (18.05.2022)"],
                "GOOGLE CLOUD & ISTANBUL DATA SCIENCE ACADEMY": ["AI Camp (16.04.2023)"],
                "INTERESTS": [
                    "Tennis", "Instrument Training - Piano", "Piano Level 2", "Piano Level 3", 
                    "UAV Pilot License IHA-1 - Sport", "Amateur Applied Theater"
                ],
                "LICENSES": ["Swimming"]
            },
            skills: {
                "Backend & Programming": ["Python", "Java", "C#", "Node.js", "PHP", "Laravel", "Microservices", "REST API"],
                "AI & Data": ["LangChain", "OpenAI API", "RAG", "NLP", "MySQL", "PostgreSQL", "Airflow", "Pandas"],
                "Mobile & Frontend": ["Swift", "Kotlin", "Flutter", "Next.js", "React", "TypeScript", "HTML/CSS", "Angular"],
                "DevOps & Tools": ["Docker", "Jenkins", "Git", "Jira", "Figma"]
            }
        }
    };
    
    let currentLang = 'tr';

    // --- 2. DOM Elements ---
    const langButtons = document.querySelectorAll('.lang-btn');
    const themeToggleButton = document.getElementById('theme-toggle');
    const experienceContainer = document.getElementById('experience-container');
    const educationContainer = document.getElementById('education-container');
    const rolesGrid = document.getElementById('roles-grid');
    const projectsGrid = document.querySelector('#projects .project-grid');
    const certificatesGrid = document.querySelector('#certificates .certificates-container');
    const skillsContainer = document.querySelector('#skills .skills-container');
    const heroTitle = document.querySelector('.hero-title');
    const scrollTopBtn = document.getElementById('scroll-to-top');
    const scrollBottomBtn = document.getElementById('scroll-to-bottom');
    const hamburgerBtn = document.querySelector('.nav-right .hamburger');
    const navMenu = document.querySelector('.nav-left');

    // --- 3. RENDER FUNCTIONS ---
    const renderExperience = (lang) => {
        experienceContainer.innerHTML = siteData[lang].experience.map(item => `
            <div class="exp-card">
                <h3>${item.title}</h3>
                <p class="company">${item.company}</p>
                <p class="date">${item.date}</p>
            </div>
        `).join('');
    };

    const renderEducation = (lang) => {
        educationContainer.innerHTML = siteData[lang].education.map(item => `
            <div class="edu-card">
                <h3>${item.degree}</h3>
                <p class="school">${item.school}</p>
                <p class="date">${item.date}</p>
            </div>
        `).join('');
    };
    
    const renderProjectRoles = (lang) => {
        rolesGrid.innerHTML = siteData[lang].projectRoles.map(role => `
            <div class="project-card">
                <h3>${role.title}</h3>
                <p>${role.description}</p>
            </div>
        `).join('');
    };

    const renderProjects = (lang) => {
        projectsGrid.innerHTML = siteData[lang].projects.map(p => `
            <div class="project-card">
                <h3>${p.title}</h3>
                <p>${p.description}</p>
            </div>
        `).join('');
    };

    const renderCertificates = (lang) => {
        const certs = siteData[lang].certificates;
        
        // Add the "View All" link at the top
        let html = `<div class="view-all-btn-container">
                <a href="https://drive.google.com/drive/folders/1scZzLRx9oB7lkv0cBEUaYIvTxAH4kRNr" target="_blank" class="view-all-btn">${siteData[lang].viewAllCerts}</a>
            </div>`;
        
        html += Object.keys(certs).map(category => `
            <div class="cert-category">
                <h3>${category}</h3>
                <div class="certificates-grid">
                    ${certs[category].map(item => `<div class="cert-card"><p>${item}</p></div>`).join('')}
                </div>
            </div>
        `).join('');

        certificatesGrid.innerHTML = html;
    };
    
    const renderSkills = (lang) => {
        const skillIcons = {
            "python": "fab fa-python",
            "java": "fab fa-java",
            "c#": "fas fa-code",
            "node.js": "fab fa-node-js",
            "php": "fab fa-php",
            "laravel": "fab fa-laravel",
            "microservices": "fas fa-network-wired",
            "rest api": "fas fa-exchange-alt",
            "langchain": "fas fa-link",
            "openai api": "fas fa-robot",
            "rag": "fas fa-database",
            "nlp": "fas fa-brain",
            "mysql": "fas fa-database",
            "postgresql": "fas fa-database",
            "airflow": "fas fa-wind",
            "pandas": "fas fa-table",
            "swift": "fab fa-swift",
            "kotlin": "fab fa-android",
            "flutter": "fas fa-mobile-alt",
            "next.js": "fas fa-arrow-right",
            "react": "fab fa-react",
            "typescript": "fab fa-js",
            "html/css": "fab fa-html5",
            "angular": "fab fa-angular",
            "docker": "fab fa-docker",
            "jenkins": "fab fa-jenkins",
            "git": "fab fa-git-alt",
            "jira": "fab fa-jira",
            "figma": "fab fa-figma"
        };

        const skills = siteData[lang].skills;
        skillsContainer.innerHTML = Object.keys(skills).map(category => `
            <div class="skill-category">
                <h3>${category}</h3>
                <ul>
                    ${skills[category].map(item => {
                        const iconClass = skillIcons[item.toLowerCase()] || 'fas fa-code';
                        return `<li><i class="${iconClass}"></i>${item}</li>`;
                    }).join('')}
                </ul>
            </div>
        `).join('');
    };
    
    const updateTextContent = (lang) => {
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.dataset.langKey;
            if (siteData[lang][key]) {
                el.textContent = siteData[lang][key];
            }
        });
    };
    
    const renderAll = (lang) => {
        updateTextContent(lang);
        renderExperience(lang);
        renderEducation(lang);
        renderProjectRoles(lang);
        renderProjects(lang);
        renderCertificates(lang);
        renderSkills(lang);
        // Render sonrası kartlara tilt efektini yeniden uygula
        initTiltEffect();
        // Render sonrası sıralı animasyonları başlat
        initStaggeredAnimations();
    };

    // --- 4. ANIMATIONS ---
    const animateHeroTitle = () => {
        const text = heroTitle.textContent;
        heroTitle.innerHTML = '';
        text.split('').forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter === ' ' ? '\u00A0' : letter;
            span.style.animationDelay = `${index * 0.05}s`;
            heroTitle.appendChild(span);
        });
    };

    const confettiContainer = document.querySelector('.confetti-container');
    const createConfetti = () => {
        if (!confettiContainer) return;
        const colors = ['#89cff0', '#baddf9', '#6495ed', '#f7a399'];
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.animationDelay = `${Math.random() * 4}s`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confettiContainer.appendChild(confetti);
        }
    };

    // --- 3D TILT EFFECT ---
    const initTiltEffect = () => {
        const cards = document.querySelectorAll('.project-card, .exp-card, .edu-card, .cert-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg rotation
                const rotateY = ((x - centerX) / centerX) * 10;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        });
    };

    // --- STAGGERED REVEAL ANIMATION ---
    const initStaggeredAnimations = () => {
        const items = document.querySelectorAll('.project-card, .cert-card, .exp-card, .edu-card, .skill-category li, #roles-grid .project-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible-stagger');
                    observer.unobserve(entry.target); // Bir kere çalışsın
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        items.forEach((item, index) => {
            item.classList.add('hidden-stagger');
            // Her elemana hafif gecikme ekle (CSS transition-delay ile de yapılabilir ama JS daha dinamik)
            item.style.transitionDelay = `${(index % 5) * 0.1}s`; 
            observer.observe(item);
        });
    };

    // --- FLOATING SHAPES ---
    const createFloatingShapes = () => {
        const container = document.createElement('div');
        container.classList.add('floating-shapes');
        document.body.prepend(container);

        const colors = ['var(--primary-color)', 'var(--accent-color)', 'var(--secondary-color)'];
        
        for(let i=0; i<6; i++) {
            const shape = document.createElement('div');
            shape.classList.add('shape');
            const size = Math.random() * 200 + 100;
            
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;
            shape.style.background = colors[Math.floor(Math.random() * colors.length)];
            shape.style.left = `${Math.random() * 100}vw`;
            shape.style.top = `${Math.random() * 100}vh`;
            shape.style.animationDuration = `${Math.random() * 10 + 10}s`;
            shape.style.animationDelay = `${Math.random() * 5}s`;
            
            container.appendChild(shape);
        }
    };
    
    // --- 5. EVENT LISTENERS & LOGIC ---
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentLang = button.dataset.lang;
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderAll(currentLang);
        });
    });

    themeToggleButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            themeToggleButton.innerHTML = '🌙';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggleButton.innerHTML = '☀️';
        }
    });

    // --- Hamburger Menü Mantığı ---
    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Tıklamanın document'a gitmesini engelle
            navMenu.classList.toggle('active');
        });

        // Menüdeki linklere tıklanınca menüyü kapat
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        // Menü dışına tıklanınca kapat
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && e.target !== hamburgerBtn && !hamburgerBtn.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('section').forEach(section => sectionObserver.observe(section));

    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    scrollBottomBtn.addEventListener('click', () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
            scrollBottomBtn.classList.remove('visible');
        } else {
            scrollBottomBtn.classList.add('visible');
        }
    });

    // --- SCROLL SPY (Üst Menü Takibi) ---
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-left a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= (sectionTop - 150)) { // Header yüksekliği kadar pay bırakıyoruz
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // --- 6. INITIALIZATION ---
    const init = () => {
        renderAll(currentLang);
        animateHeroTitle();
        setTimeout(createConfetti, 500);
        createFloatingShapes();
        // Initially show bottom scroll button if page is not scrollable enough
        if (document.body.clientHeight > window.innerHeight) {
             scrollBottomBtn.classList.add('visible');
        }
    };

    init();
});
