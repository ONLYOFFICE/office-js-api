# MUNIT

Returns the unit matrix for the specified dimension.

## Syntax

```javascript
expression.MUNIT(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An integer specifying the dimension of the unit matrix to be returned. |

## Returns

number

## Example

This example shows how to return the unit matrix for the specified dimension.

```javascript editor-xlsx
// How to get a unit matrix.

// Use a function to get a unit matrix specifying dimension.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.MUNIT(3));
```
