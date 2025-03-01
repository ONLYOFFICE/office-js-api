# XIRR

Returns the internal rate of return for a schedule of cash flows.

## Syntax

```javascript
expression.XIRR(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | A range that contains the series of cash flows that corresponds to a schedule of payments in dates. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | A range that contains the schedule of payment dates that corresponds to the cash flow payments. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An estimate at what the internal rate of return will be. If it is omitted, the function will assume guess to be 0.1 (10 percent). |

## Returns

number

## Example

This example shows how to return the internal rate of return for a schedule of cash flows.

```javascript editor-xlsx
// How to return the internal rate of return.

// Use a function to return the internal rate of return.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var values = ["Values", "-$40,000.00", "$10,000.00", "$15,000.00", "$20,000.00"];
var dates = ["Dates", "1/1/2018", "4/1/2018", "8/1/2018", "12/1/2018"];

for (var i = 0; i < values.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(values[i]);
}
for (var j = 0; j < dates.length; j++) {
    oWorksheet.GetRange("B" + (j + 1)).SetValue(dates[j]);
}

oWorksheet.GetRange("B1").SetColumnWidth(15);
var oRange1 = oWorksheet.GetRange("A2:A5");
var oRange2 = oWorksheet.GetRange("B2:B5");
oWorksheet.GetRange("C5").SetValue(oFunction.XIRR(oRange1, oRange2));
```
