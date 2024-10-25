<template>
  <div>
    <div class="nav_div">
      <div class="d-between">
        <div class="navL">坤坤的人才市场欢迎您！</div>
        <div class="navR">
          <ul>
            <li>
              <a href="http://124.221.30.104:81">坤坤看片网站</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="head d-between">
      <div class="logo">
        <img src="../../assets/img/bg.jpg" />
      </div>
      <button @click="toTroll" class="image-update">
        <span class="update">&#xea32;&nbsp;</span>
        <span>上传本地图片</span>
      </button>
    </div>
    <div class="advertisement"></div>
    <hr class="red-line" />
  </div>
</template>

<script>
export default {
  methods: {
    toTroll() { },
  },
};
</script>

<style lang="less">
@font-face {
  font-family: "icomoon";
  src: url("../../assets/fonts/icomoon.eot");
  src: url("../../assets/fonts/icomoon.eot") format("embedded-opentype"),
    url("../../assets/fonts/icomoon.ttf") format("truetype"),
    url("../../assets/fonts/icomoon.woff") format("woff"),
    url("../../assets/fonts/icomoon.svg") format("svg");
  font-weight: normal;
  font-style: normal;
} 

* {
  margin: 0;
  padding: 0;
}

em,
i {
  font-style: normal;
}

li {
  list-style: none;
}

img {
  border: 0;
  /*ie6*/
  vertical-align: middle;
}

button {
  cursor: pointer;
}

a {
  color: #666;
  text-decoration: none;
}

a:hover {
  color: #e33333;
}

button,
input {
  font-family: "Microsoft YaHei", "Heiti SC", tahoma, arial, "Hiragino Sans GB",
    \\5B8B\4F53, sans-serif;
  outline: none;
}

body {
  background-color: #fff;
  font: 12px/1.5 "Microsoft YaHei", "Heiti SC", tahoma, arial,
    "Hiragino Sans GB", \\5B8B\4F53, sans-serif;
  color: #666;
}

.hide,
.none {
  display: none;
}

.clearfix:after {
  visibility: hidden;
  clear: both;
  display: block;
  content: ".";
  height: 0;
}

.clearfix {
  zoom: 1;
}

.nav_div {
  width: 100vw;
  height: 30px;
  background-color: rgba(241, 241, 241, 1);
  line-height: 30px;
}

.d-center {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
}

.d-between {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-between;
}

.navL {
  margin-left: 2vw;
  float: none;
}

.navR {
  margin-right: 2vw;
  float: none;
}

.style-red {
  color: rgba(200, 27, 39, 1);
}

.navR li {
  float: left;
}

.navR a {
  border-right: 1px solid rgba(111, 111, 111, 1);
  padding: 0px 10px 0px 10px;
}

.navR .style-border-none {
  border: 0px;
}

.navR .downArrow {
  font-family: "icomoon";
  font-size: 16px;
  line-height: 25px;
}

.head {
  height: 100px;
}

.logo {
  width: 1400px;
  height: 450px;
  margin: 20px 0 0 0px;
  float: left;
  cursor: pointer;
  img{
    width: 100%;
    height: 100%;
  }
}

.head-search {
  width: 450px;
  height: 60px;
  float: left;
  margin: 20px 0 0 180px;
}

.head-search input {
  width: 380px;
  height: 30px;
  border: 1.5px solid rgba(177, 25, 26, 1);
  padding: 0 0 0 10px;
  float: left;
}

.head-search button {
  width: 57px;
  height: 33px;
  border: 1.5px solid rgba(177, 25, 26, 1);
  background-color: rgba(177, 25, 26, 1);
  color: white;
  float: left;
}

.head-search ul {
  float: left;
}

.head-search li {
  float: left;
  margin: 5px 0 0 15px;
}

.image-update {
  width: 130px;
  height: 35px;
  margin-top: 25px;
  /* 将组件推到中间 */
  margin-right: 2vw;
  border: 1px solid rgba(223, 223, 223, 1);
  background-color: rgba(252, 252, 252, 1);
  text-align: center;
  line-height: 32px;
}

.image-update:hover {
  background-color: rgba(247, 247, 247, 1);
}

.update {
  font-family: "icomoon";
  color: rgba(196, 0, 0, 1);
}

.right-arrow {
  font-family: "icomoon";
  font-size: 12px;
}

.count {
  width: 20px;
  height: 16px;
  line-height: 16px;
  position: relative;
  display: block;
  background-color: rgba(196, 0, 0, 1);
  color: white;
  border-radius: 50% 50% 50% 0;
  margin: -43px 0 0 100px;
}

.goods-title {
  float: left;
  margin: -30px 0 0 0;
}

.goods-title li {
  float: left;
  width: 90px;
  height: 30px;
  font-weight: bold;
  line-height: 30px;
  text-align: center;
}

.right-arrow {
  font-family: "icomoon";
  font-size: 12px;
}

.downArrow {
  font-family: "icomoon";
  font-size: 16px;
  line-height: 25px;
}

.red-line {
  max-width: 1200px;
  border: 1px solid rgba(196, 0, 0, 1);
  margin: 0px auto;
}

.advertisement {
  height: 200px;
  width: auto;
  max-width: 2460px;
  background: url(../img/bg.jpg) no-repeat;
  background-size: 100%;
  margin: 0px auto;
}

.phone-div {
  width: 288px;
  height: 420px;
  cursor: pointer;
  /*将指针变为手指样式 */
  border: 1px solid rgba(235, 235, 235, 150);
  float: left;
  margin: 20px 5px 0 5px;
}

.phone-div:hover {
  border: 1px solid red;
}

.phone-img {
  width: 288px;
  height: 370px;
  overflow: hidden;
}

.phone-img img {
  width: 100%;
  height: auto;
}

