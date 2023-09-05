# SetHorAxisMajorTickMark

Specifies the major tick mark for the horizontal axis.

## Syntax

expression.SetHorAxisMajorTickMark(sTickMark);

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sTickMark | Required | [TickMark](../../../Enumerations/TickMark.md) | The type of tick mark appearance. |

## Returns

This method doesn't return any data.

## Example

This example specifies the major tick mark "cross" for the horizontal axis.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oChart = Api.CreateChart("scatter", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
var oStroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
oChart.SetMarkerFill(oFill, 0, 0, true);
oChart.SetMarkerOutLine(oStroke, 0, 0, true);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oStroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
oChart.SetMarkerFill(oFill, 1, 0, true);
oChart.SetMarkerOutLine(oStroke, 1, 0, true);
oChart.SetVerAxisTitle("USD In Hundred Thousands", 10);
oChart.SetHorAxisTitle("Year", 11);
oChart.SetHorAxisMajorTickMark("cross");
oChart.SetTitle("Financial Overview", 13);
oParagraph.AddDrawing(oChart);
builder.SaveFile("docx", "SetHorAxisMajorTickMark.docx");
builder.CloseFile();
```