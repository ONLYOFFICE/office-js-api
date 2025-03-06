# MoveCursorToStart

Moves a cursor to the beginning of the current editing area (document body, footer/header, footnote, or autoshape).\nThis method is similar to pressing the -**Ctrl + Home** keyboard shortcut.

## Syntax

```javascript
expression.MoveCursorToStart(isMoveToMainContent);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isMoveToMainContent | Required | boolean |  | This flag ignores the current position and always moves a cursor to the beginning of the document body. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("MoveCursorToStart", [true]);
```
