# ABS

Returns the absolute value of a number, a number without its sign.

## Syntax

```javascript
expression.ABS(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The real number for which the absolute value will be returned. |

## Returns

number

## Example

This example shows how to get absolute value of a number.

```javascript editor-xlsx
// How to add absolute value to the worksheet.

// Get a function that gets absolute value.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ABS(-123.14));
```
