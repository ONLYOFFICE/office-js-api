# COUNT

Counts a number of cells in a range that contains numbers ignoring empty cells or those contaning text.

## Syntax

expression.COUNT(args);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | string &#124; array &#124; [ApiRange](../../ApiRange/ApiRange.md) |  | Up to 255 items, cell references, or ranges to count numbers. The first argument is required, subsequent arguments are optional. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var numbersArr = [45, 6, 8];
var stringsArr = ["Apples", "Oranges", "Bananas"]

// Place the numbers in cells
for (var i = 0; i < numbersArr.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

// Place the strings in cells
for (var n = 0; n < stringsArr.length; n++) {
    oWorksheet.GetRange("B" + (n + 1)).SetValue(stringsArr[n]);
}

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.COUNT(oWorksheet.GetRange("A1:C3"));
oWorksheet.GetRange("D3").SetValue(ans);
```
