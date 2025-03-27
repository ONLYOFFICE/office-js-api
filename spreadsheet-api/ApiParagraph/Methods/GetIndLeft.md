# GetIndLeft

Returns the paragraph left side indentation.

## Syntax

```javascript
expression.GetIndLeft();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md) \| undefined

## Example

This example shows how to get the paragraph left side indentation.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetIndLeft(2880);
paragraph.AddText("This is the first paragraph with the indent of 2 inches set to it. ");
paragraph.AddText("This indent is set by the paragraph style. No paragraph inline style is applied. ");
let indLeft = paraPr.GetIndLeft();
paragraph = Api.CreateParagraph();
paragraph.AddText("Left indent: " + indLeft);
content.Push(paragraph);
```
