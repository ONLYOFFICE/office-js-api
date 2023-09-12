# SetMarkerOutLine

Sets the outline to the marker in the specified chart series.

## Syntax

expression.SetMarkerOutLine(oStroke, nSeries, nMarker, bAllMarkers?);

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oStroke | Required | [ApiStroke](../../ApiStroke/ApiStroke.md) | The stroke used to create the marker outline. |
| nSeries | Required | Number | The index of the chart series. |
| nMarker | Required | Number | The index of the marker in the specified chart series. |
| bAllMarkers | Optional | Boolean | Specifies if the outline will be applied to all markers in the specified chart series. Default value is "false". |

## Returns

Boolean

## Example

This example sets the outline to the marker in the specified chart series.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oChart = Api.CreateChart("scatter", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oChart.SetSize(300 * 36000, 130 * 36000);
oChart.SetPosition(608400, 1267200);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
var oStroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
oChart.SetMarkerFill(oFill, 0, 0, true);
oChart.SetMarkerOutLine(oStroke, 0, 0, true);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetMarkerFill(oFill, 1, 0, true);
oChart.SetMarkerOutLine(oStroke, 1, 0, true);
oSlide.AddObject(oChart);
builder.SaveFile("pptx", "SetMarkerOutLine.pptx");
builder.CloseFile();
```