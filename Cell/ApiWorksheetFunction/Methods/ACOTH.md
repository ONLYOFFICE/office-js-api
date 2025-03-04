# ACOTH

Returns the inverse hyperbolic cotangent of a number.

## Syntax

```javascript
expression.ACOTH(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle hyperbolic cotangent. It must be less than -1 or greater than 1. |

## Returns

number

## Example

This example shows how to return the inverse hyperbolic cotangent of a number.

```javascript editor-xlsx
// How to get an inverse hyperbolic cotangent of a number and display it in the worksheet.

// Get a function that gets inverse hyperbolic cotangent of a number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ACOTH(3));
```
