# AddHeadingCrossRef

Adds a heading cross-reference to the current paragraph.
<br>Please note that this paragraph must be in the document.

## Syntax

expression.AddHeadingCrossRef(sRefType, oParaTo, bLink?, bAboveBelow?);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sRefType | Required | [headingRefTo](../../../Enumerations/headingRefTo.md) | The text or numeric value of an heading reference you want to insert. |
| oParaTo | Required | [ApiParagraph](../ApiParagraph.md) | TThe heading paragraph to be referred to (must be in the document). |
| bLink | Optional | Boolean | Specifies if the reference will be inserted as a hyperlink. Default value is "true". |
| bAboveBelow | Optional | Specifies if the above/below words indicating the position of the reference should be included (don't used with the "text" and "aboveBelow" sRefType). Default value is "false". |

## Returns

Boolean

## Example

This example adds a heading cross-reference to the paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oNewDocumentStyle = oDocument.GetStyle("Heading 1");
var oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oNewDocumentStyle);
oParagraph.AddText("Cross-reference method");
var aHeadingParagraphs = oDocument.GetAllHeadingParagraphs();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Heading 1 style is applied to the heading ");
oDocument.Push(oParagraph);
oParagraph.AddHeadingCrossRef("text", aHeadingParagraphs[0]);
builder.SaveFile("docx", "AddHeadingCrossRef.docx");
builder.CloseFile();
```