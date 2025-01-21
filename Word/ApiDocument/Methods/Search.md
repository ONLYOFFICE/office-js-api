# Search

Searches for a scope of a document object. The search results are a collection of ApiRange objects.

## Syntax

expression.Search(sText, isMatchCase);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | Search string. |
| isMatchCase | Required | boolean |  | Case sensitive or not. |

## Returns

Array.\<[ApiRange](../../ApiRange/ApiRange.md)>

## Example

This example shows how to make a search.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is paragraph №1.");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is paragraph №2.");
oDocument.Push(oParagraph);
var aSearch = oDocument.Search("paragraph");
aSearch[1].SetBold(true);
```
