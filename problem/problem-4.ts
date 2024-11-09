type circle  = {
    shape : "circle";
    radius: number;

}

type rectangle =  {
    shape : "rectangle";
    width: number;
    height: number;

}

type shape = circle | rectangle;

function  calculateShapeArea (shape : shape)  {
    if (shape.shape === "circle") {
        return (Math.PI * shape.radius * shape.radius).toFixed(2);

    } else if (shape.shape === "rectangle") {
    
        return shape.width * shape.height;
    }

    else return console.log('wrong input');
    

}

// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log(rectangleArea);