# ToolbarMenuItemType

The possible values of the base which the relative vertical position of the toolbar menu item will be calculated from.

## Type

Enumeration

## Values

- "button"
- "..."


## Example

```javascript
var sToolbarMenuItemType = "button";
var oToolbarMenuItem = {
    "id": "MeaningItem",
    "type": sToolbarMenuItemType,
    "text": "Meaning",
    "hint": "Meaning",
    "icons": "resources/light/icon.png",
    "disabled": false,
    "enableToggle": false,
    "lockInViewMode": false,
    "separator": true,
    "split": true,
    "items": [
        {
            "id": "onMeaningT",
            "text": "Explain text in comment"
        },
        {
            "id": "onFixSpelling",
            "text": "Fix spelling & grammar"
        },
        {
            "id": "onMakeLonger",
            "text": "Make longer"
        },
        {
            "id": "onMakeShorter",
            "text": "Make shorter"
        }
    ]
};
```
