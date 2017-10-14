import {Component} from '@angular/core';

@Component({
  selector: 'about',
  styleUrls: ['./skills.component.scss'],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
    title: string = 'Skills';
    technologyGroups = [
        {
            header: 'JavaScript',
            subHeader: 'Experience in a number of modern JavaScript frameworks, with a primary focus on single page application',
            technologies: [
                {
                    name: 'ES6+',
                    image: '',
                },
                {
                    name: 'Angular 2+',
                    image: '',
                },
                {
                    name: 'AngularJS',
                    image: '',
                },
                {
                    name: 'React/Redux',
                    image: '',
                },
                {
                    name: 'NodeJS',
                    image: '',
                },
                {
                    name: 'VueJS',
                    image: '',
                },
                {
                    name: 'D3.js',
                    image: '',
                },
            ],
        },
        {
            header: 'Tooling',
            subHeader: 'Worked on projects using a number of development tools, considering the performance of the application and benefit to the developers',
            technologies: [
                {
                    name: 'Webpack',
                    image: '',
                },
                {
                    name: 'NPM',
                    image: '',
                },
                {
                    name: 'Yarn',
                    image: '',
                },
                {
                    name: 'Gulp',
                    image: '',
                },
            ],
        },
    ];
}
