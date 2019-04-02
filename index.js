// Code your solution in this file!

function logDriverNames(arr){
  arr.forEach(el => console.log(el.name));
};


function logDriversByHometown(drivers, hometown){
  logDriverNames(drivers.filter(driver => driver.hometown === hometown))
};


function driversByRevenue(drivers){
  let arr = [...drivers]
  return arr.sort((a,b) => a.revenue - b.revenue);
}


function driversByName(drivers){
  let arr = drivers.slice()
  return arr.sort((a,b) => a.name.localeCompare(b.name));
};

function totalRevenue(drivers){
  const reducer = ((accumulator, driver) => accumulator + driver.revenue);
  return drivers.reduce(reducer, 0);
}


function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length
};
