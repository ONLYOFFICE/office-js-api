# GROWTH

Calculates predicted exponential growth by using existing data.

## Syntax

```javascript
expression.GROWTH(arg1, arg2, arg3, arg4);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | The set of y-values from the &lt;em&gt;y = b*m^x&lt;/em&gt; equation, an array or range of positive numbers. |
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | An optional set of x-values from the &lt;em&gt;y = b*m^x&lt;/em&gt; equation, an array or range of positive numbers that has the same size as the set of y-values. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | New x-values for which the function will return the corresponding y-values. |
| arg4 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | A logical value: the constant &lt;em&gt;b&lt;/em&gt; is calculated normally if this parameter is set to **true**, and &lt;em&gt;b&lt;/em&gt; is set equal to 1 if the parameter is **false** or omitted. |

## Returns

number

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

// Configure function parameters
let data_array = [1289, 1590, 1652, 1107, 903]; 
let months_array = [1, 2, 3, 4, 5]

// Set data_array and months_array in cells
for (let i = 0; i < months_array.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(months_array[i]);
}
for (let i = 0; i < data_array.length; i++) {
  worksheet.GetRange("B" + (i + 1)).SetValue(data_array[i]);
  worksheet.GetRange("B" + (i + 1)).SetNumberFormat("$#,##0.00");
}

// Get the ranges for data_array and bins_array
let data_arrayRange = worksheet.GetRange("A1:A5");
let months_arrayRange = worksheet.GetRange("B1:B5");

// Get the worksheet function object
let func = Api.GetWorksheetFunction();

// Ensure the ranges are properly passed to the function
let growth = func.GROWTH(data_arrayRange, months_arrayRange);

// Print the growth result
worksheet.GetRange("D1").SetValue(growth);

```
