$('#table').bootstrapTable({
    columns: [{
        field: 'id',
        title: 'Item ID'
    }, {
        field: 'name',
        title: 'Item Name'
    }, {
        field: 'price',
        title: 'Item Price'
    }],
    data: [{
        id: 1,
        name: 'Item 1',
        price: '$1'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }]
});


$(".test").click(function () {


    $.get("xxxxxxxx",

        function (data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });


});



// demo数据
var dataListAll = [{
        'name': '文章页',
        'list': [{
            name: '中国',
            data: 1
        }, {
            name: '美国',
            data: 2
        }, {
            name: '火星帝国武装组织基地',
            data: 3
        }, {
            name: '北太阳系第十星云区第五大区自治州',
            data: 4
        }]
    },
    {
        'name': '文章页2',
        'list': [{
            name: '中国2',
            data: 21
        }, {
            name: '美国2',
            data: 22
        }, {
            name: '火星帝国武装组织基地2',
            data: 23
        }, {
            name: '北太阳系第十星云区第五大区自治州2',
            data: 24
        }]
    },
    {
        'name': '文章页3',
        'list': [{
            name: '中国3',
            data: 31
        }, {
            name: '美国3',
            data: 32
        }, {
            name: '火星帝国武装组织基地3',
            data: 33
        }, {
            name: '北太阳系第十星云区第五大区自治州3',
            data: 34
        }]
    }
]
// 内容定向添加
var childListGroup = new Array();
var listTmp
$('.addListGroup').on('click', function () {
    console.log('change', childListGroup.length);
    listTmp =
        '<div class=""><div class="col-sm-3"><select id="addType' + childListGroup.length +
        '" groupId="' + childListGroup.length +
        '" class="form-control"></select></div><div class="col-sm-8"><div class="ms-ctn form-control " id="listChild' +
        childListGroup.length +
        '" style="min-width: 200px;"></div></div><label for="inputEmail3" class="control-label"><a href="javascript:void(0)" class="del' +
        childListGroup.length + '">移除</a></label></div>'
    $(".myList_all1").append(listTmp)
    var tmpAddtype = $("#addType" + childListGroup.length);
    dataListAll.forEach(function (listdata, index) {
        tmpAddtype.append($("<option></option>").attr("value", index).text(
            listdata.name));
    }, this);
    var tmp = $('#listChild' + childListGroup.length).magicSuggest({
        placeholder: '选择区域...',
        allowFreeEntries: false,
        data: dataListAll[0].list,
        valueField: 'data',
        renderer: function (data) {
            return data.data + ' (<b>' + data.name + '</b>)';
        },
        resultAsString: true
    });
    childListGroup.push(tmp);
    tmpAddtype.on('change', function () {
        childListGroup[$(this).attr('groupId')].clear();
        childListGroup[$(this).attr('groupId')].setData(dataListAll[this.value].list);
    })
});
$('.del' + (childListGroup.length - 1)).on('click', function () {
    $(this).parent().parent().remove();
})
// 排除
var childListGroup2 = new Array();
var listTmp2
$('.addListGroup2').on('click', function () {
    listTmp2 =
        '<div class=""><div class="col-sm-3"><select id="addType2' + childListGroup2.length +
        '" groupId="' + childListGroup2.length +
        '"  class="form-control"></select></div><div class="col-sm-8"><div class="ms-ctn form-control " id="listChild2' +
        childListGroup2.length +
        '" style="min-width: 200px;"></div></div><label for="inputEmail3" class="control-label"><a href="javascript:void(0)" class="del' +
        childListGroup2.length + '">移除</a></label></div>'
    $(".myList_all2").append(listTmp2)
    var tmpAddtype2 = $("#addType2" + childListGroup2.length);
    dataListAll.forEach(function (listdata, index) {
        tmpAddtype2.append($("<option></option>").attr("value", index).text(
            listdata.name));
    }, this);
    var tmp2 = $('#listChild2' + childListGroup2.length).magicSuggest({
        placeholder: '选择区域...',
        allowFreeEntries: false,
        data: dataListAll[0].list,
        valueField: 'data',
        renderer: function (data) {
            return data.data + ' (<b>' + data.name + '</b>)';
        },
        resultAsString: true
    });
    childListGroup2.push(tmp2);
    tmpAddtype2.on('change', function () {
        childListGroup2[$(this).attr('groupId')].clear();
        childListGroup2[$(this).attr('groupId')].setData(dataListAll[this.value].list);
    })
    $('.del' + ($(this).attr('groupId'))).on('click', function () {
        $(this).parent().parent().remove();
    })
})