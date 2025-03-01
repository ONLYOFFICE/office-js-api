# LCM

Returns the least common multiple.

## Syntax

```javascript
expression.LCM(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Up to 255 numeric values for which the least common multiple will be returned. The first argument is required, subsequent arguments are optional. |

## Returns

number

## Example

This example shows how to return the least common multiple.

```javascript editor-xlsx
// How to find the least common multiple from the list of numbers.

// Use a function to find out the least common multiple.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.LCM(4, 6, 8, 8, 12, 24, 2, 1));
```
