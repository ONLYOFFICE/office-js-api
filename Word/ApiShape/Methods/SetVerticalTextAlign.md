# SetVerticalTextAlign

Sets the vertical alignment to the shape content where a paragraph or text runs can be inserted.

## Syntax

```javascript
expression.SetVerticalTextAlign(VerticalAlign);
```

`expression` - A variable that represents a [ApiShape](../ApiShape.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| VerticalAlign | Required | [VerticalTextAlign](../../Enumeration/VerticalTextAlign.md) |  | The type of the vertical alignment for the shape inner contents. |

## Returns

This method doesn't return any data.

## Example

This example sets the vertical alignment to the shape content where a paragraph or text runs can be inserted.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetContent();
let classType = drawing.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
docContent.AddElement(0, paragraph);
drawing.SetVerticalTextAlign("top");
```
