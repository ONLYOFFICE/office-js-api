# BIN2DEC

Converts a binary number to decimal.

## Syntax

```javascript
expression.BIN2DEC(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The binary number which will be convertrd. |

## Returns

number

## Example

This example shows how to convert a binary number to decimal.

```javascript editor-xlsx
// How to get a decimal representation of a binary number.

// Use function to convert a binary to decimal.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BIN2DEC(1110011100));
```
