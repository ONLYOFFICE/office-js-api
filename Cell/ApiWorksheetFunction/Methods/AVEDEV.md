# AVEDEV

Returns the average of the absolute deviations of data points from their mean.

## Syntax

expression.AVEDEV(args);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number &#124; string &#124; Array.&lt;number&gt; |  | Up to 255 numeric values for which the average of the absolute deviations will be returned. The first argument is required, subsequent arguments are optional. Arguments can be numbers or names, arrays or references that contain numbers. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.AVEDEV(78, 98, 123, 45, 70, 67, 3, 9, 289));
```
