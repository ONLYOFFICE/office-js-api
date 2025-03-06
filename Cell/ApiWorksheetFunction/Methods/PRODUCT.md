# PRODUCT

Multiplies all the numbers given as arguments.

## Syntax

```javascript
expression.PRODUCT(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number \| [ApiRange](../../ApiRange/ApiRange.md) \| number[] |  | Up to 255 numeric values that will be multiplied. The first argument is required, subsequent arguments are optional.\nArguments can be numbers, ranges, or arrays of numbers. |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.PRODUCT(65, 34, 165, 6, 9, 54));
```
