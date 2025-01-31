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
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number[] |  | An array of values or the selected range for which the frequencies will be counted (blanks and text are ignored). |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number[] |  | An array of intervals or the selected range into which the values in the first range will be grouped. |

## Returns

number

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

// Configure function parameters
var data_array = [78, 74, 13, 17, 60]; // Historical data_array
var bins_array = [78, 56, 87, 0, 19]; // Corresponding bins_array in Excel serial number format


// Set data_array and bins_array in cells
for (var i = 0; i < data_array.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(bins_array[i])
  oWorksheet.GetRange("B" + (i + 1)).SetValue(data_array[i]);
}

// Get the ranges for data_array and bins_array
var data_arrayRange = oWorksheet.GetRange("A1:A5");
var bins_arrayRange = oWorksheet.GetRange("B1:B5");

// Get the worksheet function object
var oFunction = Api.GetWorksheetFunction();

// Ensure the ranges are properly passed to the function
var forecast = oFunction.FREQUENCY(data_arrayRange, bins_arrayRange);

// Print the forecast result
oWorksheet.GetRange("D1").SetValue(forecast);

```
