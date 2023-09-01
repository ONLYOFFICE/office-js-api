# CreateBlipFill

Creates a blip fill to apply to the object using the selected image as the object background.

## Syntax

expression.CreateBlipFill(sImageUrl, sBlipFillType);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sImageUrl | Required | String | The path to the image used for the blip fill (currently only internet URL or Base64 encoded images are supported). |
| sBlipFillType | Required | [BlipFillType](../../../Enumerations/BlipFillType.md) | The type of the fill used for the blip fill (tile or stretch). |

## Returns

[ApiFill](../../ApiFill/ApiFill.md)

## Example

This example creates a blip fill to apply to the object using the selected image as the object background.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateBlipFill("https://api.onlyoffice.com/content/img/docbuilder/examples/icon_DocumentEditors.png", "tile");
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 1, 3 * 36000);
builder.SaveFile("xlsx", "CreateBlipFill.xlsx");
builder.CloseFile();
```