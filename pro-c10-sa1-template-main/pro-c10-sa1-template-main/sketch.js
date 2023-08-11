var weight = [10,15,40,2,1,5]

function setup() 
{
  createCanvas(400,400);
  var sum = weight[0]+weight[1]+weight[2]+weight[3]+weight[4]+weight[5]
  var avarage = sum / weight.length
  console.log (avarage)
}

function draw() 
{
background(51);

}

