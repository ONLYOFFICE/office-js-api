# ROWS

Returns the number of rows in a reference or array.

## Syntax

expression.ROWS(arg1);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | Is an array, an array formula, or a reference to a range of cells for which you want the number of rows. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var column1 = [13, 14, 15];
var column2 = [23, 24, 25];

for (var i = 0; i < column1.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(column1[i]);
}
for (var j = 0; j < column2.length; j++) {
    oWorksheet.GetRange("B" + (j + 1)).SetValue(column2[j]);
}

var oRange = oWorksheet.GetRange("A1:B3");
oWorksheet.GetRange("C3").SetValue(oFunction.ROWS(oRange));
```
