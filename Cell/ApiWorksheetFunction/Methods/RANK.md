# RANK

Returns the rank of a number in a list of numbers: its size relative to other values in the list.

## Syntax

expression.RANK(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The number for which the rank will be returned. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number[] |  | An array or range of numbers. Nonnumeric values are ignored. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | boolean |  | The numeric value that specifyes how to order the numbers. If it is 0 or omitted, the rank in the list will be sorted in descending order. Any other numeric value means that the rank in the list will be sorted in ascending order. |

## Returns

number

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

var valueArr = [7,6,5,5];

// Place the numbers in cells
for (var i = 0; i < valueArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

//method params
var number = oWorksheet.GetRange("A3");
var range = oWorksheet.GetRange("A1:A4");
var order = 0;

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.RANK(number,range,order); 

oWorksheet.GetRange("C1").SetValue(ans);

```
