# HEX2OCT

Converts a hexadecimal number to octal.

## Syntax

```javascript
expression.HEX2OCT(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The hexadecimal number to convert. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of characters to use. |

## Returns

number

## Example

This example shows how to convert a hexadecimal number to octal.

```javascript editor-xlsx
// How to get an octal from hexadecimal number.

// Use a function to convert a hexadecimal number to octal.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.HEX2OCT("FFFFFFFF9C"));
```
