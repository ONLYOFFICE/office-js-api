# InsertParagraph

Inserts a paragraph at the specified position.

## Syntax

expression.InsertParagraph(paragraph, sPosition, beRNewPara);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| paragraph | Required | string &#124; [ApiParagraph](../../ApiParagraph/ApiParagraph.md) |  | Text or paragraph. |
| sPosition | Required | string |  | The position where the text or paragraph will be inserted ("before" or "after" the paragraph specified). |
| beRNewPara | Required | boolean |  | Defines if this method returns a new paragraph (true) or the current paragraph (false). |

## Returns

ApiParagraph, null

## Example

This example inserts a paragraph at the specified position.

```javascript
var oDocument = Api.GetDocument();
var oParagraph1 = oDocument.GetElement(0);
oParagraph1.AddText("This is just a sample text.");
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("This paragraph was inserted here.");
oParagraph1.InsertParagraph(oParagraph2, "after", true);
```
