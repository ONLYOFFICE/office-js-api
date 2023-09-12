# GetParentContentControl

Returns a content control that contains the current run.

## Syntax

expression.GetParentContentControl();

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md) &#124; [ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md) &#124; null (returns null if parent content control doesn't exist)

## Example

This example shows how to get a content control that contains the run.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oParagraph = Api.CreateParagraph();
var oRun = Api.CreateRun();
oRun.AddText("This is a block text content control.");
oParagraph.Push(oRun);
oBlockLvlSdt.AddElement(oParagraph, 0);
oDocument.AddElement(0, oBlockLvlSdt);
var oContentControl = oRun.GetParentContentControl();
var sClassType = oContentControl.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class type: " + sClassType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetParentContentControl.docx");
builder.CloseFile();
```