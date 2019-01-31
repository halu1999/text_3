var num=12;

function check(){
  if(num<10){
    $(".text").text("数量极少！！");
    $(".text").css("border-color","#ff7067");
    $(".text").css("color","#ff7067");
    $(".fill_stock").addClass("fill_stock_open");
  }else if (num<20) {
    $(".text").text("卖的不错！！");
    $(".text").css("border-color","#fff467");
    $(".text").css("color","#fff467");
    $(".fill_stock").removeClass("fill_stock_open");
  }else{
      $(".text").text("还剩许多");
      $(".text").css("border-color","#93ff67");
      $(".text").css("color","#93ff67");
      $(".fill_stock").removeClass("fill_stock_open");

  }

}

function click(num_var){
  num=num+num_var;
  $(".num").text(num);
}



$(".minus").click(
  function(){
   click(-1);
   check();
  }
);

$(".add").click(
  function(){
  click(1);
  check();
  }
);

var waittime = 0;
if()
$(".fill_stock").click(
  function(){
    $(".fill_stock").text("联系中......");
    setInterval(
      function(){
        waittime+=1;
        $(".fill_stock").text("联系中......"+ waittime);

      }
    ,1000);
  }

);
