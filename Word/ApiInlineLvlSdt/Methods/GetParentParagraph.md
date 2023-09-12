# GetParentParagraph

Returns a paragraph that contains the current content control.

## Syntax

expression.GetParentParagraph();

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) &#124; null (returns null if parent paragraph doesn't exist)

## Example

This example shows how to get a paragraph that contains the content control.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a parent paragraph. ");
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oInlineLvlSdt.AddText("This is an inline text content control added to the paragraph.");
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oParentParagraph = oInlineLvlSdt.GetParentParagraph();
oParentParagraph.SetBold(true);
builder.SaveFile("docx", "GetParentParagraph.docx");
builder.CloseFile();
```