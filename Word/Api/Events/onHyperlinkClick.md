# onHyperlinkClick

Occurs when a some hyperlink is clicked.

## Syntax

expression.attachEvent("asc_onHyperlinkClick", callback);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| callback | Required | Function | Function to be called when the event fires. |

## Example

This example shows how to subscribe on hyperlink click event.

```javascript
Api.attachEvent("asc_onHyperlinkClick", function() {
	console.log("HYPERLINK!!!");
});
```