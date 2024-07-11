# GetClassType

Returns a type of the ApiChartSeries class.

## Syntax

expression.GetClassType();

`expression` - A variable that represents a [ApiChartSeries](../ApiChartSeries.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example gets a type of ApiChartSeries class and inserts it into the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oChart = Api.CreateChart("comboBarLine", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oChart.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetSeriesFill(oFill, 1, false);
oChart.SetVerAxisTitle("USD In Hundred Thousands", 10);
oChart.SetHorAxisTitle("Year", 11);
oChart.SetLegendPos("bottom");
oChart.SetShowDataLabels(false, false, true, false);
oChart.SetTitle("Financial Overview", 13);
oParagraph.AddDrawing(oChart);
var oSeries = oChart.GetSeries(0);
var sClassType = oSeries.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The ApiChartSeries class type: " + sClassType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetClassType.docx");
builder.CloseFile();
```