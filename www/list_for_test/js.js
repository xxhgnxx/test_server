var tmp_dom_sart = '<div class="tag_group">'
var tag_lv1 = ''
var tag_lv2 = ''
var dom_top = ''
var dom_bottom = ''
var tmp_dom_end = '</div>'
for (let i = 0; i < tyle_list.length; i++) {
  const element_lv1 = tyle_list[i];
  tag_lv1 = '<div><div class="tag_lv1" data_code="' + element_lv1.code + '">' + element_lv1.name + '</div></div>'
  console.log('1111',element_lv1.children);
  if (element_lv1.children.length) {
    dom_top += tmp_dom_sart + tag_lv1

    for (let k = 0; k < element_lv1.children.length; k++) {
      const element_lv2 = element_lv1.children[k];
      tag_lv2 = '<div><div class="tag_lv2" data_code="' + element_lv2.code + '">' + element_lv2.name + '</div></div>'
      dom_top += tag_lv2
    }
    dom_top += tmp_dom_end
  } else {
    console.log(element_lv1.name);
    dom_bottom += tmp_dom_sart + tag_lv1 + tmp_dom_end
  }
}


$(".list_main").html(dom_top+dom_bottom)

