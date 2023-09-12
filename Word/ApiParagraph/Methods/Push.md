# Push

Adds an element to the current paragraph.

## Syntax

expression.Push(oElement);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oElement | Required | [ParagraphContent](../../../Enumerations/ParagraphContent.md) | The document element which will be added at the current position. Returns false if the oElement type is not supported by a paragraph. |

## Returns

Boolaen (returns "false" if the type of "oElement" is not supported by paragraph content)

## Example

This example adds a oRun to the paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is run #0, you must not push it to take effect.");
oParagraph.AddElement(oRun);
oParagraph.AddLineBreak();
for (let nRunIncrease = 0; nRunIncrease < 5; ++nRunIncrease) {
	oRun = Api.CreateRun();
	oRun.AddText("This is run #" + (nRunIncrease + 1) + ", you must push it to take effect.");
	oParagraph.AddLineBreak();
	oParagraph.Push(oRun);
}
builder.SaveFile("docx", "Push.docx");
builder.CloseFile();
```