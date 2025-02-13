# STANDARDIZE

Returns a normalised value from a distribution characterised by a mean and standard deviation.

## Syntax

```javascript
expression.STANDARDIZE(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The value to normalize. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The arithmetic mean of the distribution. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The standard deviation of the distribution, a positive number. |

## Returns

number

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

var valueArr = [5, -2, 10];

// Place the numbers in cells
for (var i = 0; i < valueArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

// method params
var x = oWorksheet.GetRange("A1");
var mean = oWorksheet.GetRange("A2");
var stdDev = oWorksheet.GetRange("A3");

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.STANDARDIZE(x, mean, stdDev);

oWorksheet.GetRange("C1").SetValue(ans);

```
