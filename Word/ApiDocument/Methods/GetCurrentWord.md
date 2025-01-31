# GetCurrentWord

Returns the current word or part of the current word.

## Syntax

```javascript
expression.GetCurrentWord(sWordPart);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sWordPart | Required | undefined | "before" | "after" |  | The desired part of the current word to be returned. |

## Returns

string

## Example

This example shows how to get the current word.

```javascript
let doc = Api.GetDocument();
let para1 = doc.GetElement(0);
para1.AddText("The quick brown ");
let run = para1.AddText("fox");
para1.AddText(" jumps over the lazy dog");

run.MoveCursorToPos(1);

let para2 = Api.CreateParagraph();
para2.AddText("The current word is " + doc.GetCurrentWord());
doc.Push(para2);

para2 = Api.CreateParagraph();
para2.AddText("The part of the word after cursor is " + doc.GetCurrentWord("after"));
doc.Push(para2);

para2 = Api.CreateParagraph();
para2.AddText("The part of the word before cursor is " + doc.GetCurrentWord("before"));
doc.Push(para2);


```
