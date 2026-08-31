window.Asc.plugin.init = function() {
    let button = new Asc.ButtonFloatAction("fab-insert");
    button.text = "Insert";
    button.hint = "Insert the generated text";

    button.attachOnClick(function() {
        console.log("The floating action button has been clicked");
    });

    Asc.Buttons.registerFloatActionButtons();
};