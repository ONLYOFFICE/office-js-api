# GetNext

Returns the next section if exists.

## Syntax

expression.GetNext();

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiSection](../ApiSection.md) &#124; null (returns null if section is the last)

## Example

This example shows how to get the next section.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a new paragraph.");
oParagraph.AddLineBreak();
oParagraph.AddText("Scroll down to see the new section.");
var oSection1 = oDocument.CreateSection(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph in the first section");
oDocument.Push(oParagraph);
var oSection2 = oDocument.CreateSection(oParagraph);
var oNextSection = oSection1.GetNext();
oNextSection.SetPageMargins(7200, 2880, 1440, 5760);
builder.SaveFile("docx", "GetNext.docx");
builder.CloseFile();
```