# MAX

Returns the largest value in a set of values. Ignores logical values and text.

## Syntax

```javascript
expression.MAX(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number \| array \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | Up to 255 numeric values for which the largest number will be returned. The first argument is required, subsequent arguments are optional. Arguments can be numbers, names, ranges, or arrays of numbers. |

## Returns

number

## Example

This example shows how to return the largest value in a set of values. Ignores logical values and text.

```javascript editor-xlsx
// How to get a maximum number from a list of numbers.

// Use a function to find a maximum from a list.

const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var max = oFunction.MAX(123, 197, 46, 354, 67, 456);
oWorksheet.GetRange("C1").SetValue(max);

```
