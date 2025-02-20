# InsertInContentControl

Wraps the graphic object with a rich text content control.

## Syntax

```javascript
expression.InsertInContentControl(nType);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nType | Required | number |  | Defines if this method returns the ApiBlockLvlSdt (nType === 1) or ApiDrawing (any value except 1) object. |

## Returns

[ApiDrawing](../../ApiDrawing/ApiDrawing.md) \| [ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md)

## Example

This example wraps the graphic object with a rich text content control.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This graphic object was wrapped in content control");
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.InsertInContentControl(1);
```
