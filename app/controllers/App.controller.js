const portfolioData = {
    personalInfo: {
        name: 'Neeraj Kumar Rathor',
        email: 'nkrathore67@gmail.com',
        phone: ['+91-7976502791', '+81-7074021946'],
    },
    academicDetails: [
        { year: '2024', degree: 'M.Tech Computer Science & Engineering', institute: 'IIT Hyderabad', marks: '7.57' },
        { year: '2021', degree: 'B.E. Computer Science and Engineering', institute: 'MBM Engineering College, Jodhpur', marks: '7.95' },
        { year: '2017', degree: 'XII (CBSE)', institute: 'Central Academy, CHB, Jodhpur', marks: '84.6%' },
        { year: '2015', degree: 'X (CBSE)', institute: 'Central Academy, CHB, Jodhpur', marks: '9.2' },
    ],
    workExperience: [
        {
            title: 'Software Engineer',
            company: 'Denso, Tokyo, Japan',
            duration: 'Oct 2024 – Present',
            responsibilities: [
                'Develop and maintain cloud-native applications and full-stack solutions for automotive and enterprise systems.',
                'Design and implement Infrastructure as Code (IaC) using Terraform for scalable and repeatable cloud deployments.',
                'Manage CI/CD pipelines (GitHub Actions, Jenkins) to automate build, test, and deployment processes.',
                'Optimize and maintain AWS infrastructure, leveraging services like EC2, RDS, S3, CloudFront, and Load Balancers.',
                'Implement and monitor logging and observability using tools like Prometheus, Grafana, and CloudWatch.',
                'Collaborate with cross-functional teams to integrate DevOps best practices.',
                'Contribute to full-stack development using React (frontend) and Node.js (backend).',
            ],
        },
        {
            title: 'Software Developer',
            company: 'AppPerfect Corp., India',
            duration: 'Feb 2021 – July 2022',
            responsibilities: [
                'Design, develop, and implement new software and features.',
                'Lead and coordinate teams of engineers to align efforts in the best possible manner.',
                'Add support for newly released products and versions (Browsers, Dev. Platforms, etc.).',
                'Modify and enhance existing features, debug and fix bugs in existing products.',
                'Write and enhance product documentation and create documents like Functional Specifications, Test Plans, and scoping documents.',
            ],
        },
    ],
    projects: [
        {
            title: 'Implementation of O2PL & SGT Scheduler',
            description: 'Designed and developed advanced concurrency control schedulers for multi-threaded applications.',
            technologies: ['C++', 'Mutex', 'Multi-Threading'],
        },
        {
            title: 'Polluting Bloom Filters using Flow Radar',
            description: 'Implemented a hash-based probabilistic data structure to reduce memory consumption in online security applications.',
            technologies: ['Python'],
        },
        {
            title: 'Global Monitoring System',
            description: 'Implemented monitoring tools for Kube clusters, AWS services, Linux machines, and databases.',
            technologies: ['Grafana', 'Prometheus', 'AWS', 'Selenium', 'Shell Scripts'],
        },
        {
            title: 'Qscape',
            description: 'Developed an automated queue management system using machine learning to estimate waiting times.',
            technologies: ['AWS EC2', 'Machine Learning', 'Object Detection'],
        },
    ],
    skills: [
        'C++', 'Python', 'Java', 'HTML + CSS', 'MySQL', 'Docker', 'Kubernetes', 'AWS', 'Ansible', 'Jenkins', 'Grafana', 'Prometheus',
    ],
    certifications: [
        'AWS Certified Solutions Architect - Associate (Jan 2025 – Jan 2028)',
        'Red Hat Certified Specialist in Ansible Automation (Jun 2019 - Jun 2022)',
        'Red Hat Certified System Administrator (RHCSA) (Jun 2019 - Jun 2022)',
        'Deep Learning Specialization (Andrew Ng)',
        'Technical Support Fundamentals (Google)',
        'SIH 2020 - Smart India Hackathon (Finalist)',
    ],
};

const App = {
    landing: (req, res) => {
        res.render('landing', { title: 'Welcome', portfolioData });
    },

    academicDetails: (req, res) => {
        res.render('academic-details', { title: 'Academic Details', portfolioData });
    },

    workExperience: (req, res) => {
        res.render('work-experience', { title: 'Work Experience', portfolioData });
    },

    projects: (req, res) => {
        res.render('projects', { title: 'Projects', portfolioData });
    },

    skills: (req, res) => {
        res.render('skills', { title: 'Skills', portfolioData });
    },

    certifications: (req, res) => {
        res.render('certifications', { title: 'Certifications', portfolioData });
    },
};

module.exports = App;