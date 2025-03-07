# GetSpacingAfter

Returns the spacing after value of the current paragraph.

## Syntax

```javascript
expression.GetSpacingAfter();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md)

## Example

This example shows how to get the spacing after value of the current paragraph.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetSpacingAfter(1440);
paragraph.AddText("This is an example of setting a space after a paragraph. ");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
let spacingAfter = paraPr.GetSpacingAfter();
paragraph = Api.CreateParagraph();
paragraph.AddText("Spacing after : " + spacingAfter);
content.Push(paragraph);
```
