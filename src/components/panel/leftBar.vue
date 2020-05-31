<template>
  <div id="leftBar">
    <div class="addNewDocument">
      <div href @click.stop="addNew">新文档</div>
      <ul class="nd_menu menu" ref="nd_menu">
        <li>新建笔记</li>
        <li>新建Markdown</li>
        <li>新建模板笔记</li>
        <li>新建脑图</li>
        <li class="bl">新建文件夹</li>
        <li class="bl">导入Word</li>
        <li>上传文件</li>
        <li>上传文件夹</li>
      </ul>
    </div>
    <div class="sourceList">
      <div class="uptodata selected">
        <i></i>
      </div>
      <div class="share"></div>
      <div class="myprofile"></div>
      <div class="star"></div>
      <div class="recycle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "leftBar",
  methods: {
    addNew() {
      if (this.$refs.nd_menu.style.display === "block") {
        this.$refs.nd_menu.style.display = "";
      } else {
        this.$refs.nd_menu.style.display = "block";
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      document.addEventListener("click", () => {
        if (this.$refs.nd_menu) {
          this.$refs.nd_menu.style.display = "";
        }
      });
    });
  }
};
</script>

<style scoped>
#leftBar {
  width: 220px;
  background: rgb(245, 245, 245);
}
.addNewDocument {
  position: relative;
  height: 60px;
  border-bottom: solid 1px #eee;
}
.addNewDocument > div {
  position: relative;
  display: inline-block;
  line-height: 60px;
  font-size: 12px;
  cursor: pointer;
}
.addNewDocument div::before {
  content: "";
  position: absolute;
  left: -43px;
  top: 50%;
  transform: translateY(-50%);
  background: url("../../assets/img/icon.svg") no-repeat;
  background-position: 74.35897435897436% 16.045845272206304%;
  width: 28px;
  height: 28px;
}
.addNewDocument > div::after {
  content: "";
  position: absolute;
  left: 40px;
  top: 54%;
  transform: translateY(-50%);
  border: solid 4px transparent;
  border-top: solid 4px #959fb1;
}
.nd_menu {
  display: none;
  width: 130px;
  left: 41px;
  top: 55px;
}
.bl {
  border-bottom: solid 1px #eee;
}
.sourceList div {
  height: 40px;
}
.sourceList div:hover {
  background: rgb(228, 237, 248);
}
.selected {
  background: rgb(57, 141, 238);
  color: #fff;
}
</style>