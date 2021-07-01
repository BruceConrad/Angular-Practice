import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class VehiclesService
{
    vehicles = [{brand:'Audi', model:'SUV',miles:20000, fav:false},
                {brand:'Toyota', model:'Sedan',miles:10000, fav:true},
                {brand:'Honda', model:'MPV',miles:26000, fav:false}]

    getVehicles()
    {
        return this.vehicles;
    }

    filter(model)
    {
        return this.vehicles.filter(v => v.model === model);
    }

    updateFavorite(brand)
    {
        this.vehicles.forEach(v => {
            if(v.brand === brand)
            {
                v.fav = !v.fav
            }
        })
    }
}