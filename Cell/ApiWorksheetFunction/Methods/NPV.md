# NPV

Returns the net present value of an investment based on a discount rate and a series of future payments (negative values) and income (positive values).

## Syntax

expression.NPV();

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number, string, boolean

## Example



```javascript
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
