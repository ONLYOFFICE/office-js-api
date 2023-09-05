# CreatePlaceholder

Creates a new placeholder.

## Syntax

expression.CreatePlaceholder(sType);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [PlaceholderTypes](../../../Enumerations/PlaceholderTypes.md) | The placeholder type |

## Returns

[ApiPlaceholder](../../ApiPlaceholder/ApiPlaceholder.md)

## Example

This example shows how to create placeholder for shape.

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
builder.SaveFile("pptx", "CreatePlaceholder.pptx");
builder.CloseFile();
```