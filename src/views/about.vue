<template>
    <div class="home-class-index3">
        <div class="top-image">
            <img :src="logo" alt="">
        </div>
        
        <div class="text-2">
            <span>{{ $t('about.text2') }}</span>
        </div>
        <div :class="`text-1 ${lang}`" style="margin-top: -16px;">
            {{ $t('about.text3') }}
        </div>

        <img class="imag-5" :src="logo5" alt="">
        <div :class="`text-1 ${lang}`" style="position:relative;top:-40px;">
            {{ $t('about.text4') }}
        </div>
        <img class="imag-6" :src="logo6" alt="">
        <div :class="`text-1 ${lang}`" style="position:relative;top:-40px;">
            {{ $t('about.text5') }}
        </div>
        <img class="imag-7" :src="logo7" alt="">
        <div :class="`text-1 ${lang}`" style="position:relative;top:-40px;">
            {{ $t('about.text6') }}
        </div>

        <div :class="`text-3 ${lang}`">
            <div @click="contactTo">
                <span>
                    {{ $t('about.text1') }}
                </span>
            </div>
        </div>


        <img class="right-top-logo" @click="toweb" :src="logo3" alt="">

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
        logo3: require("./../assets/icon3.png"),

        logo5: require("./../assets/icon5.png"),
        logo6: require("./../assets/icon6.png"),
        logo7: require("./../assets/icon7.png"),

        lang:'',
    }),
    created(){
        const _lang=localStorage.getItem("_lang")||"zh"
        this.lang=_lang
    },
    methods:{
        toweb(){
            this.$router.push("/web");
        },
        contactTo(){
            this.$router.push("/contact");

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
.home-class-index3{
    // position: relative;
    overflow-x: hidden;

    // position: relative;
    width: 100vw;
    height: 100vh;
    // background-repeat: round;
    background-position: 0px 0px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    // background-attachment: fixed;
    
    background-image: url("./../assets/back2.jpg");

    .imag-5{
        width: calc(296px * 0.3);
        height: calc(255px * 0.3);
    }

    .imag-6{
        width: calc(296px * 0.27);
        height: calc(255px * 0.27);
        margin-top: -38px;
    }

    .imag-7{
        width: calc(296px * 0.3);
        height: calc(255px * 0.3);
        margin-top: -40px;
    }

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
        margin-top: 50px;
        margin-bottom: 52px;
    }

    .text-3{
        position: relative;
        text-align: center;
        top: -32px;
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
}


</style>