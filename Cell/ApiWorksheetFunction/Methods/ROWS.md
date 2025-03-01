# ROWS

Returns the number of rows in a range.

## Syntax

```javascript
expression.ROWS(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| array |  | A range of cells or an array for which the number of rows will be returned. |

## Returns

number

## Example

This example shows how to return the number of rows in a range.

```javascript editor-xlsx
// How to count number of rows.

// Use a function to count number of rows.

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
