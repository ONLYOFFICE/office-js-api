# ACOT

Returns the arccotangent of a number, in radians in the range from 0 to Pi.

## Syntax

```javascript
expression.ACOT(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle cotangent. |

## Returns

number

## Example

This example shows how to return the arccotangent of a number, in radians in the range from 0 to Pi.

```javascript editor-xlsx
// How to get an arccotangent of a number and display it in the worksheet.

// Get a function that gets arccotangent of a number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ACOT(0));
```
