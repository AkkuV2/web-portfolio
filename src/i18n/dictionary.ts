// src/i18n/dictionary.ts

export type Language = 'es' | 'en';

export type TextFragment = {
  text: string;
  style?: 'accent';
};

export interface Translation {
  nav: {
    skills: string;
    about: string;
    projects: string;
    experience: string;
    education: string;
    contact: string;
  };
  hero: {
    lookingFor: string;
    titleLine1: string;
    titleLine2: string;
    greeting: string;
  };
  skills: {
    title: string;
    frontend: string;
    platforms: string;
    backend: string;
  };
  about: {
    title: string;
    bio: TextFragment[][];
    strengthsTitle: string;
    strengths: string[];
    softSkillsTitle: string;
    softSkills: string[];
    languagesTitle: string;
    languages: { lang: string; level: string }[];
    goalsTitle: string;
    goals: string[];
  };
  projects: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      description: string;
      tags: string[];
      status: string;
    }[];
  };
  experience: {
    title: string;
    items: {
      org: string;
      location: string;
      period: string;
      bullets: string[];
    }[];
  };
  education: {
    title: string;
    items: {
      degree: string;
      institution: string;
      location: string;
      period: string;
      type: string;
      highlights: string[];
    }[];
  };
  contact: {
    title: string;
    socialMediaTitle: string;
    availability: TextFragment[];
    socialLabels: {
      github: string;
      linkedin: string;
      email: string;
    };
  };
  contactForm: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    sentTitle: string;
    sentSubtitle: string;
    sendAnother: string;
    errors: {
      name: string;
      email: string;
      message: string;
    };
  };
  footer: {
    text: string;
  };
}

