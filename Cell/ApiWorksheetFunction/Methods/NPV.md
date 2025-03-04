# NPV

Returns the net present value of an investment based on a discount rate and a series of future payments (negative values) and income (positive values).

## Syntax

```javascript
expression.NPV(arg1, args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The discount rate. |
| args | Required | number \| [ApiRange](../../ApiRange/ApiRange.md) \| number[] |  | Up to 255 arguments representing future payments (negative values) and income (positive values). The first argument is required, the subsequent values are optional. Arguments can be numbers, ranges, arrays of numbers. |

## Returns

number

## Example

This example shows how to return the net present value of an investment based on a discount rate and a series of future payments (negative values) and income (positive values).

```javascript editor-xlsx
// How to get the net present value of an investment.

// Use a function to get the net present value of an investment based on different parameters.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue("Rate");
oWorksheet.GetRange("A2").SetValue(0.05);
var values = ["Payment", -10000, 3000, 4500, 6000];

for (var i = 0; i < values.length; i++) {
    oWorksheet.GetRange("B" + (i + 1)).SetValue(values[i]);
}
var oRange = oWorksheet.GetRange("B2:B5");
oWorksheet.GetRange("B6").SetValue(oFunction.NPV(0.05, oRange));
```
