# SetSeriesOutLine

Sets the outline to the specified chart series.

## Syntax

expression.SetSeriesOutLine(oStroke, nSeries, bAll?);

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oStroke | Required | [ApiStroke](../../ApiStroke/ApiStroke.md) | The stroke used to create the series outline. |
| nSeries | Required | Number | The index of the chart series. |
| bAll | Optional | Boolean | Specifies if the outline will be applied to all series. Default value is "false". |

## Returns

Boolean

## Example

This example sets the outline to the specified chart series.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oChart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oChart.SetSize(300 * 36000, 130 * 36000);
oChart.SetPosition(608400, 1267200);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
var oStroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
oChart.SetSeriesFill(oFill, 0, false);
oChart.SetSeriesOutLine(oStroke, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetSeriesFill(oFill, 1, false);
oChart.SetSeriesOutLine(oStroke, 1, false);
oSlide.AddObject(oChart);
builder.SaveFile("pptx", "SetSeriesOutLine.pptx");
builder.CloseFile();
```