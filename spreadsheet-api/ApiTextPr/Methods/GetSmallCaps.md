# GetSmallCaps

Specifies whether the text with the current text properties are displayed capitalized two points smaller than the actual font size.

## Syntax

```javascript
expression.GetSmallCaps();
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
textProps.SetSmallCaps(true);
paragraph = Api.CreateParagraph();
let isSmallCaps = textProps.GetSmallCaps();
paragraph.AddText("Property of the small capitalized letters: " + isSmallCaps);
content.Push(paragraph);
```
