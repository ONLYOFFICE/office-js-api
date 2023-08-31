# SetKeepNext

Specifies that when rendering the document using a paginated view, the contents of the current paragraph are at least partly rendered on the same page as the following paragraph whenever possible.<br>Inherited From: [ApiParaPr#SetKeepNext](../../ApiParaPr/Methods/SetKeepNext.md)

## Syntax

expression.SetKeepNext(isKeepNext);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isKeepNext | Required | Boolean | The true value enables the option to keep lines of the paragraph on the same page as the following paragraph. |

## Returns

This method doesn't return any data.

## Example

This example sSpecifies that when rendering the document using a paginated view, the contents of the current paragraph are at least partly rendered on the same page as the following paragraph whenever possible.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is an example of how the paragraph tries to keep together with the next paragraph. ");
oParagraph.AddText("Scroll down to the second page to see it. ");
for (let x = 0; x < 5; ++x) {
	oParagraph = Api.CreateParagraph();
	for (let i = 0; i < 10; ++i) {
		oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
	}
	oParagraph.SetKeepNext(true);
	oDocument.Push(oParagraph);
}
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The paragraph lines stay on the same page as the previous paragraph. ");
for (let i = 0; i < 10; ++i) {
	oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
}
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetKeepNext.docx");
builder.CloseFile();
```