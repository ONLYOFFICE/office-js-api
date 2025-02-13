# ReplaceCurrentSentence

Replaces the current sentence or part of the current sentence with the specified text.

## Syntax

```javascript
expression.ReplaceCurrentSentence(sReplace, sPart);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sReplace | Required | string |  | The string to replace the current sentence with. |
| sPart | Required | undefined | "before" | "after" |  | The desired part of the current sentence to be replaced. |

## Returns

boolean

## Example

This example shows how to replace the current sentence.

```javascript
let doc = Api.GetDocument();

let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
let para1 = doc.GetElement(0);
para1.AddText(text);

let para2 = Api.CreateParagraph();
doc.Push(para2);
let run = para2.AddText(text);
run.MoveCursorToPos(80);
doc.ReplaceCurrentSentence("The quick brown fox jumps over the lazy dog.");


```
