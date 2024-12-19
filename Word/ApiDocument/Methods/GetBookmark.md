# GetBookmark

Gets bookmark by name

## Syntax

expression.GetBookmark();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

ApiBookmark

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
