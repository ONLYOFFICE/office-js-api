# SetPlaceholder

Sets the specified placeholder to the current drawing object.

## Syntax

expression.SetPlaceholder(oPlaceholder);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oPlaceholder | Required | [ApiPlaceholder](../../ApiPlaceholder/ApiPlaceholder.md) | Placeholder object. |

## Returns

Boolean (returns false if parameter isn't a placeholder)

## Example

This example sets a placeholder for the shape.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oPlaceholder = Api.CreatePlaceholder("picture");
oShape.SetPlaceholder(oPlaceholder);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "SetPlaceholder.pptx");
builder.CloseFile();
```