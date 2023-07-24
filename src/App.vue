<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->

  <!-- <keep-alive>
    <router-view/>
  </keep-alive> -->
  <div :class="`global-html ${lang}`">

    <router-view class="router-view" v-slot="{ Component }">
    <transition name="fade-transform" mode="out-in">
        <component :is="Component" />
    </transition>
</router-view>
  
  </div>



</template>
<script>
import 'animate.css/animate.min.css' 
  export default {
    data: () => ({


        lang:"",

    }),
    created(){
        const _lang=localStorage.getItem("_lang")||"zh"
        this.lang=_lang
    },
    methods:{
      build_router_transitionname (name){
        return (name === undefined ? '' : name)
      }
    }
  }
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  font-size: 12px;
}

@media only screen and (min-width: 768px) {
  html {
    font-size: 14px;
  }
}
@media only screen and (min-width: 1200px) {
  html {
    font-size: 16px;
  }
}



.top-image img{
   width: calc(295px * 0.3);
   height: calc(255px * 0.3);
   margin-top: 12px;
}

.right-top-logo{
  position: absolute;
  top: 16px;
  right: 20px;
  z-index: 11;
  width: calc(200px * 0.10);
   height: calc(200px * 0.10);
   cursor: pointer;
   display: inline-block;

}

.right-top-logo1{
  position: absolute;
  top: 14px;
  right: 24px;
  z-index: 11;
  width: calc(200px * 0.13);
   height: calc(200px * 0.13);
   cursor: pointer;
   display: inline-block;

}


.left-bottom-logo{
  position: absolute;
  left: 16px;
  bottom: 0px;
  width: calc(296px * 0.3);
   height: calc(255px * 0.3);
   z-index: 11;
}

.bottom-right-btn{
  display: inline-block;
  position: absolute;
  right: 22px;
  bottom: 28px;
  z-index: 11;
  color: #fff;
  font-size: 0.8rem;

  span.text{
    position: relative;
    top: 1px;
    padding-left: 2px;
    padding-right: 2px;
    cursor: pointer;
  }

}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.bottom-right-btn.zh{
  font-family: zhLight !important;

  :nth-child(3){
    color: #fe6a01;
  }
}

.bottom-right-btn.en{
  font-family: enLight !important;

  :nth-child(1){
    color: #fe6a01;
  }
}


.text-3.en{
  >div{
    width: calc(363px * 0.4) !important;
  }
}
.text-3.zh{
  >div{
    span{
      letter-spacing:5px; 
      position: relative;
      left: 3px;
    }
  }
}


@font-face{
	font-family: zhBlack;
	src:url( './font/zh/HarmonyOS_Sans_SC_Black.ttf' ) 
}

@font-face{
	font-family: zhLight;
	src:url( './font/zh/HarmonyOS_Sans_SC_Light.ttf' ) 
}

@font-face{
	font-family: enBold;
	src:url( './font/en/Poppins-Bold.ttf' ) 
}

@font-face{
	font-family: enLight;
	src:url( './font/en/Poppins-Light.ttf' ) 
}

.global-html.zh{
  .text-2{
    font-family: zhBlack !important;
  }
  .text-1{
    font-family: zhLight !important;
  }
  .text-3{
    font-family: zhLight !important;
  }
}

.global-html.en{
  .text-2{
    font-family: enBold !important;
  }
  .text-1{
    font-family: enLight !important;
  }
  .text-3{
    font-family: enLight !important;
  }
}

html{
  background-color: #000;
  overflow-x: hidden;
}

.fade-transform-leave-active,
.fade-transform-enter-active {
    transition: all 0.5s;
}
.fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
}
.fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
}


</style>
