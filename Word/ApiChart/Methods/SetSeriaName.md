# SetSeriaName

Sets a name to the specified chart series.

## Syntax

expression.SetSeriaName(sName, nSeria);

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sName | Required | String | The name which will be set to the specified chart series. |
| nSeria | Required | Number | The index of the chart series. |

## Returns

Boolean

## Example

This example sets a name to the specified chart series.

builder.CreateFile("docx");
	var oDocument = Api.GetDocument();
	var oParagraph = oDocument.GetElement(0);
	var oChart = Api.CreateChart("bar3D", [
		[200, 240, 280],
		[250, 260, 280]
	], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
	oParagraph.AddDrawing(oChart);
	var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
	oChart.SetSeriesFill(oFill, 0, false);
	oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
	oChart.SetSeriesFill(oFill, 1, false);
	oChart.SetSeriaName("Projected Sales", 0);
	builder.SaveFile("docx", "SetSeriaName.docx");
	builder.CloseFile();
```