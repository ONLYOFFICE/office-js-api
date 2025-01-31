# GroupDrawings

Groups an array of drawings in the current document.

## Syntax

```javascript
expression.GroupDrawings(aDrawings);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aDrawings | Required | [DrawingForGroup[]](../../Enumeration/DrawingForGroup.md) |  | An array of drawings to group. |

## Returns

[ApiGroup](../../ApiGroup/ApiGroup.md)

## Example

This example show how to create a group of drawings in document.

```javascript
let doc = Api.GetDocument();
let fill1 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let fill2 = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape1 = Api.CreateShape("rect", 150 * 36000, 65 * 36000, fill1, stroke);
let shape2 = Api.CreateShape("rect", 75 * 36000, 40 * 36000, fill2, stroke);
shape1.SetWrappingStyle("inFront");
shape2.SetWrappingStyle("inFront");
let paragraph = Api.CreateParagraph();
paragraph.AddDrawing(shape1);
paragraph.AddDrawing(shape2);
doc.Push(paragraph);
doc.GroupDrawings([shape1, shape2]);
```
