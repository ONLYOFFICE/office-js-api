# GetScreenTipText

Returns the screen tip text of the hyperlink.

## Syntax

expression.GetScreenTipText();

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example shows how to get the screen tip text of the hyperlink.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("ONLYOFFICE Document Builder");
oParagraph.AddElement(oRun);
var oHyperlink = oParagraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
oHyperlink.SetScreenTipText("ONLYOFFICE for developers");
var sScreenTipText = oHyperlink.GetScreenTipText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Screen tip text: " + sScreenTipText);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetScreenTipText.docx");
builder.CloseFile();
```