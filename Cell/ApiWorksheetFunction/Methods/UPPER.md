# UPPER

Converts a text string to all uppercase letters.

## Syntax

```javascript
expression.UPPER(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text which will be converted to uppercase, a reference or a text string. |

## Returns

string

## Example

This example shows how to convert a text string to all uppercase letters.

```javascript editor-xlsx
// How to make a string characters uppercase.

// Use a function to convert all letters to uppercase.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.UPPER("Online Office"));
```
