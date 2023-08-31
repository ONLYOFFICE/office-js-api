# GetSpacingAfter

Returns the spacing after value of the current paragraph.

## Syntax

expression.GetSpacingAfter();

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[twips](../../../Enumerations/twips.md)

## Example

This example shows how to get the spacing after value of the current paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph1 = oDocument.GetElement(0);
var oParaPr = oParagraph1.GetParaPr();
oParaPr.SetSpacingAfter(1440);
oParagraph1.AddText("This is an example of setting a space after a paragraph. ");
oParagraph1.AddText("The second paragraph will have an offset of one inch from the top. ");
oParagraph1.AddText("This is due to the fact that the first paragraph has this offset enabled.");
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
oParagraph2.AddLineBreak();
var nSpacingAfter = oParaPr.GetSpacingAfter();
oParagraph2.AddText("Spacing after: " + nSpacingAfter);
oDocument.Push(oParagraph2);
builder.SaveFile("docx", "GetSpacingAfter.docx");
builder.CloseFile();
```