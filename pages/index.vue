<template>
    <div>
        <header>
            <div class="inner" :style=" { left: this.state.burbox ? '0px' : '' }">
                <nav>
                    <ul>
                        <li>
                            <a href="#" @click.prevent="funcGoto('index')">首　頁</a>
                        </li>
                        <li>
                            <a href="#" @click.prevent="funcGoto('filter')">幫我選</a>
                        </li>
                        <li>
                            <a href="#" @click.prevent="funcGoto('inspired')">找餐廳</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div class="burBox">
                <a v-bind:class="{ bur: true, active: state.burbox }" @click.prevent="burboxClick($event)" @focusout="burboxFocusout($event)" href="javascript:void(0)">
                    <span></span>
                </a>
            </div>
            <!-- 改成從一個 Div 做 RWD -->
            <!-- <div id="sidebar" class="sidebar" :style="{ left: state.burbox ? '0px':'-250px'}">
            <a href="#" @click.prevent="funcGoto('index')">首　頁</a>
            <a href="#" @click.prevent="funcGoto('filter')">篩　選</a>
            <a href="#" @click.prevent="funcGoto('inspired')">找點子</a>                    
        </div> -->

        </header>
        <div class="wrap">
            <!-- 首頁 -->
            <section class="index">
                <div class="main">
                    <ul>
                        <li>
                            <img class="icon_kv" src="~assets/images/icon_kv.png" alt="">
                        </li>
                        <li>
                            <div class="txt">
                                <p>
                                    <span>What to eat</span>
                                    <span>for</span>
                                    <span>Lunch</span>
                                </p>
                            </div>

                        </li>
                        <li>
                            <a href="#" @click.prevent="funcGoto('filter')">
                                <img class="icon_arrow" src="~assets/images/icon_arrow.png" alt="">
                            </a>
                        </li>
                    </ul>

                </div>

            </section>
            <!-- 篩選 -->
            <section class="filter">
                <div class="main">
                    <div class="content" v-if="!state.random">
                        <ul>
                            <li>
                                <p class="tt">No Idea For Eating?</p>
                            </li>
                            <li>
                                <div class="txt">
                                    <p>
                                        <span>Do you ever fall into a lunch rut? Every week when planning my grocery list, I always pause when it comes to making a plan for the week's lunches. Turkey wraps again? It can be hard to find tasty and easy-to-prepare options that are also healthy.</span>
                                    </p>
                                </div>
                                <div class="setting" v-if="state.switch !== 'more'">
                                    <div class="dropdown" @click.prevent="dropdownClick($event)" @focusout="dropdownFocusout($event)" @focus="dropdownFocus($event)">
                                        <div class="select">
                                            <div class="inner">
                                                <span>{{state.filter.price || '價錢區間'}}
                                                </span>
                                                <img :src="getImgUrl('icon_select_down.png')" alt="">
                                            </div>
                                        </div>
                                        <ul class="dropdown-menu">
                                            <li @click.prevent="dropdownLiClick($event)" v-for="(item, index) in setting.price" :key="index" data-filter="price">
                                                {{ item }}
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="dropdown" @click.prevent="dropdownClick($event)" @focus="dropdownFocus($event)" @focusout="dropdownFocusout($event)">
                                        <div class="select">
                                            <div class="inner">
                                                <span>{{state.filter.purpose || '用餐目的'}}
                                                </span>
                                                <img :src="getImgUrl('icon_select_down.png')" alt="">
                                            </div>
                                        </div>
                                        <ul class="dropdown-menu">
                                            <li @click.prevent="dropdownLiClick($event)" v-for="(item, index) in setting.purpose" :key="index" data-filter="purpose">
                                                {{ item }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#" class="button" @click.prevent="funcGetRandom">
                                    隨便給我吃的
                                </a>
                            </li>
                            <li>
                                <a href="#" class='switch' @click.prevent="funcSwitch">
                                    {{state.switch}} setting</a>

                            </li>
                        </ul>
                    </div>
                    <div class="random" v-if="state.random">
                        <ul>
                            <li>
                                <img :src="getImgUrl(randombox.img)" alt="">
                            </li>
                            <li style="width:40px"></li>
                            <li>
                                <p class="tt">{{randombox.name}}</p>
                                <p>
                                    <span>價錢區間：</span>{{randombox.price}}</p>
                                <p>
                                    <span>電話：</span>待補</p>
                                <p>
                                    <span>地址：</span>待補</p>

                            </li>
                        </ul>
                        <a class="close" href="#" @click.prevent="funcGetRandom">
                            <img src="~assets/images/icon_close.png" alt="">close</a>
                    </div>

                </div>
            </section>
            <!-- 找點子 -->
            <section class="inspired">
                <div class="main">
                    <p class="tt">Restaurants List</p>
                    <div class="list">
                        <ul>
                            <li v-for="(item, index) in RestaurantsList" :key="index">
                                <div class="content">
                                    <a href="javascript:void(0)">
                                        <img :src="getImgUrl(item.img)" alt="">
                                        <p>{{ item.name }}</p>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
        </div>
        <footer>
            <div class="inner">
                <ul class="info">
                    <li>
                        <a href="http://webgene.com.tw/" target="_blank">
                            <img class="logo" src="~assets/images/footer_logo.jpg" alt="">
                        </a>
                    </li>
                    <li>
                        <span class="address">台北市106大安區忠孝東路四段325號9樓</span>
                    </li>
                </ul>

                <ul class="social">
                    <li>
                        <a href="http://blog.webgene.com.tw/" target="_blank">
                            <img src="~assets/images/icon_blog.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCfWD3sDng8soxhk1Y0pY7oA" target="_blank">
                            <img src="~assets/images/icon_youtube.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/WebGene" target="_blank">
                            <img src="~assets/images/icon_fb.png" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
	data() {
		return {
			// RestaurantsList: this.$store.state.RestaurantsList,
			image: {},
			setting: {
				price: ['便宜', '普通', '高價'],
				purpose: ['一般', '慶生', '聚餐'],
			},
			randombox: {
				id: '1',
				name: '廖嬌米粉湯',
				img: 'food_02.jpg',
				price: '普通',
				purpose: '一般',
			},
			state: {
				burbox: false,
				switch: 'more',
				random: false,

				filter: {
					price: '',
					purpose: '',
				},
			},
		};
	},
	computed: {
		// a computed getter
		RestaurantsList: function() {
			return this.$store.state.site.RestaurantsList;
		},
	},
	methods: {
		getImgUrl: function(name) {
			return require('../assets/images/' + name);
		},
		funcGoto(classname) {
			$('html, body').animate(
				{
					scrollTop:
						$('section.' + classname).offset().top +
						(window.innerWidth >= 768 ? -75 : 0),
				},
				400
			);
		},

		funcSwitch() {
			this.state.switch === 'more'
				? (this.state.switch = 'less')
				: (this.state.switch = 'more');
		},

		funcGetRandom() {
			let filterPrice = undefined;
			let filterPurpose = undefined;

			// 如果 setting switch 打開
			if (this.state.switch !== 'more') {
				filterPrice = this.state.filter.price;
				filterPurpose = this.state.filter.purpose;
			} else {
				// 如果 setting switch 未打開
				filterPrice = '';
				filterPurpose = '';
			}

			//整理與過濾資料
			let arrFiltered = this.RestaurantsList.filter(
				(item, index, array) => {
					return (
						item.price.indexOf(filterPrice) > -1 &&
						item.purpose.indexOf(filterPurpose) > -1
					);
				}
			);
			// 如果查無資料
			if (arrFiltered.length === 0) {
				alert('查無資料');
				return;
			}

			// 從陣列裡隨機取出一個, 並填到 this.randombox
			this.randombox =
				arrFiltered[Math.floor(Math.random() * arrFiltered.length)];

			//更改 random 顯示與不顯示
			this.state.random = !this.state.random;
			this.funcGoto('filter');
		},

		//Burbox 漢堡選單
		burboxClick(event) {
			let el = event.currentTarget;
			$(el)
				.attr('tabindex', 1)
				.focus();
			this.state.burbox = !this.state.burbox;
		},
		burboxFocusout(event) {
			let el = event.currentTarget;
			this.state.burbox = false;
		},
		// dropdown 下拉選單
		//點擊
		dropdownClick(event) {
			let el = event.currentTarget;
			$(el)
				.attr('tabindex', 1)
				.focus();
			$(el).toggleClass('active');

			$(el)
				.find('.dropdown-menu')
				.slideToggle(300);
		},
		// focus 改變圖片
		dropdownFocus(event) {
			let el = event.currentTarget;
			$(el)
				.find('.inner img')
				.attr('src', this.getImgUrl('icon_select_up.png'));
		},
		// focusout 改變圖片與收合
		dropdownFocusout(event) {
			let el = event.currentTarget;
			$(el).removeClass('active');
			$(el)
				.find('.inner img')
				.attr('src', this.getImgUrl('icon_select_down.png'));
			$(el)
				.find('.dropdown-menu')
				.slideUp(300);
		},
		// LiClick 更新資料
		dropdownLiClick(event) {
			let el = event.currentTarget;
			$(el)
				.parents('.dropdown')
				.find('span')
				.text($(el).text());
			$(el)
				.parents('.dropdown')
				.find('.inner img')
				.attr('src', this.getImgUrl('icon_select_down.png'));

			//更新到 data
			this.state.filter[$(el).data('filter')] = $(el)
				.text()
				.trim();
		},
	},
	created() {
		this.$store.dispatch('site/getRestaurantList');
	},
	mounted() {
        
       
    },
};
</script>

<style lang="scss">
// @import '~/assets/css/reset.css';
@import '~/assets/scss/index.scss';
</style>

