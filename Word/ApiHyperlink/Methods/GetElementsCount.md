# GetElementsCount

Returns a number of elements in the current hyperlink.

## Syntax

expression.GetElementsCount();

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get a number of elements in the hyperlink.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun1 = Api.CreateRun();
oRun1.AddText("Api Document Builder.");
oParagraph.AddElement(oRun1, 0);
var oRun2 = Api.CreateRun();
oRun2.AddText(" ONLYOFFICE for developers");
oParagraph.AddElement(oRun2, 1);
var oHyperlink = oParagraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
var nElementsCount = oHyperlink.GetElementsCount();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Number of elements in hyperlink: " + nElementsCount);
oParagraph.AddLineBreak();
oParagraph.AddText("Elements: oParagraph, oRun1, oRun2, oHyperlink");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetElementsCount.docx");
builder.CloseFile();
```