# 更新日志
2.0(2019-05)
- editor类控件新增EVENT_CHANGE_CONFIRM事件
- 复选下拉控件和树下拉控件支持trigger是否可编辑
- 时分秒控件支持自定义时间显示格式和是否可编辑
- 日期/时间/日期区间/时间区间支持自定义日期选择范围和是否可编辑
- 日期/时间/日期区间/时间区间支持自定义日期显示格式和是否可编辑
- 增加less函数: 字体资源添加函数addFontRe和字体激活函数activeFont

> @fontList: "dec", "report";
> .addFontRes("dec");
> .addFontRes("report");
> .activateFont(@fontList);

以上即可使用自定义的dec,report字体和fineui的资源字体

2.0(2019-04)
- 新增`bi.multi_tree_list_combo`控件, 此下拉树勾选节点时不会影响父子节点的勾选状态
- 新增`bi.multi_tree_insert_combo`控件, 此下拉树可以插入不存在的新值
- 新增`bi.list_tree_value_chooser_insert_combo`部件, 封装`bi.multi_tree_list_combo`数据处理逻辑
- 新增`bi.tree_value_chooser_insert_combo`部件, 封装`bi.multi_tree_insert_combo`数据处理逻辑
- 增加BI.DOM.ready方法

2.0(2019-03)
- 新增`bi.time_combo`时分秒控件和`bi.time_periods`时间选择区间，时间区间无有效值校验
- Label控件增加highlight参数, 可指定初始化标蓝

2.0(2019-01)
- 加载更多的单选下拉系列新增allowNoSelect参数配置, 使得可以不选任意一个值

2.0(2018-12)
- 增加Button的点击动画和Combo下拉时下拉图标动画


2.0(2018-11)
- 增加`bi.html`和`bi.html_label`类型，text支持html文本，不支持keyword


2.0(2018-10)
- popover增加高度自适应，即open的时候回根据内容高度调整popover的高度


2.0(2018-09)
- 增加Fix对configuable为false的对象的不内部构造响应式数据的性能优化处理，例如:

> this.model.json = Object.freeze({name: "zhang"});

只会对this.model.json进行响应式处理，不会对内部的name进行响应式处理


2.0(2018-08)
- 增加BI.mount方法，支持同构