# GetTextPr

Returns the text properties which will be applied to the text in the current numbering level itself, not to the text in the subsequent paragraph.
<br>To change the text style of the paragraph, a style must be applied to it using the [ApiRun#SetStyle](../../ApiRun/Methods/SetStyle.md) method.

## Syntax

expression.GetTextPr();

`expression` - A variable that represents a [ApiNumberingLevel](../ApiNumberingLevel.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example shows how to get the text properties which will be applied to the text in the numbering level itself, not to the text in the subsequent paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oNumbering = oDocument.CreateNumbering("numbered");
var oNumLvl = oNumbering.GetLevel(0);
var oTextPr = oNumLvl.GetTextPr();
oTextPr.SetBold(true);
oTextPr.SetFontFamily("Calibri");
oTextPr.SetFontSize(28);
var oParagraph = oDocument.GetElement(0);
oParagraph.SetNumbering(oNumLvl);
oParagraph.AddText("This is the first element of a numbered list which starts with '1'");
oParagraph = Api.CreateParagraph();
oParagraph.SetNumbering(oNumLvl);
oParagraph.AddText("This is the second element of a numbered list which starts with '2'");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetTextPr.docx");
builder.CloseFile();
```