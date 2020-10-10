const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations){
  const goodStations = []
  for (const station of stations){
    const capacity = station[1]
    const type = station[2]
    if ((capacity >= 20) && (type === 'school' || type === 'community centre')){
      goodStations.push(station[0])
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));


const moves = ['north','north','west','west','north', 'east', 'north']

function finalPosition(arr) {
  let coords = [0, 0]
  for (const move of arr){
    switch(move){
      case "north":
        coords[1] += 1;
        break;
      case "east":
        coords[0] += 1;
        break;
      case "west":
        coords[0] -= 1;
        break;
      case "south":
        coords[1] -= 1;
        break;
    }
  }
  return coords;
}

console.log(finalPosition(moves))


function ageCalculator(name, yearOfBirth, currentYear){
  age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));


function howManyHundreds(bottles){
  let remainder = bottles % 100;
  let cases = (bottles - remainder) / 100;
  return cases;
}

function calculateRectangleArea(length, width){
  let area = length * width
  if (length >= 0 && width >= 0){
    return area;
  } else {
    return undefined;
  }
}
function calculateTriangleArea(base, height){
  let area = base * height / 2
  if (base >= 0 && height >= 0){
    return area;
  } else {
    return undefined;
  }
}
function calculateCircleArea(radius){
  let area = Math.PI * radius * radius
  if (radius >= 0){
    return area;
  } else {
    return undefined;
  }
}