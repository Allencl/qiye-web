<template>
    <div class="home-class-index2">
        <div class="top-image">
            <img :src="logo" alt="">
        </div>
        
        <div>
            <ul :class="lang">
                <li @click="tohome"> {{ $t('web.text1') }}</li>
                <li @click="toAbout">{{ $t('web.text2') }}</li>
                <li @click="userTo">{{ $t('web.text3') }}</li>
                <li @click="caseTo">{{ $t('web.text4') }}</li>
                <li @click="joinTo">{{ $t('web.text5') }}</li>
            </ul>
            <!-- <a-row>
                <a-col :md="2">主页</a-col>
                <a-col :md="2">关于微续</a-col>
                <a-col :md="2">客户</a-col>
                <a-col :md="2">合作案例</a-col>
                <a-col :md="2">加入我们</a-col>

            </a-row> -->

        </div>


        <img class="right-top-logo1" @click="toweb" :src="logo3" alt="">

        <img class="left-bottom-logo" :src="logo2" alt="">

        <div :class="`bottom-right-btn ${lang}`">
            <span class="text" @click="langChange('en')">EN</span>
            <span>|</span>
            <span class="text" @click="langChange('zh')">中文</span>
        </div>

    </div>
</template>
<script>

  export default {
    data: () => ({
        logo: require("./../assets/logo1.png"),
        logo2: require("./../assets/logo2.png"),
        logo3: require("./../assets/icon4.png"),

        lang:"",

    }),
    created(){
        const _lang=localStorage.getItem("_lang")||"zh"
        this.lang=_lang
    },
    methods:{
        toweb(){
            this.$router.push("/");
        },
        tohome(){
            this.$router.push("/");
        },
        toAbout(){
            this.$router.push("/about");

        },
        userTo(){
            this.$router.push("/user");
        },
        caseTo(){
            this.$router.push("/case");

        },
        joinTo(){
            this.$router.push("/join");

        },
        // 多语言
        langChange(key=""){
            localStorage.setItem("_lang",key)
            location.reload()

        }
    }
  }
</script>
<style lang="less">
.home-class-index2{
    // position: relative;
    overflow-x: hidden;

    width: 100vw;
    height: 100vh;
    // background-repeat: round;
    background-position: 0px 0px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    // background-attachment: fixed;
    
    background-image: url("./../assets/back3.jpg");

    ul {
        list-style: none;
        margin-top: 120px;
        li{
            color: #fff;
            font-size: 0.9rem;
            cursor: pointer;
            display: inline-block;
            margin-left: 3vw;
            margin-right: 3vw;

        }
    }

    .text-1{
        color: #fff;
        font-size: 0.8rem;
        padding: 0px 30px;
        margin-top: 32px;
    }
    .text-1.zh{
      letter-spacing:4px; 
    }

    .text-2{
        color: #fe6a01;
        font-weight: bold;
        font-size: 1.8rem;
        letter-spacing:6px; 
        padding: 0px 30px;
        margin-top: 90px;
        margin-bottom: 52px;
    }

    .text-3{
        position: relative;
        text-align: center;
        margin-top: 32px;
        cursor: pointer;
        >div{
            display: inline-block;
            width: calc(363px * 0.3);
            height: calc(255px * 0.3);
            background-position: 0px 0px;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            // background-attachment: fixed;

            background-image: url("./../assets/border1.png");
        
            span{
                position: relative;
                top: 29px;
                color: #fff;
                font-size: 0.8rem;
                // letter-spacing:2px; 

            }
        }
        // >img{
        //     width: calc(363px * 0.3);
        //     height: calc(255px * 0.3);
        // }
        // span{
        //     display: inline-block;
        //     position: absolute;
        // }
    }


    ul.zh{
        li{
            font-family: zhLight !important;
        }
    }

    ul.en{
        li{
	        font-family: enLight;
        }
    }
}


</style>