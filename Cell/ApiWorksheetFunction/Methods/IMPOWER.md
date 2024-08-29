# IMPOWER

Returns a complex number raised to an integer power.

## Syntax

expression.IMPOWER(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is a complex number you want to raise to a power. |
| arg2 | Required | any |  | Is the power to which you want to raise the complex number. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMPOWER("-2+2.5i", -3));
```
