# SetHorAxisOrientation

Specifies the horizontal axis orientation.

## Syntax

expression.SetHorAxisOrientation(bIsMinMax);

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bIsMinMax | Required | boolean |  | The &lt;code&gt;true&lt;/code&gt; value will set the normal data direction for the horizontal axis (from minimum to maximum). |

## Returns

This method doesn't return any data.

## Example

This example specifies the horizontal axis orientation.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetHorAxisOrientation(false);
chart.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart);
```
