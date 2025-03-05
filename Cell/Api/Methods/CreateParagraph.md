# CreateParagraph

Creates a new paragraph.

## Syntax

```javascript
expression.CreateParagraph();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example creates a new paragraph.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let docContent = shape.GetContent();
docContent.RemoveAllElements();
let paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
docContent.Push(paragraph);
```
