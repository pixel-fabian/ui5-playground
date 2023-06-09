sap.ui.define(["sap/ui/model/json/JSONModel"], (JSONModel) => {
    return JSONModel.extend("ui5.playground.customfooteractions.Page1.model", {
        constructor: function (oData) {
            JSONModel.apply(this, [oData]);
        },

        update() {
            this.reset();
            const oData = {
                footerButtons: [
                    {
                        text: "Button-0",
                        visible: true,
                        enabled: true,
                    },
                    {
                        text: "Button-1",
                        visible: true,
                        enabled: true,
                    },
                ],
            };
            this.setData(oData);
            console.log("model updated", this.getData());
        },

        reset() {
            const oData = {
                footerButtons: [],
            };
            this.setData(oData);
            console.log("model reset", this.getData());
        },
    });
});
