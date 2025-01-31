# NORM_DIST

Returns the normal distribution for the specified mean and standard deviation.

## Syntax

```javascript
expression.NORM_DIST(arg1, arg2, arg3, arg4);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The value for which the distribution will be returned. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The arithmetic mean of the distribution. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The standard deviation of the distribution, a positive number. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | boolean |  | A logical value (**true** or **false**) that determines the function form. If it is **true**, the function returns the cumulative distribution function. If it is **false**, the function returns the probability mass function. |

## Returns

number

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();
var valueArr = [36, 6, 7, false];

// Place the numbers in cells
for (var i = 0; i < valueArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

//method params
var x = oWorksheet.GetRange("A1").GetValue();
var mean = oWorksheet.GetRange("A2").GetValue();
var standardDeviation = oWorksheet.GetRange("A3").GetValue();
var cumulative = oWorksheet.GetRange("A4").GetValue();
var oFunction = Api.GetWorksheetFunction();
var normalDist = oFunction.NORM_DIST(x, mean, standardDeviation, cumulative);
oWorksheet.GetRange("C1").SetValue(normalDist);

```
