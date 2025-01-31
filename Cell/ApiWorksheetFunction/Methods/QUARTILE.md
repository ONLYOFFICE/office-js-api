# QUARTILE

Returns the quartile of a data set.

## Syntax

```javascript
expression.QUARTILE(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number[] |  | The array or cell range of numeric values for which the quartile value will be returned. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The quartile value to return: minimum value = 0; 1st quartile = 1; median value = 2; 3rd quartile = 3; maximum value = 4. |

## Returns

number

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

var valueArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var quart = 3; //eg: third quartile (75th percentile)

// Place the numbers in cells
for (var i = 0; i < valueArr1.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr1[i]);
}

//method params
var array = oWorksheet.GetRange("A1:A12");

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.QUARTILE(array, quart);

oWorksheet.GetRange("C1").SetValue(ans);

```
