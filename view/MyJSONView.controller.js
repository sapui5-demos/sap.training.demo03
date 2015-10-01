sap.ui.controller("sap.training.demo03.view.MyJSONView", {

	onButtonPress: function() {
		var oInput = this.getView().byId("idInput");
		oInput.setValue("Hallo JSON View");
	}

});