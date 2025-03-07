# DeleteBookmark

Removes a bookmark from the document, if one exists.

## Syntax

```javascript
expression.DeleteBookmark(sName);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | The bookmark name. |

## Returns

boolean

## Example

This example removes a bookmark from the document.

```javascript editor-docx
let doc = Api.GetDocument(); 
let paragraph = doc.GetElement(0); 
paragraph.AddText("ONLYOFFICE Document Builder "); 
let range = doc.GetRange(0, 9); 
range.AddBookmark("Bookmark"); 
doc.DeleteBookmark("Bookmark");
paragraph = Api.CreateParagraph();
paragraph.AddText("The bookmark was removed from this document.");
doc.Push(paragraph);
```
