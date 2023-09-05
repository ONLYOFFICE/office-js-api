# SetVertAxisMinorTickMark

Specifies the minor tick mark for the vertical axis.

## Syntax

expression.SetVertAxisMinorTickMark(sTickMark);

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sTickMark | Required | [TickMark](../../../Enumerations/TickMark.md) | The type of tick mark appearance. |

## Returns

This method doesn't return any data.

## Example

This example specifies the minor tick mark for the vertical axis.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oChart = Api.CreateChart("scatter", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oChart.SetVerAxisTitle("USD In Hundred Thousands", 10);
oChart.SetHorAxisTitle("Year", 11);
oChart.SetTitle("Financial Overview", 13);
oChart.SetSize(300 * 36000, 130 * 36000);
oChart.SetVertAxisMinorTickMark("out");
oChart.SetPosition(608400, 1267200);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
var oStroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
oChart.SetMarkerFill(oFill, 0, 0, true);
oChart.SetMarkerOutLine(oStroke, 0, 0, true);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetMarkerFill(oFill, 1, 0, true);
oChart.SetMarkerOutLine(oStroke, 1, 0, true);
oSlide.AddObject(oChart);
builder.SaveFile("pptx", "SetVertAxisMinorTickMark.pptx");
builder.CloseFile();
```