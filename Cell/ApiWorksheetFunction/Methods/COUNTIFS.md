# COUNTIFS

Counts a number of cells specified by a given set of conditions or criteria.

## Syntax

```javascript
expression.COUNTIFS(arg1, arg2, arg3, arg4);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | The first range of cells to count nonblank cells. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | The first condition in the form of a number, expression, or text that defines which cells will be counted. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | Up to 127 additional ranges of cells to count nonblank cells. This argument is optional. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | Up to 127 additional conditions in the form of a number, expression, or text that define which cells will be counted. |

## Returns

number

## Example

This example shows how to count a number of cells specified by a given set of conditions or criteria.

```javascript editor-xlsx
// How to find a number of cells that satisfy a list of conditions.

// Use function to get cells if conditions are met.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var buyer = ["Buyer", "Tom", "Bob", "Ann", "Kate", "John"];
var product = ["Product", "Apples", "Red apples", "Oranges", "Green apples", "Oranges"];
var quantity = ["Quantity", 12, 45, 18, 26, 10];

for (var i = 0; i < buyer.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(buyer[i]);
}
for (var j = 0; j < product.length; j++) {
    oWorksheet.GetRange("B" + (j + 1)).SetValue(product[j]);
}
for (var n = 0; n < quantity.length; n++) {
    oWorksheet.GetRange("C" + (n + 1)).SetValue(quantity[n]);
}

var oRange1 = oWorksheet.GetRange("B2:B6");
var oRange2 = oWorksheet.GetRange("C2:C6");
oWorksheet.GetRange("E6").SetValue(oFunction.COUNTIFS(oRange1, "*apples", oRange2, "45"));
```
