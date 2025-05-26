import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
  showAllTech?: boolean;
}

@Component({
  selector: 'app-section-five',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-five.component.html',
  styleUrl: './section-five.component.css'
})
export class SectionFiveComponent {
  readonly TECH_LIMIT = 4;

  projects: Project[] = [
    {
      title: 'Control Web',
      description: 'Controla tu navegador Web con IA y extrae información de la página web',
      image: './webControl.png',
      technologies: ['python', 'Flask', 'Gradio', 'IA Model', 'Entorno Virtual'],
      demoUrl: '#',
      codeUrl: 'https://github.com/ElDazPai/ControlWeb',
      showAllTech: false
    },
    {
      title: 'Web Análisis De Sentimientos',
      description: 'Página Web para analizar sentimientos con inteligencia artificial',
      image: './webAnalisis.png',
      technologies: ['Angular', 'Bootstrap', 'HttpClient', 'Api'],
      demoUrl: 'https://www.youtube.com/watch?v=Pz9AGVuBJH4&ab_channel=Daz',
      showAllTech: false
    },
    {
      title: 'Omniparser MultiVM',
      description: 'Proyecto para controlar el escritorio de tu ordenador con IA',
      image: './Omniparser.png',
      technologies: ['python', 'Flask', 'Gradio', 'IA Model', 'Entorno Virtual', 'docker', 'linux', 'windows', 'Azure', 'AWS'],
      demoUrl: 'https://www.youtube.com/watch?v=nemA-yNcv_c&ab_channel=Daz',
      codeUrl: '#',
      showAllTech: false
    }
  ];

  toggleTechnologies(project: Project): void {
    project.showAllTech = !project.showAllTech;
  }

  getVisibleTechnologies(project: Project): string[] {
    return project.showAllTech ? 
      project.technologies : 
      project.technologies.slice(0, this.TECH_LIMIT);
  }

  hasMoreTechnologies(project: Project): boolean {
    return project.technologies.length > this.TECH_LIMIT;
  }
}
