# SetAlias

Sets the alias attribute to the current container.

## Syntax

expression.SetAlias(sAlias);

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sAlias | Required | String | The alias which will be added to the current container. |

## Returns

This method doesn't return any data.

## Example

This example sets the alias attribute to the container.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with alias '№1'.");
oBlockLvlSdt.SetAlias("№1");
oDocument.AddElement(0, oBlockLvlSdt);
var oAlias = oBlockLvlSdt.GetAlias();
var oParagraph = oDocument.GetElement(1);
oParagraph.AddText("Alias: " + oAlias);
builder.SaveFile("docx", "SetAlias.docx");
builder.CloseFile();
```