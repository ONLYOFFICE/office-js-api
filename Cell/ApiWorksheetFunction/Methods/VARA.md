# VARA

Estimates variance based on a sample, including logical values and text. Text and the -**false** logical value have the value 0; the -**true** logical value has the value 1.

## Syntax

```javascript
expression.VARA(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number \| string \| boolean \| (number \| string \| boolean)[] \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | Up to 255 values for which the variance will be calculated.\ The first argument is required, subsequent arguments are optional. Arguments can be numbers, logical values or text representations of numbers, names, ranges, or arrays. |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();

// Data array
let data = [
    [1, 0, 0, false],
    ["text", 1, 0, 0],
    [2, 3, true, 7],
    [6, 8, 10, 12]
];

// Place the data in cells A1:D4
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
        worksheet.GetRangeByNumber(i, j).SetValue(data[i][j]);
    }
}

// Calculate the letA of the range A1:D4 and place the result in cell E6
let func = Api.GetWorksheetFunction();
let letaResult = func.VARA(worksheet.GetRange("A1:D4"));
worksheet.GetRange("E6").SetValue(letaResult);



```
