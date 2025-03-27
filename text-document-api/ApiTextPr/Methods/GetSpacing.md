# GetSpacing

Gets the text spacing from the current text properties measured in twentieths of a point.

## Syntax

```javascript
expression.GetSpacing();
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md)

## Example



```javascript editor-docx
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
textPr.SetSpacing(80);
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let spacing = textPr.GetSpacing();
paragraph.AddText("Text spacing: " + spacing);
doc.Push(paragraph);
```
