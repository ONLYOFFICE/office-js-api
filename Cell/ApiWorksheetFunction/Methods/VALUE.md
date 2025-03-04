# VALUE

Converts a text string that represents a number to a number.

## Syntax

```javascript
expression.VALUE(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text enclosed in quotation marks or a reference to a cell containing the text which will be converted to a number. |

## Returns

number

## Example

This example shows how to convert a text string that represents a number to a number.

```javascript editor-xlsx
// How to get number from a text.

// Use a function to return a number from a string.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.VALUE("$3.50"));
```
