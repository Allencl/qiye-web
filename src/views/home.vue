<template>
    <div class="home-class-index1">
        <div class="top-image">
            <img :src="logo" alt="">
        </div>
        <div v-if="lang=='zh'" class="text-2">
            <span>前所</span>
            <span style="color: #fff;">微</span>
            <span>有，</span>
            <span>如你所愿</span>
        </div>
        <div v-if="lang=='en'" class="text-2">
            <span>AS YOU WISH</span>
        </div>

        <div v-if="lang=='zh'" :class="`text-1 ${lang}`">
            上海微续文化传播有限公司是一家为品牌提供营销主线、执行战略等概念性方案，并进行落地执行、操作细则、操作方案内容的全方位线下活动策划公司。
        </div>
        <div v-if="lang=='zh'" :class="`text-1 ${lang}`">
            自成立以来，我们始终致力于为客户提供以结果为导向/以创意和体验为核心价值的一站式营销传播解决方案。
        </div>

        <div v-if="lang=='en'" :class="`text-1 ${lang}`">
            SHANGHAI WISH CULTURE CO., LTD. is an all-round BTL event planning company that provides conceptual plans such as marketing lines and 
        </div>
        <div v-if="lang=='en'" :class="`text-1 ${lang}`">
            implementation strategies for brands, and implements implementation, detailed operating rules, 
        </div>
        <div v-if="lang=='en'" :class="`text-1 ${lang}`">
            and content of operating plans. Since our establishment, we have always been committed to providing customers 
        </div>
        <div v-if="lang=='en'" :class="`text-1 ${lang}`">
            with one-stop marketing communication solutions that are result-oriented/creativity and experience-oriented.
        </div>

        <div :class="`text-3 ${lang}`">
            <div @click="contactTo">
                <span>
                    {{ $t('home.text1') }}
                </span>
            </div>
        </div>


        <img @click="toweb" class="right-top-logo" :src="logo3" alt="">

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

        lang:"",

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
.home-class-index1{
    // position: relative;
    overflow-x: hidden;

    width: 100vw;
    height: 100vh;
    // background-repeat: round;
    background-position: 0px 0px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    // background-attachment: fixed;
    
    background-image: url("./../assets/back2.jpg");


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
}


</style>