# IsForm

Checks if the content control is a form.

## Syntax

expression.IsForm();

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean

## Example

This example checks if the content control is a form.

```javascript
builder.CreateFile("docxf");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oInlineLvlSdt.AddText("This is an inline text content control.");
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var bForm = oInlineLvlSdt.IsForm();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first content control from this document is a form: " + bForm);
oDocument.Push(oParagraph);
builder.SaveFile("docxf", "IsForm.docxf");
builder.CloseFile();
```