# VARPA

Calculates variance based on the entire population, including logical values and text. Text and the **false** logical value have the value 0; the **true** logical value has the value 1.

## Syntax

```javascript
expression.VARPA(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number \| string \| boolean \| [ApiRange](../../ApiRange/ApiRange.md) \| array \| [ApiName](../../ApiName/ApiName.md) |  | Up to 255 values for which the variance will be calculated. The first argument is required, subsequent arguments are optional. Arguments can be numbers, logical values or text representations of numbers, names, ranges, or arrays. |

## Returns

number

## Example

This example shows how to calculate variance based on the entire population, including logical values and text. Text and the false logical value have the value 0; the true logical value has the value 1.

```javascript editor-xlsx
// How to estimate variance based on the entire population considering logical values and text.

// Use a function to estimate variance based on population not ignoring logical values and text.


var oWorksheet = Api.GetActiveSheet();

// Data array

var data = [
    [1, 0, 0, false],
    ["text", 1, 0, 0],
    [2, 3, true, 7],
    [6, 8, 10, 12]
];

// Place the data in cells A1:D4

for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++) {
        oWorksheet.GetRangeByNumber(i, j).SetValue(data[i][j]);
    }
}

// Calculate the VARPA of the range A1:D4 and place the result in cell D5

var oFunction = Api.GetWorksheetFunction();
var varpaResult = oFunction.VARPA(oWorksheet.GetRange("A1:D4"));
oWorksheet.GetRange("D5").SetValue(varpaResult);



```
