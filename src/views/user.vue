<template>
    <div class="home-class-index5">
        <div class="top-image">
            <img :src="logo" alt="">
        </div>
        
        <div class="text-2">
            <span>{{ $t('user.text1') }}</span>
        </div>


        <div :class="`text-1 ${lang}`" style="position:relative;top:-20px;">
            {{ $t('user.text2') }}
        </div>

        <ul>
            <li>
                <img class="user-image-1" :src="user1" alt="">
            </li>
            <li>
                <img class="user-image-2" :src="user2" alt="">

            </li>
            <li>
                <img class="user-image-3" :src="user3" alt="">

            </li>
            <li>
                <img class="user-image-4" :src="user4" alt="">

            </li>
        </ul>
        <ul>
            <li>
                <img class="user-image-5" :src="user5" alt="">
            </li>
            <li>
                <img class="user-image-6" :src="user6" alt="">

            </li>
            <li>
                <img class="user-image-7" :src="user7" alt="">

            </li>
            <li>
                <img class="user-image-8" :src="user8" alt="">

            </li>
        </ul>
        <ul>
            <li>
                <img class="user-image-9" :src="user9" alt="">
            </li>
            <li>
                <img class="user-image-10" :src="user10" alt="">

            </li>
            <li>
                <img class="user-image-11" :src="user11" alt="">

            </li>
            <li>
                <img class="user-image-12" :src="user12" alt="">

            </li>
        </ul>
        <ul>
            <li>
                <img class="user-image-13" :src="user13" alt="">
            </li>
            <li>
                <img class="user-image-14" :src="user14" alt="">
            </li>
            <li>
                <img class="user-image-15" :src="user15" alt="">
            </li>
            <li>
                <img class="user-image-16" :src="user16" alt="">
            </li>
        </ul>


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

        logo5: require("./../assets/icon11.png"),
        logo6: require("./../assets/icon22.png"),
        logo7: require("./../assets/icon33.png"),



        user1: require("./../assets/user1.png"),
        user2: require("./../assets/user2.png"),
        user3: require("./../assets/user3.png"),
        user4: require("./../assets/user4.png"),

        user5: require("./../assets/user5.png"),
        user6: require("./../assets/user6.png"),
        user7: require("./../assets/user7.png"),
        user8: require("./../assets/user8.png"),


        user9: require("./../assets/user9.png"),
        user10: require("./../assets/user10.png"),
        user11: require("./../assets/user11.png"),
        user12: require("./../assets/user12.png"),

        user13: require("./../assets/user13.png"),
        user14: require("./../assets/user14.png"),
        user15: require("./../assets/user15.png"),
        user16: require("./../assets/user16.png"),

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
        // 多语言
        langChange(key=""){
            localStorage.setItem("_lang",key)
            location.reload()

        }
    }
  }
</script>
<style lang="less">
.home-class-index5{
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
        position: relative;
        top: -8px;
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
        text-align: center;
        width: 100%;
        margin: 0px;
        li{
            display: inline-block;
            position: relative;
            // float: left;
            width: calc(934px * 0.3);
            height: calc(364px * 0.3);
            background-position: 0px 0px;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-image: url("./../assets/border5.png");
            margin: 0px !important;
            padding: 0px !important;
            // img{
            //     width: 100%;
            //     height: 100%;
            // }

        }
        // margin-top: 120px;
        // li{
        //     color: #fff;
        //     font-size: 0.9rem;
        //     cursor: pointer;
        //     display: inline-block;
        //     margin-left: 3vw;
        //     margin-right: 3vw;

        // }
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
        // line-height: 22px;
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


    .user-image-1{
        width: calc(299px * 0.36);
        height: calc(299px * 0.36);  
        position: absolute;
        top: 3px;
        left: 92px;
    }

    .user-image-2{
        width: calc(3957px * 0.048);
        height: calc(380px * 0.048);  
        position: absolute;
        top: 52px;
        left: 47px;
    }

    .user-image-3{
        width: calc(507px * 0.41);
        height: calc(244px * 0.41);  
        position: absolute;
        top: 7px;
        left: 35px;
    }

    .user-image-4{
        width: calc(727px * 0.18);
        height: calc(293px * 0.18);  
        position: absolute;
        top: 31px;
        left: 76px;
    }

    .user-image-5{
        width: calc(2797px * 0.075);
        height: calc(1183px * 0.075);  
        position: absolute;
        top: 14px;
        left: 44px;  
    }

    .user-image-6{
        width: calc(254px * 0.65);
        height: calc(143px * 0.65);  
        position: absolute;
        top: 10px;
        left: 64px;  
    }

    .user-image-7{
        width: calc(2968px * 0.062);
        height: calc(1393px * 0.062);   
        position: absolute;
        top: 16px;
        left: 48px;   
    }

    .user-image-8{
        width: calc(120px * 1.05);
        height: calc(60px * 1.05);   
        position: absolute;
        top: 30px;
        left: 86px;  
    }

    .user-image-9{
        width: calc(768px * 0.15);
        height: calc(432px * 0.15);   
        position: absolute;
        top: 24px;
        left: 92px;  
    }

    .user-image-10{
        width: calc(8587px * 0.021);
        height: calc(2836px * 0.021);   
        position: absolute;
        top: 30px;
        left: 59px;  
    }

    .user-image-11{
        width: calc(1687px * 0.09);
        height: calc(517px * 0.09);   
        position: absolute;
        top:36px;
        left: 70px;  
    }

    .user-image-12{
        width: calc(1301px * 0.10);
        height: calc(562px * 0.10);   
        position: absolute;
        top: 30px;
        left: 80px;  
    }

    .user-image-13{
        width: calc(272px * 0.55);
        height: calc(67px * 0.55);   
        position: absolute;
        top: 40px;
        left: 68px;  
    }

    .user-image-14{
        width: calc(878px * 0.24);
        height: calc(76px * 0.24);   
        position: absolute;
        top: 50px;
        left: 36px;  
    }

    .user-image-15{
        width: calc(388px * 0.36);
        height: calc(88px * 0.36);   
        position: absolute;
        top: 41px;
        left: 70px;  
    }

    .user-image-16{
        width: calc(575px * 0.56);
        height: calc(324px * 0.56);   
        position: absolute;
        top: -34px;
        left: -22px;  
    }
}


</style>