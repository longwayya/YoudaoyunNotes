<template>
  <div id="topbar">
    <div class="topbar_left">
      <div class="logo"></div>
      <a href class="active">云笔记</a>
      <a href>云协作</a>
      <a href>视频会议</a>
    </div>
    <div class="topbar_right">
      <div class="smallhead">
        <img src="../assets/img/header.jpg" alt />
        <div class="vip"></div>
      </div>
      <div class="info-more" @click.stop="infoMoreClick">
        <ul class="widget-menu" ref="infoMore">
          <li>个人信息</li>
          <li class="account">
            账户设置
            <ul class="account-config">
              <li>账户信息</li>
              <li>账号安全</li>
              <li>保存邮件到笔记</li>
              <li>设置阅读密码</li>
              <li>邮件提醒</li>
              <li>应用管理</li>
            </ul>
          </li>
          <li>导入笔记</li>
          <li>官方贴吧</li>
          <li>帮助</li>
          <li>意见反馈</li>
          <li>用户满意度调查</li>
          <li>注销登录</li>
        </ul>
      </div>
      <div class="links">
        <a href>官网</a>
        <i class="top-line"></i>
        <a href>会员</a>
        <i class="top-line"></i>
        <a href>客户端下载</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topBar",
  methods: {
    infoMoreClick() {
      if (this.$refs.infoMore.style.display === "block") {
        this.$refs.infoMore.style.display = "";
      } else {
        this.$refs.infoMore.style.display = "block";
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      document.addEventListener("click", () => {
        if (this.$refs.infoMore) {
          this.$refs.infoMore.style.display = "";
        }
      });
    });
  }
};
</script>

<style scoped>
#topbar {
  display: flex;
  justify-content: space-between;
  height: 50px;
  background: #398dee;
}

.topbar_left {
  display: flex;
  align-items: center;
}
.logo {
  margin: 0 55px 0 22px;
  background: url("../assets/img/icon.svg") no-repeat;
  background-position: 0 0;
  width: 143px;
  height: 27px;
}

.topbar_left a {
  display: inline-block;
  color: rgba(255, 255, 255, 0.6);
  line-height: 50px;
  height: 50px;
  padding: 0 15px;
  position: relative;
}
.topbar_left :nth-child(4)::before {
  content: "";
  position: absolute;
  top: 50%;
  margin-top: -5px;
  right: 0;
  border-top: solid 5px transparent;
  border-right: solid 5px white;
  border-bottom: solid 5px transparent;
  border-left: solid 5px transparent;
}
.topbar_left a:nth-child(4)::after {
  content: "限时免费开放";
  position: absolute;
  right: -78px;
  top: 50%;
  transform: translateY(-50%);
  height: 15px;
  line-height: 15px;
  color: #398dee;
  font-size: 12px;
  padding: 0 3px;
  background: #fff;
}
a.active {
  color: rgba(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.15);
}
.topbar_right {
  display: flex;
  align-items: center;
}
.smallhead {
  position: relative;
}
.vip {
  position: absolute;
  width: 20px;
  height: 20px;

  right: -10px;
  bottom: -2px;
  background: url("../assets/img/icon.svg") no-repeat;
  background-position: 44.56824512534819% 94.95798319327731%;
}
.smallhead img {
  display: block;
  width: 38px;
  height: 38px;
  border-radius: 5px;
}

.links {
  display: flex;
  align-items: center;
}
.links a {
  margin: 0 25px;
  display: inline-block;
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
}
.top-line {
  display: inline-block;
  width: 1px;
  height: 14px;
  background: rgba(0, 0, 0, 0.13);
  box-shadow: 1px 0 rgba(255, 255, 255, 0.22);
}
.info-more {
  margin: 0 14px;
  position: relative;
  cursor: pointer;
}
.info-more::before {
  /* 用来盖住的 */
  content: "";
  position: absolute;
  border: solid 5px transparent;
  border-top: solid 5px #398dee;
  top: -3px;
  z-index: 1;
}

.info-more::after {
  /* 被盖住的 */
  content: "";
  position: absolute;
  border: solid 5px transparent;
  border-top: solid 5px rgba(255, 255, 255, 0.7);
}
.widget-menu,
.account-config {
  position: absolute;
  display: none;
  top: 26px;
  left: -42px;
  width: 124px;
  text-align: left;
  line-height: 29px;
  font-size: 12px;
  color: #999;
  background: #fff;
  box-shadow: 0px 1px 16px 0 rgba(90, 109, 122, 0.41);
}
.widget-menu li,
.account-config li {
  padding: 0 20px;
}
.widget-menu > li:nth-child(4),
.widget-menu > li:last-child {
  border-top: solid 1px #eee;
}
.widget-menu li:hover,
.account-config li:hover {
  color: #398dee;
  background: rgb(244, 249, 255);
}
.account-config li:hover .account {
  position: relative;
}
.account {
  position: relative;
}
.account::after {
  content: "";
  position: absolute;
  top: 10px;
  right: 25px;
  border: 5px solid transparent;
  border-left: 4px solid #adb8c4;
}
.account-config {
  top: 0px;
  left: 111px;
}
.account:hover .account-config {
  display: block;
}
</style>