# GetClassType

Returns a type of the ApiBlockLvlSdt class.

## Syntax

expression.GetClassType();

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example gets a class type and inserts it into the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oParagraph = Api.CreateParagraph();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
oDocument.AddElement(0, oBlockLvlSdt);
var sClassType = oBlockLvlSdt.GetClassType();
oParagraph = oDocument.GetElement(1);
oParagraph.AddText("Class type: " + sClassType);
builder.SaveFile("docx", "GetClassType.docx");
builder.CloseFile();
```