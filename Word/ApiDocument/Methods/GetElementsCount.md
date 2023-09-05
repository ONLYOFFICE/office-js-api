# GetElementsCount

Returns a number of elements in the current document.<br>Inherited From: [ApiDocumentContent#GetElementsCount](../../ApiDocumentContent/Methods/GetElementsCount.md)

## Syntax

expression.GetElementsCount();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get a number of elements in the current document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Number of document elements at this point: ");
oParagraph.AddTabStop();
oParagraph.AddText("" + oDocument.GetElementsCount());
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Now we add one more paragraph and push it.");
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Number of document elements after we added the second paragraph ");
oParagraph.AddText("but before we push the third one: ");
oParagraph.AddTabStop();
oParagraph.AddText("" + oDocument.GetElementsCount());
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetElementsCount.docx");
builder.CloseFile();
```