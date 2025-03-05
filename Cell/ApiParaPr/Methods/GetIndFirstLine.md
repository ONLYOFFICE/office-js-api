# GetIndFirstLine

Returns the paragraph first line indentation.

## Syntax

```javascript
expression.GetIndFirstLine();
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md) \| undefined

## Example

This example shows how to get the paragraph first line indentation.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetIndFirstLine(1440);
paragraph.AddText("This is the first paragraph with the indent of 1 inch set to the first line. ");
paragraph.AddText("This indent is set by the paragraph style. No paragraph inline style is applied. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
let indFirstLine = paraPr.GetIndFirstLine();
paragraph = Api.CreateParagraph();
paragraph.AddText("First line indent: " + indFirstLine);
content.Push(paragraph);
```
