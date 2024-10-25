<template>
  <div>
    <div class="d-center">
      <div
        v-for="item in dataList"
        :key="item.id"
        class="phone-div"
        @click="toDetail(item.id)"
      >
        <div class="phone-img">
          <img :src="getImageUrl(item.url)" alt="" />
        </div>
        <div class="phone-title">
          <h3>{{ item.name }}</h3>
        </div>
        <div class="phone-div-column">
          <div class="degree">
            <div
              :style="{
                width:
                  (item.soldOut / (item.soldOut + item.residue)) * 100 + '%',
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-center control-div">
      <div class="control-bar">
        <button class="btn-pre" @click="prePage">
          <a href="#">&lt;&lt;上一页</a>
        </button>
        <button
          v-for="page in maxPageNum"
          :key="page"
          class="btn-page"
          :class="{ 'btn-dot': page === currentPage }"
          @click="redirectingPage(page)"
        >
          {{ page }}
        </button>
        <button class="btn-next" @click="nextPage">
          <a href="#">下一页&gt;&gt;</a>
        </button>
      </div>
      <div class="control-bar">
        <div class="words">共{{ maxPageNum }}页 到第</div>
        <input v-model="inputPage" type="text" @keyup.enter="toPage" />
        <div class="words">页</div>
        <button class="btn-confirm" @click="toPage">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {getCheckInfoAPI} from "../../api/list";

export default {
  data() {
    return {
      dataList: [],
      currentPage: 1,
      inputPage: 1,
      maxPageNum: 0,
    };
  },

  created() {
    this.currentPage = parseInt(this.getCurrentPageFromCookie());
    this.getAll(this.currentPage);
  },

  methods: {
    getAll(page) {
      getCheckInfoAPI(page).then((res) => {
        console.log(res);
        this.dataList = res.data.shopMsg;
        this.maxPageNum = res.data.pageNum;
      })
    },

    getImageUrl(url) {
      return url;
    },

    saveCurrentPage() {
      saveCurrentPageToCookie(this.currentPage);
    },

    getCurrentPageFromCookie() {
      let name = "currentPage=";
      let ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return 1; 
    },

    nextPage() {
      if (this.currentPage < this.maxPageNum) {
        this.currentPage += 1;
        this.saveCurrentPage();
        this.getAll(this.currentPage);
      } else {
        alert("已经是最后一页");
      }
    },

    prePage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
        this.saveCurrentPage();
        this.getAll(this.currentPage);
      } else {
        alert("当前页为第一页");
      }
    },

    toPage() {
      this.redirectingPage(this.inputPage);
    },

    redirectingPage(page) {
      if (page <= this.maxPageNum) {
        this.currentPage = parseInt(page);
        this.getAll(this.currentPage);
        this.saveCurrentPage();
      } else {
        alert("未找到第" + page + "页");
      }
    },

    toDetail(id) {
      axios.post("/shop/toDetail/" + id).then((res) => {
        if (res.data.isOk === 1) {
          window.location.href =
            "/ShoppingPage_war_exploded/detail.html" + "?id=" + id;
        }
      });
    },
  },
};

function saveCurrentPageToCookie(page) {
  let d = new Date();
  d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000); 
  let expires = "expires=" + d.toUTCString();
  document.cookie = "currentPage=" + page + "; " + expires + "; path=/";
}
</script>

<style></style>
