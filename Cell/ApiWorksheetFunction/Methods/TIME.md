# TIME

Converts hours, minutes and seconds given as numbers to a serial number, formatted with the time format.

## Syntax

```javascript
expression.TIME(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number from 0 to 23 representing the hour. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number from 0 to 59 representing the minute. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number from 0 to 59 representing the second. |

## Returns

number

## Example

This example shows how to convert hours, minutes and seconds given as numbers to a serial number, formatted with the time format.

```javascript editor-xlsx
// How to create a serial number indicating hours, minutes and seconds.

// Use a function to convert hours, minutes and seconds to serial numbers.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.TIME(23, 4, 39));
```
