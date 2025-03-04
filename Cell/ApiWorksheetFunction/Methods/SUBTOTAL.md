# SUBTOTAL

Returns a subtotal in a list or database.

## Syntax

```javascript
expression.SUBTOTAL(arg1, args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A numeric value that specifies which function to use for the subtotal: **1 (101)** - AVERAGE, **2 (102)** - COUNT, **3 (103)** - COUNTA, **4 (104)** - MAX, **5 (105)** - MIN, **6 (106)** - PRODUCT, **7 (107)** - STDEV, **8 (108)** - STDEVP, **9 (109)** - SUM, **10 (110)** - VAR, **11 (111)** - VARP. 1-11 includes manually-hidden rows, while 101-111 excludes them; filtered-out cells are always excluded. |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | Up to 255 ranges containing the values for which the subtotal will be returned. The first argument is required, subsequent arguments are optional. |

## Returns

number

## Example

This example shows how to return a subtotal in a list or database.

```javascript editor-xlsx
// How to calculate a subtotal.

// Use a function to estimate a subtotal from the list.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.SUBTOTAL(9, 10, 30, 50, 5));
```
