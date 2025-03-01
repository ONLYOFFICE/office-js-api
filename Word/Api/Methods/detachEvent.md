# detachEvent

Unsubscribes from the specified event.

## Syntax

```javascript
expression.detachEvent(eventName);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| eventName | Required | string |  | The event name. |

## Returns

boolean

## Example

This example shows how to unsubscribe on hyperlink click event.

```javascript editor-docx
Api.detachEvent("asc_onHyperlinkClick");
```
