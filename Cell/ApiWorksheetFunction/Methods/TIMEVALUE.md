# TIMEVALUE

Converts a text time to a serial number for a time, a number from 0 (12:00:00 AM) to 0.999988426 (11:59:59 PM). Format the number with a time format after entering the formula.

## Syntax

```javascript
expression.TIMEVALUE(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | A text string that represents a time in one of the time formats (date information in the string is ignored). |

## Returns

number

## Example

This example shows how to convert a text time to a serial number for a time, a number from 0 (12:00:00 AM) to 0.999988426 (11:59:59 PM). Format the number with a time format after entering the formula.

```javascript editor-xlsx
// How to create a serial number from a date time object.

// Use a function to convert date, hours, minutes and seconds to serial numbers.

const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.TIMEVALUE("11/5/18 11:17:00 am"); 

oWorksheet.GetRange("C1").SetValue(ans);

```
