import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    index = 0;
    onBavClick(index: number): void {
        this.index = index;
    }
}
