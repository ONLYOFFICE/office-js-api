# ReplaceTextSmart

Replaces each paragraph (or text in cell) in the select with the corresponding text from an array of strings.

## Syntax

expression.ReplaceTextSmart(arrString, sParaTab?, sParaNewLine?);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| arrString | Required | Array<String> | An array of replacement strings. |
| sParaTab | Optional | String | A character which is used to specify the tab in the source text. Default value is " ". |
| sParaNewLine | Optional | String | A character which is used to specify the line break character in the source text. Default value is " ". |

## Returns

This method doesn't return any data.

## Example

This example replaces each paragraph (or text in cell) in the select with the corresponding text from an array of strings.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("A2").SetValue("2");
var oRange = oWorksheet.GetRange("A1:A2");
oRange.Select();
Api.ReplaceTextSmart(["Cell 1", "Cell 2"]);
builder.SaveFile("xlsx", "ReplaceTextSmart.xlsx");
builder.CloseFile();
```