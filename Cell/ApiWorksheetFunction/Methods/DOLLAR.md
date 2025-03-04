# DOLLAR

Converts a number to text, using a currency format $#.##.

## Syntax

```javascript
expression.DOLLAR(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | A number, a reference to a cell containing a number, or a formula that returns a number. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number of digits to the right of the decimal point. The number is rounded as necessary. If it is omitted, the function will assume it to be 2. |

## Returns

string

## Example

This example shows how to convert a number to text, using a currency format $#.##.

```javascript editor-xlsx
// How to convert a number to text.

// Use function to get text from a number using dollar format.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.DOLLAR(98.9997, 3));
```
