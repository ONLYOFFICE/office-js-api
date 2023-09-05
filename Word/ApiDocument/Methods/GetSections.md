# GetSections

Returns a collection of section objects in the document.

## Syntax

expression.GetSections();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiSection](../../ApiSection/ApiSection.md)>

## Example

This example shows how to get a collection of section objects in the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a new paragraph.");
oParagraph.AddLineBreak();
oParagraph.AddText("Scroll down to see the new section.");
var oSection1 = oDocument.CreateSection(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph in a new section");
oDocument.Push(oParagraph);
var aSections = oDocument.GetSections();
oParagraph = Api.CreateParagraph();
var sClassType = aSections[1].GetClassType();
oParagraph.AddText("Class type: " + sClassType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetSections.docx");
builder.CloseFile();
```