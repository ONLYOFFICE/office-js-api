# RemoveElement

Removes an element using the position specified.<br>Inherited From: [ApiDocumentContent#RemoveElement](../../ApiDocumentContent/Methods/RemoveElement.md)

## Syntax

expression.RemoveElement(nPos);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPos | Required | Number | The element number (position) in the document or inside other element. |

## Returns

This method doesn't return any data.

## Example

This example removes an element using the position specified.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph0 = oDocument.GetElement(0);
oParagraph0.AddText("This is paragraph #1.");
for (let nParaIncrease = 0; nParaIncrease < 4; ++nParaIncrease) {
	var oParagraph = Api.CreateParagraph();
	oParagraph.AddText("This is paragraph #" + (nParaIncrease + 2) + ".");
	oDocument.Push(oParagraph);
}
oDocument.RemoveElement(2);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("We removed paragraph #3, check that out above.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "RemoveElement.docx");
builder.CloseFile();
```