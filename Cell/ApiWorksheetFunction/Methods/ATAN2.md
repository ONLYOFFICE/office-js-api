# ATAN2

Returns the arctangent of the specified x and y coordinates, in radians between -Pi and Pi, excluding -Pi.

## Syntax

```javascript
expression.ATAN2(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The x coordinate of the point. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The y coordinate of the point. |

## Returns

number

## Example

This example shows how to return the arctangent of the specified x and y coordinates, in radians between -Pi and Pi, excluding -Pi.

```javascript editor-xlsx
// How to get an arctangent of the specified x and y coordinates.

// Use function to get an arctangent of the specified x and y coordinates in radians.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ATAN2(1, -9));
```
