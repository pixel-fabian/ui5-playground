sap.ui.define(
    ["./BaseController"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ui5.playground.customfooteractions.controller.Page1", {
            onInit: function () {
                this.getRouter().getRoute("RoutePage1").attachMatched(this.onRoutePage1Matched, this);
            },

            onPressButtonBack() {
                this.getRouter().navTo("RouteMainView");
            },

            onRoutePage1Matched() {
                this.getModel("page1Model").update();
            },
        });
    }
);
