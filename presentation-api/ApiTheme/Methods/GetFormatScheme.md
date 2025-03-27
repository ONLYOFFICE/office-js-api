# GetFormatScheme

Returns the format scheme of the current theme.

## Syntax

```javascript
expression.GetFormatScheme();
```

`expression` - A variable that represents a [ApiTheme](../ApiTheme.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiThemeFormatScheme](../../ApiThemeFormatScheme/ApiThemeFormatScheme.md)

## Example

This example shows how to get the format scheme of the theme.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oMaster = oPresentation.GetMaster(0);
var oTheme = oMaster.GetTheme();
var oFormatScheme = oTheme.GetFormatScheme();
var sType = oFormatScheme.GetClassType();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Class type = " + sType);
oSlide.AddObject(oShape);
```
