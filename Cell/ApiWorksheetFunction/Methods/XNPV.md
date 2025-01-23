# XNPV

Returns the net present value for a schedule of cash flows.

## Syntax

expression.XNPV(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The discount rate to apply to the cash flows. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) |  | A range that contains the series of cash flows that corresponds to a schedule of payments in dates. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) |  | A range that contains the schedule of payment dates that corresponds to the cash flow payments. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue("Rate");
oWorksheet.GetRange("A2").SetValue(0.05);

var payment = ["Payment/Income", -10000, 500, 5000, 3000];
var dates = ["Payment dates", "1/1/2018", "4/1/2018", "8/1/2018", "12/1/2018"];

for (var i = 0; i < payment.length; i++) {
    oWorksheet.GetRange("B" + (i + 1)).SetValue(payment[i]);
}
for (var j = 0; j < dates.length; j++) {
    oWorksheet.GetRange("C" + (j + 1)).SetValue(dates[j]);
}

oWorksheet.GetRange("C1").SetColumnWidth(15);
var oRange1 = oWorksheet.GetRange("B2:B5");
var oRange2 = oWorksheet.GetRange("C2:C5");
oWorksheet.GetRange("D5").SetValue(oFunction.XNPV(0.05, oRange1, oRange2));
```
