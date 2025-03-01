# LN

Returns the natural logarithm of a number.

## Syntax

```javascript
expression.LN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The positive real number for which the natural logarithm will be returned. |

## Returns

number

## Example

This example shows how to return the natural logarithm of a number.

```javascript editor-xlsx
// How to get the natural logarithm.

// Use a function to return a natural logarithm.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.LN(23));
```
