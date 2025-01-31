# FORECAST_ETS_SEASONALITY

Returns the length of the repetitive pattern an application detects for the specified time series.

## Syntax

```javascript
expression.FORECAST_ETS_SEASONALITY(arg1, arg2, arg3, arg4);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number[] |  | A range or an array of numeric data that determines the historical values for which a new point will be predicted. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) |  | A range of date/time values that correspond to the historical values. The timeline range must be of the same size as the second argument. Date/time values must have a constant step between them and can't be zero. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | An optional numeric value to handle missing values. The default value of 1 replaces missing values by interpolation, and 0 replaces them with zeros. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | An optional numeric value to aggregate multiple values with the same time stamp. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var dates = ["10/1/2017", "11/1/2017", "12/1/2017", "1/1/2018", "2/1/2018"];
var numbers = [12558, 14356, 16345, 18678, 14227];

for (var i = 0; i < dates.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(dates[i]);
}
for (var j = 0; j < numbers.length; j++) {
    oWorksheet.GetRange("B" + (j + 1)).SetValue(numbers[j]);
}

var oRange1 = oWorksheet.GetRange("B1:B5");
var oRange2 = oWorksheet.GetRange("A1:A5");
oWorksheet.GetRange("B6").SetValue(oFunction.FORECAST_ETS_SEASONALITY(oRange1, oRange2, 1, 1));
```
