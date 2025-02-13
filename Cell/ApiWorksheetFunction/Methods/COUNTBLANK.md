# COUNTBLANK

Counts a number of empty cells in a specified range of cells.

## Syntax

```javascript
expression.COUNTBLANK(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) |  | The range to count the empty cells. |

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
var ans = oFunction.COUNTBLANK(oWorksheet.GetRange("A1:C3"));
oWorksheet.GetRange("D3").SetValue(ans);
```
