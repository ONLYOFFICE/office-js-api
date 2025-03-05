# ReplaceCurrentWord

Replaces the current word or part of the current word with the specified text.

## Syntax

```javascript
expression.ReplaceCurrentWord(sReplace, sPart);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sReplace | Required | string |  | The string to replace the current word with. |
| sPart | Required | undefined \| "before" \| "after" |  | The desired part of the current word to be replaced. |

## Returns

boolean

## Example

This example shows how to replace the current word.

```javascript editor-docx
let doc = Api.GetDocument();
let para1 = doc.GetElement(0);
para1.AddText("The quick brown ");
let run = para1.AddText("cat");
para1.AddText(" jumps over the lazy dog");
run.MoveCursorToPos(1);

doc.ReplaceCurrentWord("fox");


```
