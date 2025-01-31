# AVERAGEIFS

Finds the average (arithmetic mean) for the cells specified by a given set of conditions or criteria.

## Syntax

```javascript
expression.AVERAGEIFS(arg1, arg2, arg3, arg4, arg5);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) |  | The range of cells which will be evaluated. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number | string |  | The first condition or criteria in the form of a number, expression, or text that defines which cells will be used to find the average. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) |  | The actual cells to be used to find the average. If omitted, the cells in the range are used. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number | string |  | Up to 127 additional conditions or criteria in the form of a number, expression, or text that defines which cells will be used to find the average. These arguments are optional. |
| arg5 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) |  | Up to 127 actual ranges to be used to find the average. If omitted, the cells in the range are used. These arguments are optional. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var year = [2016, 2016, 2016, 2017, 2017, 2017];
var products = ["Apples", "Red apples", "Oranges", "Green apples", "Apples", "Bananas"];
var income = ["$100.00", "$150.00", "$250.00", "$50.00", "$150.00", "$200.00"];

for (var i = 0; i < year.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(year[i]);
}
for (var j = 0; j < products.length; j++) {
    oWorksheet.GetRange("B" + (j + 1)).SetValue(products[j]);
}
for (var n = 0; n < income.length; n++) {
    oWorksheet.GetRange("C" + (n + 1)).SetValue(income[n]);
}

var oRange1 = oWorksheet.GetRange("C1:C6");
var oRange2 = oWorksheet.GetRange("B1:B6");
var oRange3 = oWorksheet.GetRange("A1:A6");
oWorksheet.GetRange("E6").SetValue(oFunction.AVERAGEIFS(oRange1, oRange2, "*Apples", oRange3, 2016));
```
