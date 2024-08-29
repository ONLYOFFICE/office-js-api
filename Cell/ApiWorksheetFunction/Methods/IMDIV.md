# IMDIV

Returns the quotient of two complex numbers.

## Syntax

expression.IMDIV(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the complex numerator or dividend. |
| arg2 | Required | any |  | Is the complex denominator or divisor. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMDIV("-2+2.5i", "0.1+1.5j"));
```
