# ATAN2

Returns the arctangent of the specified x and y coordinates, in radians between -Pi and Pi, excluding -Pi.

## Syntax

expression.ATAN2(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Is the x-coordinate of the point. |
| arg2 | Required | number |  | Is the y-coordinate of the point. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ATAN2(1, -9));
```
