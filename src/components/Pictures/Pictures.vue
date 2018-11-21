<template>

  <div class="PicContainer"> 
     
		  <!-- 图片分类列表 -->
      <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll" >
						<a :class="['mui-control-item' ,item.id===0?'mui-active':'']"  v-for="item of category" :key="item.id">
							{{item.title}}
						</a>
					</div>
				</div>
			</div>
			<!-- 图片列表 -->
			<ul class="imagesList">
				<li class='imageItem' v-for="item in images" :key="item.id">
						<img v-lazy="item.img_url">
						<div class="info">
								<h1 class="info-title">{{ item.title }}</h1>
								<div class="info-body">{{ item.zhaiyao }}</div>
        		</div>
				</li>
			</ul>

  </div>

</template>

<script>
import axios from 'axios'
import mui from '@/assets/lib/mui/js/mui.min.js'


export default {
  name:'Pictures',
  components:{},
  props:{},
  data(){
    return {
			cateid: 0,
			category : [],
			images : []
    }
  },
  watch:{},
  computed:{},
  methods:{
			//获取图片分类列表数据
		getImgcategory(){
			let firstC = {
				id:0,
				title:"全部"
			}
			axios.
			get('api/b/getimgcategory')
			.then(res=>{
				 var res = res.data 
				 if(res.status ===0){
					 this.category = res.message 
					 this.category.unshift(firstC)	 
				 }
				 
			})
		},
		//获取图片列表数据
		getImages(cateid){
			axios
			.get('api/b/getimages/'+cateid)
			.then(res=>{
					var data = res.data
					if(data.status === 0) {
						this.images = data.message
					}
					

			})

		}


	},
  created(){
		this.getImgcategory()

	},
  mounted(){
				mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005,			 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.000
			startX: 0, //初始化时滚动至x
			scrollX: true
		})
				this.getImages(this.cateid)
	}
}
</script>
<style lang="stylus"  scoped>
	* { touch-action: none; }
	.imagesList
		margin-top .2rem 
		padding 0 .2rem
		.imageItem
			background #888
			margin .1rem .1rem
			position relative
			.info
				position absolute
				bottom .1rem
				color #fff
				background rgba(0, 0, 0, 0.4)
				max-height: 84px
				text-align left
				padding 0.1rem .12rem
				overflow hidden
				.info-title
					font-size .3rem
					font-weight bold
					margin-bottom 0.23rem	
				.info-body
					font-size .2rem
					line-height .35rem
					
			img
				width 100% 
				vertical-align middle
	img[lazy=loading] 
		width: 40px
		height: 300px
		margin: auto
		background #777
	.PicContainer
		background #fff

</style>