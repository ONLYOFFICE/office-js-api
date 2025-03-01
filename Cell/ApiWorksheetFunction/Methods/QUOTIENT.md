# QUOTIENT

Returns the integer portion of a division.

## Syntax

```javascript
expression.QUOTIENT(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The dividend, a numeric value. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The divisor, a numeric value. |

## Returns

number

## Example

This example shows how to return the integer portion of a division.

```javascript editor-xlsx
// How to get the integer part from the result of division.

// Use a function to integer part from division.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.QUOTIENT(1698, 30));
```
