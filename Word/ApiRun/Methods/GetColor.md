# GetColor

Gets the RGB color from the current text properties.

## Syntax

```javascript
expression.GetColor();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRGBColor](../../ApiRGBColor/ApiRGBColor.md)

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
textPr.SetColor(255, 111, 61, false);
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let color = textPr.GetColor();
let type = color.GetClassType();
paragraph.AddText("Color type: " + type);
paragraph.SetColor(color);
doc.Push(paragraph);
```
