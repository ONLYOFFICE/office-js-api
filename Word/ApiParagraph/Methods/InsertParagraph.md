# InsertParagraph

Inserts a paragraph at the specified position.

## Syntax

```javascript
expression.InsertParagraph(paragraph, sPosition, beRNewPara);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| paragraph | Required | string \| [ApiParagraph](../../ApiParagraph/ApiParagraph.md) |  | Text or paragraph. |
| sPosition | Required | string |  | The position where the text or paragraph will be inserted ("before" or "after" the paragraph specified). |
| beRNewPara | Required | boolean |  | Defines if this method returns a new paragraph (true) or the current paragraph (false). |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| null

## Example

This example inserts a paragraph at the specified position.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("This is just a sample text.");
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This paragraph was inserted here.");
paragraph1.InsertParagraph(paragraph2, "after", true);
```
