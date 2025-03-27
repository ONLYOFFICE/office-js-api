# GetCaps

Specifies whether the text with the current text properties are capitalized.

## Syntax

```javascript
expression.GetCaps();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

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
textPr.SetCaps(true);
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let caps = textPr.GetCaps();
paragraph.AddText("Property of the capitalized letters: " + caps);
doc.Push(paragraph);
```
