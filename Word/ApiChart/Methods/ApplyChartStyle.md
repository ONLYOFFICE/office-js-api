# ApplyChartStyle

Sets a style to the current chart by style ID.

## Syntax

expression.ApplyChartStyle();

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nStyleId | Required | Number | One of the styles available in the editor. This value must be a positive. |

## Returns

Boolean

## Example

This example shows how to apply a styhe for chart.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oChart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oChart.ApplyChartStyle(2);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
var oStroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
oChart.SetSeriesFill(oFill, 0, false);
oChart.SetSeriesOutLine(oStroke, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oStroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
oChart.SetSeriesFill(oFill, 1, false);
oChart.SetSeriesOutLine(oStroke, 1, false);
oParagraph.AddDrawing(oChart);
builder.SaveFile("docx", "ApplyChartStyle.docx");
builder.CloseFile();
```