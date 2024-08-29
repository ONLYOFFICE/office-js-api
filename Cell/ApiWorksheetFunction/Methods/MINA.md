# MINA

Returns the smallest value in a set of values. Does not ignore logical values and text.

## Syntax

expression.MINA(args);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number &#124; string &#124; boolean &#124; array &#124; [ApiRange](../../ApiRange/ApiRange.md) |  | Up to 255 values (number, text, logical value) for which the smallest value will be returned. The first argument is required, subsequent arguments are optional. |

## Returns

number

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var minA = oFunction.MINA(23, 45, true, "text", 0.89);
oWorksheet.GetRange("C1").SetValue(minA);

```
