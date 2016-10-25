import { Component, OnInit } from '@angular/core';
import { DataService } from './services/dataService';
import { MyTypedItem } from './models/MyTypedItem.model';
 
@Component({
    selector: 'my-item-component',
    providers: [DataService],
    templateUrl: 'app/myItem.component.html',
    
})
 
export class MyItemComponent implements OnInit {
    public myItems: MyTypedItem [];
 
    constructor(private _dataService: DataService) { }
 
    ngOnInit() {
        this.getAllItems();
    }
    
 
    getAllItems(): void {
        this._dataService
            .GetAll()
            .subscribe((data:MyTypedItem[]) => this.myItems = data,
                error => console.log(error),
                () => console.log('Get all Items complete'));
    }
}