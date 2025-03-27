# XNPV

Returns the net present value for a schedule of cash flows.

## Syntax

```javascript
expression.XNPV(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The discount rate to apply to the cash flows. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | A range that contains the series of cash flows that corresponds to a schedule of payments in dates. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | A range that contains the schedule of payment dates that corresponds to the cash flow payments. |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue("Rate");
worksheet.GetRange("A2").SetValue(0.05);

let payment = ["Payment/Income", -10000, 500, 5000, 3000];
let dates = ["Payment dates", "1/1/2018", "4/1/2018", "8/1/2018", "12/1/2018"];

for (let i = 0; i < payment.length; i++) {
    worksheet.GetRange("B" + (i + 1)).SetValue(payment[i]);
}
for (let j = 0; j < dates.length; j++) {
    worksheet.GetRange("C" + (j + 1)).SetValue(dates[j]);
}

worksheet.GetRange("C1").SetColumnWidth(15);
let range1 = worksheet.GetRange("B2:B5");
let range2 = worksheet.GetRange("C2:C5");
worksheet.GetRange("D5").SetValue(func.XNPV(0.05, range1, range2));
```
