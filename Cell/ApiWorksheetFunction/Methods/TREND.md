# TREND

Returns numbers in a linear trend matching known data points, using the least squares method.

## Syntax

```javascript
expression.TREND(arg1, arg2, arg3, arg4);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | A range or array of y-values from the &lt;em&gt;y = mx + b&lt;/em&gt; equation. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | An optional range or array of x-values from the &lt;em&gt;y = mx + b&lt;/em&gt; equation, an array of the same size as an array of y-values. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | A range or array of new x-values for which this function will return corresponding y-values. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | A logical value: the constant &lt;em&gt;b&lt;/em&gt; is calculated normally if this parameter is set to **true** or omitted, and &lt;em&gt;b&lt;/em&gt; is set equal to 0 if the parameter is **false**. |

## Returns

number

## Example

This example shows how to return numbers in a linear trend matching known data points, using the least squares method.

```javascript editor-xlsx
// How to get numbers in a linear trend using the least squares method.

// Use a function to find a linear trend using data points by the least squares method.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var month = ["Month", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sales = ["Sales", "$1,500.00", "$1,230.00", "$1,700.00", "$1,000.00", "$980.00", "$1,470.00", "$1,560.00", "$1,640.00", "$1,420.00", "$1,100.00"];

for (var i = 0; i < month.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(month[i]);
}
for (var j = 0; j < sales.length; j++) {
    oWorksheet.GetRange("B" + (j + 1)).SetValue(sales[j]);
}

oWorksheet.GetRange("C1").SetValue("Trend");
var oRange1 = oWorksheet.GetRange("B2:B11");
var oRange2 = oWorksheet.GetRange("A2:A11");
oWorksheet.GetRange("C2:C11").SetValue(oFunction.TREND(oRange1, oRange2));
```
