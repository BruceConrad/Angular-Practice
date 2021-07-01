import { Component } from "@angular/core";
import { InventoryService } from "../inventory/inventory.service";
import { VehiclesService } from "./vehicles.service";


@Component({
    selector: 'app-vehicles',
    template: `
        <h4>Vehicles</h4>

        <select (change) = "filterItems($event)">
            <option>MPV</option>
            <option>SUV</option>
            <option>Car</option>
        </select>

        <div [ngClass] = "{favorite:v.fav}"*ngFor = "let v of vehicles">
            <h4>{{v.brand}} {{v.model}} {{v.miles}}</h4><br>
            <button (click) = "setFavorite(v)">Favorite Item</button>
            <button (click) = "addToInv(v)">Add to Inventory</button>
        </div>
    `,
    styles:[
        `
            .favorite{
                background-color: #dff;
            }
        `
    ]
})

export class VehiclesComponent
{
    vehicles = [];

    constructor(private vService:VehiclesService, private iService:InventoryService)
    {

    }

    ngOnInit()
    {
        this.vehicles = this.vService.getVehicles();
    }

    filterItems(e)
    {
        this.vehicles = this.vService.filter(e.target.value);
    }

    setFavorite(v)
    {
        this.vService.updateFavorite(v.brand);
    }

    addToInv(v)
    {
        this.iService.add(v);
    }
}