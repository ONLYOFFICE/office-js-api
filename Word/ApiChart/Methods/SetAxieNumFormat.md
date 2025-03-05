# SetAxieNumFormat

Sets the specified numeric format to the axis values.

## Syntax

```javascript
expression.SetAxieNumFormat(sFormat, sAxiePos);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFormat | Required | [NumFormat](../../Enumeration/NumFormat.md) \| String |  | Numeric format (can be custom format). |
| sAxiePos | Required | [AxisPos](../../Enumeration/AxisPos.md) |  | Axis position in the chart. |

## Returns

boolean

## Example

This example sets the specified numeric format to the axis values.

```javascript editor-docx
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
chart.SetAxieNumFormat("0.00", "left");
paragraph.AddDrawing(chart);
```
