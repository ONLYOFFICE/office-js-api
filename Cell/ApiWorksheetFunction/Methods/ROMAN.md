# ROMAN

Converts an Arabic numeral to Roman, as text.

## Syntax

expression.ROMAN(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Is the Arabic numeral you want to convert. |
| arg2 | Required | number |  | Is the number specifying the type of Roman numeral you want.. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ROMAN(1250, 4));
```
