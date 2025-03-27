# FREQUENCY

Calculates how often values occur within a range of values and then returns the first value of the returned vertical array of numbers.

## Syntax

```javascript
expression.FREQUENCY(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | An array of values or the selected range for which the frequencies will be counted (blanks and text are ignored). |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | An array of intervals or the selected range into which the values in the first range will be grouped. |

## Returns

number

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

// Configure function parameters
let data_array = [78, 74, 13, 17, 60]; // Historical data_array
let bins_array = [78, 56, 87, 0, 19]; // Corresponding bins_array in Excel serial number format


// Set data_array and bins_array in cells
for (let i = 0; i < data_array.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(bins_array[i])
  worksheet.GetRange("B" + (i + 1)).SetValue(data_array[i]);
}

// Get the ranges for data_array and bins_array
let data_arrayRange = worksheet.GetRange("A1:A5");
let bins_arrayRange = worksheet.GetRange("B1:B5");

// Get the worksheet function object
let func = Api.GetWorksheetFunction();

// Ensure the ranges are properly passed to the function
let forecast = func.FREQUENCY(data_arrayRange, bins_arrayRange);

// Print the forecast result
worksheet.GetRange("D1").SetValue(forecast);

```
