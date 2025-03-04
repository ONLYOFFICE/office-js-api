# RADIANS

Converts degrees to radians.

## Syntax

```javascript
expression.RADIANS(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An angle in degrees to convert. |

## Returns

number

## Example

This example shows how to convert degrees to radians.

```javascript editor-xlsx
// How to get radians from degree.

// Use a function to convert degrees to radians.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.RADIANS(90));
```
