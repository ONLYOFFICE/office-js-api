# SetSolved

Marks a comment as solved.

## Syntax

expression.SetSolved(bSolved);

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bSolved | Required | boolean |  | Specifies if a comment is solved or not. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

This example marks a comment as solved.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].SetSolved(true);
var bSolved = aComments[0].IsSolved();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The comment is solved: " + bSolved);
oDocument.Push(oParagraph);
```
