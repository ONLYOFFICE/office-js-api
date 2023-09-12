# RemoveAllElements

Clears the contents from the current content control.

## Syntax

expression.RemoveAllElements();

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean (returns false if control has not elements)

## Example

This example clears the contents from the content control.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
oInlineLvlSdt.AddText("This is an inline text content control.");
oInlineLvlSdt.RemoveAllElements();
oInlineLvlSdt.AddText("We removed all the inline content control elements.");
builder.SaveFile("docx", "RemoveAllElements.docx");
builder.CloseFile();
```