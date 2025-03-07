# SetMarkerOutLine

Sets the outline to the marker in the specified chart series.

## Syntax

```javascript
expression.SetMarkerOutLine(oStroke, nSeries, nMarker, bAllMarkers);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | Required | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | The stroke used to create the marker outline. |
| nSeries | Required | number |  | The index of the chart series. |
| nMarker | Required | number |  | The index of the marker in the specified chart series. |
| bAllMarkers | Optional | boolean | false | Specifies if the outline will be applied to all markers in the specified chart series. |

## Returns

boolean

## Example

This example sets the outline to the marker in the specified chart series.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("scatter", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
paragraph.AddDrawing(chart);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
let stroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
chart.SetMarkerOutLine(stroke, 1, 0, true);
```
