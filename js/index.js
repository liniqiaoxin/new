
// 获取图片
var oImg = document.getElementsByTagName('img');

fn();           // 先让第一张图展现

window.onscroll = function(){
    fn();				  // 滚轮滚动事件

};

function fn(){
    //判断图片是否在可视区内
    for(var i=0; i<oImg.length; i++){
        var oImgTo = oImg[i].offsetTop;
        //元素距离页面顶端的距离
        var clientH = document.documentElement.clientHeight;
        //可视区的高度
        var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
        //可视区顶部距离页面顶部的距离

        if(clientH + scrollT >= oImgTo){
            oImg[i].src = oImg[i].getAttribute('data-src');
        }
    }
}
//getAttribute() 方法根据名称取得属性值。


