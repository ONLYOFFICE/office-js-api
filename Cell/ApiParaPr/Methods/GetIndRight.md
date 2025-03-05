# GetIndRight

Returns the paragraph right side indentation.

## Syntax

```javascript
expression.GetIndRight();
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md) \| undefined

## Example

This example shows how to get the paragraph right side indentation.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetIndRight(2880);
paraPr.SetJc("right");
paragraph.AddText("This is the first paragraph with the right offset of 2 inches set to it. ");
paragraph.AddText("This indent is set by the paragraph style. No paragraph inline style is applied. ");
let indRight = paraPr.GetIndRight();
paragraph = Api.CreateParagraph();
paragraph.AddText("Right indent: " + indRight);
content.Push(paragraph);
```
