# POISSON_DIST

Returns the Poisson distribution.

## Syntax

expression.POISSON_DIST(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The number of events. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The expected numeric value, a positive number. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | boolean |  | A logical value (**true** or **false**) that determines the function form. If it is **true**, the function returns the cumulative Poisson probability. If it is **false**, the function returns the Poisson probability mass function. |

## Returns

number

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

//method params
var x = 9;
var mean = 12;
var cumulative = false;

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.POISSON_DIST(x, mean, cumulative);

oWorksheet.GetRange("C1").SetValue(ans);

```
