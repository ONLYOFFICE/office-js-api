# OCT2HEX

Converts an octal number to hexadecimal.

## Syntax

```javascript
expression.OCT2HEX(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The octal number to convert. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of characters to use. |

## Returns

number

## Example

This example shows how to convert an octal number to hexadecimal.

```javascript editor-xlsx
// How to get a hexadecimal number form an octal.

// Use a function to convert an octal number to hexadecimal.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.OCT2HEX(7777777634, 4));
```
