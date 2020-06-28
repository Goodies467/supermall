<template>
  <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
      
  </div>
</template>

<script>
export default {
    name:"NavBar"

}
</script>

<style>
.nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;/*导航栏的高度一般都是44px */
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);/*设置导航栏底边的阴影*/
}
.left,.right{
    width: 60px;
}
.center{
    flex: 1;/*因为其他部分宽度已经确定，所以此时flex设置1即可占据剩余全部空间 */
}
</style>