# MAXA

Returns the largest value in a set of values. Does not ignore logical values and text.

## Syntax

```javascript
expression.MAXA(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number | string | boolean | [ApiRange](../../ApiRange/ApiRange.md) | array | [ApiName](../../ApiName/ApiName.md) |  | Up to 255 values (number, text, logical value) for which the largest value will be returned. The first argument is required, subsequent arguments are optional. Arguments can be numbers, logical values and text representations of numbers, names, ranges, or arrays. |

## Returns

number

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:A5").GetValue();
var oFunction = Api.GetWorksheetFunction();
var maxA = oFunction.MAX(23, 45, true, "text", 0.89);
oWorksheet.GetRange("C1").SetValue(maxA);

```
