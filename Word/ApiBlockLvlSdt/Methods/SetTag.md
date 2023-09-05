# SetTag

Sets the tag attribute to the current container.

## Syntax

expression.SetTag(sTag);

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sTag | Required | String | The tag which will be added to the current container. |

## Returns

This method doesn't return any data.

## Example

This example sets the tag attribute to the container.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a tag set to it.");
oBlockLvlSdt.SetTag("This is a tag.");
oDocument.AddElement(0, oBlockLvlSdt);
var oTag = oBlockLvlSdt.GetTag();
var oParagraph = oDocument.GetElement(1);
oParagraph.AddText("Tag: " + oTag);
builder.SaveFile("docx", "SetTag.docx");
builder.CloseFile();
```