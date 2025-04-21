import React, { useState } from 'react';
import Modal from 'react-modal';
import { 
  Menu, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronDown,
  User,
  Award,
  Briefcase,
  Wrench,
  FileText,
  GraduationCap,
  Medal,
  Video,
  BookOpen
} from 'lucide-react';

Modal.setAppElement('#root');

function App() {
  const [selectedProject, setSelectedProject] = useState<null | {
    title: string;
    description: string;
    fullDescription: string;
    tech: string[];
    images: string[];
  }>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { name: 'About', icon: User },
    { name: 'Projects', icon: Briefcase },
    { name: 'Skills', icon: Wrench },
    { name: 'Achievements', icon: Award },
    { name: 'Education', icon: GraduationCap },
    { name: 'Certificates', icon: Medal }
  ];

  const skills = {
    'Programming Languages': [
      { name: 'Python', logo: 'https://www.python.org/static/community_logos/python-logo-generic.svg' },
      { name: 'Java', logo: 'https://www.vectorlogo.zone/logos/java/java-icon.svg' },
      { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
      { name: 'C', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png' }
    ],
    'Web Development': [
      { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
      { name: 'Node.js', logo: 'https://andrewbeeken.co.uk/wp-content/uploads/2018/11/nodejs.jpg?w=1200' },
      { name: 'MongoDB', logo: 'https://www.mongodb.com/assets/images/global/leaf.png' },
      { name: 'HTML/CSS', logo: 'https://www.w3.org/html/logo/badge/html5-badge-h-css3.png' },
      { name: 'Express.js', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXpCVrym3sQKRS3_hAnLQIocLuMJorvv0Jiw&s' }
    ],
    'AI & ML': [
      { name: 'TensorFlow', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg' },
      { name: 'PyTorch', logo: 'https://pytorch.org/assets/images/pytorch-logo.png' },
      { name: 'OpenCV', logo: 'https://opencv.org/wp-content/uploads/2020/07/OpenCV_logo_black-2.png' },
      { name: 'Scikit-learn', logo: 'https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png' },
      { name: 'Keras', logo: 'https://keras.io/img/logo.png' }
    ],
    'Data Science & Tools': [
      { name: 'Pandas', logo: 'https://pandas.pydata.org/static/img/pandas_mark.svg' },
      { name: 'NumPy', logo: 'https://numpy.org/images/logo.svg' },
      { name: 'PowerBI', logo: 'https://powerbi.microsoft.com/pictures/shared/social/social-default-image.png' },
      { name: 'Git', logo: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },
      { name: 'SQL', logo: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png' }
    ]
  };

  const projects = [
    {
      title: 'Cornea AI: HCEC Analysis',
      description: 'AI-powered system for analyzing Human Corneal Endothelial Cells images to automate cell counting and predict ocular diseases.',
      fullDescription: 'Developed an AI-powered system for analyzing Human Corneal Endothelial Cells (HCEC) images to automate cell counting and predict ocular diseases. The model leverages CNN and Vision Transformers for accurate classification, identifying key parameters such as cell count, density, coefficient of variation (CV), and corneal thickness (THK). The model predicts whether surgery is required and suggests the appropriate surgical procedure based on disease severity.',
      tech: ['PyTorch', 'OpenCV', 'Vision Transformers', 'CNN'],
      images: [
        'https://umd-today.transforms.svdcdn.com/production/hero/AdobeStock_646724722_1920x1080.jpg?w=1920&h=1080&auto=compress%2Cformat&fit=crop&dm=1706738223&s=16d19f76321cbe78563ba5567d815b33',
        'https://www.researchgate.net/publication/343615465/figure/fig2/AS:924406514499584@1597397357503/Analysis-of-corneal-endothelial-cells-using-deep-learning.png'
      ]
    },
    {
      title: 'Ocular Disease Classification',
      description: 'Multi-label classification model using VGG16 architecture for accurate ocular disease predictions from medical images.',
      fullDescription: 'Developed an ocular disease classification model using VGG16 architecture for accurate multilabel predictions. Preprocessed the dataset with CLAHE and Z-score normalization to enhance image features and ensure consistent scaling. The model achieved high accuracy in classifying 10 relevant ocular diseases from medical image data.',
      tech: ['TensorFlow', 'Keras', 'OpenCV', 'VGG16'],
      images: [
        'https://t3.ftcdn.net/jpg/04/57/15/74/360_F_457157478_Ghgh6V5COWj91QOnYnQGQ0NiftupUBzC.jpg',
        'https://www.researchgate.net/publication/340739057/figure/fig3/AS:881471744847873@1587129161435/The-proposed-deep-learning-architecture-for-ocular-disease-classification.png'
      ]
    },
    {
      title: 'HealthSphere',
      description: 'A comprehensive healthcare platform integrating patient records, appointment scheduling, and medical history tracking.',
      fullDescription: 'Developed a full-stack healthcare platform that streamlines patient care management. Features include electronic health records, appointment scheduling, prescription management, and secure data sharing between healthcare providers. Implemented role-based access control and HIPAA-compliant data storage.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
      images: [
        'https://marketplace.canva.com/EAE8fLYOzrA/1/0/1600w/canva-health-care-bO8TgMWVszg.jpg'
      ]
    }
  ];

  const achievements = [
    {
      title: '4th Place Overall & 2nd Prize in Domain',
      description: 'Secured 4th Place Overall and Domain-wise 2nd Prize at HackWithinfinity, a national-level hackathon'
    },
    {
      title: 'TechMaze Event Organizer',
      description: 'Successfully organized TechMaze, a college-level technical event ensuring smooth coordination and student participation'
    },
    {
      title: '3rd Prize - Codebreakers Competition',
      description: 'Won 3rd prize in Inter-College level Codebreakers Competition'
    },
    {
      title: 'Academic Excellence',
      description: '10/10 GPA in 10th, 98.4% in intermediate, BTech CGPA of 9.31 (up to 3-1 semester)'
    }
  ];

  const certificates = [
    {
      name: 'Oracle Java Fundamentals',
      issuer: 'Oracle',
      logo: 'https://www.oracle.com/a/ocom/img/oracle-logo.svg'
    },
    {
      name: 'Python for Data Science',
      issuer: 'NPTEL',
      logo: 'https://media.licdn.com/dms/image/v2/D5612AQFsQn59kCIxng/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1714119741952?e=2147483647&v=beta&t=oenSgSdTHPiJsmu4Hhe1tKpt1jEwdSHTs_iwfiC-Bsc'
    },
    {
      name: 'Programming Essentials in Python',
      issuer: 'Cisco',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png'
    },
    {
      name: 'Problem Solving through Programming in C',
      issuer: 'NPTEL',
      logo: 'https://media.licdn.com/dms/image/v2/D5612AQFsQn59kCIxng/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1714119741952?e=2147483647&v=beta&t=oenSgSdTHPiJsmu4Hhe1tKpt1jEwdSHTs_iwfiC-Bsc'
    },
    {
      name: 'Programming in Java',
      issuer: 'NPTEL',
      logo: 'https://media.licdn.com/dms/image/v2/D5612AQFsQn59kCIxng/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1714119741952?e=2147483647&v=beta&t=oenSgSdTHPiJsmu4Hhe1tKpt1jEwdSHTs_iwfiC-Bsc'
    },
    {
      name: 'Programming with Python 3.X',
      issuer: 'SKILLUP',
      logo: 'https://www.simplilearn.com/ice9/assets/skillup-logo-new.svgz'
    }
  ];

  const education = [
    {
      degree: 'BTech, CSE (Data Science)',
      institute: 'B V Raju Institute of Technology',
      score: '9.31 / 10',
      years: '2022 - 2026'
    },
    {
      degree: 'Intermediate (MPC)',
      institute: 'Sri Chaitanya College',
      score: '98.4%',
      years: '2020 - 2022'
    },
    {
      degree: 'SSC',
      institute: 'Unique High School',
      score: '10 / 10',
      years: '2019 - 2020'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold">Jaishnavi Inturi</span>
            <div className="hidden md:flex space-x-8 mr-4"> {/* Added mr-4 for right-side spacing */}
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.name.toLowerCase())}
                  className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
                >
                  <item.icon className="nav-icon w-5 h-5 mr-2" />
                  {item.name}
                </button>
              ))}
            </div>
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-background relative min-h-[60vh]">
        <div className="hero-overlay">
          <div className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI & Full Stack Developer
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              BTech student specializing in AI, machine learning, and full-stack development. Passionate about creating innovative solutions in healthcare and technology.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/jaishnaviinturi" target="_blank" rel="noopener noreferrer" className="p-2 text-white hover:text-gray-300">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/jaishnavi-inturi-839251259" target="_blank" rel="noopener noreferrer" className="p-2 text-white hover:text-gray-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:jaishnaviinturi@gmail.com" className="p-2 text-white hover:text-gray-300">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <button 
              onClick={() => scrollToSection('about')}
              className="mt-12 animate-bounce text-white"
            >
              <ChevronDown className="h-8 w-8" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading flex items-center text-3xl font-bold text-gray-900 mb-8">
            <User className="w-8 h-8 mr-3 text-blue-500" />
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://media.licdn.com/dms/image/v2/C5612AQGT04MNWoIcAA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1640933006023?e=2147483647&v=beta&t=sgxEmfUfXcCoB4tJBqzeABQ3WGDI8AD7HFJ2sBt71qE"
                alt="Profile"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="bg-white/90 p-6 rounded-lg">
              <p className="text-gray-600 mb-6">
                I'm a BTech student (graduating in 2026) at B V Raju Institute of Technology, maintaining a CGPA of 9.31. I specialize in AI, machine learning, and full-stack development, with a particular focus on healthcare applications.
              </p>
              <div className="space-y-4">
                <p className="text-gray-600">
                  <strong>Location:</strong> Hyderabad, India
                </p>
                <p className="text-gray-600">
                  <strong>Education:</strong> BTech in Computer Science (Data Science)
                </p>
                <p className="text-gray-600">
                  <strong>Interests:</strong> AI in Healthcare, Web Development, Problem Solving
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading flex items-center text-3xl font-bold text-gray-900 mb-8">
            <Briefcase className="w-8 h-8 mr-3 text-blue-500" />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white/90 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-3 flex items-center justify-between">
                  {project.title}
                  <ExternalLink className="h-5 w-5 text-gray-600" />
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading flex items-center text-3xl font-bold text-gray-900 mb-8">
            <Wrench className="w-8 h-8 mr-3 text-blue-500" />
            Skills
          </h2>
          <div className="space-y-12">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white/90 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {items.map((skill, index) => (
                    <div key={index} className="skill-card flex items-center space-x-2">
                      <img src={skill.logo} alt={skill.name} className="w-8 h-8 tech-logo" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading flex items-center text-3xl font-bold text-gray-900 mb-8">
            <Award className="w-8 h-8 mr-3 text-blue-500" />
            Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card bg-white/90 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading flex items-center text-3xl font-bold text-gray-900 mb-8">
            <GraduationCap className="w-8 h-8 mr-3 text-blue-500" />
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white/90 p-6 rounded-lg">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institute}</p>
                <p className="text-gray-600">Score: {edu.score}</p>
                <p className="text-gray-600">Years: {edu.years}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading flex items-center text-3xl font-bold text-gray-900 mb-8">
            <Medal className="w-8 h-8 mr-3 text-blue-500" />
            Certificates
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white/90 p-6 rounded-lg hover:shadow-md transition-all">
                <img src={cert.logo} alt={cert.issuer} className="h-12 mb-4 tech-logo" />
                <h3 className="font-semibold">{cert.name}</h3>
                <p className="text-gray-600">Issued by {cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to work together!
          </p>
          <a
            href="mailto:jaishnaviinturi@gmail.com"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>Designed & Built by Jaishnavi Inturi</p>
        </div>
      </footer>

      {/* Project Modal */}
      <Modal
        isOpen={!!selectedProject}
        onRequestClose={() => setSelectedProject(null)}
        className="max-w-4xl mx-auto mt-20 bg-white p-8 rounded-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4"
      >
        {selectedProject && (
          <div>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <p className="text-gray-600 mb-6">{selectedProject.fullDescription}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {selectedProject.images.map((image, index) => (
                <img 
                  key={index}
                  src={image}
                  alt={`${selectedProject.title} screenshot ${index + 1}`}
                  className="rounded-lg shadow-md w-full h-auto"
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tech.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default App;