/**
 * @author windy
 * @version 2.0
 * Created by windy on 2020/2/17
 */

describe("single_tree", function () {

    var items = [{
        id: 1,
        text: "第一项",
        value: "1"
    }, {
        id: 2,
        text: "第二项",
        value: "2"
    }, {
        id: 3,
        text: "第三项",
        value: "3",
        open: true
    }, {
        id: 11,
        pId: 1,
        text: "子项1",
        value: "11"
    }, {
        id: 12,
        pId: 1,
        text: "子项2",
        value: "12"
    }, {
        id: 13,
        pId: 1,
        text: "子项3",
        value: "13"
    }, {
        id: 31,
        pId: 3,
        text: "子项1",
        value: "31"
    }, {
        id: 32,
        pId: 3,
        text: "子项2",
        value: "32"
    }, {
        id: 33,
        pId: 3,
        text: "子项3",
        value: "33"
    }];

    /**
     *   test_author_windy
     **/
    it("defaultValue", function () {
        var tree = BI.Test.createWidget({
            type: "bi.single_tree_combo",
            width: 300,
            height: 24,
            items: BI.deepClone(items),
            value: "2"
        });
        expect(tree.getValue()[0]).to.equal("2");
        tree.destroy();
    });

    /**
     *   test_author_windy
     **/
    it("点选选值_选择父节点", function (done) {
        var tree = BI.Test.createWidget({
            type: "bi.single_tree_combo",
            width: 300,
            height: 24,
            allowEdit: true,
            items: BI.deepClone(items),
            value: "2"
        });
        tree.element.find(".bi-single-tree-trigger").click();
        BI.nextTick(function () {
            tree.element.find(".bi-single-tree-first-plus-group-node").click();
            expect(tree.getValue()[0]).to.equal("2");
            tree.destroy();
            done();
        });
    });

    /**
     *   test_author_windy
     **/
    it("点选选值_选择叶子节点", function (done) {
        var tree = BI.Test.createWidget({
            type: "bi.single_tree_combo",
            width: 300,
            height: 24,
            allowEdit: true,
            items: BI.deepClone(items),
            value: "33"
        });
        tree.element.find(".bi-single-tree-trigger").click();
        BI.nextTick(function () {
            tree.element.find(".bi-mid-tree-leaf-item").click();
            expect(tree.getValue()[0]).to.equal("32");
            tree.destroy();
            done();
        });
    });
});