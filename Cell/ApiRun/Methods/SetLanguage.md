# SetLanguage

Specifies the languages which will be used to check spelling and grammar (if requested) when processing the contents of this text run.

## Syntax

expression.SetLanguage(sLangId);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sLangId | Required | String | The possible value for this parameter is a language identifier as defined by RFC 4646/BCP 47. Example: "en-CA". |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies the languages which will be used to check spelling and grammar (if requested) when processing the contents of this text run.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is a text run with the text language set to English (Canada).");
oRun.SetLanguage("en-CA");
oParagraph.AddElement(oRun);
builder.SaveFile("xlsx", "SetLanguage.xlsx");
builder.CloseFile();
```