export const dictionary = {
  es: {
    nav: {
      skills: 'Habilidades',
      about: 'Sobre mí',
      projects: 'Proyectos',
      experience: 'Experiencia',
      education: 'Educación',
      contact: 'Contacto',
    },

    hero: {
      lookingFor: '¿Estás buscando un',
      titleLine1: 'Analista &',
      titleLine2: 'Desarrollador de Software?',
      greeting: 'Hola, soy ',
    },

    skills: {
      title: 'Mis Habilidades',
      frontend: 'Frontend',
      platforms: 'Plataformas y Herramientas',
      backend: 'Backend',
    },

    about: {
      title: 'Sobre mí',
      bio: [
        [
          { text: 'Mi nombre es Ali Erazo. Soy Analista y Desarrollador de Software Junior con experiencia práctica construyendo flujos de trabajo impulsados por IA y aplicaciones web full-stack.' },
        ],
        [
          { text: 'Comencé a aprender a programar en mi adolescencia como pasatiempo, luego me formé formalmente en el SENA en un programa de Análisis y Desarrollo de Software — completando su etapa práctica como pasante en la Universidad Autónoma del Caribe, donde trabajé con .NET y DB2.' },
        ],
        [
          { text: 'Desde entonces, he construido proyectos full-stack como Carguard, un sistema de gestión de parqueaderos usando PHP, PostgreSQL, algunas librerías como AlpineJS, AJAX, SweetAlert2, y un middleware personalizado, y desarrollé un chatbot basado en n8n con RAG y múltiples capas de seguridad. Ahora estoy explorando el desarrollo móvil para llevar esa misma experiencia a más plataformas.' },
        ],
        [
          { text: 'Tengo experiencia con ' },
          { text: 'React, PHP, C#, Docker, PostgreSQL y n8n', style: 'accent' },
          { text: ', combinando el desarrollo web tradicional con ' },
          { text: 'flujos de trabajo de agentes de IA.', style: 'accent' },
        ],
      ] as TextFragment[][],
      strengthsTitle: 'Fortalezas',
      strengths: [
        'Resolución creativa de problemas aplicada a sistemas reales',
        'Documentación técnica',
        'Arquitectura desde cero',
        'Autodidacta — Desarrollo sin supervisión',
      ],
      softSkillsTitle: 'Habilidades Blandas',
      softSkills: [
        'Autodidacta',
        'Aprendizaje rápido',
        'Comunicación asertiva',
        'Documentación',
        'Colaboración asíncrona',
        'Resolución de problemas',
      ],
      languagesTitle: 'Idiomas',
      languages: [
        { lang: 'Español', level: 'Nativo' },
        { lang: 'Inglés', level: 'Intermedio — lectura y comunicación técnica' },
      ],
      goalsTitle: 'Metas',
      goals: [
        'Construir proyectos sostenibles a largo plazo',
        'Aprender programación continuamente',
        'Asumir nuevos desafíos que no he enfrentado antes',
        'Crecer profesionalmente dentro del sector IT',
        'Desarrollar aplicaciones funcionales para el uso diario',
        'Satisfacer las necesidades del usuario',
      ],
    },

    projects: {
      title: 'Proyectos',
      subtitle: 'Un pequeño grupo de proyectos que he realizado o en los que colaboro.',
      items: [
        {
          name: 'Carguard',
          description:
            'Un pequeño proyecto creado para ayudar a los guardias de seguridad de un parqueadero a llevar un registro de la información de los propietarios de vehículos, registrando entradas y salidas de personas.',
          tags: ['PHP', 'PostgreSQL', 'TailwindV4'],
          status: 'Completado',
        },
      ],
    },

    experience: {
      title: 'Mi Experiencia',
      items: [
        {
          org: 'Universidad Autónoma del Caribe',
          location: 'Prácticas · Presencial · Colombia',
          period: '2025/2026',
          bullets: [
            'Desarrollé un chatbot basado en n8n usando RAG y rate limiting, con 8 capas de seguridad para controlar cómo responde el chatbot.',
            'Elaboré documentación técnica de entrada para nuevos desarrolladores, con un resumen visual de las tecnologías que utiliza la universidad.',
            'Integré vistas de React con APIs REST, usando datos obtenidos de la base de datos DB2 a través del backend para crear una experiencia dinámica para el usuario.',
          ],
        },
      ],
    },

    education: {
      title: 'Educación',
      items: [
        {
          degree: 'Tecnólogo en Análisis y Desarrollo de Software',
          institution: 'SENA Colombo-Alemán',
          location: 'Colombia',
          period: '2023 – 2026',
          type: 'Programa Tecnológico',
          highlights: [
            'Formación en análisis, diseño y construcción de software.',
            'Desarrollo de aplicaciones web con enfoque en buenas prácticas de programación.',
            'Gestión de bases de datos relacionales y no relacionales, control de versiones y despliegue.',
          ],
        },
      ],
    },

    contact: {
      title: 'Contáctame',
      socialMediaTitle: 'Redes sociales',
      availability: [
        { text: 'Actualmente ' },
        { text: 'abierto a oportunidades', style: 'accent' },
        { text: ' — roles junior, proyectos freelance o colaboraciones. Creemos algo juntos.' },
      ] as TextFragment[],
      socialLabels: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        email: 'Correo',
      },
    },

    contactForm: {
      name: 'Nombre',
      namePlaceholder: 'Ali Erazo',
      email: 'Correo',
      emailPlaceholder: 'tu@email.com',
      message: 'Mensaje',
      messagePlaceholder: 'Hola Ali, me gustaría trabajar contigo en...',
      submit: 'Enviar mensaje',
      sentTitle: '¡Mensaje enviado!',
      sentSubtitle: 'Te responderé pronto.',
      sendAnother: 'Enviar otro',
      errors: {
        name: 'El nombre es obligatorio',
        email: 'Se requiere un correo válido',
        message: 'El mensaje es obligatorio',
      },
    },

    footer: {
      text: '© 2026 Ali Erazo — construido con React & Tailwind CSS',
    },
  },

  en: {
    nav: {
      skills: 'Skills',
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
    },

    hero: {
      lookingFor: 'Are you looking for a',
      titleLine1: 'Analyst &',
      titleLine2: 'Software Developer?',
      greeting: "Hi, I'm ",
    },

    skills: {
      title: 'My Skillset',
      frontend: 'Frontend',
      platforms: 'Platforms & Tools',
      backend: 'Backend',
    },

    about: {
      title: 'About me',
      bio: [
        [
          { text: "My name is Ali Erazo. I'm a Junior Analyst and Software Developer with hands-on experience building AI-driven workflows and full-stack web applications." },
        ],
        [
          { text: 'I started learning to code in my teenage years as a hobby, later training formally at SENA in a Software Analysis and Development program — completing its practical stage as an intern at Universidad Autónoma del Caribe, where I worked with .NET and DB2.' },
        ],
        [
          { text: "Since then, I've built full-stack projects like Carguard, a parking management system using PHP, PostgreSQL, some libraries like AlpineJS, AJAX, SweetAlert2, and a custom middleware, and developed an n8n-based chatbot with RAG and multiple security layers. I'm now exploring mobile development to bring that same experience to more platforms." },
        ],
        [
          { text: 'I have experience with ' },
          { text: 'React, PHP, C#, Docker, PostgreSQL, and n8n', style: 'accent' },
          { text: ', combining traditional web development with ' },
          { text: 'AI agent workflows.', style: 'accent' },
        ],
      ] as TextFragment[][],
      strengthsTitle: 'Strengths',
      strengths: [
        'Creative problem-solving applied to real systems',
        'Technical documentation',
        'Architecture from scratch',
        'Self-taught — Developing without supervision',
      ],
      softSkillsTitle: 'Soft skills',
      softSkills: [
        'Self-taught',
        'Fast learner',
        'Assertive communication',
        'Documentation',
        'Async collaboration',
        'Problem solving',
      ],
      languagesTitle: 'Languages',
      languages: [
        { lang: 'Spanish', level: 'Native' },
        { lang: 'English', level: 'Intermediate — technical reading & communication' },
      ],
      goalsTitle: 'Goals',
      goals: [
        'Build sustainable long-term projects',
        'Continuously learn programming',
        'Take on new challenges I have not faced before',
        'Grow professionally within the IT sector',
        'Develop functional applications for everyday use',
        'Meet user needs',
      ],
    },

    projects: {
      title: 'Projects',
      subtitle: "A small group of projects that I've done or support.",
      items: [
        {
          name: 'Carguard',
          description:
            "A small project created to help security guards at their parking facility keep track of vehicle owners' information, recording entries and exits of people.",
          tags: ['PHP', 'PostgreSQL', 'TailwindV4'],
          status: 'Completed',
        },
      ],
    },

    experience: {
      title: 'My Experience',
      items: [
        {
          org: 'Universidad Autónoma del Caribe',
          location: 'Practices · On-site · Colombia',
          period: '2025/2026',
          bullets: [
            'Developed an n8n-based chatbot using RAG and rate limiting, with 8 security layers to control how the chatbot responds.',
            'Made an entry software documentation for new developers, with a visual summary of the technologies that the university uses.',
            'Integrated React views with APIs REST, using data retrieved from the DB2 database through the backend to create a dynamic experience for the user.',
          ],
        },
      ],
    },

    education: {
      title: 'Education',
      items: [
        {
          degree: 'Software Analysis and Development Technologist',
          institution: 'SENA Colombo-Alemán',
          location: 'Colombia',
          period: '2023 – 2026',
          type: 'Technological Program',
          highlights: [
            'Training in software analysis, design, and construction.',
            'Development of web applications with a focus on programming best practices.',
            'Management of relational and non-relational databases, version control, and deployment.',
          ],
        },
      ],
    },

    contact: {
      title: 'Contact me',
      socialMediaTitle: 'Social media',
      availability: [
        { text: 'Currently ' },
        { text: 'open to opportunities', style: 'accent' },
        { text: ' — junior roles, freelance projects, or collaborative builds. Let\'s create something together.' },
      ] as TextFragment[],
      socialLabels: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        email: 'Email',
      },
    },

    contactForm: {
      name: 'Name',
      namePlaceholder: 'Ali Erazo',
      email: 'Email',
      emailPlaceholder: 'you@email.com',
      message: 'Message',
      messagePlaceholder: "Hi Ali, I'd love to work with you on...",
      submit: 'Send message',
      sentTitle: 'Message sent!',
      sentSubtitle: "I'll get back to you soon.",
      sendAnother: 'Send another',
      errors: {
        name: 'Name is required',
        email: 'Valid email required',
        message: 'Message is required',
      },
    },

    footer: {
      text: '© 2026 Ali Erazo — built with React & Tailwind CSS',
    },
  },
}

export type Dictionary = Translation;