.phone-title {
  font-size: 14px;
  float: left;
  margin: 0 0 8px 0;
  padding: 0 6px 0 6px;
}

.phone-div-column {
  width: 100%;
  float: left;
  margin: -3px auto;
}

.degree {
  float: left;
  width: 130px;
  height: 10px;
  border: 1px solid rgba(177, 25, 26, 1);
  margin: 3px 5px 0 5px;
  border-radius: 6px;
  overflow: hidden;
  /* 隐藏超出部分 */
}

.degree div {
  float: left;
  height: 100%;
  background-color: rgba(242, 67, 73, 1);
  border-radius: 6px 0 0 6px;
}

.phone-div a {
  color: white;
}

.phone-div a:hover {
  color: red;
}

.control-div {
  text-align: center;
}

.control-bar {
  display: flex;
  width: 1200px;
  height: 40px;
  margin: 100px auto 20px auto;
  justify-content: center;
  align-items: baseline;
}

.btn-pre,
.btn-next {
  height: 40px;
  width: 80px;
  background-color: rgba(247, 247, 247, 1);
  border: 1px solid rgba(204, 204, 204, 1);
  margin: 0 2px 0 2px;
}

.btn-page {
  width: 40px;
  height: 40px;
  border: 1px solid rgba(204, 204, 204, 1);
  background-color: rgba(247, 247, 247, 1);
  margin: 0 2px 0 2px;
}

.btn-dot {
  width: 40px;
  height: 40px;
  border: 0px solid rgba(204, 204, 204, 1);
  background-color: rgba(247, 247, 247, 0);
  cursor: text;
  margin: 0 2px 0 2px;
}

.words {
  float: left;
  height: 40px;
  line-height: 40px;
  margin: 0 0 0 5px;
}

.control-bar input {
  float: left;
  height: 40px;
  width: 40px;
  margin: 0 5px 0 5px;
  border: 1px solid rgba(204, 204, 204, 1);
  text-align: center;
  transition: all 0.5s;
}

.control-bar input:focus {
  width: 60px;
  border: 1px solid rgba(14, 188, 215, 1);
}

.btn-confirm {
  float: left;
  height: 40px;
  width: 50px;
  margin: 0 0 0 5px;
  border: 1px solid rgba(204, 204, 204, 1);
  background-color: rgba(247, 247, 247, 1);
}

.bottom {
  float: left;
  height: 300px;
  width: 100%;
  background-color: rgba(245, 245, 245, 1);
}

.bottom-top {
  float: left;
  height: 100px;
  width: 100%;
  background-color: rgba(245, 245, 245, 1);
  border-bottom: 1px solid rgba(217, 217, 217, 1);
}

.bottom-top li {
  width: 180px;
  float: left;
  margin: 20px 55px 0 55px;
}

.bottom-top ul {
  height: 100px;
  border-bottom: 1px solid rgba(217, 217, 217, 1);
}

.bottom-top li h3 {
  float: left;
}

.bottom-top li span {
  float: left;
}

.bottom-center {
  float: left;
  height: 180px;
  width: 100%;
  background-color: rgba(245, 245, 245, 1);
  border-bottom: 1px solid rgba(211, 211, 211, 1);
}

.help-div {
  width: 100px;
  margin: 10px 30px 0 60px;
  float: left;
}

.help-div p {
  font-size: 17px;
}

.help-code {
  float: right;
  width: 100px;
  margin: 10px 50px 0 0;
}

.help-code p {
  font-size: 16px;
  text-align: center;
}

.help-code div {
  text-align: center;
}

.readme-div {
  float: left;
  height: 120px;
  width: 100%;
  background-color: rgba(245, 245, 245, 1);
  border-bottom: 1px solid rgba(211, 211, 211, 1);
}

.readme-div ul {
  float: left;
  margin: 20px 0 20px 220px;
}

.readme-div li {
  float: left;
  margin: 0 2px 0 2px;
}

.readme-div p {
  float: left;
  width: 100%;
  text-align: center;
}

.phone-link {
  color: white;
  transition: all 0.5s;
}

/* 适用于Pixel 7的屏幕样式 */
@media only screen and (max-width: 1080px) and (max-height: 2400px) {
  .d-center {
    width: 100vw;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
  }

  .d-between {
    width: 100vw;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: space-between;
  }

  .control-bar {
    display: flex;
    width: 100vw;
    height: 40px;
    margin: 100px auto 20px auto;
    justify-content: center;
    align-items: baseline;
  }

  .logo {
    width: 100px;
    height: 60px;
    margin: 20px 0 0 0px;
    float: left;
    cursor: pointer;
  }

  .advertisement {
    width: 101%;
    background: url(../img/bg.jpg) no-repeat;
    background-size: 100%;
    margin: 0px auto;
  }

  .phone-div {
    width: 31vw;
    height: 180px;
    cursor: pointer;
    /*将指针变为手指样式 */
    border: 1px solid rgba(235, 235, 235, 150);
    float: left;
    margin: 20px 0 0 1.5vw;
  }

  .phone-div:hover {
    border: 1px solid red;
  }

  .phone-img {
    width: 31vw;
    height: 130px;
    overflow: hidden;
  }

  .phone-img img {
    width: 100%;
    height: auto;
  }

  .degree {
    display: none;

    /*
    float: left;
    width: 130px;
    height: 10px;
    border: 1px solid rgba(177, 25, 26, 1);
    margin: 3px 5px 0 5px;
    border-radius: 6px;
    overflow: hidden;*/
  }

  .degree div {
    display: none;

    /*
    float: left;
    height: 100%;
    background-color: rgba(242, 67, 73, 1);
    border-radius: 6px 0 0 6px;*/
  }
}
</style>
