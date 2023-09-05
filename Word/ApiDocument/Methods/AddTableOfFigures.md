# AddTableOfFigures

Adds a table of figures to the current document.

## Syntax

expression.AddTableOfFigures(oTofPr?, bReplace?);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oTofPr | Optional | [TofPr](../../../Enumerations/TofPr.md) | Table of figures properties. Please note that the table of figures properties will be filled with the default properties if they are undefined. Default value is "{}". |
| bReplace | Optional | Boolean | Specifies whether to replace the selected table of figures instead of adding a new one. Default value is "true". |

## Returns

Boolean

## Example

This example adds a table of figures to the current document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oDrawing = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oDrawing.SetVerAxisTitle("USD In Hundred Thousands", 10);
oDrawing.SetHorAxisTitle("Year", 11);
oDrawing.SetLegendPos("bottom");
oDrawing.SetShowDataLabels(false, false, true, false);
oDrawing.SetTitle("Financial Overview", 13);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oDrawing.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oDrawing.SetSeriesFill(oFill, 1, false);
oParagraph.AddDrawing(oDrawing);
oParagraph.AddCaption(" - Financial Overview", "Figure", false, "Arabic", false, undefined, "hyphen");
var oTofPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": "Figure", "LabelNumber": true, "TofStyle": "distinctive"};
oDocument.AddTableOfFigures(oTofPr);
builder.SaveFile("docx", "AddTableOfFigures.docx");
builder.CloseFile();
```