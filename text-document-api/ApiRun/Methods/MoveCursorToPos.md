# MoveCursorToPos

Moves a cursor to a specified position of the current text run.\
If the current run is not assigned to any document part, then -**false** is returned. Otherwise, this method returns -**true**.\
If there is any selection in the document, it will be removed.

## Syntax

```javascript
expression.MoveCursorToPos(nPos);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | number | 0 | Desired cursor position. |

## Returns

boolean

## Example

This example shows how to place cursor in the specifed position in the text.

```javascript editor-docx
let doc = Api.GetDocument();
let para = doc.GetElement(0);
let run = para.AddText("The quick brown fox jumps over the lazy dog");
run.MoveCursorToPos(16);

```
