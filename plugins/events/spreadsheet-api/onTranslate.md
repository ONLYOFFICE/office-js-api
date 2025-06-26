# onTranslate

The function called right after the plugin startup or later in case the plugin language is changed.

This event has no parameters.

```javascript
window.Asc.plugin.onTranslate = function() {
    var label = document.getElementById("button_new");
    if (label)
        label.innerHTML = window.Asc.plugin.tr("New");
}
```

