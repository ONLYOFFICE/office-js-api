# CoAuthoringChatSendMessage

Sends a message to the co-authoring chat.

## Syntax

```javascript
expression.CoAuthoringChatSendMessage(sText);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | Message text. |

## Returns

This method doesn't return any data.

## Example

```javascript editor-xlsx
window.Asc.plugin.executeMethod ("CoAuthoringChatSendMessage", [Asc.scope.meeting_info], function (isTrue) {
    if (isTrue)
        alert ("Meeting was created");
    else
        alert ("Meeting was create, please update SDK for checking info about created meeting in chat.");
});
```
