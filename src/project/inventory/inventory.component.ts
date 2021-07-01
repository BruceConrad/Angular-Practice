import { Component } from "@angular/core";
import { InventoryService } from "./inventory.service";

@Component({
    selector: 'app-inventory',
    template: `
        <h4>Inventory</h4>

    `
})
export class InventoryComponent
{
    items = [];
    
    constructor(private iService:InventoryService)
    {

    }

    ngOnInit()
    {
        this.items = this.iService.getItems();
    }
}