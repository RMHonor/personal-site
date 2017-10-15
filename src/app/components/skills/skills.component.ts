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
            subHeader: `Experience in a number of modern JavaScript frameworks, with a primary 
                focus on single page application frameworks. Very deep knowledge of vanilla JS,
                through reading and online research, notably the You Don't Know JS series.`,
            technologies: [
                {
                    name: 'ES6+',
                    image: 'es6',
                },
                {
                    name: 'Angular 2+',
                    image: 'ng',
                },
                {
                    name: 'AngularJS',
                    image: 'ngjs',
                },
                {
                    name: 'React',
                    image: 'react',
                },
                {
                    name: 'Redux',
                    image: 'redux',
                },
                {
                    name: 'NodeJS',
                    image: 'node',
                },
                {
                    name: 'VueJS',
                    image: 'vue',
                },
                {
                    name: 'D3.js',
                    image: 'd3',
                },
            ],
        },
        {
            header: 'Tooling',
            subHeader: 'Worked on projects using a number of development tools, considering the performance of the application and benefit to the developers.',
            technologies: [
                {
                    name: 'Webpack',
                    image: 'webpack',
                },
                {
                    name: 'NPM',
                    image: 'npm',
                },
                {
                    name: 'Yarn',
                    image: 'yarn',
                },
                {
                    name: 'Gulp',
                    image: 'gulp',
                },
            ],
        },
        {
            header: 'Other',
            subHeader: 'Knowledge of a whole series of other technologies or methodologies, including some of the below.',
            technologies: [
                {
                    name: 'SASS/SCSS',
                    image: 'sass',
                },
                {
                    name: 'Spritesheeting',
                    image: 'spritesheet',
                },
                {
                    name: 'MongoDB',
                    image: 'mongo',
                },
                {
                    name: 'PHP',
                    image: 'php'
                },
            ],
        },
    ];
}
