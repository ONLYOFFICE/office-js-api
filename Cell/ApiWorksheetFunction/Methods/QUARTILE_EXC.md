# QUARTILE_EXC

Returns the quartile of a data set, based on percentile values from 0..1, exclusive.

## Syntax

```javascript
expression.QUARTILE_EXC(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number[] |  | The array or cell range of numeric values for which the quartile value will be returned. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The quartile value to return: 1st quartile = 1; median value = 2; 3rd quartile = 3. |

## Returns

number

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

var valueArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var quart = 2; 

// Place the numbers in cells
for (var i = 0; i < valueArr1.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr1[i]);
}

//method params
var array = oWorksheet.GetRange("A1:A12");

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.QUARTILE_EXC(array, quart); //0...1 exclusive

oWorksheet.GetRange("C1").SetValue(ans);

```
