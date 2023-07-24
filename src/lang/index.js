import { createI18n } from 'vue-i18n'

const _lang=localStorage.getItem("_lang")||"zh"

export default createI18n({ 
  legacy: false, // 让 setup 函数可以通过 t 访问
  globalInjection: true, // 让 template 可以像 vue2 那样使用 $t 来访问
  locale: _lang,
  fallbackLocale: 'zh',
  messages: {
    'zh': {
      join: {
        text1: '我们始终坚信，一个人也许会成为随波逐流的水滴，一群人终将成为鼓动波澜的浪花，闪耀不凡。',
        text2: "期待拥有无限创意的你，带着热情加入我们。",
        text3:'联系我们',
        text4:'活动策划',
        text5:'3D设计师',
        text6:'市场经理',
        text7:'岗位职责',
        text8:'任职资格',

        text9:"1. 负责各类会展及活动的策划方案、创意、提案；",
        text10:"2. 负责公司日常文案类项目的拟写工作；",
        text11:"3. 负责通过分析品牌，根据品牌、产品、人群受众等寻找洞察，准确把握客户要求，提供精准且差异化的策略及核心创意；",
        text12:"4. 根据创意方案要求，收集、整理创意所需的参考资料；",
        text13:"5. 参与项目的创意构思、文案及客户提案, 给予前期提案、设计创意说明；",
        text14:"6. 稿件思路清晰，能够完成稿件写作思路规划；",
        text15:"7. 拥有独立完成方案的撰写和提案能力。",
        text16:"1. 1年以上线下活动的专案策划经验，有汽车品牌服务和策划的经验者优先考虑；",
        text17:"2. 创意能力强、思维敏捷、文笔流畅，善于沟通、具有良好的语言表达能力；",
        text18:"3. 熟练运用各项办公软件，特别是PPT的制作。",

        text19:"1、能独立完成品牌活动及展会的设计创意；",
        text20:"2、能根据CD/AD的说明，完全理解Brief内容，熟练运用3Dmax 、AUTOCAD、ILLUSTRATOR、PHOTOSHOP等绘图软件，能够独立完成效果图的建模、渲染，后期等工作；",
        text21:"3、有创意理念，良好的设计能力和学习能力，有团队精神，善于沟通；",
        text22:"4、参与项目的设计创意发想。",
        text23:"1. 美术、设计、视觉传达等相关专业大专以上学历；",
        text24:"2. 熟练运用3dmax,photoshop,CAD等设计软件，独立完成建模、渲染、贴图；",
        text25:"3. 具有一定的创意及表达能力，有责任心，能按时完成工作目标；",
        text26:"4. 有良好的职业道德及团队合作精神。",


        text27:"1.按照部门要求，针对客户所需数据等进行分发、收集、分析；",
        text28:"2.跟踪重点项目的发展变化，对业务经营发展状态进行分析。",
        text29:"3.通过数理统计方法，为业务搭建数据报告",
        text30:"4.踏实认真，愿意深入了解业务",
        text31:"5.完成上级领导的其他工作。",
        text32:"1.有4A公司汽车品牌区域代理经验、豪华汽车品牌4S店市场经理经验优先。",
        text33:"2.熟练使用Excel各类函数，数据处理。熟练使用PPT。",

      },
      web:{
        text1:"主页",
        text2:"关于微续",
        text3:"客户",
        text4:"合作案例",
        text5:"加入我们",

      },
      home:{
        text1:'联系我们',
      },
      about:{
        text1:'联系我们',
        text2:"关于我们",
        text3:"我们为客户提供线上和线下多种营销传播策略规划和项目实施服务。",
        text4:"营销传播策略咨询和创意项目实施服务",
        text5:"体验和渠道营销",
        text6:"公关、数字化线上营销和社交媒体",

      },
      user:{
        text1:"合作客户",
        text2:"我们为众多国内外五百强企业提供长期/年度市场营销传播服务。",  
      },
      case:{
        text1:'合作案例',
      },
      concat:{
        text1:"联系我们",
        text2:"地址：上海市闵行区莲花南路2899号1号楼303室",
        text3:"电话：021-52235298",
        text4:"邮箱：liki.wei",
        text5:"wish-shanghai.com",

      }
    },
    'en': {
      join: {
        text1: 'We always believe that one person may become a drop of water drifting with the tide. But a group of people will eventually become waves, shining extraordinary.',
        text2: 'Looking forward to you with unlimited creativity, and join us with strong enthusiasm.',
        text3:'CONTACT US',
        text4:'Event Planner',
        text5:'3D Designer',
        text6:'Marketing Manager',
        text7:'Job Responsibilities',
        text8:'Job Requirements',

        text9:"1. Responsible for the planning, creativity and proposal of various exhibitions and activities;",
        text10:"2. Responsible for the drafting of the company's daily copywriting projects;",
        text11:"3. Responsible for analyzing brands, looking for insights based on brands, products, audiences, etc., accurately grasping customer requirements, and providing precise and differentiated strategies and core ideas;",
        text12:"4. According to the requirements of the creative plan, collect and organize the reference materials needed for the creative;",
        text13:"5. Participate in the creative conception, copywriting and customer proposal of the project, and give the preliminary proposal and design creative explanation;",
        text14:"6. The manuscript has a clear idea and can complete the manuscript writing thinking plan;",
        text15:"7. Ability to write and propose proposals independently.",
        text16:"1. More than 1 year of project planning experience in offline activities, experience in car brand service and planning is preferred;",
        text17:"2. Strong creative ability, quick thinking, fluent writing, good at communication, and good language expression skills;",
        text18:"3. Skilled use of various office software, especially the production of PPT.",

        text19:"1. Able to independently complete the design creativity of brand activities and exhibitions;",
        text20:"2. Able to fully understand the content of Brief according to the instructions of CD/AD, skillfully use 3Dmax, AUTOCAD, ILLUSTRATOR, PHOTOSHOP and other drawing software, and be able to independently complete the modeling, rendering and post-production work of renderings;",
        text21:"3. Have creative ideas, good design ability and learning ability, have team spirit, and be good at communication;",
        text22:"4. Participate in the design and creative thinking of the project.",
        text23:"1. College degree or above in art, design, visual communication and other related majors;",
        text24:"2. Proficiency in using 3dmax, photoshop, CAD and other design software to independently complete modeling, rendering and texture;",
        text25:"3. Possess certain creative and expressive skills, have a sense of responsibility, and be able to complete work goals on time;",
        text26:"4. Have good professional ethics and teamwork spirit.",

        text27:"1. According to the requirements of the department, distribute, collect and analyze the data required by customers;",
        text28:"2. Track the development and changes of key projects, and analyze the development status of business operations.",
        text29:"3. Build data reports for business through mathematical statistical methods",
        text30:"4. Practical and conscientious, willing to understand the business in depth",
        text31:"5. Complete other tasks of superior leaders.",
        text32:"1.4A company auto brand regional agency experience, luxury auto brand 4S shop marketing manager experience is preferred.",
        text33:"2.Proficiency in using various Excel functions and data processing. Skilled use of PPT.",

      },
      web:{
        text1:"HOME PAGE",
        text2:"ABOUT WISH",
        text3:"CLIENT",
        text4:"COOPERATION CASE",
        text5:"JOIN US",

      },
      home:{
        text1:'CONTACT US',
      },
      about:{
        text1:'CONTACT US',
        text2:"About US",
        text3:"We provide a wide range of services from strategic counsel to program implementation ",
        text4:"STRATEGY CONSULTANCY & CREATIVE IMPLEMENTATION",
        text5:"EXPERIENTIAL & RETAIL MARKETING",
        text6:"PR, DIGITAL MARKETING & SOCIAL",

      },
      user:{
        text1:"OUR CLIENTS",
        text2:"We provide long-term/annual marketing communication services for many top 500 companies all over the world.",  
      },
      case:{
        text1:'COOPERATION CASE',
      },
      concat:{
        text1:"CONTACT US",
        text2:"Adress: Room 303, Building 1, 2899 Lianhua South Rd.Minhang District, Shanghai",
        text3:"Call: 021-52235298",
        text4:"E-mail: liki.wei",
        text5:"wish-shanghai.com",

      }
    }
  }
})