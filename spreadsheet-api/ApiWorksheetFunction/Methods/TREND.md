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
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | An optional range or array of x-values from the &lt;em&gt;y = mx + b&lt;/em&gt; equation, an array of the same size as an array of y-values. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | A range or array of new x-values for which this function will return corresponding y-values. |
| arg4 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | A logical value: the constant &lt;em&gt;b&lt;/em&gt; is calculated normally if this parameter is set to -**true** or omitted,\ and &lt;em&gt;b&lt;/em&gt; is set equal to 0 if the parameter is -**false**. |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let month = ["Month", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sales = ["Sales", "$1,500.00", "$1,230.00", "$1,700.00", "$1,000.00", "$980.00", "$1,470.00", "$1,560.00", "$1,640.00", "$1,420.00", "$1,100.00"];

for (let i = 0; i < month.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(month[i]);
}
for (let j = 0; j < sales.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(sales[j]);
}

worksheet.GetRange("C1").SetValue("Trend");
let range1 = worksheet.GetRange("B2:B11");
let range2 = worksheet.GetRange("A2:A11");
worksheet.GetRange("C2:C11").SetValue(func.TREND(range1, range2));
```
