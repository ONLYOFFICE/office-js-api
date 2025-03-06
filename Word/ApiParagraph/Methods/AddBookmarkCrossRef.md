# AddBookmarkCrossRef

Adds a bookmark cross-reference to the current paragraph.\n💡 Please note that this paragraph must be in the document.

## Syntax

```javascript
expression.AddBookmarkCrossRef(sRefTo, sBookmarkName, bLink, bAboveBelow, sSepWith);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRefTo | Required | [bookmarkRefTo](../../Enumeration/bookmarkRefTo.md) |  | The text or numeric value of a bookmark reference you want to insert. |
| sBookmarkName | Required | string |  | The name of the bookmark to be referred to (must be in the document). |
| bLink | Optional | boolean | true | Specifies if the reference will be inserted as a hyperlink. |
| bAboveBelow | Optional | boolean | false | Specifies if the above/below words indicating the position of the reference should be included (don't used with the "text" and "aboveBelow" sRefType). |
| sSepWith | Optional | string | "" | A number separator (used only with the "fullCtxParaNum" sRefType). |

## Returns

boolean

## Example

This example adds a bookmark cross-reference to the paragraph.

```javascript editor-docx
let doc = Api.GetDocument(); 
let paragraph = doc.GetElement(0); 
paragraph.AddText("ONLYOFFICE Document Builder"); 
let range = doc.GetRange(0, 9); 
range.AddBookmark("Bookmark");
let bookmarks = doc.GetAllBookmarksNames();
paragraph = Api.CreateParagraph();
paragraph.AddText("A bookmark was added ");
doc.Push(paragraph);
paragraph.AddBookmarkCrossRef("aboveBelow", bookmarks[0]);
```
