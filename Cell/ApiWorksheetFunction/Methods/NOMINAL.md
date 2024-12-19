# NOMINAL

Returns the annual nominal interest rate.

## Syntax

expression.NOMINAL(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) &#124; [ApiName](../../ApiName/ApiName.md) &#124; number |  | The effective interest rate of the security. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) &#124; [ApiName](../../ApiName/ApiName.md) &#124; number |  | The number of compounding periods per year. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.NOMINAL(0.7, 4));
```
