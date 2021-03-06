/**
 * Created by Dailer on 2017/7/11.
 */
Demo.StateEditor = BI.inherit(BI.Widget, {
    props: {
        baseCls: ""
    },
    render: function () {
        var self = this;
        return {
            type: "bi.horizontal_adapt",
            items: [{
                type: "bi.state_editor",
                ref: function () {
                    self.editor = this;
                },
                cls: "bi-border",
                width: 300
            }],
            vgap: 20

        };
    },


    mounted: function () {
        var self = this;
        setTimeout(function () {
            self.editor.setState(["*", "*"]);
        }, 1000);
    }
});

BI.shortcut("demo.state_editor", Demo.StateEditor);