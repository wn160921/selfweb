import {Injectable} from '@angular/core';
import {ClassEntity} from './ClassEntity';

@Injectable({
    providedIn: 'root'
})
export class ClassEntityService {
    constructor() {
    }

    public getClasses(type: string): ClassEntity[] {
        if (type === 'ben') {
            return [
                {
                    name: 'c',
                    info: 'diffcult'
                }, {
                    name: '数据结构',
                    info: '算法与数据结构。'
                }];
        } else {
            return [{name: 'c++', info: 'more diffcult'}];
        }
    }
}
