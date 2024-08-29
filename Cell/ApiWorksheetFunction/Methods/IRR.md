# IRR

Returns the internal rate of return for a series of cash flows.

## Syntax

expression.IRR(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | Is an array or a reference to cells that contain numbers for which you want to calculate the internal rate of return. |
| arg2 | Required | number |  | Is a number that you guess is close to the result of IRR; 0.1 (10 percent) if omitted. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var values = ["Values", "-$40,000.00", "$10,000.00", "$15,000.00", "$20,000.00"];

for (var i = 0; i < values.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(values[i]);
}

var oRange = oWorksheet.GetRange("A2:A5");
oWorksheet.GetRange("B5").SetValue(oFunction.IRR(oRange));
```
