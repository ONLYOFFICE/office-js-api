# FORECAST_ETS_CONFINT

Returns a confidence interval for the forecast value at the specified target date.

## Syntax

expression.FORECAST_ETS_CONFINT(arg1, arg2, arg3, arg4, arg5, arg6, arg7);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | A date for which a new value will be predicted. Must be after the last date in the timeline. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) &#124;Array.<number> |  | A range or an array of numeric data that determines the historical values for which a new point will be predicted. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | A range of date/time values that correspond to the historical values.The timeline range must be of the same size as the second argument. Date/time values must have a constant step between them and can't be zero. |
| arg4 | Required | number |  | A number between 0 and 1 that shows the confidence level for the calculated confidence interval. The default value is .95. |
| arg5 | Required | number |  | An optional numeric value that specifies the length of the seasonal pattern. The default value of 1 indicates seasonality is detected automatically.The 0 value means no seasonality. |
| arg6 | Required | number |  | An optional numeric value to handle missing values. The default value of 1 replaces missing values by interpolation, and 0 replaces them with zeros. |
| arg7 | Required | Aggregation |  | An optional numeric value to aggregate multiple values with the same time stamp. |

## Returns

number