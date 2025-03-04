# VAR

Estimates variance based on a sample (ignores logical values and text in the sample).

## Syntax

```javascript
expression.VAR(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number \| [ApiName](../../ApiName/ApiName.md) \| [ApiRange](../../ApiRange/ApiRange.md) \| number[] |  | Up to 255 numeric values for which the variance will be calculated. The first argument is required, subsequent arguments are optional. Arguments can be numbers, names, ranges, or arrays of numbers. |

## Returns

number

## Example

This example shows how to estimate variance based on a sample (ignores logical values and text in the sample).

```javascript editor-xlsx
// How to estimate variance based on a sample.

// Use a function to estimate variance ignoring logical and text values.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.VAR(1, 4, 2, 6, 0, 1, 3, 8, 0, 0, 6, 10, 0, 0, 7, 12)
oWorksheet.GetRange("B2").SetValue(result);


```
