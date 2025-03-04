# SEC

Returns the secant of an angle.

## Syntax

```javascript
expression.SEC(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle in radians for which the secant will be returned. |

## Returns

number

## Example

This example shows how to return the secant of an angle.

```javascript editor-xlsx
// How to get angle's secant.

// Use a function to calculate the secant of an angle.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.SEC(0.785398));
```
