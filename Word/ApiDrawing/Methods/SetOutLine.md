# SetOutLine

Sets the outline properties to the specified graphic object.

## Syntax

```javascript
expression.SetOutLine(oStroke);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | Required | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | The stroke used to create the graphic object outline. |

## Returns

boolean

## Example

This example sets the outline properties to the specified graphic object.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing); 
let copyDrawing = drawing.Copy();
stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
copyDrawing.SetOutLine(stroke);
paragraph.AddDrawing(copyDrawing);
```
