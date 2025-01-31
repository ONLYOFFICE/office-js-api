# COUNTIF

Counts a number of cells within a range that meet the given condition.

## Syntax

```javascript
expression.COUNTIF(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) |  | The range of cells to count nonblank cells. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number | string |  | The condition in the form of a number, expression, or text that defines which cells will be counted. |

## Returns

number

## Example



```javascript
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
```
