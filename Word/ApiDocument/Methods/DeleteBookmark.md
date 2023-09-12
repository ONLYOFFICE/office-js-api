# DeleteBookmark

Removes a bookmark from the document, if one exists.

## Syntax

expression.DeleteBookmark(sName);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sName | Required | String | The bookmark name. |

## Returns

Boolean (returns "false" if param is invalid)

## Example

This example removes a bookmark from the document.

```javascript
builder.CreateFile( "docx "); 
var oDocument = Api.GetDocument(); 
var oParagraph = oDocument.GetElement(0); 
oParagraph.AddText( "ONLYOFFICE Document Builder "); 
var oRange = oDocument.GetRange(0, 9); 
oRange.AddBookmark( "Bookmark"); 
oDocument.DeleteBookmark("Bookmark");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The bookmark was removed from this document.");
oDocument.Push(oParagraph);
builder.SaveFile( "docx ",  "DeleteBookmark.docx "); 
builder.CloseFile();
```