/** Assignment # 2
Waseem and Ali are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).

Your tasks:
1. Store Ali's and Waseem's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'WaseemHigherBMI' containing information about 
whether Waseem has a higher BMI than Ali.
Test data:
* Data 1: Waseem weights 78 kg and is 1.69 m tall. Ali weights 92 kg and is 1.95 
m tall.
*Data 2: Waseem  weights 95 kg and is 1.88 m tall. Ali weights 85 kg and is 1.76 
m tall.
 */

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