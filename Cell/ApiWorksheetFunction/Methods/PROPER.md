# PROPER

Converts a text string to proper case: the first letter in each word to uppercase, and all other letters to lowercase.

## Syntax

```javascript
expression.PROPER(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text enclosed in quotation marks, a formula that returns text, or a reference to a cell containing text to partially capitalize. |

## Returns

string

## Example

This example shows how to convert a text string to proper case: the first letter in each word to uppercase, and all other letters to lowercase.

```javascript editor-xlsx
// How to make each word's first letter uppercase.

// Use a function to make proper casing for all text strings.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.PROPER("dAVID CONNOR"));
```
