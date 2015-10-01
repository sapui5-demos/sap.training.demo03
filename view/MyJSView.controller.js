sap.ui.controller("sap.training.demo03.view.MyJSView", {

	onButtonPress: function() {
		var oInput = this.getView().byId("idInput");
		oInput.setValue("Hallo JS View");
	}

});