function getTree() {
  // Some logic to retrieve, or generate tree structure
  return ;
}

$('[data-toggle=confirmation]').confirmation({
  rootSelector: '[data-toggle=confirmation]',
  // other options
});


$('.btn').on('click',function (){
    console.log('go');
    $('#testtext').text("gogogogogo")
    $('#testinput').val("gogogogogo")
    console.log($('#testtext').text());
})

var tree = [
  {
    text: "Parent 1",
    nodes: [
      {
        text: "Child 1",
        nodes: [
          {
            text: "Grandchild 1"
          },
          {
            text: "Grandchild 2"
          }
        ]
      },
      {
        text: "Child 2"
      }
    ]
  },
  {
    text: "Parent 2"
  },
  {
    text: "Parent 3"
  },
  {
    text: "Parent 4"
  },
  {
    text: "Parent 5"
  }
];

$('#tree').treeview({
    text: "Node 1",
  icon: "glyphicon glyphicon-stop",
  selectedIcon: "glyphicon glyphicon-stop",
  color: "#000000",
  backColor: "#FFFFFF",
  href: "#node-1",
  selectable: true,
  state: {
    checked: true,
    disabled: true,
    expanded: true,
    selected: true
  },
  tags: ['available'],
  data: tree});



  //正整数正则
var posPattern = /^\d+$/;
//负整数正则
var negPattern = /^-\d+$/;
//整数正则
var intPattern = /^-?\d+$/;
//输出 true
console.log(posPattern.test("42"));
//输出 true
console.log(negPattern.test("-42"));
//输出 true
console.log(intPattern.test("-42"));