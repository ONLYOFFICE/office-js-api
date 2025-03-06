# KURT

Returns the kurtosis of a data set.

## Syntax

```javascript
expression.KURT(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) \| number[] \| [ApiName](../../ApiName/ApiName.md) |  | Up to 255 numeric values for which the kurtosis will be calculated.\ Arguments can be numbers, names, ranges, or arrays of numbers. |

## Returns

number

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let kurtosis = func.KURT(3, 89, 34, 2, 45, 4, 45, 13);
worksheet.GetRange("C1").SetValue(kurtosis);
```
