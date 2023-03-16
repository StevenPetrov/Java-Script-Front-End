function cityTaxes(name, population, treasury){
    let city ={
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {this.treasury += Math.trunc(this.population* this.taxRate)},
        applyGrowth(percentage) {this.population += Math.trunc((percentage/100)*this.population)},
        applyRecession(percentage) {this.treasury -= Math.trunc((percentage/100)*this.taxRate)},
    }
    return city;
}

const city = cityTaxes('Tortuga', 7000, 15000); city.collectTaxes(); console.log(city.treasury); city.applyGrowth(5); console.log(city.population);