# attachEvent

Defines the method to add an event listener, a function that will be called whenever the specified event is delivered to the target.
The list of all the available events can be found &#123;@link /plugin/events here&#125;.

## Syntax

```javascript
expression.attachEvent(id, action);
```

`expression` - A variable that represents a [Plugin](../Plugin.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id | Required | string |  | The event name. |
| action | Required | function |  | The event listener. |

## Returns

This method doesn't return any data.