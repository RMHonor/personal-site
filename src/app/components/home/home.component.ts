import {Component} from '@angular/core';

@Component({
    selector: 'home',
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html'
})
export class HomeComponent {
    title: string = "Home";
    header: string = "Richard Honor";
    intro: string = `
        Front end developer specialising in single page applicatins, using technologies such as
        Angular/AngularJS, React and VueJS. Experience across many front end tools from styling 
        to build to performance. Additional expertise in agile methodologies, having trained
        in the Professional Scrum Master, and acted as a Scrum Master on multiple projects.
    `
}
