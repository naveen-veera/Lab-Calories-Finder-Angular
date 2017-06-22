var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import foodsList from '../foods';
var FoodListComponent = (function () {
    function FoodListComponent() {
        this.myList = [];
        this.isEditing = false;
        this.newFoodName = "Example Name";
        this.newFoodCalories = 250;
        this.newFoodImage = "http://dhiglobal.com/wp-content/uploads/2016/07/placeholder.jpg";
        this.totalCalories = 0;
    }
    FoodListComponent.prototype.ngOnInit = function () {
        this.foods = foodsList;
    };
    FoodListComponent.prototype.addFood = function () {
        this.isEditing = !this.isEditing;
    };
    FoodListComponent.prototype.newFood = function () {
        var newFood = {
            name: this.newFoodName,
            calories: this.newFoodCalories,
            image: this.newFoodImage,
            quantity: 0
        };
        this.foods.unshift(newFood);
        this.isEditing = false;
        this.newFoodName = "";
        this.newFoodCalories = null;
        this.newFoodImage = "";
    };
    FoodListComponent.prototype.addToMyList = function (food, quantityInput) {
        var existingFood = this.myList.find(function (item) { return item.name === food.name; });
        var quantity = Number(quantityInput.value);
        if (existingFood) {
            existingFood.quantity += quantity;
        }
        else {
            food.quantity = quantity;
            this.myList.push(food);
        }
        this.totalCalories += (food.calories * quantity);
        this.quantity = 1;
    };
    return FoodListComponent;
}());
FoodListComponent = __decorate([
    Component({
        selector: 'app-food-list',
        templateUrl: './food-list.component.html',
        styleUrls: ['./food-list.component.css']
    }),
    __metadata("design:paramtypes", [])
], FoodListComponent);
export { FoodListComponent };
//# sourceMappingURL=../../../app/food-list/food-list.component.js.map