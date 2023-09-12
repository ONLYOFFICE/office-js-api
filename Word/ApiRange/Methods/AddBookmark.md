# AddBookmark

Adds a bookmark to the specified range.

## Syntax

expression.AddBookmark(sName);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sName | Required | String | The bookmark name. |

## Returns

Boolean (returns false if range is empty)

## Example

This example adds a bookmark to the specified range.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 9);
oRange.AddBookmark("Bookmark");
oParagraph.AddLineBreak();
oParagraph.AddText("A bookmark was added to the 'ONLYOFFICE' range.");
builder.SaveFile("docx", "AddBookmark.docx");
builder.CloseFile();
```