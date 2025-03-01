# SQRT

Returns the square root of a number.

## Syntax

```javascript
expression.SQRT(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number for which the square root will be returned. |

## Returns

number

## Example

This example shows how to return the square root of a number.

```javascript editor-xlsx
// How to calculate the square root of a number.

// Use a function to get the square root of a number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.SQRT(100));
```
