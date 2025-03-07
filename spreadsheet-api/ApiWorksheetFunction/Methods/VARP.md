# VARP

Calculates variance based on the entire population (ignores logical values and text in the population).

## Syntax

```javascript
expression.VARP(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number \| [ApiName](../../ApiName/ApiName.md) \| [ApiRange](../../ApiRange/ApiRange.md) \| number[] |  | Up to 255 numeric values for which the variance will be calculated.\ The first argument is required, subsequent arguments are optional. Arguments can be numbers, names, ranges, or arrays of numbers. |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let result = func.VARP(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)
worksheet.GetRange("B2").SetValue(result);


```
