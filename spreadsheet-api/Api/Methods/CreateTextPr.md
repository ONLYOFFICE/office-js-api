# CreateTextPr

Creates the empty text properties.

## Syntax

```javascript
expression.CreateTextPr();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example creates the empty text properties.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 80 * 36000, 50 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let docContent = shape.GetContent();
docContent.RemoveAllElements();
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
let paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("This is a sample text with the font size set to 30 and the font weight set to bold.");
paragraph.SetTextPr(textPr);
docContent.Push(paragraph);
```
