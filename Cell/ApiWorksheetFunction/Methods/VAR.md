# VAR

Estimates variance based on a sample (ignores logical values and text in the sample).

## Syntax

expression.VAR(args);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number &#124; string &#124; [ApiRange](../../ApiRange/ApiRange.md) &#124; Array.&lt;number&gt; |  | Up to 255 numeric values for which the variance will be calculated. The first argument is required, subsequent arguments are optional. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.VAR(1, 4, 2, 6, 0, 1, 3, 8, 0, 0, 6, 10, 0, 0, 7, 12)
oWorksheet.GetRange("B2").SetValue(result);


```
