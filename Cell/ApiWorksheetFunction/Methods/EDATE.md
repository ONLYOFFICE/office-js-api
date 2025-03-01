# EDATE

Returns the serial number of the date which comes the indicated number of months before or after the start date.

## Syntax

```javascript
expression.EDATE(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A serial date number that represents the start date. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of months before or after the start date. |

## Returns

number

## Example

This example shows how to return the serial number of the date which comes the indicated number of months before or after the start date.

```javascript editor-xlsx
// How to get a date some months before or after the start date.

// Use function to get the serial number of the date indicated number of months before or after the start date.

const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.EDATE("3/16/2018", 7); 

oWorksheet.GetRange("C1").SetValue(ans);

```
