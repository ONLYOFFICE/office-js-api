# GetSpacingBefore

Returns the spacing before value of the current paragraph.

## Syntax

expression.GetSpacingBefore();

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[twips](../../../Enumerations/twips.md)

## Example

This example shows how to get the spacing before value of the current paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is an example of setting a space before a paragraph. ");
oParagraph.AddText("The second paragraph will have an offset of one inch from the top. ");
oParagraph.AddText("This is due to the fact that the second paragraph has this offset enabled.");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
var oParaPr = oParagraph.GetParaPr();
oParaPr.SetSpacingBefore(1440);
oParagraph.AddLineBreak();
var nSpacingBefore = oParaPr.GetSpacingBefore();
oParagraph.AddText("Spacing before: " + nSpacingBefore);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetSpacingBefore.docx");
builder.CloseFile();
```