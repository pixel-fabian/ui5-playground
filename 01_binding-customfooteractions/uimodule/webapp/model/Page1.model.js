sap.ui.define(["sap/ui/model/json/JSONModel"], (JSONModel) => {
    return JSONModel.extend("ui5.playground.customfooteractions.Page1.model", {
        constructor: function (oData) {
            JSONModel.apply(this, [oData]);
        },

        update() {
            const oData = {
                footerButtons: [
                    {
                        text: "Button1",
                        visible: true,
                        enabled: true,
                    },
                    {
                        text: "Button2",
                        visible: true,
                        enabled: true,
                    },
                ],
            };
            this.setData(oData);
            console.log("model updated", this.getData());
        },
    });
});
