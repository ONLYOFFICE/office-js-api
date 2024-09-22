window.Asc.plugin.onSubmitForm = function() {
	Asc.scope.st = "";
	this.callCommand(function() {
        var oDocument = Api.GetDocument();
		var aFormsData = oDocument.GetFormsData();
		Asc.scope.st += "event: onSubmitForm";
		Asc.scope.st += "\n";
		Asc.scope.st += "The type of the first form: " + aFormsData[0]["type"];
		Asc.scope.st += "\n";
		Asc.scope.st += "The value of the second form: " + aFormsData[1]["value"];
    }, false);
	console.log(Asc.scope.st);
};