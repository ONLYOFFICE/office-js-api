# AddBookmark

Adds a bookmark to the specified range.

## Syntax

expression.AddBookmark(sName);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | String |  | The bookmark name. |

## Returns

boolean

## Example

This example adds a bookmark to the specified range.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 9);
oRange.AddBookmark("Bookmark");
oParagraph.AddLineBreak();
oParagraph.AddText("A bookmark was added to the 'ONLYOFFICE' range.");
```
