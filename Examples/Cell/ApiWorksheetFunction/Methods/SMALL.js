
const oWorksheet = Api.GetActiveSheet();

var valueArr = [1, 0, 0, 0, 0, 1, 0, 0, 2, 3, 4, 5, 6, 8, 10, 12];

// Place the numbers in cells
for (var i = 0; i < valueArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

// method params
var range = oWorksheet.GetRange("A1:A16");
var position = 8;

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.SMALL(range, position);

oWorksheet.GetRange("C1").SetValue(ans);
