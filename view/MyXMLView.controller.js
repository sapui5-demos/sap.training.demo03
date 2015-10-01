sap.ui.controller("sap.training.demo03.view.MyXMLView", {

	onButtonPress: function() {
		var oInput = this.getView().byId("idInput");
		oInput.setValue("Hallo XML View");
	}

});