# GetHighlight

Gets the highlight property from the current text properties.

## Syntax

expression.GetHighlight();

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example



```javascript
let doc = Api.GetDocument();
let myNewRunStyle = doc.CreateStyle("My New Run Style", "run");
let textPr = myNewRunStyle.GetTextPr();
textPr.SetCaps(true);
textPr.SetFontFamily("Calibri Light");
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetStyle(myNewRunStyle);
run.AddText("This is a text run with its own style.");
textPr = run.GetTextPr();
textPr.SetHighlight("lightGray");
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let highlight = textPr.GetHighlight();
paragraph.AddText("Highlight property: " + highlight);
doc.Push(paragraph);
```
