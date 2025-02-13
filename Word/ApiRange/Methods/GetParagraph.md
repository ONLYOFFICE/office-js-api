# GetParagraph

Returns a paragraph from all the paragraphs that are in the range.

## Syntax

```javascript
expression.GetParagraph(nPos);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | Number |  | The paragraph position in the range. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) | null

## Example

This example shows how to get a paragraph from all the paragraphs that are in the range.

```javascript
let doc = Api.GetDocument();
let firstParagraph = doc.GetElement(0);
firstParagraph.AddText("First paragraph");
let secondParagraph = Api.CreateParagraph();
secondParagraph.AddText("Second Paragraph");
doc.Push(secondParagraph);
let range = doc.GetRange(0, 28);
let rangeParagraph = range.GetParagraph(1);
rangeParagraph.SetBold("true");
```
