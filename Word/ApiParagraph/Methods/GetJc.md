# GetJc

Returns the paragraph contents justification.<br>Inherited From: [ApiParaPr#GetJc](../../ApiParaPr/Methods/GetJc.md)

## Syntax

expression.GetJc();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ContentJustification](../../../Enumerations/ContentJustification.md)

## Example

This example shows how to get the paragraph contents justification.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the text in it aligned by the center. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
oParagraph.SetJc("center");
var sJc = oParagraph.GetJc();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Justification: " + sJc);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetJc.docx");
builder.CloseFile();
```