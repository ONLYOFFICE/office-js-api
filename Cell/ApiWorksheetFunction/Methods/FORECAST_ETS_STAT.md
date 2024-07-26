# FORECAST_ETS_STAT

Returns the requested statistic for the forecast.

## Syntax

expression.FORECAST_ETS_STAT(arg1, arg2, arg3, arg4, arg5, arg6);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) &#124;Array.<number> |  | A range or an array of numeric data that determines the historical values for which a new point will be predicted. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | A range of date/time values that correspond to the historical values.The timeline range must be of the same size as the second argument. Date/time values must have a constant step between them and can't be zero. |
| arg3 | Required | StatisticType |  | A number between 1 and 8, indicating which statistic will be returned for the calculated forecast. |
| arg4 | Required | number |  | An optional numeric value that specifies the length of the seasonal pattern. The default value of 1 indicates seasonality is detected automatically.The 0 value means no seasonality. |
| arg5 | Required | number |  | An optional numeric value to handle missing values. The default value of 1 replaces missing values by interpolation, and 0 replaces them with zeros. |
| arg6 | Required | Aggregation |  | An optional numeric value to aggregate multiple values with the same time stamp. |

## Returns

number