# DeleteBookmark

Removes a bookmark from the document, if one exists.

## Syntax

expression.DeleteBookmark(sName);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | The bookmark name. |

## Returns

boolean

## Example

This example removes a bookmark from the document.

```javascript
var oDocument = Api.GetDocument(); 
var oParagraph = oDocument.GetElement(0); 
oParagraph.AddText( "ONLYOFFICE Document Builder "); 
var oRange = oDocument.GetRange(0, 9); 
oRange.AddBookmark( "Bookmark"); 
oDocument.DeleteBookmark("Bookmark");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The bookmark was removed from this document.");
oDocument.Push(oParagraph);
```
