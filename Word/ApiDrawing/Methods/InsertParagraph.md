# InsertParagraph

Inserts a paragraph at the specified position.

## Syntax

expression.InsertParagraph(paragraph, sPosition, beRNewPara);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| paragraph | Required | String | [ApiParagraph](../../ApiParagraph/ApiParagraph.md) | Text or paragraph. |
| sPosition | Required | String | The position where the text or paragraph will be inserted ("before" or "after" the drawing specified). |
| beRNewPara | Required | Boolean | Defines if this method returns a new paragraph (true) or the current ApiDrawing (false). |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) &#124; [ApiDrawing](../ApiDrawing.md)

## Example

This example

```javascript
// todo_example
```