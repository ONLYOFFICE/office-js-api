# IMSUM

Returns the sum of the specified complex numbers.

## Syntax

expression.IMSUM(args);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) &#124; [ApiName](../../ApiName/ApiName.md) &#124; string |  | Up to 255 complex numbers expressed in the <em>x + yi</em> or <em>x + yj</em> form. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMSUM("1+3i", "0.1+1.5j", "-2+2.5i"));
```
