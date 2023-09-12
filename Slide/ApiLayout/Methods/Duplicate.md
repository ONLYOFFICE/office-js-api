# Duplicate

Creates a duplicate of the specified slide layout object, adds the new slide layout to the slide layout collection.

## Syntax

expression.Duplicate(nPos?);

`expression` - A variable that represents a [ApiLayout](../ApiLayout.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | Number | Position where the new slide layout will be added. Default value is "ApiMaster.GetLayoutsCount()". |

## Returns

[ApiLayout](../../ApiLayout/ApiLayout.md) &#124; null (returns new ApiLayout object that represents the copy of slide layout or null if slide layout doesn't exist or is not in the slide master)

## Example

This example makes a duplicate of slide layout and applies it to another slide.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oLayout = oMaster.GetLayout(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
oLayout.AddObject(oShape);
oSlide = Api.CreateSlide();
oPresentation.AddSlide(oSlide);
var oDuplicateLayout = oLayout.Duplicate(1);
oSlide.ApplyLayout(oDuplicateLayout);
builder.SaveFile("pptx", "Duplicate.pptx");
builder.CloseFile();
```