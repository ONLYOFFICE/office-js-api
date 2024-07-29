# FORECAST_ETS_SEASONALITY

Returns the length of the repetitive pattern an application detects for the specified time series.

## Syntax

expression.FORECAST_ETS_SEASONALITY(arg1, arg2, arg3, arg4);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) &#124;Array.<number> |  | A range or an array of numeric data that determines the historical values for which a new point will be predicted. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | A range of date/time values that correspond to the historical values.The timeline range must be of the same size as the second argument. Date/time values must have a constant step between them and can't be zero. |
| arg3 | Required | number |  | An optional numeric value to handle missing values. The default value of 1 replaces missing values by interpolation, and 0 replaces them with zeros. |
| arg4 | Required | [Aggregation](../../Enumeration/Aggregation.md) |  | An optional numeric value to aggregate multiple values with the same time stamp. |

## Returns

number