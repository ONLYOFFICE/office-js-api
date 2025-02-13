# SetSchemeName

Sets a name to the current theme format scheme.

## Syntax

```javascript
expression.SetSchemeName(sName);
```

`expression` - A variable that represents a [ApiThemeFormatScheme](../ApiThemeFormatScheme.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | Theme format scheme name. |

## Returns

boolean

## Example

This example sets a name to the current theme format scheme.

```javascript
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oMaster = oPresentation.GetMaster(0);
var oTheme = oMaster.GetTheme();
var oFormatScheme = oTheme.GetFormatScheme();
oFormatScheme.SetSchemeName("New format scheme name");
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("New name was set to the theme format scheme.");
oSlide.AddObject(oShape);
```
