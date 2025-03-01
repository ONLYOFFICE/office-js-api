# SetVerAlign

Specifies how the floating object will be vertically aligned.

## Syntax

```javascript
expression.SetVerAlign(sRelativeFrom, sAlign);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRelativeFrom | Optional | [RelFromV](../../Enumeration/RelFromV.md) | "page" | The document element which will be taken as a countdown point for the object vertical alignment. |
| sAlign | Optional | "top" \| "bottom" \| "center" | "top" | The alingment type which will be used for the object vertical alignment. |

## Returns

boolean

## Example

This example specifies how the floating object will be vertically aligned.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with a shape. ");
paragraph.AddText("The text wraps the rectangular box that bounds the object. ");
paragraph.AddText("The distance between the shape and the text (horizontally) is half an inch (457200 English measure units).");
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 1404000, fill, stroke);
drawing.SetDistances(457200, 457200, 457200, 0);
drawing.SetWrappingStyle("square");
drawing.SetVerAlign("page", "top");
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
paragraph.AddText("The shape is aligned to the top of the page.");
doc.Push(paragraph);
```
