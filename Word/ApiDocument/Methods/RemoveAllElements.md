# RemoveAllElements

Removes all the elements from the current document or from the current document element.<br>Inherited From: [ApiDocumentContent#RemoveAllElements](../../ApiDocumentContent/Methods/RemoveAllElements.md)
<br>When all elements are removed, a new empty paragraph is automatically created. If you want to add content to this paragraph, use the [ApiDocumentContent#GetElement](../../ApiDocumentContent/Methods/GetElement.md) method.

## Syntax

expression.RemoveAllElements();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example removes all the elements from the current document or from the current document element.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
oDocument.RemoveAllElements();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is the first paragraph. ");
oParagraph.AddText("We removed all document elements (including the first paragraph, created by default). ");
oParagraph.AddText("This paragraph now took its place.");
oDocument.AddElement(0, oParagraph);
builder.SaveFile("docx", "RemoveAllElements.docx");
builder.CloseFile();
```