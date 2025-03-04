# REPT

Repeats text a given number of times. Use this function to fill a cell with a number of instances of a text string.

## Syntax

```javascript
expression.REPT(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text that will be repeated. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A positive number specifying the number of times to repeat text. |

## Returns

string

## Example

This example shows how to repeat text a given number of times. Use this function to fill a cell with a number of instances of a text string.

```javascript editor-xlsx
// How to create an indicated number of copies.

// Use a function to repeat a text n times.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.REPT("Text", 3));
```
