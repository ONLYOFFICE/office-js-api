var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var numbers = [67, 87, 98, 45];

for (var i = 0; i < numbers.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(numbers[i]);
}

var oRange = oWorksheet.GetRange("A1:A4");
oWorksheet.GetRange("C1").SetValue(oFunction.AVERAGEIF(oRange, ">45"));