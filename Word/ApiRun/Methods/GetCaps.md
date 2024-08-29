# GetCaps

Specifies whether the text with the current text properties are capitalized.

## Syntax

expression.GetCaps();

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

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
oTextPr.SetCaps(true);
oParagraph.AddElement(oRun);
oParagraph = Api.CreateParagraph();
var bCaps = oTextPr.GetCaps();
oParagraph.AddText("Property of the capitalized letters: " + bCaps);
oDocument.Push(oParagraph);
```
