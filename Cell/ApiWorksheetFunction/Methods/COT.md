# COT

Returns the cotangent of an angle.

## Syntax

```javascript
expression.COT(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle in radians for which the cotangent will be returned. |

## Returns

number

## Example

This example shows how to get the cotangent of a number.

```javascript editor-xlsx
// How to find a cotangent.

// Use function to get the cotangent of an angle.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.COT(0.785398));
```
