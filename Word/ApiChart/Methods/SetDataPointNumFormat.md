# SetDataPointNumFormat

Sets the specified numeric format to the chart data point.

## Syntax

expression.SetDataPointNumFormat(sFormat, nSeria, nDataPoint, bAllSeries);

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sFormat | Required | [NumFormat](../../../Enumerations/NumFormat.md) &#124; String | Numeric format (can be custom format). |
| nSeria | Required | Number | Series index. |
| nDataPoint | Required | Number | The index of the data point in the specified chart series. |
| bAllSeries | Required | Boolean | Specifies if the numeric format will be applied to the specified data point in all series. |

## Returns

Boolean

## Example

This example sets "0.00" numeric format for chart.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oChart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oChart.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetSeriesFill(oFill, 1, false);
oChart.SetShowPointDataLabel(1, 0, false, false, true, false);
oChart.SetDataPointNumFormat("0.00", 1, 0, true);
oParagraph.AddDrawing(oChart);
builder.SaveFile("docx", "SetDataPointNumFormat.docx");
builder.CloseFile();
```