# GetBookmarkRange

Returns a bookmark range.

## Syntax

expression.GetBookmarkRange(sName);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sName | Required | String | The bookmark name. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) &#124; null (returns "null" if sName is invalid)

## Example

This example showh how to get a bookmark range.

```javascript
builder.CreateFile("docx"); 
var oDocument = Api.GetDocument(); 
var oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("ONLYOFFICE Document Builder"); 
var oRange = oDocument.GetRange(0, 9); 
oRange.AddBookmark("Bookmark"); 
oRange = oDocument.GetBookmarkRange("Bookmark");
oRange.SetBold(true);
builder.SaveFile("docx",  "GetBookmarkRange.docx"); 
builder.CloseFile();
```