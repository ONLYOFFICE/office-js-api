# SMALL

Returns the k-th smallest value in a data set. For example, the fifth smallest number.

## Syntax

expression.SMALL(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | Array.&lt;number&gt; &#124; [ApiRange](../../ApiRange/ApiRange.md) |  | An array or range of numerical data for which the k-th smallest value will be determined. |
| arg2 | Required | number |  | The position (from the smallest) in the array or range of the value to return. |

## Returns

number

## Example



```javascript
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

```
