//deel 1
var color = ['yellow', 'blue', 'red', 'orange'];

while (color) {
  console.log(color[0]);
   console.log(color[1]);
    console.log(color[2]);
     console.log(color[3]);
  color++;
};

//deel 2
var color = ['yellow', 'blue', 'red', 'orange'];

for (color;color.length;color++) {
  console.log(color[0]);
   console.log(color[1]);
    console.log(color[2]);
     console.log(color[3]);
};

//deel3
var color = ['yellow', 'blue', 'red', 'orange'];

const arrayMethodTest = function (item, index, arr) {
  console.log(item);
};

color.forEach(arrayMethodTest);