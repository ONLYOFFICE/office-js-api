# Copy

Creates a copy of an inline content control. Ignores comments, footnote references, complex fields.

## Syntax

expression.Copy();

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiInlineLvlSdt](../ApiInlineLvlSdt.md)

## Example

This example creates a copy of an inline content control.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oInlineLvlSdt.AddText("This is an inline text content control.");
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oCopyInlineLvlSdt = oInlineLvlSdt .Copy();
oParagraph.AddLineBreak();
oParagraph.AddInlineLvlSdt(oCopyInlineLvlSdt);
builder.SaveFile("docx", "Copy.docx");
builder.CloseFile();
```