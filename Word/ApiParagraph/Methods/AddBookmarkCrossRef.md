# AddBookmarkCrossRef

Adds a bookmark cross-reference to the current paragraph.💡 Please note that this paragraph must be in the document.

## Syntax

expression.AddBookmarkCrossRef(sRefTo, sBookmarkName, bLink, bAboveBelow, sSepWith);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRefTo | Required | bookmarkRefTo |  | The text or numeric value of a bookmark reference you want to insert. |
| sBookmarkName | Required | string |  | The name of the bookmark to be referred to (must be in the document). |
| bLink | Optional | boolean | true | Specifies if the reference will be inserted as a hyperlink. |
| bAboveBelow | Optional | boolean | false | Specifies if the above/below words indicating the position of the reference should be included (don't used with the "text" and "aboveBelow" sRefType). |
| sSepWith | Optional | string | "" | A number separator (used only with the "fullCtxParaNum" sRefType). |

## Returns

boolean

## Example

This example adds a bookmark cross-reference to the paragraph.

```javascript
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
```
