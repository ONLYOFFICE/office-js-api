# GetLabel

Returns the label attribute for the current container.

## Syntax

expression.GetLabel();

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example shows how to get the label attribute for the container.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control with a label set to it.");
oInlineLvlSdt.AddElement(oRun, 0);
oInlineLvlSdt.SetLabel("2147483647");
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var sLabel = oInlineLvlSdt.GetLabel();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Label: " + sLabel);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetLabel.docx");
builder.CloseFile();
```