# GetOutLine

Gets the text outline from the current text properties.

## Syntax

```javascript
expression.GetOutLine();
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiStroke](../../ApiStroke/ApiStroke.md)

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
stroke = Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(128, 128, 128)));
textProps.SetOutLine(stroke);
paragraph = Api.CreateParagraph();
stroke = textProps.GetOutLine();
let type = stroke.GetClassType();
paragraph.AddText("Text outline type: " + type);
content.Push(paragraph);
```
