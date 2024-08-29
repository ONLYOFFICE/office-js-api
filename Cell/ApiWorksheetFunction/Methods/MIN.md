# MIN

Returns the smallest number in a set of values. Ignores logical values and text.

## Syntax

expression.MIN(args);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number &#124; string &#124; array &#124; [ApiRange](../../ApiRange/ApiRange.md) |  | Up to 255 numeric values for which the smallest number will be returned. The first argument is required, subsequent arguments are optional. |

## Returns

number

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var min = oFunction.MIN(123, 197, 46, 345, 67, 456);
oWorksheet.GetRange("C1").SetValue(min);

```
