# AVERAGEA

Returns the average (arithmetic mean) of the specified arguments, evaluating text and **false** in arguments as 0; **true** evaluates as 1.

## Syntax

```javascript
expression.AVERAGEA(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string \| number[] |  | Up to 255 numeric values for which the average value will be returned. The first argument is required, subsequent arguments are optional. Arguments can be numbers, text, or logical values, such as **true** and **false**, names, or arrays of numbers. |

## Returns

number

## Example

This example shows how to return the average (arithmetic mean) of the specified arguments.

```javascript editor-xlsx
// How to find an average (arithmetic mean).

// Use function to get the find an average (arithmetic mean).

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.AVERAGEA(78, 98, 46, 123, 45, true, false);
oWorksheet.GetRange("B2").SetValue(ans);
```
