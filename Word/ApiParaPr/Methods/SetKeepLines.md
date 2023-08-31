# SetKeepLines

Specifies that when rendering the document using a page view, all lines of the current paragraph are maintained on a single page whenever possible.

## Syntax

expression.SetKeepLines(isKeepLines);

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isKeepLines | Required | Boolean | The true value enables the option to keep lines of the paragraph on a single page. |

## Returns

This method doesn't return any data.

## Example

This example specifies that when rendering the document using a page view, all lines of the paragraph are maintained on a single page whenever possible.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oMyStyle = oDocument.CreateStyle("My document style");
var oParaPr = oMyStyle.GetParaPr();
oParaPr.SetKeepLines(true);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is an example of how the paragraph tries to keep lines together. ");
oParagraph.AddText("Scroll down to the second page to see it.");
for (let x = 0; x < 5; ++x) {
	oParagraph = Api.CreateParagraph();
	for (let i = 0; i < 10; ++i) {
		oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
	}
	oDocument.Push(oParagraph);
}
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The paragraph lines are moved to the next page to keep them together. ");
for (let i = 0; i < 10; ++i) {
	oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
}
oParagraph.SetStyle(oMyStyle);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetKeepLines.docx");
builder.CloseFile();
```