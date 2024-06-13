import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'ASP.NET CORE PROJECT',
      pictures: [
        '../../assets/project/asp.net/1.png',
        '../../assets/project/asp.net/2.png',
        '../../assets/project/asp.net/3.jpg',
      ],
      projectLink: 'https://github.com/enayet329/AspnetMicroservices',
      liveLink: 'https://github.com/enayet329/AspnetMicroservices',
      summary:
        'Developed a E-commerce application using ASP.NET Core and Microservices Architecture.',
      description:
        'Spearheaded the development of a highly scalable e-commerce application using ASP.NET Core and Microservices Architecture. Designed and implemented RESTful APIs for various microservices, ensuring seamless inter-service communication. Utilized Dockerfor containerization of microservices, enhancing the scalability and reliability of the system. Employed RabbitMQ for asynchronous inter-service communication, improving system responsiveness.Leveraged Entity Framework Core for data access, and implemented SQL Server as the database solution.',
      tags: [
        Tag.ASPNET,
        Tag.NETWebAPI,
        Tag.SQL,
        Tag.CSharp,
        Tag.Docker,
        Tag.CleanArchitecture,
        Tag.MicroservicesArchitecture,
        Tag.RabbitMQ,
        Tag.Git,
      ],
    },
    {
      id: 1,
      name: 'ASP.NET JWT AUTHENTICATION',
      pictures: [
        '../../assets/project/AspNet Jwt/1.jpg',
        '../../assets/project/AspNet Jwt/2.png',
        '../../assets/project/AspNet Jwt/3.png',
      ],
      projectLink: 'https://github.com/enayet329/ASP.NET-JWT-Authentication',
      liveLink: 'https://github.com/enayet329/ASP.NET-JWT-Authentication',
      summary:
        'Developed a secure .NET web application implementing JWT (JSON Web Tokens) for authentication and authorization.',
      description:
        'Developed a secure .NET web application implementing JWT (JSON Web Tokens) for authentication and authorization. Implemented JWT middleware to validate tokens and ensure the security of user data. Utilized the .NET Identity framework for user management and integrated it with JWT for token generation. Ensured the secure transmission of sensitive information and user credentials using JWT. Successfully debugged and resolved issues related to token generation and validation. Maintained up-to-date knowledge of JWT specifications and best practices to ensure the application’s security.',
      tags: [
        Tag.ASPNET,
        Tag.JWT,
        Tag.ASPIDENTITY,
        Tag.CSharp,
        Tag.EntityFramework,
        Tag.Git,
      ],
    },
    {
      id: 2,
      name: 'IMAGE SEARCH APP',
      pictures: [
        '../../assets/project/ImageSearch/1.png',
        '../../assets/project/ImageSearch/2.png',
        '../../assets/project/ImageSearch/3.png',
      ],
      projectLink: 'https://github.com/enayet329/ImageSearchApp',
      liveLink: 'https://enayet329.github.io/ImageSearchApp/',
      summary:
        'Developed an Image Search Application, which allows users to search and retrieve images based on their queries',
      description:
        'Developed an Image Search Application leveraging JavaScript, which allows users to search and retrieve images basedon their queries. Integrated the application with a third-party image API, enabling real-time fetching of images based on user input. Utilized asynchronous programming and AJAX for seamless and non-blocking communication with the server. Ensured the application is responsive and compatible across different browsers and devices. Followed best coding practices and maintained code readability and reusability. Tested the application across various scenarios and fixed bugs to ensure its robustness and reliability.',
      tags: [Tag.JavaScript, Tag.Css, Tag.Html, Tag.Unsplash, Tag.Git],
    },
    {
      id: 3,
      name: 'Add Shopping Cart',
      pictures: [
        '../../assets/project/AddCart/1.png',
        '../../assets/project/AddCart/2.png',
        '../../assets/project/AddCart/3.png',
      ],
      projectLink: 'https://github.com/enayet329/Add-Cart-Shopping-App',
      liveLink: 'https://enayet329.github.io/Add-Cart-Shopping-App/',
      summary:
        'Developed an user-friendly ’Add to Cart’ feature for an e-commerce website',
      description:
        'Developed an interactive and user-friendly ’Add to Cart’ feature for an e-commerce website as part of a shopping project. Implemented real-time inventory tracking to ensure product availability and prevent overselling. Integrated secure payment gateways to facilitate smooth transactions. that increse user engagement',
      tags: [Tag.JavaScript, Tag.Html, Tag.Css, Tag.Git],
    },
    {
      id: 4,
      name: 'CHATGPT CLONE',
      pictures: [
        '../../assets/project/Chatgpt/1.png',
        '../../assets/project/Chatgpt/2.png',
        '../../assets/project/Chatgpt/3.png',
      ],
      projectLink: 'https://github.com/enayet329/Chat-GPT',
      liveLink: 'https://chat-gpt-nu-gules.vercel.app/',
      summary: 'Developed a ChatGPT clone using an open API key',
      description:
        'Developed a ChatGPT clone using an open API key, demonstrating proficiency in natural language processing and AI model integration. This project involved designing and implementing a user-friendly interface, ensuring secure API key usage, and optimizing the system for real-time, interactive conversations.',
      tags: [
        Tag.NextJs,
        Tag.TypeScript,
        Tag.OpenApi,
        Tag.Html,
        Tag.Css,
        Tag.Git,
      ],
    },
    {
      id: 5,
      name: 'Quize APP',
      pictures: [
        '../../assets/project/quizeApp/1.png',
        '../../assets/project/quizeApp/2.png',
        '../../assets/project/quizeApp/3.png',
      ],
      projectLink: 'https://github.com/enayet329/Quize-App',
      liveLink: 'https://quize-app-eta.vercel.app/',
      summary: 'Developed a Quize App User-friendly interface',
      description:
        'Developed an interactive Quiz App using JavaScript, HTML, and CSS, showcasing expertise in front-end web development and user experience design. This project entailed creating a dynamic and engaging interface, implementing secure and efficient JavaScript logic, and utilizing CSS for visually appealing aesthetics. The Quiz App provides real-time feedback, keeps track of user scores, and offers a variety of quizzes on different topics. The application is optimized for responsiveness and usability, ensuring a seamless user experience across various devices and screen sizes. The project demonstrates a strong understanding of the core web technologies and a keen eye for detail in UI/UX design..',
      tags: [Tag.JavaScript, Tag.Css, Tag.Html, Tag.Git],
    },
  ];

  constructor() {}

  GetProjects(): Project[] {
    return this.projects;
  }
  GetProjectById(id: number): Project {
    let project = this.projects.find((p) => p.id === id);
    if (project) {
      return project;
    } else {
      throw new TypeError('Project not found' + id);
    }
  }

  GetProjectByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];
  
    this.projects.forEach((project) => {
      let foundAll = true;
  
      filterTags.forEach((tag) => {
        if (!project.tags.includes(tag)) {
          foundAll = false;
        }
      });
  
      if (foundAll) {
        filteredProjects.push(project);
      }
    });
  
    return filteredProjects;
  }
  
}
