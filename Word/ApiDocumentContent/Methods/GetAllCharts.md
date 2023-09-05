# GetAllCharts

Returns a collection of chart objects from the document content.

## Syntax

expression.GetAllCharts();

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiChart](../../ApiChart/ApiChart.md)>

## Example

This example shows how to get a collection of chart objects from the document content.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, oFill, oStroke);
oParagraph.AddDrawing(oShape);
var oChart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 95 * 36000, 70 * 36000, 24);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oChart.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetSeriesFill(oFill, 1, false);
oChart.SetVerAxisTitle("USD In Hundred Thousands", 10);
oChart.SetHorAxisTitle("Year", 11);
oChart.SetLegendPos("bottom");
oChart.SetShowDataLabels(false, false, true, false);
oChart.SetTitle("Financial Overview", 13);
oParagraph = Api.CreateParagraph();
oParagraph.AddDrawing(oChart);
var oDocContent = oShape.GetDocContent();
oDocContent.AddElement(0, oParagraph);
var aCharts = oDocContent.GetAllCharts();
oStroke = Api.CreateStroke(1 * 150, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
aCharts[0].SetMinorHorizontalGridlines(oStroke);
builder.SaveFile("docx", "GetAllCharts.docx");
builder.CloseFile();
```