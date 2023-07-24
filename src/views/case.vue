<template>
    <div class="home-class-index7">
        <div class="top-image">
            <img :src="logo" alt="">
        </div>
        
        <div class="text-2">
            <span>{{ $t('case.text1') }}</span>
        </div>


        <div v-if="lang=='zh'" class="image-box">
            <img @mouseenter="mouseenter(1)" @mouseleave="mouseleave(1)" :src="active1?imga1:imgb1">
            <img @mouseenter="mouseenter(17)" @mouseleave="mouseleave(17)" :src="active17?imga17:imgb17">

            <img @mouseenter="mouseenter(2)" @mouseleave="mouseleave(2)" :src="active2?imga2:imgb2">
            <img @mouseenter="mouseenter(3)" @mouseleave="mouseleave(3)" :src="active3?imga3:imgb3">
            <img @mouseenter="mouseenter(4)" @mouseleave="mouseleave(4)" :src="active4?imga4:imgb4">
            <img @mouseenter="mouseenter(5)" @mouseleave="mouseleave(5)" :src="active5?imga5:imgb5">
            <img @mouseenter="mouseenter(6)" @mouseleave="mouseleave(6)" :src="active6?imga6:imgb6">
            <img @mouseenter="mouseenter(7)" @mouseleave="mouseleave(7)" :src="active7?imga7:imgb7">
            <img @mouseenter="mouseenter(8)" @mouseleave="mouseleave(8)" :src="active8?imga8:imgb8">
            <img @mouseenter="mouseenter(9)" @mouseleave="mouseleave(9)" :src="active9?imga9:imgb9">
            <img @mouseenter="mouseenter(10)" @mouseleave="mouseleave(10)" :src="active10?imga10:imgb10">
            <img @mouseenter="mouseenter(11)" @mouseleave="mouseleave(11)" :src="active11?imga11:imgb11">
            <img @mouseenter="mouseenter(12)" @mouseleave="mouseleave(12)" :src="active12?imga12:imgb12">
            <img @mouseenter="mouseenter(13)" @mouseleave="mouseleave(13)" :src="active13?imga13:imgb13">
            <img @mouseenter="mouseenter(14)" @mouseleave="mouseleave(14)" :src="active14?imga14:imgb14">
            <img @mouseenter="mouseenter(15)" @mouseleave="mouseleave(15)" :src="active15?imga15:imgb15">
            <img @mouseenter="mouseenter(16)" @mouseleave="mouseleave(16)" :src="active16?imga16:imgb16">







        </div>

        <div v-if="lang=='en'" class="image-box">
            <img @mouseenter="mouseenter(1)" @mouseleave="mouseleave(1)" :src="active1?enimga1:enimgb1">
            <img @mouseenter="mouseenter(2)" @mouseleave="mouseleave(2)" :src="active2?enimga2:enimgb2">
            <img @mouseenter="mouseenter(3)" @mouseleave="mouseleave(3)" :src="active3?enimga3:enimgb3">
            <img @mouseenter="mouseenter(4)" @mouseleave="mouseleave(4)" :src="active4?enimga4:enimgb4">
            <img @mouseenter="mouseenter(5)" @mouseleave="mouseleave(5)" :src="active5?enimga5:enimgb5">
            <img @mouseenter="mouseenter(6)" @mouseleave="mouseleave(6)" :src="active6?enimga6:enimgb6">
            <img @mouseenter="mouseenter(7)" @mouseleave="mouseleave(7)" :src="active7?enimga7:enimgb7">
            <img @mouseenter="mouseenter(8)" @mouseleave="mouseleave(8)" :src="active8?enimga8:enimgb8">
            <img @mouseenter="mouseenter(9)" @mouseleave="mouseleave(9)" :src="active9?enimga9:enimgb9">
            <img @mouseenter="mouseenter(10)" @mouseleave="mouseleave(10)" :src="active10?enimga10:enimgb10">
            <img @mouseenter="mouseenter(11)" @mouseleave="mouseleave(11)" :src="active11?enimga11:enimgb11">
            <img @mouseenter="mouseenter(12)" @mouseleave="mouseleave(12)" :src="active12?enimga12:enimgb12">
            <img @mouseenter="mouseenter(13)" @mouseleave="mouseleave(13)" :src="active13?enimga13:enimgb13">
            <img @mouseenter="mouseenter(14)" @mouseleave="mouseleave(14)" :src="active14?enimga14:enimgb14">
            <img @mouseenter="mouseenter(15)" @mouseleave="mouseleave(15)" :src="active15?enimga15:enimgb15">
            <img @mouseenter="mouseenter(16)" @mouseleave="mouseleave(16)" :src="active16?enimga16:enimgb16">
            <img @mouseenter="mouseenter(17)" @mouseleave="mouseleave(17)" :src="active17?enimga17:enimgb17">




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
        lang:"",


        active1:true,
        active2:true,
        active3:true,
        active4:true,
        active5:true,
        active6:true,
        active7:true,
        active8:true,
        active9:true,
        active10:true,
        active11:true,
        active12:true,
        active13:true,
        active14:true,
        active15:true,
        active16:true,
        active17:true,


        logo: require("./../assets/logo1.png"),
        logo2: require("./../assets/logo2.png"),
        logo3: require("./../assets/icon3.png"),


        imga1: require("./../assets/imga1.jpg"),
        imga2: require("./../assets/imga2.jpg"),
        imga3: require("./../assets/imga3.jpg"),
        imga4: require("./../assets/imga4.jpg"),
        imga5: require("./../assets/imga5.jpg"),
        imga6: require("./../assets/imga6.jpg"),
        imga7: require("./../assets/imga7.jpg"),
        imga8: require("./../assets/imga8.jpg"),
        imga9: require("./../assets/imga9.jpg"),
        imga10: require("./../assets/imga10.jpg"),
        imga11: require("./../assets/imga11.jpg"),
        imga12: require("./../assets/imga12.jpg"),
        imga13: require("./../assets/imga13.jpg"),
        imga14: require("./../assets/imga14.jpg"),
        imga15: require("./../assets/imga15.jpg"),
        imga16: require("./../assets/imga16.jpg"),
        imga17: require("./../assets/imga17.jpg"),



        imgb1: require("./../assets/imgb1.jpg"),
        imgb2: require("./../assets/imgb2.jpg"),
        imgb3: require("./../assets/imgb3.jpg"),
        imgb4: require("./../assets/imgb4.jpg"),
        imgb5: require("./../assets/imgb5.jpg"),
        imgb6: require("./../assets/imgb6.jpg"),
        imgb7: require("./../assets/imgb7.jpg"),
        imgb8: require("./../assets/imgb8.jpg"),
        imgb9: require("./../assets/imgb9.jpg"),
        imgb10: require("./../assets/imgb10.jpg"),
        imgb11: require("./../assets/imgb11.jpg"),
        imgb12: require("./../assets/imgb12.jpg"),
        imgb13: require("./../assets/imgb13.jpg"),
        imgb14: require("./../assets/imgb14.jpg"),
        imgb15: require("./../assets/imgb15.jpg"),
        imgb16: require("./../assets/imgb16.jpg"),
        imgb17: require("./../assets/imgb17.jpg"),




        enimga1: require("./../assets/enImaga1.jpg"),
        enimga2: require("./../assets/enImaga2.jpg"),
        enimga3: require("./../assets/enImaga3.jpg"),
        enimga4: require("./../assets/enImaga4.jpg"),
        enimga5: require("./../assets/enImaga5.jpg"),
        enimga6: require("./../assets/enImaga6.jpg"),
        enimga7: require("./../assets/enImaga7.jpg"),
        enimga8: require("./../assets/enImaga8.jpg"),
        enimga9: require("./../assets/enImaga9.jpg"),
        enimga10: require("./../assets/enImaga10.jpg"),
        enimga11: require("./../assets/enImaga11.jpg"),
        enimga12: require("./../assets/enImaga12.jpg"),
        enimga13: require("./../assets/enImaga13.jpg"),
        enimga14: require("./../assets/enImaga14.jpg"),
        enimga15: require("./../assets/enImaga15.jpg"),
        enimga16: require("./../assets/enImaga16.jpg"),
        enimga17: require("./../assets/enImaga17.jpg"),





        enimgb1: require("./../assets/enImagb1.jpg"),
        enimgb2: require("./../assets/enImagb2.jpg"),
        enimgb3: require("./../assets/enImagb3.jpg"),
        enimgb4: require("./../assets/enImagb4.jpg"),
        enimgb5: require("./../assets/enImagb5.jpg"),
        enimgb6: require("./../assets/enImagb6.jpg"),
        enimgb7: require("./../assets/enImagb7.jpg"),
        enimgb8: require("./../assets/enImagb8.jpg"),
        enimgb9: require("./../assets/enImagb9.jpg"),
        enimgb10: require("./../assets/enImagb10.jpg"),
        enimgb11: require("./../assets/enImagb11.jpg"),
        enimgb12: require("./../assets/enImagb12.jpg"),
        enimgb13: require("./../assets/enImagb13.jpg"),
        enimgb14: require("./../assets/enImagb14.jpg"),
        enimgb15: require("./../assets/enImagb15.jpg"),
        enimgb16: require("./../assets/enImagb16.jpg"),
        enimgb17: require("./../assets/enImagb17.jpg"),



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
        mouseenter(key){
            this[`active${key}`]=false
        },
        mouseleave(key){
            this[`active${key}`]=true
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
.home-class-index7{
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
    
    background-image: url("./../assets/back1.jpg");


    .image-box{
        // background-color: red;
        text-align: center;

        img{
            width: 70%;
            margin-bottom: 38px;
            cursor: pointer;
        }

        .image-index-1{
            // width: calc(3839px * 0.3);
            // height: calc(2160px * 0.3);
            background-image: url("./../assets/imga1.jpg");
        }
    }


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