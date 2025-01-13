# GetBookmark

Returns a bookmark by its name from the current document.

## Syntax

expression.GetBookmark(sBookmarkName);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sBookmarkName | Required | string |  | The bookmark name. |

## Returns

[ApiBookmark](../../ApiBookmark/ApiBookmark.md)

## Example

This example shows how to get bookmark in document.

```javascript
let oDocument = Api.GetDocument(); 
let oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("ONLYOFFICE Document Builder"); 
let oRange1 = oDocument.GetRange(0, 11); 
oRange1.AddBookmark("Bookmark_ex");
let oBookmark = oDocument.GetBookmark("Bookmark_ex");
oParagraph.AddLineBreak();
oParagraph.AddText("Bookmark with name: " + oBookmark.GetName() + " is " + (oBookmark.IsActive() ? "active" : "inactive"));

```
