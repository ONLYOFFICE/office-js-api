# GetFontFamily

Gets the font family from the current text properties.

## Syntax

expression.GetFontFamily();

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

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
oTextPr.SetFontFamily("Arial");
oParagraph.AddElement(oRun);
oParagraph = Api.CreateParagraph();
var sFontFamily = oTextPr.GetFontFamily();
oParagraph.AddText("Font family: " + sFontFamily);
oDocument.Push(oParagraph);
```
