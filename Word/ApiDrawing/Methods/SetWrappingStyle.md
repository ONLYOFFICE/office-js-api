# SetWrappingStyle

Sets the wrapping type of the current object (image, shape, chart). One of the following wrapping style types can be set:
**"inline"** - the object is considered to be a part of the text, like a character, so when the text moves, the object moves as well. In this case the positioning options are inaccessible.
If one of the following styles is selected, the object can be moved independently of the text and positioned on the page exactly:
**"square"** - the text wraps the rectangular box that bounds the object.
**"tight"** - the text wraps the actual object edges.
**"through"** - the text wraps around the object edges and fills in the open white space within the object.
**"topAndBottom"** - the text is only above and below the object.
**"behind"** - the text overlaps the object.
**"inFront"** - the object overlaps the text.

## Syntax

```javascript
expression.SetWrappingStyle(sType);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | "inline" | "square" | "tight" | "through" | "topAndBottom" | "behind" | "inFront" |  | The wrapping style type available for the object. |

## Returns

This method doesn't return any data.

## Example

This example creates a shape with wrapping style "square".

```javascript
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
paragraph.AddDrawing(drawing);
```
