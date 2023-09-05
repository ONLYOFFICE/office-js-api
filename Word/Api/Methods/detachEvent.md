# detachEvent

Unsubscribes from the specified event.

## Syntax

expression.detachEvent(eventName);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| eventName | Required | String | The event name. |

## Returns

This method doesn't return any data.

## Example

This example shows how to unsubscribe on hyperlink click event.

```javascript
Api.detachEvent("asc_onHyperlinkClick");
```