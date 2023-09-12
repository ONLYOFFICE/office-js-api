# ReplaceTextSmart

Replaces each paragraph (or text in cell) in the select with the corresponding text from an array of strings.

## Syntax

expression.ReplaceTextSmart(arrString, sParaTab?, sParaNewLine?);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| arrString | Required | Array<String> | An array of replacement strings. |
| sParaTab | Optional | String | A character which is used to specify the tab in the source text. Default value is `" "`. |
| sParaNewLine | Optional | String | A character which is used to specify the line break character in the source text. Default value is `" "`. |

## Returns

This method doesn't return any data.

## Example

This example replace text from two paragraphs to another text.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oFParagraph = oDocument.GetElement(0);
oFParagraph.AddText("This is the text for the first line. The line break is added after it.");
oFParagraph.AddLineBreak();
var oSParagraph = Api.CreateParagraph();
oSParagraph.AddTabStop();
oSParagraph.AddText("This is just a sample text with a tab stop before it.");
oDocument.Push(oSParagraph);
var oRange1 = oFParagraph.GetRange();
var oRange2 = oSParagraph.GetRange();
var oRange3 = oRange1.ExpandTo(oRange2);
oRange3.Select();
var arr = ["test_1", "test_2"];
Api.ReplaceTextSmart(arr, "", "");
builder.SaveFile("docx", "ReplaceTextSmart.docx");
builder.CloseFile();
```