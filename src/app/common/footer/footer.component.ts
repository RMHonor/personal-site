import {Component} from '@angular/core';

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    private social: SocialMedia[] = [
        {
            icon: 'github',
            link: 'https://github.com/RMHonor'
        },
        {
            icon: 'linkedin',
            link: 'https://www.linkedin.com/in/richard-honor-109730a0/'
        }
    ];

    getYear() {
        return new Date().getFullYear();
    }
}

interface SocialMedia {
    icon: string;
    link: string;
}
