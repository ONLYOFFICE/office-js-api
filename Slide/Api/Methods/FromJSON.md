# FromJSON

Converts the specified JSON object into the Document Builder object of the corresponding type.

## Syntax

expression.FromJSON(sMessage);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sMessage | Required | JSON | The JSON object to convert. |

## Returns

This method doesn't return any data.

## Example

This example transforms font scheme to JSON then restore it from JSON.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oMaster = oPresentation.GetMaster(0);
var oThemeMaster = oMaster.GetTheme();
var oFontScheme = oThemeMaster.GetFontScheme();
oFontScheme.SetFonts("Arial", "Noto Sans Simplified Chinese", "Arabic", "Times New Roman", "Noto Serif Simplified Chinese", "Arabic", "New font scheme");
oFontScheme.SetSchemeName("New font scheme name");
var json = oFontScheme.ToJSON();
var oFontSchemeFromJSON = Api.FromJSON(json);
var oTheme = oSlide.GetTheme();
oTheme.SetFontScheme(oFontSchemeFromJSON);
var sType = oFontSchemeFromJSON.GetClassType();
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
builder.SaveFile("pptx", "FromJSON.pptx");
builder.CloseFile();
```