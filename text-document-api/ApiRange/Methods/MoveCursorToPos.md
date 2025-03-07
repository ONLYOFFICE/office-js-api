# MoveCursorToPos

Moves a cursor to a specified position of the current range object.\
If there is any selection in the document, it will be removed.

## Syntax

```javascript
expression.MoveCursorToPos(nPos);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | number | 0 | Desired cursor position. |

## Returns

boolean