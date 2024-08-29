
const oWorksheet = Api.GetActiveSheet();

var valueArr = [7, 6, 5, 5];

// Place the numbers in cells
for (var i = 0; i < valueArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

//method params
var number = oWorksheet.GetRange("A3");
var range = oWorksheet.GetRange("A1:A4");
var order = 0;

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.RANK_AVG(number, range, order);

oWorksheet.GetRange("C1").SetValue(ans);
