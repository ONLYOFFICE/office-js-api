# GetSpacingBefore

Returns the spacing before value of the current paragraph.

## Syntax

```javascript
expression.GetSpacingBefore();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md)

## Example

This example shows how to get the spacing before value of the current paragraph.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.AddText("This is an example of setting a space before a paragraph.");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("This is due to the fact that the second paragraph has this offset enabled.");
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
content.Push(paragraph2);
let paraPr = paragraph2.GetParaPr();
paraPr.SetSpacingBefore(1440);
let spacingBefore = paraPr.GetSpacingBefore();
paragraph = Api.CreateParagraph();
paragraph.AddText("Spacing before: " + spacingBefore);
content.Push(paragraph);
```
