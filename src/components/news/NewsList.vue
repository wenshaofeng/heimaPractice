<template>

  <div class='newsContainer'>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media"  v-for="item of list" :key="item.id">
        <router-link :to="'/Main/NewsList/NewsInfo/'+ item.id" >
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            {{item.title}}
            <p class='mui-ellipsis'>                    
                <span class="mui-ellipsis-left">发表时间 {{item.add_time| dateFormat() }}</span>
                <span class="mui-ellipsis-right">点击 {{item.click}} 次</span> 
            </p>
          </div>
        </router-link>
      </li>

    </ul>
  </div>

</template>
  
<script>
import axios from "axios";
export default {
  name: "NewsList",
  components: {},
  props: {},
  data() {
    return {
      list: []
    };
  },
  methods: {
    getNewsList() {
      axios.get("api/b/getnewslist").then(res => {
        if (res.data.status === 0) {
          this.list = res.data.message;
        }
      });
    }
  },

  mounted() {
    this.getNewsList();
  }
};
</script>
<style lang="stylus" scoped>
  .mui-table-view-cell {
  background: #fff;

  .mui-pull-left {
    width: 100%;
  }

  .mui-media-body {
    font-size: 0.3rem;
    font-weight: bold;

    .mui-ellipsis {
      margin-top: 0.3rem;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}


</style>