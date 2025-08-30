// Language translation functionality
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    
    // Hero section
    "hero.title": "Embedded Systems Engineer",
    "hero.description": "Passionate about creating innovative embedded solutions and IoT systems that bridge the gap between hardware and software.",
    "hero.cta1": "Get In Touch",
    "hero.cta2": "View Projects",
    
    // Social media
    "social.email": "Email",
    "social.linkedin": "LinkedIn",
    "social.github": "GitHub",
    "social.whatsapp": "WhatsApp",
    "social.facebook": "Facebook",
    "social.instagram": "Instagram",
    "social.twitter": "Twitter",
    "social.hackster": "Hackster",
    "social.resume": "Resume",
    
    // About section
    "about.title": "About Me",
    "about.text1": "I am a dedicated Embedded Systems Engineer with expertise in developing firmware for microcontrollers, implementing communication protocols, and designing PCBs. With a strong foundation in electrical engineering and a passion for innovation, I enjoy creating solutions that solve real-world problems.",
    "about.text2": "When I'm not coding or tinkering with hardware, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical blogs and workshops.",
    
    // Experience section
    "experience.title": "Work Experience",
    "experience.company": "Company:",
    "experience.duration": "Duration:",
    "experience.responsibilities": "Responsibilities:",
    "experience.job1.title": "Development Engineer Electronics",
    "experience.job1.duration": "Jan 2021 - Present",
    "experience.job1.resp1": "Develop firmware for microcontrollers.",
    "experience.job1.resp2": "Implement communication protocols (UART, SPI, I2C).",
    "experience.job1.resp3": "Design and test PCBs and embedded hardware.",
    "experience.job1.resp4": "Collaborate with hardware teams for integration and debugging.",
    "experience.job2.title": "Embedded System Engineer",
    "experience.job2.duration": "Jan 2021 -",
    "experience.job2.resp1": "Develop firmware for microcontrollers.",
    "experience.job2.resp2": "Implement communication protocols (UART, SPI, I2C).",
    "experience.job2.resp3": "Design and test PCBs and embedded hardware.",
    "experience.job2.resp4": "Collaborate with hardware teams for integration and debugging.",
    "experience.job3.title": "Associate Software Engineer",
    "experience.job3.duration": "Jan 2021 -",
    "experience.job3.resp1": "Develop firmware for microcontrollers.",
    "experience.job3.resp2": "Implement communication protocols (UART, SPI, I2C).",
    "experience.job3.resp3": "Design and test PCBs and embedded hardware.",
    "experience.job3.resp4": "Collaborate with hardware teams for integration and debugging.",
    
    // Education section
    "education.title": "Education",
    "education.university": "University:",
    "education.institute": "Institute:",
    "education.duration": "Duration:",
    "education.project": "Project:",
    "education.degree1.title": "B.Sc in Electrical & Electronics Engineering",
    "education.degree1.duration": "2015 - 2019",
    "education.degree1.project": "Smart Carparking System Using",
    "education.degree2.title": "Diploma in Electrical Engineering",
    "education.degree2.duration": "2009 - 2014",
    "education.degree2.project": "MPPT Solar Inverter",
    
    // Skills section
    "skills.title": "Technical Skills",
    "skills.category1": "Programming & Embedded",
    "skills.category2": "Hardware & Tools",
    "skills.category3": "PCB & Circuit Design",
    "skills.category4": "Power Electronics",
    "skills.category5": "System Design & IoT",
    "skills.category6": "Simulation & Analysis",
    "skills.category7": "Testing & Measurement",
    "skills.category8": "Robotics & Automation",
    
    // Projects section
    "projects.title": "Projects",

    "projects.duration": "Duration:",
    "projects.description": "Project:",
    "projects.project1.title": "",
    "projects.project1.duration": "",
    "projects.project1.description": "",
    "projects.project2.title": "",
    "projects.project2.duration": "",
    "projects.project2.description": "",
    
    // Certifications section
    "certifications.title": "Certifications",
    "certifications.issuer": "Issuer:",
    "certifications.date": "Date:",
    "certifications.location": "Location:",
    "certifications.cert1.title": "Master Class on Internet of Things",
    "certifications.cert1.date": "March 2021",
    "certifications.cert1.location": "Dhaka, Bangladesh",
    "certifications.cert1.description": "Comprehensive course covering embedded systems design, real-time operating systems, and hardware-software co-design.",
    "certifications.cert2.title": "Techfest 2018",
    "certifications.cert2.date": "March 2021",
    "certifications.cert2.location": "Dhaka, Bangladesh",
    "certifications.cert2.description": "Comprehensive course covering embedded systems design, real-time operating systems, and hardware-software co-design.",
    "certifications.cert3.title": "Techfest 2018",
    "certifications.cert3.date": "March 2021",
    "certifications.cert3.location": "Bombay, India",
    "certifications.cert3.description": "Comprehensive course covering embedded systems design, real-time operating systems, and hardware-software co-design.",
    "certifications.cert4.title": "IEEE SS12 2018 Competition",
    "certifications.cert4.date": "November 2020",
    "certifications.cert4.location": "Colombo, Sri Lanka",
    "certifications.cert4.description": "Participated in the prestigious IEEE competition showcasing technical skills.",
    "certifications.cert5.title": "IEEE YESIST12 Competition",
    "certifications.cert5.date": "November 2020",
    "certifications.cert5.location": "Bangkok, Thailand",
    "certifications.cert5.description": "Competed in the YESIST12 innovation challenge.",
    "certifications.cert6.title": "NASA Space App Challenge 2018",
    "certifications.cert6.date": "October 2018",
    "certifications.cert6.description": "Participated in the global hackathon addressing real-world problems.",
    "certifications.cert7.title": "NASA Space App Challenge 2019",
    "certifications.cert7.date": "October 2019",
    "certifications.cert7.description": "Participated in the global hackathon addressing real-world problems.",
    
    // Contact section
    "contact.title": "Contact Me",
    "contact.description": "I'm always interested in new challenges and opportunities. Feel free to reach out if you'd like to discuss a project or just say hello!",
    "contact.email": "Email:",
    "contact.location": "Location:",
    
    // Quote section
    "quote.text": "Everything's always ending. But everything's always beginning, too.",
    "quote.author": "- Patrick Ness",
    
    // Footer
    "footer.rights": "All rights reserved."
  },
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.about": "Über mich",
    "nav.experience": "Erfahrung",
    "nav.education": "Bildung",
    "nav.skills": "Fähigkeiten",
    "nav.projects": "Projekte",
    "nav.contact": "Kontakt",
    
    // Hero section
    "hero.title": "Embedded Systems Ingenieur",
    "hero.description": "Leidenschaftlich über die Erstellung innovativer Embedded-Lösungen und IoT-Systeme, die die Lücke zwischen Hardware und Software schließen.",
    "hero.cta1": "Kontakt aufnehmen",
    "hero.cta2": "Projekte ansehen",
    
    // Social media
    "social.email": "E-Mail",
    "social.linkedin": "LinkedIn",
    "social.github": "GitHub",
    "social.whatsapp": "WhatsApp",
    "social.facebook": "Facebook",
    "social.instagram": "Instagram",
    "social.twitter": "Twitter",
    "social.hackster": "Hackster",
    "social.resume": "Lebenslauf",
    
    // About section
    "about.title": "Über mich",
    "about.text1": "Ich bin ein engagierter Embedded Systems Ingenieur mit Expertise in der Entwicklung von Firmware für Mikrocontroller, der Implementierung von Kommunikationsprotokollen und dem Design von Leiterplatten. Mit einer soliden Grundlage in Elektrotechnik und einer Leidenschaft für Innovation genieße ich es, Lösungen zu schaffen, die reale Probleme lösen.",
    "about.text2": "Wenn ich nicht codiere oder mit Hardware herumbastle, findest mich dabei, wie ich neue Technologien erforsche, zu Open-Source-Projekten beitrage oder mein Wissen durch technische Blogs und Workshops teile.",
    
    // Experience section
    "experience.title": "Berufserfahrung",
    "experience.company": "Firma:",
    "experience.duration": "Dauer:",
    "experience.responsibilities": "Verantwortlichkeiten:",
    "experience.job1.title": "Entwicklungsingenieur Elektronik",
    "experience.job1.duration": "Jan 2021 - Heute",
    "experience.job1.resp1": "Entwicklung von Firmware für Mikrocontroller.",
    "experience.job1.resp2": "Implementierung von Kommunikationsprotokollen (UART, SPI, I2C).",
    "experience.job1.resp3": "Design und Test von Leiterplatten und Embedded-Hardware.",
    "experience.job1.resp4": "Zusammenarbeit mit Hardware-Teams für Integration und Fehlerbehebung.",
    "experience.job2.title": "Embedded System Ingenieur",
    "experience.job2.duration": "Jan 2021 -",
    "experience.job2.resp1": "Entwicklung von Firmware für Mikrocontroller.",
    "experience.job2.resp2": "Implementierung von Kommunikationsprotokollen (UART, SPI, I2C).",
    "experience.job2.resp3": "Design und Test von Leiterplatten und Embedded-Hardware.",
    "experience.job2.resp4": "Zusammenarbeit mit Hardware-Teams für Integration und Fehlerbehebung.",
    "experience.job3.title": "Associate Software Ingenieur",
    "experience.job3.duration": "Jan 2021 -",
    "experience.job3.resp1": "Entwicklung von Firmware für Mikrocontroller.",
    "experience.job3.resp2": "Implementierung von Kommunikationsprotokollen (UART, SPI, I2C).",
    "experience.job3.resp3": "Design und Test von Leiterplatten und Embedded-Hardware.",
    "experience.job3.resp4": "Zusammenarbeit mit Hardware-Teams für Integration und Fehlerbehebung.",
    
    // Education section
    "education.title": "Bildung",
    "education.university": "Universität:",
    "education.institute": "Institut:",
    "education.duration": "Dauer:",
    "education.project": "Projekt:",
    "education.degree1.title": "B.Sc in Elektro- und Elektroniktechnik",
    "education.degree1.duration": "2015 - 2019",
    "education.degree1.project": "Smartes Parksystem mit",
    "education.degree2.title": "Diplom in Elektrotechnik",
    "education.degree2.duration": "2009 - 2014",
    "education.degree2.project": "MPPT Solarwechselrichter",
    
    // Skills section
    "skills.title": "Technische Fähigkeiten",
    "skills.category1": "Programmierung & Embedded",
    "skills.category2": "Hardware & Werkzeuge",
    "skills.category3": "PCB & Schaltungsdesign",
    "skills.category4": "Leistungselektronik",
    "skills.category5": "Systemdesign & IoT",
    "skills.category6": "Simulation & Analyse",
    "skills.category7": "Testen & Messen",
    "skills.category8": "Robotik & Automatisierung",
    
    // Projects section
    "projects.title": "Projekte",
    "projects.university": "Universität:",
    "projects.institute": "Institut:",
    "projects.duration": "Dauer:",
    "projects.description": "Projekt:",
    "projects.project1.title": "MARS Rover",
    "projects.project1.duration": "2015 - 2019",
    "projects.project1.description": "Smartes Parksystem mit",
    "projects.project2.title": "Roboterarm",
    "projects.project2.duration": "2009 - 2014",
    "projects.project2.description": "MPPT Solarwechselrichter",
    
    // Certifications section
    "certifications.title": "Zertifizierungen",
    "certifications.issuer": "Aussteller:",
    "certifications.date": "Datum:",
    "certifications.location": "Ort:",
    "certifications.cert1.title": "Master Class Internet der Dinge",
    "certifications.cert1.date": "März 2021",
    "certifications.cert1.location": "Dhaka, Bangladesch",
    "certifications.cert1.description": "Umfassender Kurs über Embedded Systems Design, Echtzeitbetriebssysteme und Hardware-Software-Co-Design.",
    "certifications.cert2.title": "Techfest 2018",
    "certifications.cert2.date": "März 2021",
    "certifications.cert2.location": "Dhaka, Bangladesch",
    "certifications.cert2.description": "Umfassender Kurs über Embedded Systems Design, Echtzeitbetriebssysteme und Hardware-Software-Co-Design.",
    "certifications.cert3.title": "Techfest 2018",
    "certifications.cert3.date": "März 2021",
    "certifications.cert3.location": "Bombay, Indien",
    "certifications.cert3.description": "Umfassender Kurs über Embedded Systems Design, Echtzeitbetriebssysteme und Hardware-Software-Co-Design.",
    "certifications.cert4.title": "IEEE SS12 2018 Wettbewerb",
    "certifications.cert4.date": "November 2020",
    "certifications.cert4.location": "Colombo, Sri Lanka",
    "certifications.cert4.description": "Teilnahme am prestigeträchtigen IEEE-Wettbewerb zur Präsentation technischer Fähigkeiten.",
    "certifications.cert5.title": "IEEE YESIST12 Wettbewerb",
    "certifications.cert5.date": "November 2020",
    "certifications.cert5.location": "Bangkok, Thailand",
    "certifications.cert5.description": "Teilnahme an der YESIST12 Innovationsherausforderung.",
    "certifications.cert6.title": "NASA Space App Challenge 2018",
    "certifications.cert6.date": "Oktober 2018",
    "certifications.cert6.description": "Teilnahme am globalen Hackathon zur Lösung realer Probleme.",
    "certifications.cert7.title": "NASA Space App Challenge 2019",
    "certifications.cert7.date": "Oktober 2019",
    "certifications.cert7.description": "Teilnahme am globalen Hackathon zur Lösung realer Probleme.",
    
    // Contact section
    "contact.title": "Kontaktieren Sie mich",
    "contact.description": "Ich bin immer an neuen Herausforderungen und Möglichkeiten interessiert. Kontaktieren Sie mich gerne, wenn Sie ein Projekt besprechen oder einfach Hallo sagen möchten!",
    "contact.email": "E-Mail:",
    "contact.location": "Ort:",
    
    // Quote section
    "quote.text": "Alles endet immer. Aber alles fängt auch immer wieder an.",
    "quote.author": "- Patrick Ness",
    
    // Footer
    "footer.rights": "Alle Rechte vorbehalten."
  },
  bd: {
    // Navigation
    "nav.home": "হোম",
    "nav.about": "সম্পর্কে",
    "nav.experience": "অভিজ্ঞতা",
    "nav.education": "শিক্ষা",
    "nav.skills": "দক্ষতা",
    "nav.projects": "প্রকল্প",
    "nav.contact": "যোগাযোগ",
    
    // Hero section
    "hero.title": "এম্বেডেড সিস্টেমস ইঞ্জিনিয়ার",
    "hero.description": "ইনোভেটিভ এম্বেডেড সমাধান এবং IoT সিস্টেম তৈরি করতে আগ্রহী যা হার্ডওয়্যার এবং সফ্টওয়্যারের মধ্যে ব্যবধান পূরণ করে।",
    "hero.cta1": "যোগাযোগ করুন",
    "hero.cta2": "প্রকল্প দেখুন",
    
    // Social media
    "social.email": "ইমেইল",
    "social.linkedin": "লিংকডইন",
    "social.github": "গিটহাব",
    "social.whatsapp": "হোয়াটসঅ্যাপ",
    "social.facebook": "ফেসবুক",
    "social.instagram": "ইনস্টাগ্রাম",
    "social.twitter": "টুইটার",
    "social.hackster": "হ্যাকস্টার",
    "social.resume": "রিজিউম",
    
    // About section
    "about.title": "আমার সম্পর্কে",
    "about.text1": "আমি একজন নিবেদিত এম্বেডেড সিস্টেমস ইঞ্জিনিয়ার যার মাইক্রোকন্ট্রোলারের জন্য ফার্মওয়্যার উন্নয়ন, কমিউনিকেশন প্রোটোকল বাস্তবায়ন এবং PCB ডিজাইনে দক্ষতা রয়েছে। ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং-এ একটি শক্ত ভিত্তি এবং উদ্ভাবনের প্রতি আবেগ নিয়ে, আমি বাস্তব-বিশ্বের সমস্যা সমাধান করে এমন সমাধান তৈরি করতে উপভোগ করি।",
    "about.text2": "যখন আমি কোডিং বা হার্ডওয়্যার নিয়ে কাজ করি না, তখন আপনি আমাকে নতুন প্রযুক্তি অন্বেষণ, ওপেন-সোর্স প্রকল্পে অবদান বা প্রযুক্তিগত ব্লগ এবং ওয়ার্কশপের মাধ্যমে আমার জ্ঞান শেয়ার করতে দেখতে পাবেন।",
    
    // Experience section
    "experience.title": "কাজের অভিজ্ঞতা",
    "experience.company": "কোম্পানি:",
    "experience.duration": "সময়কাল:",
    "experience.responsibilities": "দায়িত্বসমূহ:",
    "experience.job1.title": "ডেভেলপমেন্ট ইঞ্জিনিয়ার ইলেকট্রনিক্স",
    "experience.job1.duration": "জানু ২০২১ - বর্তমান",
    "experience.job1.resp1": "মাইক্রোকন্ট্রোলারের জন্য ফার্মওয়্যার ডেভেলপ করুন।",
    "experience.job1.resp2": "কমিউনিকেশন প্রোটোকল (UART, SPI, I2C) বাস্তবায়ন করুন।",
    "experience.job1.resp3": "PCB এবং এম্বেডেড হার্ডওয়্যার ডিজাইন ও টেস্ট করুন।",
    "experience.job1.resp4": "ইন্টিগ্রেশন এবং ডিবাগিং এর জন্য হার্ডওয়্যার টিমের সাথে সহযোগিতা করুন।",
    "experience.job2.title": "এম্বেডেড সিস্টেম ইঞ্জিনিয়ার",
    "experience.job2.duration": "জানু ২০২১ -",
    "experience.job2.resp1": "মাইক্রোকন্ট্রোলারের জন্য ফার্মওয়্যার ডেভেলপ করুন।",
    "experience.job2.resp2": "কমিউনিকেশন প্রোটোকল (UART, SPI, I2C) বাস্তবায়ন করুন।",
    "experience.job2.resp3": "PCB এবং এম্বেডেড হার্ডওয়্যার ডিজাইন ও টেস্ট করুন।",
    "experience.job2.resp4": "ইন্টিগ্রেশন এবং ডিবাগিং এর জন্য হার্ডওয়্যার টিমের সাথে সহযোগিতা করুন।",
    "experience.job3.title": "অ্যাসোসিয়েট সফটওয়্যার ইঞ্জিনিয়ার",
    "experience.job3.duration": "জানু ২০২১ -",
    "experience.job3.resp1": "মাইক্রোকন্ট্রোলারের জন্য ফার্মওয়্যার ডেভেলপ করুন।",
    "experience.job3.resp2": "কমিউনিকেশন প্রোটোকল (UART, SPI, I2C) বাস্তবায়ন করুন।",
    "experience.job3.resp3": "PCB এবং এম্বেডেড হার্ডওয়্যার ডিজাইন ও টেস্ট করুন।",
    "experience.job3.resp4": "ইন্টিগ্রেশন এবং ডিবাগিং এর জন্য হার্ডওয়্যার টিমের সাথে সহযোগিতা করুন।",
    
    // Education section
    "education.title": "শিক্ষা",
    "education.university": "বিশ্ববিদ্যালয়:",
    "education.institute": "ইনস্টিটিউট:",
    "education.duration": "সময়কাল:",
    "education.project": "প্রকল্প:",
    "education.degree1.title": "বি.এসসি ইন ইলেকট্রিক্যাল ও ইলেকট্রনিক্স ইঞ্জিনিয়ারিং",
    "education.degree1.duration": "২০১৫ - ২০১৯",
    "education.degree1.project": "স্মার্ট কারপার্কিং সিস্টেম ব্যবহার করে",
    "education.degree2.title": "ডিপ্লোমা ইন ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং",
    "education.degree2.duration": "২০০৯ - ২০১৪",
    "education.degree2.project": "এমপিপিটি সোলার ইনভার্টার",
    
    // Skills section
    "skills.title": "প্রযুক্তিগত দক্ষতা",
    "skills.category1": "প্রোগ্রামিং ও এম্বেডেড",
    "skills.category2": "হার্ডওয়্যার ও টুলস",
    "skills.category3": "পিসিবি ও সার্কিট ডিজাইন",
    "skills.category4": "পাওয়ার ইলেকট্রনিক্স",
    "skills.category5": "সিস্টেম ডিজাইন ও IoT",
    "skills.category6": "সিমুলেশন ও বিশ্লেষণ",
    "skills.category7": "পরীক্ষণ ও পরিমাপ",
    "skills.category8": "রোবোটিক্স ও অটোমেশন",
    
    // Projects section
    "projects.title": "প্রকল্প",
    "projects.university": "বিশ্ববিদ্যালয়:",
    "projects.institute": "ইনস্টিটিউট:",
    "projects.duration": "সময়কাল:",
    "projects.description": "প্রকল্প:",
    "projects.project1.title": "মARS রোভার",
    "projects.project1.duration": "২০১৫ - ২০১৯",
    "projects.project1.description": "স্মার্ট কারপার্কিং সিস্টেম ব্যবহার করে",
    "projects.project2.title": "রোবোটিক আর্ম",
    "projects.project2.duration": "২০০৯ - ২০১৪",
    "projects.project2.description": "এমপিপিটি সোলার ইনভার্টার",
    
    // Certifications section
    "certifications.title": "সনদপত্র",
    "certifications.issuer": "প্রদানকারী:",
    "certifications.date": "তারিখ:",
    "certifications.location": "অবস্থান:",
    "certifications.cert1.title": "ইন্টারনেট অফ থিংস উপর মাস্টার ক্লাস",
    "certifications.cert1.date": "মার্চ ২০২১",
    "certifications.cert1.location": "ঢাকা, বাংলাদেশ",
    "certifications.cert1.description": "এম্বেডেড সিস্টেম ডিজাইন, রিয়েল-টাইম অপারেটিং সিস্টেম এবং হার্ডওয়্যার-সফ্টওয়্যার কো-ডিজাইন কভার করে ব্যাপক কোর্স।",
    "certifications.cert2.title": "টেকফেস্ট ২০১৮",
    "certifications.cert2.date": "মার্চ ২০২১",
    "certifications.cert2.location": "ঢাকা, বাংলাদেশ",
    "certifications.cert2.description": "এম্বেডেড সিস্টেম ডিজাইন, রিয়েল-টাইম অপারেটিং সিস্টেম এবং হার্ডওয়্যার-সফ্টওয়্যার কো-ডিজাইন কভার করে ব্যাপক কোর্স।",
    "certifications.cert3.title": "টেকফেস্ট ২০১৮",
    "certifications.cert3.date": "মার্চ ২০২১",
    "certifications.cert3.location": "বোম্বে, ভারত",
    "certifications.cert3.description": "এম্বেডেড সিস্টেম ডিজাইন, রিয়েল-টাইম অপারেটিং সিস্টেম এবং হার্ডওয়্যার-সফ্টওয়্যার কো-ডিজাইন কভার করে ব্যাপক কোর্স।",
    "certifications.cert4.title": "আইইইই এসএস১২ ২০১৮ প্রতিযোগিতা",
    "certifications.cert4.date": "নভেম্বর ২০২০",
    "certifications.cert4.location": "কলম্বো, শ্রীলঙ্কা",
    "certifications.cert4.description": "প্রতিষ্ঠিত IEEE প্রতিযোগিতায় অংশগ্রহণ যা প্রযুক্তিগত দক্ষতা প্রদর্শন করে।",
    "certifications.cert5.title": "আইইইই ইয়েসিস্ট১২ প্রতিযোগিতা",
    "certifications.cert5.date": "নভেম্বর ২০২০",
    "certifications.cert5.location": "ব্যাংকক, থাইল্যান্ড",
    "certifications.cert5.description": "YESIST12 উদ্ভাবন চ্যালেঞ্জে প্রতিদ্বন্দ্বিতা করা।",
    "certifications.cert6.title": "নাসা স্পেস অ্যাপ চ্যালেঞ্জ ২০১৮",
    "certifications.cert6.date": "অক্টোবর ২০১৮",
    "certifications.cert6.description": "বাস্তব-বিশ্বের সমস্যা সমাধানে গ্লোবাল হ্যাকাথনে অংশগ্রহণ।",
    "certifications.cert7.title": "নাসা স্পেস অ্যাপ চ্যালেঞ্জ ২০১৯",
    "certifications.cert7.date": "অক্টোবর ২০১৯",
    "certifications.cert7.description": "বাস্তব-বিশ্বের সমস্যা সমাধানে গ্লোবাল হ্যাকাথনে অংশগ্রহণ।",
    
    // Contact section
    "contact.title": "আমার সাথে যোগাযোগ করুন",
    "contact.description": "আমি সবসময় নতুন চ্যালেঞ্জ এবং সুযোগ নিয়ে আগ্রহী। আপনি যদি কোন প্রকল্প নিয়ে আলোচনা করতে চান বা শুধু হ্যালো বলতে চান তবে নির্দ্বিধায় যোগাযোগ করুন!",
    "contact.email": "ইমেইল:",
    "contact.location": "অবস্থান:",
    
    // Quote section
    "quote.text": "সবকিছু সবসময় শেষ হচ্ছে। কিন্তু সবকিছু সবসময় শুরুও হচ্ছে।",
    "quote.author": "- প্যাট্রিক নেস",
    
    // Footer
    "footer.rights": "সমস্ত অধিকার সংরক্ষিত।"
  }
};

// Language switching functionality
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
  
  // Initialize particles
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#64ffda" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#64ffda",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true
        }
      },
      retina_detect: true
    });
  }
  
  // Language switching
  const langButtons = document.querySelectorAll('.lang-btn');
  let currentLang = localStorage.getItem('language') || 'en';
  
  // Set active language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Apply translations for current language
  applyTranslations(currentLang);
  
  // Add click event listeners to language buttons
  langButtons.forEach(button => {
    button.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      
      // Update active button
      langButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Save language preference
      localStorage.setItem('language', lang);
      
      // Apply translations
      applyTranslations(lang);
    });
  });
  
  // Scroll to top functionality
  window.addEventListener('scroll', function() {
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });
});

// Apply translations to the page
function applyTranslations(lang) {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

}

