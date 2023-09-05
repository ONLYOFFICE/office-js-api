# SetLabel

Sets the label attribute to the current container.

## Syntax

expression.SetLabel(sLabel);

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sLabel | Required | String | The label which will be added to the current container. Can be a positive or negative integer from -2147483647 to 2147483647. |

## Returns

This method doesn't return any data.

## Example

This example sets the label attribute to the container.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a label set to it.");
oBlockLvlSdt.SetLabel("2147483647");
oDocument.AddElement(0, oBlockLvlSdt);
var oLabel = oBlockLvlSdt.GetLabel();
var oParagraph = oDocument.GetElement(1);
oParagraph.AddText("Label: " + oLabel);
builder.SaveFile("docx", "SetLabel.docx");
builder.CloseFile();
```