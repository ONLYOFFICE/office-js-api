# ROMAN

Converts an arabic numeral to a roman numeral in the string format.

## Syntax

```javascript
expression.ROMAN(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A numeric value greater than or equal to 1 and less than 3999. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A roman numeral type: **0** - classic, **1** - more concise, **2** - more concise, **3** - more concise, **4** - simplified. |

## Returns

string

## Example

This example shows how to convert an arabic numeral to a roman numeral in the string format.

```javascript editor-xlsx
// How to get roman numbers from arabic.

// Use a function to convert numbers from arabic numeral to roman.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ROMAN(1250, 4));
```
