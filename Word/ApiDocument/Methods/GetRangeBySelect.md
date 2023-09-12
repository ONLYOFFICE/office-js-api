# GetRangeBySelect

Returns a range object by the current selection.

## Syntax

expression.GetRangeBySelect();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md) &#124; null (returns null if selection doesn't exist)

## Example

This example shows how to get a range object by the selection.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun1 = Api.CreateRun();
oRun1.AddText("ONLYOFFICE Document Builder.");
oParagraph.AddElement(oRun1);
var oRun2 = Api.CreateRun();
oRun2.AddText(" ONLYOFFICE for developers.");
oParagraph.AddElement(oRun2);
oRun1.Select();
var oRange = oDocument.GetRangeBySelect();
oRange.SetBold(true);
builder.SaveFile("docx", "GetRangeBySelect.docx");
builder.CloseFile();
```