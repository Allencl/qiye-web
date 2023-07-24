<template>
    <div class="home-class-index9">

        <div class="top-image">
            <img :src="logo" alt="">
        </div>
        
        <div v-if="lang=='zh'" class="text-2">
            <span>来</span>
            <img class="left-top-image" :src="imgLeftTop" alt="">
            <span>投续</span>
            <img class="right-top-image" :src="imgRightTop" alt="">

            <span>，让前路多一点</span>
            <img class="left-top-image" :src="imgLeftTop" alt="">

            <span>头绪</span>
            <img class="right-top-image" :src="imgRightTop" alt="">

        </div>

        <div v-if="lang=='en'" class="text-2">
            <span>JOIN WISH! AS YOU WISH!</span>
        </div>
        <div :class="`text-1 ${lang}`" style="margin-top: -16px;">
            {{ $t('join.text1') }}
        </div>
        <div :class="`text-1 ${lang}`" style="margin-top: 10px;">
            {{ $t('join.text2') }}
            
        </div>
        <div v-if="lang=='zh'" class="text-2">
            <span>大有可</span>
            <span style="color: #fff;">为</span>
            <span>，</span>
            <span style="color: #fff;">虚</span>
            <span>位以待</span>

        </div>
        <div v-if="lang=='en'" class="text-2">
            <span>Great Potential, Great Life</span>
        </div>


        <div :class="`text-3 ${lang}`">
            <div @click="contactTo">
                <span>
                    {{ $t('join.text3') }}
                </span>
            </div>
        </div>

        <div>

        </div>

        <a-row :class="`index-page-1-row ${lang}`">
            <a-col :xs="24" :sm="24" :md="24" :lg="8">
                <div class="card-bottom">
                    <!-- <img class="bg-1" :src="logo9" alt=""> -->
                    <div class="title">
                        <h5>{{ $t('join.text4') }}</h5>
                        <img :src="logoline" alt="">
                    </div>
                    <p>{{ $t('join.text7') }}:</p>
                    <ul>
                        <li>{{ $t('join.text9') }}</li>
                        <li>{{ $t('join.text10') }}</li>
                        <li>{{ $t('join.text11') }}</li>
                        <li>{{ $t('join.text12') }}</li>
                        <li>{{ $t('join.text13') }}</li>
                        <li>{{ $t('join.text14') }}</li>
                        <li>{{ $t('join.text15') }}</li>

    
                    </ul>
                    <p>{{ $t('join.text8') }}:</p>
                    <ul>
                        <li>{{ $t('join.text16') }}</li>
                        <li>{{ $t('join.text17') }}</li>
                        <li>{{ $t('join.text18') }}</li>

                    </ul>
                </div>
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="8">
                <div class="card-bottom">
                    <!-- <img class="bg-1" :src="logo9" alt=""> -->
                    <div class="title">
                        <h5>{{ $t('join.text5') }}</h5>
                        <img :src="logoline" alt="">
                    </div>
                    <p>{{ $t('join.text7') }}:</p>
                    <ul>
                        <li>{{ $t('join.text19') }}</li>
                        <li>{{ $t('join.text20') }}</li>
                        <li>{{ $t('join.text21') }}</li>
                        <li>{{ $t('join.text22') }}</li>

                    </ul>
                    <p>{{ $t('join.text8') }}:</p>
                    <ul>
                        <li>{{ $t('join.text23') }}</li>
                        <li>{{ $t('join.text24') }}</li>
                        <li>{{ $t('join.text25') }}</li>
                        <li>{{ $t('join.text26') }}</li>

                    </ul>
                </div>
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="8">
                <div class="card-bottom">
                    <!-- <img class="bg-1" :src="logo9" alt=""> -->
                    <div class="title">
                        <h5>{{ $t('join.text6') }}</h5>
                        <img :src="logoline" alt="">
                    </div>
                    <p>{{ $t('join.text7') }}:</p>
                    <ul>
                        <li>{{ $t('join.text27') }}</li>
                        <li>{{ $t('join.text28') }}</li>
                        <li>{{ $t('join.text29') }}</li>
                        <li>{{ $t('join.text30') }}</li>
                        <li>{{ $t('join.text31') }}</li>

                    </ul>
                    <p>{{ $t('join.text8') }}:</p>
                    <ul>
                        <li>{{ $t('join.text32') }}</li>
                        <li>{{ $t('join.text33') }}</li>

                    </ul>
                </div>
            </a-col>

        </a-row>


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

        logoline: require("./../assets/border8.png"),



        logo9: require("./../assets/border7.png"),

        imgLeftTop: require("./../assets/leftTop.png"),
        imgRightTop: require("./../assets/rightTop.png"),

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
.home-class-index9{
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

    .index-page-1-row{
        margin-bottom: 52px;
        > div.ant-col{
            text-align: center;
            padding: 0px 2%;
        }
    }

    .index-page-1-row.zh{
        .card-bottom{
            min-height: 496px;
            .title{
                h5{
                letter-spacing:6px; 
                font-family: zhBlack !important;


                }
            }

            p{
                font-family: zhLight !important;


            }
            li{
                font-family: zhLight !important;


            }
        }
    }

    .index-page-1-row.en{
        .card-bottom{
            min-height: 692px;

            .title{
                h5{
                    font-family: enBold !important;
                }
            }

            p{
                font-family: enLight !important;

            }
            li{
                font-family: enLight !important;

            }
        }
    }

    .left-top-image{
        width: calc(30px * 0.35);
        height: calc(58px * 0.35);  
        position: relative;
        top: -7px;
        margin-left: 8px;
        margin-right: 8px;
    }

    .right-top-image{
        width: calc(30px * 0.35);
        height: calc(58px * 0.35);  
        margin-left: 8px;
        margin-right: 8px;
    }



    .card-bottom{
        // background-color: antiquewhite;
        // width: 100%;
        // min-height: 200px;
        background-image: url("./../assets/border123.png");
        // background-position: 0px 0px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding-left: 38px;
        padding-right: 38px;
        padding-top: 28px;
        padding-bottom: 28px;
        position: relative;
        // background-color: #ccc;

        .bg-1{
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: 111;
        }


        .title{
            text-align: center;
            // margin-top: 32px;
            // padding-top: 22px;

            h5{
                text-align: center;
                color: #fe6a01;
                font-weight: bold;
                font-size: 0.8rem;
                // letter-spacing:6px; 
                margin: 0px;
                padding: 0px;
            }

            img{
                display: inline-block;
                width: calc(310px * 0.3);
                height: calc(9px * 0.3); 
            }
        }

        p{
            text-align: left;
            color: #fff;
            font-size: 0.7rem;
            margin-top: 18px;
            margin-bottom: 8px;
        }

        ul{
            padding: 0px;
            margin: 0px;
            li{
                padding: 0px;
                margin: 0px;
                color: #dcdcdc;
                text-align: left;
                list-style: none;
                display: block;
                font-size: 0.6rem;
                line-height: 22px;
             
            }
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