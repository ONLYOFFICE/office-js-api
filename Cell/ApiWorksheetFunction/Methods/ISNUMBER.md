# ISNUMBER

Checks whether a value is a number, and returns **true** or **false**.

## Syntax

```javascript
expression.ISNUMBER(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| string \| number \| boolean \| [ApiName](../../ApiName/ApiName.md) |  | The value to test. The value can be an empty cell, error, logical value, text, number, range, or range name. |

## Returns

boolean

## Example

This example shows how to check whether a value is a number, and returns true or false.

```javascript editor-xlsx
// How to check if the cell contains a number.

// Use a function to check whether a range data is a numerical value.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ISNUMBER("#N/A"));
oWorksheet.GetRange("A2").SetValue(oFunction.ISNUMBER(255));
oWorksheet.GetRange("A3").SetValue(oFunction.ISNUMBER("Online Office"));
```
