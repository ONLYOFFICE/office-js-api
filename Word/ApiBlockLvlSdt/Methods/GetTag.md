# GetTag

Returns the tag attribute for the current container.

## Syntax

expression.GetTag();

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example shows how to get the tag attribute for the container.

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
builder.SaveFile("docx", "GetTag.docx");
builder.CloseFile();
```