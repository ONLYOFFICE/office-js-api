# SetLanguage

Specifies the languages which will be used to check spelling and grammar (if requested).

## Syntax

expression.SetLanguage(sLangId);

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sLangId | Required | String | The possible value for this parameter is a language identifier as defined by RFC 4646/BCP 47. Example: "en-CA". |

## Returns

Boolean

## Example

This example sets pecifies the languages which will be used to check spelling and grammar.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
oPresentation.SetLanguage("en-CA");
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("English (Canada) will be used to check spelling and grammar in this presentation (if requested).");
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "SetLanguage.pptx");
builder.CloseFile();
```