sap.ui.controller("sap.training.demo03.view.MyHTMLView", {

	onButtonPress: function() {
		var oInput = this.getView().byId("idInput");
		oInput.setValue("Hallo HTML View");
	}

});