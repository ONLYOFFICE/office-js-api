# PERCENTRANK

Returns the rank of a value in a data set as a percentage of the data set.

## Syntax

expression.PERCENTRANK(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number[] |  | The array or range of data with numeric values that defines relative standing. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The value for which the rank will be returned. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | An optional value that identifies the number of significant digits for the returned percentage, three digits if omitted (0.xxx%). |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var column1 = [1, 0, 7, 10];
var column2 = [3, 2, 5, 8];
var column3 = [5, 4, 3, 6];
var column4 = [7, 6, 5, 4];

for (var i = 0; i < column1.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(column1[i]);
}
for (var j = 0; j < column2.length; j++) {
    oWorksheet.GetRange("B" + (j + 1)).SetValue(column2[j]);
}
for (var n = 0; n < column3.length; n++) {
    oWorksheet.GetRange("C" + (n + 1)).SetValue(column3[n]);
}
for (var m = 0; m < column4.length; m++) {
    oWorksheet.GetRange("D" + (m + 1)).SetValue(column4[m]);
}

var oRange = oWorksheet.GetRange("A1:D4");
oWorksheet.GetRange("D5").SetValue(oFunction.PERCENTRANK(oRange, 2, 4));
```
