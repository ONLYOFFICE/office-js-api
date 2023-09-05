# ToJSON

Converts the ApiTable object into the JSON object.

## Syntax

expression.ToJSON(bWriteTableStyles?);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| bWriteTableStyles | Optional | Boolean | Specifies whether to write used table styles to the JSON object (true) or not (false). Default value is "false". |

## Returns

JSON

## Example

This example converts the table object into the JSON object.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oTable = Api.CreateTable(2, 4);
var json = oTable.ToJSON(true);
var oTableFromJSON = Api.FromJSON(json);
var sType = oTableFromJSON.GetClassType();
var oRow = oTableFromJSON.GetRow(0);
var oCell = oRow.GetCell(0);
var oContent = oCell.GetContent();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class type = " + sType);
oContent.Push(oParagraph);
oSlide.AddObject(oTableFromJSON);
builder.SaveFile("pptx", "ToJSON.pptx");
builder.CloseFile();
```