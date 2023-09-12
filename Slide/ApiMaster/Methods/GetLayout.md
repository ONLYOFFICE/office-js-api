# GetLayout

Returns a layout of the specified slide master by its position.

## Syntax

expression.GetLayout(nPos);

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPos | Required | Number | Layout position. |

## Returns

[ApiLayout](../../ApiLayout/ApiLayout.md) &#124; null (returns null if position is invalid)

## Example

This example shows how to get a layout of the specified slide master by its position.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oLayout = Api.CreateLayout();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
oLayout.AddObject(oShape);
oMaster.AddLayout(0, oLayout);
oSlide.ApplyLayout(oMaster.GetLayout(0));
builder.SaveFile("pptx", "GetLayout.pptx");
builder.CloseFile();
```