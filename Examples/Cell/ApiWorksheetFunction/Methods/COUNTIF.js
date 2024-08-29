var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var fruits = ["Apples", "Oranges", "Bananas"];
var numbers = [45, 6, 8];

for (var i = 0; i < fruits.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(fruits[i]);
}
for (var j = 0; j < numbers.length; j++) {
    oWorksheet.GetRange("B" + (j + 1)).SetValue(numbers[j]);
}

var oRange = oWorksheet.GetRange("A1:B3");
oWorksheet.GetRange("D3").SetValue(oFunction.COUNTIF(oRange, "*es"));