# CreateGroup

Creates a group of drawings.

## Syntax

expression.CreateGroup(aDrawings);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| aDrawings | Required | Array<[ApiDrawing](../../ApiDrawing/ApiDrawing.md)> | The array of drawings. |

## Returns

[ApiGroup](../../ApiGroup/ApiGroup.md)

## Example

This example show how to create a group.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill1 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oFill2 = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape1 = Api.CreateShape("rect", 300 * 36000, 130 * 36000, oFill1, oStroke);
var oShape2 = Api.CreateShape("rect", 150 * 36000, 80 * 36000, oFill2, oStroke);
var oGroup = Api.CreateGroup([oShape1, oShape2]);
oShape1.SetPosition(608400, 1267200);
oShape2.SetPosition(3100000, 1867200);
oSlide.AddObject(oGroup);
builder.SaveFile("pptx", "CreateGroup.pptx");
builder.CloseFile();
```