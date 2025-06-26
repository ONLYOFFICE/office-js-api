# onToolbarMenuClick

The function called when the toolbar menu item has been clicked.

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| id | string | Item ID. |

```javascript
window.Asc.plugin.event_onToolbarMenuClick = function(id)
{
    this._onCustomMenuClick("toolbarMenuEvents", id);
};
```

