# GetDefaultTextPr

Returns a set of default properties for the text run in the current document.

## Syntax

expression.GetDefaultTextPr();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example shows how to get a set of default properties for the text run in the current document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetLanguage("en-US");
oTextPr.SetFontFamily("Comic Sans MS");
oParagraph.AddText("This is just a text.");
builder.SaveFile("docx", "GetDefaultTextPr.docx");
builder.CloseFile();
```