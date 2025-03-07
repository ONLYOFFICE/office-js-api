# MIRR

Returns the internal rate of return for a series of periodic cash flows, considering both cost of investment and interest on reinvestment of cash.

## Syntax

```javascript
expression.MIRR(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | A range or array of cells that contain numbers that represent a series of payments (negative) and income (positive) at regular periods. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The interest rate paid on the money used in the cash flows. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The interest rate received on the cash reinvestment. |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let values = ["Values", "-$40,000.00", "$10,000.00", "$15,000.00", "$20,000.00"];

for (let i = 0; i < values.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(values[i]);
}

worksheet.GetRange("B1").SetValue("Paid interest rate");
worksheet.GetRange("B2").SetValue(0.2);
worksheet.GetRange("C1").SetValue("Received interest rate");
worksheet.GetRange("C2").SetValue(0.23);

let range = worksheet.GetRange("A2:A5");
worksheet.GetRange("B5").SetValue(func.MIRR(range, 0.2, 0.23));
```
