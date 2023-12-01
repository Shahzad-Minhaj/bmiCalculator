// // Data 1
var waseemWeight1 = 78; // in kg
var waseemHeight1 = 1.69; // in meters

var aliWeight1 = 92; // in kg
var aliHeight1 = 1.95; // in meters

// Data 2
var waseemWeight2 = 95; // in kg
var waseemHeight2 = 1.88; // in meters

var aliWeight2 = 85; // in kg
var aliHeight2 = 1.76; // in meters

// // Calculate BMIs
var waseemBMI1 = waseemWeight1 / (waseemHeight1 * waseemHeight1);
var aliBMI1 = aliWeight1 / (aliHeight1 * aliHeight1);

var waseemBMI2 = waseemWeight2 / (waseemHeight2 * waseemHeight2);
var aliBMI2 = aliWeight2 / (aliHeight2 * aliHeight2);



if(waseemBMI1 > aliBMI1){
    var waseemHigherBMI1 = console.log(" Waseem has higher BMI than Ali")

}
else{
    var waseemHigherBMI1 = console.log("Ali has higher BMI than Waseem")

}
if( waseemBMI2 > aliBMI2 )
{
    var waseemHigherBMI2 = console.log("Waseem has higher BMI than Ali")
}
else{
    var waseemHigherBMI2 = console.log("Ali has higher BMI than Waseem")
}