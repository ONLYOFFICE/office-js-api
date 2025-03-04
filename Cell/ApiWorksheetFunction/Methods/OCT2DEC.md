# OCT2DEC

Converts an octal number to decimal.

## Syntax

```javascript
expression.OCT2DEC(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The octal number to convert. |

## Returns

number

## Example

This example shows how to convert an octal number to decimal.

```javascript editor-xlsx
// How to get a decimal number from an octal.

// Use a function to convert an octal to a decimal number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.OCT2DEC(7777777634));
```
