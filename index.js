// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
    return drivers.filter(function(driver){
        return driver.revenue > revenue;
    })
}

function driverNamesWithRevenueOver(drivers,revenue){
    return driversWithRevenueOver(drivers,revenue).map(function(driver){
        return driver.name;
    })
}

function exactMatch(drivers, condition){
    return drivers.filter(function(driver){
        let filteredDrivers = false;

        for(const key in condition){
            filteredDrivers = driver[key] === condition[key];
        }
        return filteredDrivers;
    })
}

function exactMatchToList(driver,condition){
    return exactMatch(driver, condition).map(function(driver){
        return driver.name;
    });
}