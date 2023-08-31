# Push

Pushes a paragraph or a table to actually add it to the document.<br>Inherited From: [ApiDocumentContent#Push](../../ApiDocumentContent/Methods/Push.md)

## Syntax

expression.Push(oElement);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oElement | Required | [DocumentElement](../../../Enumerations/DocumentElement.md) | The element type which will be pushed to the document. |

## Returns

Boolean

## Example

This example pushes 5 paragraphs to actually add its to the document.

```javascript
	builder.CreateFile("docx");
	var oDocument = Api.GetDocument();
	var oParagraph0 = oDocument.GetElement(0);
	oParagraph0.AddText("This is paragraph #0, you must not push it to take effect.");
	for (let nParaIncrease = 0; nParaIncrease < 5; ++nParaIncrease) {
		var oParagraph = Api.CreateParagraph();
		oParagraph.AddText("This is paragraph #" + (nParaIncrease + 1) + ", you must push it to take effect.");
		oDocument.Push(oParagraph);
	}
	builder.SaveFile("docx", "Push.docx");
	builder.CloseFile();
```