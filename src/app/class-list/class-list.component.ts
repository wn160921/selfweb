import {Component, OnInit} from '@angular/core';
import {ClassEntity} from '../ClassEntity';
import {ActivatedRoute} from '@angular/router';
import {ClassEntityService} from '../class-entity.service';

@Component({
    selector: 'app-class-list',
    templateUrl: './class-list.component.html',
    styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

    classes: ClassEntity[];
    constructor(
        private route: ActivatedRoute,
        private classService: ClassEntityService
    ) {}
    ngOnInit() {
        this.getClasses();
        console.log(this.classes);
    }
    ngDoCheck() {
        console.log('check');
        this.getClasses();
    }
    getClasses(): void {
        const type = this.route.snapshot.paramMap.get('type');
        console.log(type);
        this.classes = this.classService.getClasses(type);
    }

}
