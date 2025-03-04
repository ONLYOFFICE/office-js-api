# NUMBERVALUE

Converts text to a number, in a locale-independent way.

## Syntax

```javascript
expression.NUMBERVALUE(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The string representing a number to convert. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The character used as the decimal separator in the string. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The character used as the group separator in the string. |

## Returns

number

## Example

This example shows how to convert text to a number, in a locale-independent way.

```javascript editor-xlsx
// How to get a number from text.

// Use a function to convert a text to a number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.NUMBERVALUE("2.500,27", ",", "."));
```
