# AddBookmarkCrossRef

Adds a bookmark cross-reference to the current paragraph.
<br>Please note that this paragraph must be in the document.

## Syntax

expression.AddBookmarkCrossRef(sRefType, sBookmarkName, bLink?, bAboveBelow?, sSepWith?);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sRefType | Required | [bookmarkRefTo](../../../Enumerations/bookmarkRefTo.md) | The text or numeric value of a bookmark reference you want to insert. |
| sBookmarkName | Required | String | The name of the bookmark to be referred to (must be in the document). |
| bLink | Optional | Boolean | Specifies if the reference will be inserted as a hyperlink. Default value is "true". |
| bAboveBelow | Optional | Boolean | Specifies if the above/below words indicating the position of the reference should be included (don't used with the "text" and "aboveBelow" sRefType). Default value is "false". |
| sSepWith | Optional | String | A number separator (used only with the "fullCtxParaNum" sRefType). Default value is "". |

## Returns

Boolean

## Example

This example adds a bookmark cross-reference to the paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument(); 
var oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("ONLYOFFICE Document Builder"); 
var oRange = oDocument.GetRange(0, 9); 
oRange.AddBookmark("Bookmark");
var aBookmarks = oDocument.GetAllBookmarksNames();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("A bookmark was added ");
oDocument.Push(oParagraph);
oParagraph.AddBookmarkCrossRef("aboveBelow", aBookmarks[0]);
builder.SaveFile("docx", "AddBookmarkCrossRef.docx");
builder.CloseFile();
```