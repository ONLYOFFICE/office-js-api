# GetParentContentControl

Returns a content control that contains the current content control.

## Syntax

expression.GetParentContentControl();

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md) &#124; [ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md) &#124; null (returns null if parent content control doesn't exist)

## Example

This example shows how to get a content control that contains the content control.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt1 = Api.CreateInlineLvlSdt();
oInlineLvlSdt1.AddText("This is a parent inline text content control.");
oParagraph.AddInlineLvlSdt(oInlineLvlSdt1);
var oInlineLvlSdt2 = Api.CreateInlineLvlSdt();
oInlineLvlSdt2.AddText("This is an inline text content control added in another content control.");
oInlineLvlSdt1.AddElement(oInlineLvlSdt2, 0);
var oParentInlineLvlSdt = oInlineLvlSdt2.GetParentContentControl();
oParentInlineLvlSdt.SetAlias("№1");
builder.SaveFile("docx", "GetParentContentControl.docx");
builder.CloseFile();
```