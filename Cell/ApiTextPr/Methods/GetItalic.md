# GetItalic

Gets the italic property from the current text properties.

## Syntax

```javascript
expression.GetItalic();
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
run.AddLineBreak();
paragraph.AddElement(run);
let textProps = run.GetTextPr();
textProps.SetItalic(true);
paragraph = Api.CreateParagraph();
let isItalic = textProps.GetItalic();
paragraph.AddText("Italic property: " + isItalic);
content.Push(paragraph);
```
