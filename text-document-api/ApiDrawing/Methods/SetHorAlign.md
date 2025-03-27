# SetHorAlign

Specifies how the floating object will be horizontally aligned.

## Syntax

```javascript
expression.SetHorAlign(sRelativeFrom, sAlign);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRelativeFrom | Optional | [RelFromH](../../Enumeration/RelFromH.md) | "page" | The document element which will be taken as a countdown point for the object horizontal alignment. |
| sAlign | Optional | "left" \| "right" \| "center" | "left" | The alignment type which will be used for the object horizontal alignment. |

## Returns

This method doesn't return any data.

## Example

This example specifies how the floating object will be horizontally aligned.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with a shape. ");
paragraph.AddText("The text wraps the rectangular box that bounds the object. ");
paragraph.AddText("The distance between the shape and the text is half an inch (457200 English measure units).");
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 1404000, fill, stroke);
drawing.SetDistances(457200, 457200, 457200, 0);
drawing.SetWrappingStyle("square");
drawing.SetHorAlign("page", "center");
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is another paragraph.");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The shape is aligned at the center of the page horizontally.");
doc.Push(paragraph);
```
