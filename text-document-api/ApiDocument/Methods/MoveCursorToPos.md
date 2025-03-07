# MoveCursorToPos

Moves a cursor to a specified position of the document.\
If there is any selection in the document, it will be removed.

## Syntax

```javascript
expression.MoveCursorToPos(nPos);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | number | 0 | Desired cursor position. |

## Returns

boolean