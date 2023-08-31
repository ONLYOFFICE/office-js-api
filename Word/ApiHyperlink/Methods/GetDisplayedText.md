# GetDisplayedText

Returns the hyperlink display text.

## Syntax

expression.GetDisplayedText();

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example shows how to get the hyperlink display text.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oHyperlink = oParagraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
var sDisplayedText = oHyperlink.GetDisplayedText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Displayed text: " + sDisplayedText);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetDisplayedText.docx");
builder.CloseFile();
```