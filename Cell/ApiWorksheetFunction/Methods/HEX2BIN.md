# HEX2BIN

Converts a hexadecimal number to binary.

## Syntax

```javascript
expression.HEX2BIN(arg1, arg2);
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

This example shows how to convert a hexadecimal number to binary.

```javascript editor-xlsx
// How to get a binary from hexadecimal number.

// Use a function to convert a hexadecimal number to binary.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.HEX2BIN("FFFFFFFF9C"));
```
