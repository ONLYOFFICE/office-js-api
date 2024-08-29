# GetStyle

Gets the style of the current text properties.

## Syntax

expression.GetStyle();

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiStyle](../../ApiStyle/ApiStyle.md)

## Example



```javascript
var oDocument = Api.GetDocument();
var oMyNewRunStyle = oDocument.CreateStyle("My New Run Style", "run");
var oTextPr = oMyNewRunStyle.GetTextPr();
oTextPr.SetCaps(true);
oTextPr.SetFontFamily("Calibri Light");
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oRun.AddText("The text properties are changed and the style is added to the paragraph. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetStyle(oMyNewRunStyle);
oRun.AddText("This is a text run with its own style.");
oTextPr = oRun.GetTextPr();
oParagraph.AddElement(oRun);
oParagraph = Api.CreateParagraph();
var oStyle = oTextPr.GetStyle();
oParagraph.AddText("Style: " + oStyle.GetName());
oDocument.Push(oParagraph);
```
