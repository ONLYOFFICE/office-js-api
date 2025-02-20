# Search

Searches for a scope of a document object. The search results are a collection of ApiRange objects.

## Syntax

```javascript
expression.Search(sText, isMatchCase);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | Search string. |
| isMatchCase | Required | boolean |  | Case sensitive or not. |

## Returns

[ApiRange[]](../../ApiRange/ApiRange.md)

## Example

This example shows how to make a search.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is paragraph №1.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is paragraph №2.");
doc.Push(paragraph);
let searchResults = doc.Search("paragraph");
searchResults[1].SetBold(true);
```
