# attachEvent

Subscribes to the specified event and calls the callback function when the event fires.

## Syntax

expression.attachEvent(eventName, callback);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| eventName | Required | String | The event name. |
| callback | Required | Function | Function to be called when the event fires. |

## Returns

This method doesn't return any data.

## Example

This example shows how to subscribe on hyperlink click event.

```javascript
Api.attachEvent("asc_onHyperlinkClick", function() {
	console.log("HYPERLINK!!!");
});
```