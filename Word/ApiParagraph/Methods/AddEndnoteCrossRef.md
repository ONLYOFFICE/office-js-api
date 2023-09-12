# AddEndnoteCrossRef

Adds an endnote cross-reference to the current paragraph.
<br>Please note that this paragraph must be in the document.

## Syntax

expression.AddEndnoteCrossRef(sRefType, oParaTo, bLink?, bAboveBelow?);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sRefType | Required | [endnoteRefTo](../../../Enumerations/endnoteRefTo.md) | The text or numeric value of an endnote reference you want to insert. |
| oParaTo | Required | [ApiParagraph](../ApiParagraph.md) | The first paragraph from an endnote to be referred to (must be in the document). |
| bLink | Optional | Boolean | Specifies if the reference will be inserted as a hyperlink. Default value is "true". |
| bAboveBelow | Optional | Specifies if the above/below words indicating the position of the reference should be included (don't used with the "aboveBelow" sRefType). Default value is "false". |

## Returns

Boolean

## Example

This example adds an endnote cross-reference to the paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("This is just a sample text.");
oDocument.AddEndnote();
var aEndNotesFirstParagraphs = oDocument.GetEndNotesFirstParagraphs();
aEndNotesFirstParagraphs[0].AddText("Endnote 1");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("For more information on previous sentences see endnote on page ");
oDocument.Push(oParagraph);
oParagraph.AddEndnoteCrossRef("pageNum", aEndNotesFirstParagraphs[0]);
builder.SaveFile("docx", "AddEndnoteCrossRef.docx");
builder.CloseFile();
```