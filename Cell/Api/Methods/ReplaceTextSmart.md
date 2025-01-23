# ReplaceTextSmart

Replaces each paragraph (or text in cell) in the select with the corresponding text from an array of strings.

## Syntax

expression.ReplaceTextSmart(textStrings, tab, newLine);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textStrings | Required | Array |  | An array of replacement strings. |
| tab | Optional | string | "\t" | A character which is used to specify the tab in the source text. |
| newLine | Optional | string | "\r\n" | A character which is used to specify the line break character in the source text. |

## Returns

This method doesn't return any data.

## Example

This example replaces each paragraph (or text in cell) in the select with the corresponding text from an array of strings.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("A2").SetValue("2");
var oRange = oWorksheet.GetRange("A1:A2");
oRange.Select();
Api.ReplaceTextSmart(["Cell 1", "Cell 2"]);
```
