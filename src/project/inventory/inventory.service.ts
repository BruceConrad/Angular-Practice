import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class InventoryService
{
    items = [];

    add(vehicle)
    {
        this.items.push(vehicle);
    }

    getItems()
    {
        return this.items;
    }
}