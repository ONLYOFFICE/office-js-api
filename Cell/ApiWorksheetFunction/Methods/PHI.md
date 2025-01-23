# PHI

Returns the value of the density function for a standard normal distribution.

## Syntax

expression.PHI(arg1);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The number for which the density of the standard normal distribution will be returned. |

## Returns

number

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

//method params
var number = 5;

oWorksheet.GetRange("A1").SetValue(number);

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.PHI(number);

oWorksheet.GetRange("C1").SetValue(ans);

```
