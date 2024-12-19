# IMCOSH

Returns the hyperbolic cosine of a complex number.

## Syntax

expression.IMCOSH(arg1);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) &#124; [ApiName](../../ApiName/ApiName.md) &#124; number |  | A complex number expressed in the <em>x + yi</em> or <em>x + yj</em> form. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMCOSH("-2+2.5i"));
```
