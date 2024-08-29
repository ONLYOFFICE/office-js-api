# IFERROR

Returns value_if_error if expression is an error and the value of the expression itself otherwise.

## Syntax

expression.IFERROR(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is any value or expression or reference. |
| arg2 | Required | any |  | Is any value or expression or reference. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var stock = ["Stock", 0, 84];
var values = ["Total value", "$5.43", "$297.36"];
oWorksheet.GetRange("C1").SetValue("Unit Price");

for (var i = 0; i < stock.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(stock[i]);
}
for (var j = 0; j < values.length; j++) {
    oWorksheet.GetRange("B" + (j + 1)).SetValue(values[j]);
}
for (var n = 1; n < values.length; n++) {
    var value1 = oWorksheet.GetRange("B" + (n + 1)).GetValue();
    var value2 = oWorksheet.GetRange("A" + (n + 1)).GetValue();
    oWorksheet.GetRange("C" + (n + 1)).SetValue(oFunction.IFERROR(value1/value2, "Out of stock"));
}
```
