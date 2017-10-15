import {Component, animate, style, transition, trigger, HostListener} from '@angular/core';

import '../../assets/images/logo.png';

@Component({
    selector: 'sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    animations: [
        trigger(
            'leftSlide', [
                transition(':enter', [
                    style({transform: 'translateX(-100%)'}),
                    animate('300ms', style({transform: 'translateX(0)'}))
                ]),
                transition(':leave', [
                    style({transform: 'translateX(0)'}),
                    animate('300ms', style({transform: 'translateX(-100%)'}))
                ])
            ]
        )
    ],
})
export class SidenavComponent {
    private navSelected: boolean = false;
    private showNav: boolean = true;

    private readonly mobileWidth: number = 959;

    links = [
        {
            route: '/home',
            name: 'Home',
        },
        {
            route: '/skills',
            name: 'Skills',
        },
        // {
        //     route: '/contact',
        //     name: 'Contact',
        // },
    ];

    ngOnInit() {
        this.showNav = !this.isMobile();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.showNav = !this.isMobile() || this.navSelected;
    }

    isMobile() {
        return window.innerWidth <= this.mobileWidth;
    }

    toggleNav(navSelected) {
        if (this.isMobile()){
            this.navSelected = navSelected;
            this.showNav = this.navSelected;
        }
    }
}
