# CreateLayout

Creates a new slide layout and adds it to the slide master if it is specified.

## Syntax

expression.CreateLayout(oMaster?);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oMaster | Optional | [ApiMaster](../../ApiMaster/ApiMaster.md) | Parent slide master. Default value is "null". |

## Returns

[ApiLayout](../../ApiLayout/ApiLayout.md)

## Example

This example shows how to create layout.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide1 = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oLayout = Api.CreateLayout(oMaster);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oPlaceholder = Api.CreatePlaceholder("picture");
oShape.SetPlaceholder(oPlaceholder);
oLayout.AddObject(oShape);
oSlide1.ApplyLayout(oLayout);
var oSlide2 = Api.CreateSlide();
oPresentation.AddSlide(oSlide2);
oSlide2.ApplyLayout(oLayout);
builder.SaveFile("pptx", "CreateLayout.pptx");
builder.CloseFile();
```