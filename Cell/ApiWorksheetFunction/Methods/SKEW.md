# SKEW

Returns the skewness of a distribution: a characterization of the degree of asymmetry of a distribution around its mean.

## Syntax

```javascript
expression.SKEW(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number \| [ApiName](../../ApiName/ApiName.md) \| number[] \| [ApiRange](../../ApiRange/ApiRange.md) |  | Up to 255 numeric values for which the skewness of a distribution will be returned. The first argument is required, subsequent arguments are optional. Arguments can be numbers, names, ranges, or arrays of numbers. |

## Returns

number

## Example

This example shows how to return the skewness of a distribution: a characterization of the degree of asymmetry of a distribution around its mean.

```javascript editor-xlsx
// How to calaculate the skewness of a distribution.

// Use a function to get a characterization of the degree of asymmetry of a distribution around its mean.

const oWorksheet = Api.GetActiveSheet();

var valueArr = [1, 0, 0, 0, 0, 1, 0, 0, 2, 3, 4, 5, 6, 8, 10, 12];

// Place the numbers in cells

for (var i = 0; i < valueArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.SKEW(1, 0, 0, 0, 0, 1, 0, 0, 2, 3, 4, 5, 6, 8, 10, 12);

oWorksheet.GetRange("C1").SetValue(ans);

```
