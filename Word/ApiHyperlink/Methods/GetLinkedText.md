# GetLinkedText

Returns the hyperlink address.

## Syntax

expression.GetLinkedText();

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example shows how to get the hyperlink address.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("ONLYOFFICE Document Builder");
oParagraph.AddElement(oRun);
var oHyperlink = oParagraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
oHyperlink.SetLink("https://api.onlyoffice.com/");
var sLinkedText = oHyperlink.GetLinkedText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Linked text: " + sLinkedText);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetLinkedText.docx");
builder.CloseFile();
```