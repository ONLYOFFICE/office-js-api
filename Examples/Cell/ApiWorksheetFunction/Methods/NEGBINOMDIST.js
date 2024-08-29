
const oWorksheet = Api.GetActiveSheet();

var valueArr = [6, 32, 0.7];

// Place the numbers in cells
for (var i = 0; i < valueArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

//method params
var numberF = oWorksheet.GetRange("A1").GetValue();
var numberS = oWorksheet.GetRange("A2").GetValue();
var probabilityS = oWorksheet.GetRange("A3").GetValue();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.NEGBINOMDIST(numberF, numberS, probabilityS);

oWorksheet.GetRange("C1").SetValue(ans);
