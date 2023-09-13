# ReplaceTextSmart

Replaces each paragraph (or text in cell) in the select with the corresponding text from an array of strings.

## Syntax

expression.ReplaceTextSmart(arrString, sParaTab?, sParaNewLine?);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| arrString | Required | Array<String> | An array of replacement strings. |
| sParaTab | Optional | String | A character which is used to specify the tab in the source text. Default value is `" "`. |
| sParaNewLine | Optional | String | A character which is used to specify the line break character in the source text. Default value is `" "`. |

## Returns

This method doesn't return any data.

## Example

This example replace text from two paragraphs to another text.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
var oFParagraph = oDocContent.GetElement(0);
oFParagraph.AddText("This is the text for the first line. The line break is added after it.");
oFParagraph.AddLineBreak();
var oSParagraph = Api.CreateParagraph();
oSParagraph.AddTabStop();
oSParagraph.AddText("This is just a sample text with a tab stop before it.");
oDocContent.AddElement(oSParagraph);
oSlide.AddObject(oShape);
// todo_example problem (how to make select in slide)
// var oRange1 = oFParagraph.GetRange();
// var oRange2 = oSParagraph.GetRange();
// var oRange3 = oRange1.ExpandTo(oRange2);
// oRange3.Select();
var arr = ["test_1", "test_2"];
Api.ReplaceTextSmart(arr, "", "");
builder.SaveFile("pptx", "ReplaceTextSmart.pptx");
builder.CloseFile();
```