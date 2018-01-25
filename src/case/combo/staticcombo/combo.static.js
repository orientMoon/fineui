/**
 * 单选combo
 *
 * @class BI.StaticCombo
 * @extend BI.Widget
 */
BI.StaticCombo = BI.inherit(BI.Widget, {
    _defaultConfig: function () {
        return BI.extend(BI.StaticCombo.superclass._defaultConfig.apply(this, arguments), {
            baseCls: "bi-static-combo",
            height: 24,
            text: "",
            el: {},
            items: [],
            chooseType: BI.ButtonGroup.CHOOSE_TYPE_SINGLE
        });
    },

    _init: function () {
        BI.StaticCombo.superclass._init.apply(this, arguments);
        var self = this, o = this.options;
        this.trigger = BI.createWidget({
            type: "bi.text_trigger",
            items: o.items,
            height: o.height,
            text: o.text,
            readonly: true
        });
        this.popup = BI.createWidget({
            type: "bi.text_value_combo_popup",
            textAlign: o.textAlign,
            chooseType: o.chooseType,
            items: o.items,
            value: o.value
        });
        this.popup.on(BI.Controller.EVENT_CHANGE, function () {
            self.fireEvent(BI.Controller.EVENT_CHANGE, arguments);
        });
        this.popup.on(BI.TextValueComboPopup.EVENT_CHANGE, function () {
            self.combo.hideView();
            self.fireEvent(BI.StaticCombo.EVENT_CHANGE, arguments);
        });
        this.combo = BI.createWidget({
            type: "bi.combo",
            element: this,
            adjustLength: 2,
            el: this.trigger,
            popup: {
                el: this.popup
            }
        });
    },

    populate: function (items) {
        this.combo.populate(items);
    },

    setValue: function (v) {
        this.combo.setValue(v);
    },

    getValue: function () {
        var value = this.combo.getValue();
        return BI.isNull(value) ? [] : (BI.isArray(value) ? value : [value]);
    }
});
BI.StaticCombo.EVENT_CHANGE = "EVENT_CHANGE";
BI.shortcut("bi.static_combo", BI.StaticCombo);