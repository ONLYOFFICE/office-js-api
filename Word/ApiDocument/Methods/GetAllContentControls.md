# GetAllContentControls

Returns a list of all the content controls from the document.

## Syntax

expression.GetAllContentControls();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md)> &#124; Array<[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)>

## Example

This example shows how to get a list of all the content controls from the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control.");
oInlineLvlSdt.AddElement(oRun, 0);
var aContentControls = oDocument.GetAllContentControls();
aContentControls[0].GetElement(0).SetBold(true);
var sClassType = aContentControls[0].GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class type: " + sClassType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetAllContentControls.docx");
builder.CloseFile();
```