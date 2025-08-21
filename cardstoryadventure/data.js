// const punishCardsData = {
//     // ...其他卡牌数据...
//     punishments: [

//         {
//             icon: "🎤",
//             name: "灵魂歌手",
//             description: "音乐之声！",
//             effect: "必须把所有话用唱歌的方式表达"
//         },
//         {
//             icon: "🦁",
//             name: "动物本能",
//             description: "唤醒你的野性！",
//             effect: "说话前后必须发出指定动物的叫声"
//         },
//         {
//             icon: "🤖",
//             name: "机器人",
//             description: "01100010 01100101 01100101 01110000",
//             effect: "必须用机械单调的机器人声音说话"
//         }
//         // 更多惩罚卡...
//     ]
// };


const punishCardsData = [
    {
        icon: "🎤",
        name: "灵魂歌手",
        description: "必须把所有话用唱歌的方式表达",
        effect: "必须把所有话用唱歌的方式表达"
    },
    {
        icon: "🦁",
        name: "动物本能",
        description: "说话前后必须发出指定动物的叫声",
        effect: "说话前后必须发出指定动物的叫声"
    },
    {
        icon: "🤖",
        name: "机器人",
        description: "必须用机械单调的机器人声音说话",
        effect: "必须用机械单调的机器人声音说话"
    }
];

      const cardData = {
    "characters": [
        // 原角色（保留）
        { "name": "勇敢男孩", "englishName": "Brave Boy", "icon": "👦", "description": "永远不会害怕困难的小男孩" },
        { "name": "聪明女孩", "englishName": "Smart Girl", "icon": "👧", "description": "总能想出好办法的小女孩" },
        { "name": "医生叔叔", "englishName": "Doctor", "icon": "👨‍⚕️", "description": "关心大家健康的好医生" },
        { "name": "老师", "englishName": "Teacher", "icon": "👩‍🏫", "description": "喜欢教小朋友知识的老师" },
        { "name": "农夫爷爷", "englishName": "Farmer Grandpa", "icon": "👨‍🌾", "description": "种植美味蔬菜的爷爷" },

        // 新增现实职业角色（与社会目标关联）
        { "name": "水电工程师", "englishName": "Water Engineer", "icon": "👷‍♀️", "description": "为村庄安装清洁饮水管道的阿姨" },
        { "name": "太阳能科学家", "englishName": "Solar Scientist", "icon": "👩‍🔬", "description": "研究阳光发电的戴眼镜姐姐" },
        { "name": "图书管理员", "englishName": "Librarian", "icon": "📚", "description": "守护知识宝库的温柔叔叔" },
        { "name": "回收站站长", "englishName": "Recycling Station Manager", "icon": "♻️", "description": "把垃圾变宝藏的魔术师爷爷" },
        { "name": "女消防员", "englishName": "Firefighter", "icon": "👩‍🚒", "description": "救人灭火都超酷的英雄" },

        // 奇幻/童话风格角色（增加故事趣味性）
        { "name": "会说话的树", "englishName": "Talking Tree", "icon": "🌳", "description": "活了300年，记得所有森林故事的智者" },
        { "name": "云朵精灵", "englishName": "Cloud Sprite", "icon": "☁️", "description": "能变成任何形状的调皮小精灵" },
        { "name": "星星向导", "englishName": "Star Guide", "icon": "⭐", "description": "为迷路的人指引方向的发光小星星" },
        { "name": "时间老人", "englishName": "Time Keeper", "icon": "⌛", "description": "口袋里装着过去和未来的秘密" },
        { "name": "彩虹鸟", "englishName": "Rainbow Bird", "icon": "🦜", "description": "羽毛会随着心情变颜色的神奇鸟儿" },

        // 文化多样性角色（体现全球合作）
        { "name": "非洲鼓手", "englishName": "African Drummer", "icon": "🥁", "description": "用节奏传递快乐的卷发男孩" },
        { "name": "蒙古小骑手", "englishName": "Mongolian Rider", "icon": "🏇", "description": "骑马像风一样快的草原孩子" },
        { "name": "北极因纽特女孩", "englishName": "Inuit Girl", "icon": "❄️", "description": "知道如何与雪相处的圆脸姑娘" },
        { "name": "印度舞者", "englishName": "Indian Dancer", "icon": "💃", "description": "手镯叮当响的舞蹈家姐姐" },
        { "name": "毛利战士", "englishName": "Maori Warrior", "icon": "🗿", "description": "脸上有传统纹身的文化守护者" },

        // 特殊群体代表（呼应平等主题）
        { "name": "轮椅画家", "englishName": "Wheelchair Artist", "icon": "🦽", "description": "用脚趾画出美丽花朵的艺术家" },
        { "name": "手语老师", "englishName": "Sign Language Teacher", "icon": "🤟", "description": "让沉默的世界也能沟通的天使" },
        { "name": "盲人音乐家", "englishName": "Blind Musician", "icon": "🎵", "description": "用耳朵看见世界的竖琴演奏者" },

        // 动物伙伴（生态保护主题）
        { "name": "海龟长老", "englishName": "Sea Turtle Elder", "icon": "🐢", "description": "背甲上刻着海洋历史的活化石" },
        { "name": "蜜蜂女王", "englishName": "Queen Bee", "icon": "🐝", "description": "指挥工蜂播种花朵的勤劳统治者" },
        { "name": "流浪狗", "englishName": "Stray Dog", "icon": "🐕", "description": "渴望一个家的黄耳朵小狗" },
        { "name": "极地狐", "englishName": "Arctic Fox", "icon": "🦊", "description": "因冰川融化被迫迁徙的白狐狸" },

        // 未来科技角色（创新发展主题）
        { "name": "机器人小助手", "englishName": "Robot Assistant", "icon": "🤖", "description": "用太阳能充电的环保机器人" },
        { "name": "3D打印厨师", "englishName": "3D Printing Chef", "icon": "🍽️", "description": "能把营养食材变成有趣形状" },
        { "name": "太空园丁", "englishName": "Space Gardener", "icon": "👨‍🚀", "description": "在月球种出第一朵花的宇航员" },

        // 神话/传说角色（文化传承）
        { "name": "龙守护者", "englishName": "Dragon Guardian", "icon": "🐲", "description": "守护千年智慧卷轴的金鳞龙" },
        { "name": "女娲后人", "englishName": "Nuwa's Descendant", "icon": "🧜‍♀️", "description": "用五色石修补生态裂缝的少女" }
    ],
    "goals": [
       {"name":"消灭贫困","englishName":"No Poverty","icon":"�","description":"让每个人都有温暖的家","details":"提供基本生活保障，消除极端贫困，确保社会公平"},
{"name":"消灭饥饿","englishName":"Zero Hunger","icon":"🍎","description":"让每个人都吃得饱饱的","details":"确保粮食安全，改善营养状况，促进可持续农业"},
{"name":"健康生活","englishName":"Good Health","icon":"❤️","description":"让大家都身体健康快乐","details":"普及医疗服务，预防疾病，提高卫生意识"},
{"name":"优质教育","englishName":"Quality Education","icon":"📚","description":"让每个小朋友都能上学","details":"提供平等教育机会，改善教学设施，培养全面发展"},
{"name":"性别平等","englishName":"Gender Equality","icon":"⚖️","description":"男孩女孩一样棒","details":"消除性别歧视，保障女性权益，促进机会均等"},
{"name":"清洁饮水","englishName":"Clean Water","icon":"💧","description":"让每个人都喝到干净水","details":"改善水质和卫生条件，保障水资源可持续管理"},
{"name":"清洁能源","englishName":"Clean Energy","icon":"☀️","description":"用太阳和风发电","details":"发展可再生能源，减少化石能源依赖"},
{"name":"体面工作","englishName":"Decent Work","icon":"💼","description":"让大人们有好工作","details":"创造就业机会，保障工作权益，确保安全劳动环境"},
{"name":"创新发展","englishName":"Innovation","icon":"🔬","description":"发明有趣的新东西","details":"支持科研发展，鼓励技术创新，促进产业升级"},
{"name":"减少不平等","englishName":"Reduced Inequality","icon":"🤝","description":"大家都是好朋友","details":"缩小贫富差距，消除歧视，促进社会包容"},
{"name":"可持续城市","englishName":"Sustainable Cities","icon":"🏙️","description":"建设美丽干净的城市","details":"发展绿色建筑，改善公共交通，优化城市规划"},
{"name":"负责任消费","englishName":"Responsible Consumption","icon":"♻️","description":"不浪费爱惜东西","details":"提倡循环经济，减少资源浪费，鼓励环保消费"},
{"name":"气候行动","englishName":"Climate Action","icon":"🌍","description":"保护我们的地球妈妈","details":"减少碳排放，应对气候变化，保护生态环境"},
{"name":"海洋保护","englishName":"Life Below Water","icon":"🐋","description":"让海洋变得更干净","details":"减少海洋污染，保护海洋生物，可持续利用海洋资源"},
{"name":"陆地保护","englishName":"Life on Land","icon":"🌳","description":"保护森林和小动物","details":"防治荒漠化，保护生态系统，维持生物多样性"},
{"name":"和平正义","englishName":"Peace and Justice","icon":"🕊️","description":"大家和睦相处","details":"促进法治建设，减少暴力冲突，保障人权"},
{"name":"全球合作","englishName":"Global Partnership","icon":"🌐","description":"全世界一起努力","details":"加强国际合作，共享发展经验，实现共同繁荣"}
    ],
    "locations": [
        // 原地点（保留）
        { "name": "美丽学校", "englishName": "Beautiful School", "icon": "🏫", "description": "屋顶有太阳能板的彩虹色学校" },
        { "name": "绿色公园", "englishName": "Green Park", "icon": "🌳", "description": "每个角落都有昆虫旅馆的生态公园" },
        { "name": "快乐村庄", "englishName": "Happy Village", "icon": "🏘️", "description": "用风力发电的自给自足小村庄" },
        { "name": "神秘森林", "englishName": "Mysterious Forest", "icon": "🌲", "description": "树木会悄悄移动的魔法森林" },
        { "name": "蓝色海边", "englishName": "Blue Seashore", "icon": "🏖️", "description": "设立海龟保护站的珊瑚海湾" },

        // 现实中的可持续发展场景（直接关联目标）
        { "name": "垂直农场", "englishName": "Vertical Farm", "icon": "🏢", "description": "在摩天楼里种菜的未来农场" },
        { "name": "风力发电场", "englishName": "Wind Farm", "icon": "🌀", "description": "白色风车像巨人般转动的平原" },
        { "name": "生态桥", "englishName": "Eco Bridge", "icon": "🌉", "description": "让小动物安全过马路的花园天桥" },
        { "name": "零废弃社区", "englishName": "Zero Waste Community", "icon": "🏡", "description": "所有垃圾都会分类再生的神奇街区" },
        { "name": "沙漠绿洲", "englishName": "Desert Oasis", "icon": "🏜️", "description": "用新技术复活的古老泉水" },

        // 全球特色地标（文化多样性）
        { "name": "威尼斯运河", "englishName": "Venice Canals", "icon": "🛶", "description": "坐着贡多拉穿越的水上迷宫" },
        { "name": "马丘比丘", "englishName": "Machu Picchu", "icon": "⛰️", "description": "云端的印加古城遗迹" },
        { "name": "撒哈拉驿站", "englishName": "Sahara Caravanserai", "icon": "🐫", "description": "骆驼商队休息的星空帐篷" },
        { "name": "北极科考站", "englishName": "Arctic Research Station", "icon": "🧊", "description": "研究冰川的透明圆顶屋" },
        { "name": "竹楼村", "englishName": "Bamboo Village", "icon": "🎋", "description": "全部用竹子建造的抗震房屋" },

        // 奇幻/童话场景（激发想象力）
        { "name": "云上图书馆", "englishName": "Cloud Library", "icon": "📚", "description": "用彩虹当书签的漂浮图书馆" },
        { "name": "地心花园", "englishName": "Earth Core Garden", "icon": "🌋", "description": "靠地热发光的巨型蘑菇林" },
        { "name": "时间集市", "englishName": "Time Market", "icon": "⏳", "description": "可以交换童年记忆的古老市集" },
        { "name": "动物议会", "englishName": "Animal Council", "icon": "🐾", "description": "所有生物平等协商的树洞大厅" },
        { "name": "彩虹瀑布", "englishName": "Rainbow Waterfall", "icon": "🌈", "description": "水流会根据歌声变颜色的奇迹" },

        // 危机教育场景（环保警示）
        { "name": "融化的冰川", "englishName": "Melting Glacier", "icon": "❄️", "description": "正在消失的蓝色水晶宫殿" },
        { "name": "垃圾岛", "englishName": "Trash Island", "icon": "🗑️", "description": "海洋塑料堆积成的悲伤陆地" },
        { "name": "干旱的稻田", "englishName": "Drought Rice Field", "icon": "🌾", "description": "裂缝像蜘蛛网般蔓延的田地" },
        { "name": "雾霾城市", "englishName": "Smog City", "icon": "🏙️", "description": "需要戴防毒面具出门的灰色都市" },
        { "name": "沉默珊瑚礁", "englishName": "Silent Coral Reef", "icon": "🐠", "description": "失去颜色的海底鬼城" },

        // 未来科技场景（创新发展）
        { "name": "太空农场", "englishName": "Space Farm", "icon": "🚀", "description": "在宇宙飞船里旋转生长的麦田" },
        { "name": "3D打印社区", "englishName": "3D Printed Community", "icon": "🖨️", "description": "用回收塑料建造的彩色房子" },
        { "name": "海底实验室", "englishName": "Underwater Lab", "icon": "🐚", "description": "研究海洋生物的透明气泡屋" },
        { "name": "空中花园", "englishName": "Sky Garden", "icon": "🪂", "description": "漂浮在云层中的蔬菜森林" },
        { "name": "智慧城市", "englishName": "Smart City", "icon": "💻", "description": "用大数据照顾每位居民的城市" },

        // 文化传承场景
        { "name": "活字印刷坊", "englishName": "Movable Type Workshop", "icon": "🖋️", "description": "散发着油墨香的千年作坊" },
        { "name": "民族乐器馆", "englishName": "Ethnic Instrument Museum", "icon": "🎻", "description": "收藏着200种古老乐器的木楼" },
        { "name": "口述历史亭", "englishName": "Oral History Pavilion", "icon": "🧓", "description": "老人讲述部落传说的榕树下" },
        { "name": "种子银行", "englishName": "Seed Bank", "icon": "🏦", "description": "保存濒危作物基因的金库" },
        { "name": "星空观测台", "englishName": "Star Observatory", "icon": "🔭", "description": "原住民传授星座传说的石台" },

        // 特殊功能场景
        { "name": "情绪诊疗所", "englishName": "Emotion Clinic", "icon": "❤️", "description": "用音乐治疗心理的粉色小屋" },
        { "name": "共享工具屋", "englishName": "Tool Sharing Shed", "icon": "🛠️", "description": "邻居们免费借用电钻的地方" },
        { "name": "流浪者之家", "englishName": "Homeless Shelter", "icon": "🛌", "description": "用爱心卡片支付住宿的旅舍" },
        { "name": "和平谈判桌", "englishName": "Peace Table", "icon": "🕊️", "description": "刻着所有参战民族花纹的圆桌" }
    ],
    "items": [
        // 原物品（保留）
        { "name": "魔法书本", "englishName": "Magic Book", "icon": "📖", "description": "翻开时会浮现立体影像的智慧之书" },
        { "name": "神奇背包", "englishName": "Wonder Backpack", "icon": "🎒", "description": "内部空间比外观大十倍的次元口袋" },
        { "name": "希望种子", "englishName": "Seed of Hope", "icon": "🌱", "description": "种在废土上也能开出彩虹花" },
        { "name": "友谊手环", "englishName": "Friendship Bracelet", "icon": "💝", "description": "佩戴者能感受到对方的情绪波动" },
        { "name": "勇气勋章", "englishName": "Medal of Courage", "icon": "🏅", "description": "触摸时会讲述历代获得者故事" },

        // 环保工具（气候行动/陆地保护）
        { "name": "太阳能手电筒", "englishName": "Solar Flashlight", "icon": "🔦", "description": "阳光照射1分钟可亮整晚" },
        { "name": "水质检测笔", "englishName": "Water Tester", "icon": "✏️", "description": "接触水面就会显示安全等级" },
        { "name": "可食用吸管", "englishName": "Edible Straw", "icon": "🥤", "description": "用海藻制成，有水果香味" },
        { "name": "种子炸弹", "englishName": "Seed Bomb", "icon": "💣", "description": "裹着黏土的野花种子，投掷后能生长" },
        { "name": "生态记事本", "englishName": "Eco Notebook", "icon": "📓", "description": "用大象粪便再生纸制作" },

        // 文化传承物品
        { "name": "故事陶罐", "englishName": "Story Pot", "icon": "🏺", "description": "贴上耳朵能听见祖先的传说" },
        { "name": "民族纹样印章", "englishName": "Ethnic Pattern Stamp", "icon": "🖇️", "description": "盖在纸上会动起来跳舞" },
        { "name": "口弦琴", "englishName": "Jew's Harp", "icon": "🎶", "description": "用呼吸就能演奏的古老乐器" },
        { "name": "节气罗盘", "englishName": "Solar Term Compass", "icon": "🧭", "description": "指针永远指向当前节气物候" },
        { "name": "无形遗产盒子", "englishName": "Intangible Heritage Box", "icon": "🎁", "description": "打开随机获得一项传统技艺记忆" },

        // 未来科技物品
        { "name": "空气水壶", "englishName": "Air Water Bottle", "icon": "🚰", "description": "从空气中凝结饮用水的装置" },
        { "name": "光合作用面霜", "englishName": "Photosynthesis Cream", "icon": "🧴", "description": "涂抹后皮肤能吸收阳光能量" },
        { "name": "情绪调节器", "englishName": "Mood Adjuster", "icon": "🎛️", "description": "别在衣领上平衡心理波动" },
        { "name": "纳米修复喷雾", "englishName": "Nano Repair Spray", "icon": "🧪", "description": "可修补陶瓷裂缝或树木伤口" },
        { "name": "智能种植舱", "englishName": "Smart Planter", "icon": "🪴", "description": "自动调节光线湿度的迷你温室" },

        // 社会公平相关
        { "name": "无障碍手套", "englishName": "Accessibility Gloves", "icon": "🧤", "description": "能将手语实时翻译成语音" },
        { "name": "盲文乐高", "englishName": "Braille Lego", "icon": "🧩", "description": "拼搭时发出对应声音的积木" },
        { "name": "多语言糖果", "englishName": "Multilingual Candy", "icon": "🍬", "description": "含在嘴里能说外语30分钟" },
        { "name": "公平贸易天平", "englishName": "Fair Trade Scale", "icon": "⚖️", "description": "称重时显示生产者收益比例" },
        { "name": "社区共享箱", "englishName": "Community Sharing Box", "icon": "📦", "description": "扫码可借用电钻等工具" },

        // 魔法教育物品
        { "name": "数学魔方", "englishName": "Math Magic Cube", "icon": "🧊", "description": "转动时浮现几何定理全息图" },
        { "name": "历史沙盘", "englishName": "History Sandbox", "icon": "🏝️", "description": "撒沙会形成对应朝代地图" },
        { "name": "化学调色盘", "englishName": "Chemistry Palette", "icon": "🎨", "description": "混合颜料时产生真实反应" },
        { "name": "生物观察镜", "englishName": "Bio Viewer", "icon": "🔬", "description": "能看到细胞唱歌的显微镜" },
        { "name": "星空毯子", "englishName": "Starry Blanket", "icon": "🛏️", "description": "盖着入睡会做宇宙旅行梦" },

        // 应急生存装备
        { "name": "防灾口哨", "englishName": "Emergency Whistle", "icon": "📣", "description": "声音能穿透废墟的求生工具" },
        { "name": "应急避难所", "englishName": "Emergency Shelter", "icon": "🛡️", "description": "充气后变成防震小屋的胶囊" },
        { "name": "净水吸管", "englishName": "Water Filter Straw", "icon": "🚰", "description": "直接过滤脏水的生命吸管" },
        { "name": "太阳能收音机", "englishName": "Solar Radio", "icon": "📻", "description": "灾难时接收救援信息的设备" },
        { "name": "急救风筝", "englishName": "First Aid Kite", "icon": "🪁", "description": "能向隔离区投递药品" },

        // 趣味互动物品
        { "name": "道歉橡皮", "englishName": "Apology Eraser", "icon": "🧽", "description": "擦掉争吵时写下的气话" },
        { "name": "合作跳绳", "englishName": "Cooperation Jump Rope", "icon": "🪢", "description": "必须三人节奏一致才能跳" },
        { "name": "诚实镜子", "englishName": "Honesty Mirror", "icon": "🪞", "description": "照出内心真实想法的魔镜" },
        { "name": "记忆相机", "englishName": "Memory Camera", "icon": "📸", "description": "打印照片时会附带当时气味" },
        { "name": "微笑传染器", "englishName": "Smile Spreader", "icon": "😊", "description": "佩戴者笑会引起周围人嘴角上扬" },

        // 超级英雄装备
        { "name": "环保披风", "englishName": "Eco Cape", "icon": "🦸", "description": "用回收塑料瓶编织的飘逸披风" },
        { "name": "知识护目镜", "englishName": "Knowledge Goggles", "icon": "🥽", "description": "看到任何物体显示科普信息" },
        { "name": "超级肥料", "englishName": "Super Fertilizer", "icon": "💪", "description": "一滴能让枯木重生的浓缩营养" },
        { "name": "和平口琴", "englishName": "Harmonica of Peace", "icon": "🎷", "description": "吹奏时敌对者会放下武器" },
        { "name": "时间胶囊", "englishName": "Time Capsule", "icon": "⏳", "description": "埋下100年后自动打开的承诺" }
    ],
    "actions": [
        // 原行动（保留）
        { "name": "帮助他人", "englishName": "Help Others", "icon": "🤝", "description": "向需要帮助的人伸出援手" },
        { "name": "想出妙招", "englishName": "Brainstorm", "icon": "💡", "description": "用聪明的头脑解决问题" },
        { "name": "团结协作", "englishName": "Teamwork", "icon": "👫", "description": "和朋友一起完成任务" },
        { "name": "勇敢尝试", "englishName": "Be Brave", "icon": "🌟", "description": "不害怕去做新的尝试" },
        { "name": "分享快乐", "englishName": "Share Happiness", "icon": "😊", "description": "把开心传递给别人" },

        // 环保类行动（气候行动/陆地保护）
        { "name": "垃圾分类", "englishName": "Waste Sorting", "icon": "🗑️", "description": "让可回收物找到回家的路" },
        { "name": "种植固沙植物", "englishName": "Plant Sand-fixing Plants", "icon": "🌵", "description": "在沙漠边缘筑起绿色长城" },
        { "name": "制作昆虫旅馆", "englishName": "Build Insect Hotel", "icon": "🐛", "description": "为小虫子建造五星级酒店" },
        { "name": "组织净滩活动", "englishName": "Organize Beach Cleanup", "icon": "🏖️", "description": "还给海滩原本的金色面容" },
        { "name": "关掉闲置电源", "englishName": "Turn Off Idle Devices", "icon": "🔌", "description": "对浪费电的插座说晚安" },

        // 社会公平类（减少不平等/和平正义）
        { "name": "翻译手语视频", "englishName": "Translate Sign Language Videos", "icon": "✋", "description": "让无声世界也被听见" },
        { "name": "捐赠冬衣", "englishName": "Donate Winter Clothes", "icon": "🧥", "description": "把温暖装进爱心包裹" },
        { "name": "反对偏见", "englishName": "Stand Against Prejudice", "icon": "🚫", "description": "站出来纠正不公平的话" },
        { "name": "建立社区菜园", "englishName": "Start Community Garden", "icon": "🥬", "description": "让所有人都能吃上新鲜菜" },
        { "name": "教授数字技能", "englishName": "Teach Digital Skills", "icon": "👵", "description": "帮老人学会视频通话" },

        // 创新解决方案（创新发展/清洁能源）
        { "name": "发明太阳能玩具", "englishName": "Invent Solar Toys", "icon": "🤖", "description": "用阳光驱动小汽车奔跑" },
        { "name": "设计雨水收集器", "englishName": "Design Rain Collector", "icon": "🌧️", "description": "把落泪的天空变成礼物" },
        { "name": "制作环保砖块", "englishName": "Make Eco Bricks", "icon": "🧱", "description": "用废旧塑料压筑成墙" },
        { "name": "开发食物共享APP", "englishName": "Develop Food Sharing App", "icon": "📱", "description": "让多余食材找到饥饿的胃" },
        { "name": "搭建生态厕所", "englishName": "Build Eco Toilet", "icon": "🚽", "description": "把排泄物变成肥料" },

        // 教育与传播（优质教育/全球合作）
        { "name": "录制科普播客", "englishName": "Record Science Podcast", "icon": "🎙️", "description": "用故事讲述地球的秘密" },
        { "name": "组织模拟联合国", "englishName": "Organize Model UN", "icon": "🌐", "description": "让孩子们扮演各国代表" },
        { "name": "创办流动图书馆", "englishName": "Start Mobile Library", "icon": "📚", "description": "骑着自行车运送知识" },
        { "name": "绘制SDG壁画", "englishName": "Paint SDG Mural", "icon": "🎨", "description": "用街头艺术唤醒意识" },
        { "name": "编写和平歌曲", "englishName": "Compose Peace Song", "icon": "🎵", "description": "让旋律化解仇恨" },

        // 经济相关（体面工作/负责任消费）
        { "name": "选购公平贸易商品", "englishName": "Choose Fair Trade Products", "icon": "☕", "description": "确保咖啡农获得合理报酬" },
        { "name": "发起旧物改造赛", "englishName": "Launch Upcycling Contest", "icon": "🧵", "description": "把旧牛仔裤变成时尚包" },
        { "name": "建立合作社", "englishName": "Establish Cooperative", "icon": "👨‍🌾", "description": "让农民自己决定产品价格" },
        { "name": "抵制快时尚", "englishName": "Boycott Fast Fashion", "icon": "👗", "description": "选择经久耐穿的衣裳" },
        { "name": "投资绿色债券", "englishName": "Invest in Green Bonds", "icon": "💹", "description": "让存款变成森林的养分" },

        // 情感与心理（健康生活）
        { "name": "组织拥抱日", "englishName": "Organize Hug Day", "icon": "🤗", "description": "给陌生人一个温暖的拥抱" },
        { "name": "开设树洞信箱", "englishName": "Open Tree Hole Mailbox", "icon": "✉️", "description": "倾听无人诉说的心事" },
        { "name": "带领正念散步", "englishName": "Lead Mindful Walk", "icon": "🚶‍♀️", "description": "用五感重新发现世界" },
        { "name": "制作感恩卡片", "englishName": "Make Thank-you Cards", "icon": "💌", "description": "向保洁阿姨说声谢谢" },
        { "name": "布置安慰角", "englishName": "Set Up Comfort Corner", "icon": "🛋️", "description": "放满软垫和绘本的安全空间" },

        // 创意行动（特别适合儿童）
        { "name": "举办垃圾时装秀", "englishName": "Hold Trash Fashion Show", "icon": "👑", "description": "用包装袋设计公主裙" },
        { "name": "发送种子明信片", "englishName": "Send Seed Postcards", "icon": "🌻", "description": "撕开信封就能长出花朵" },
        { "name": "建造童话生态屋", "englishName": "Build Fairy-tale Eco House", "icon": "🏠", "description": "用泥巴和稻草盖的房子" },
        { "name": "策划影子剧场", "englishName": "Plan Shadow Theater", "icon": "🎭", "description": "用手影讲述环保故事" },
        { "name": "发明友谊密码", "englishName": "Invent Friendship Code", "icon": "🔐", "description": "只有好朋友懂的秘密手势" },

        // 系统性改变（更高阶）
        { "name": "游说政策改变", "englishName": "Lobby for Policy Change", "icon": "📜", "description": "说服市长通过环保法案" },
        { "name": "设计无障碍城市", "englishName": "Design Accessible City", "icon": "♿", "description": "让轮椅畅行无阻的规划图" },
        { "name": "建立社区货币", "englishName": "Create Community Currency", "icon": "💴", "description": "用劳动时间兑换服务" },
        { "name": "发起公民科学", "englishName": "Start Citizen Science", "icon": "🔍", "description": "动员居民记录鸟类迁徙" },
        { "name": "实施四天工作制", "englishName": "Implement 4-day Workweek", "icon": "📅", "description": "用效率换生活质量" },

   { "name": "竹子自行车工作坊", "englishName": "Bamboo Bike Workshop", "icon": "🚲", "description": "动手制作竹子自行车倡导低碳出行" },
  { "name": "SDGs教师培训", "englishName": "SDGs Teacher Training", "icon": "👩‍🏫", "description": "培养会教气候课的老师" },
  { "name": "健康科普讲座", "englishName": "Climate & Health Talks", "icon": "🩺", "description": "为老人讲解气候与健康" },
  { "name": "烤烟套种试验", "englishName": "Tobacco Intercropping", "icon": "🌾", "description": "烟田里种抗旱作物助农增收" },
  { "name": "B站气候视频", "englishName": "Bilibili Climate Series", "icon": "📺", "description": "用短视频向青年科普气候" },
  { "name": "教育戏剧巡演", "englishName": "Climate Theatre Tour", "icon": "🎭", "description": "把气候变化故事搬进学校" },
  { "name": "垃圾艺术工作坊", "englishName": "Trash Art Lab", "icon": "♻️", "description": "用废弃物创作艺术唤起环保" },
  { "name": "循环桌游", "englishName": "Circular Board Game", "icon": "🎲", "description": "玩游戏学塑料循环" },
  { "name": "儿童议事会", "englishName": "Kids Climate Council", "icon": "👧", "description": "让孩子参与社区气候决策" },
  { "name": "旧鞋再造坊", "englishName": "Shoe Upcycling Lab", "icon": "👟", "description": "回收运动鞋变绿色新品" },
  { "name": "小记者团", "englishName": "Migrant Girls Press", "icon": "🎤", "description": "培训流动女童记录气候故事" },
  { "name": "低碳咖啡行动", "englishName": "Coffee Without Carbon", "icon": "☕", "description": "推广自带杯减少咖啡碳排" },
  { "name": "牧民分享会", "englishName": "Herder Exchange", "icon": "🐄", "description": "分享牧民气候适应经验" },
  { "name": "空心菜农场", "englishName": "Water Spinach Farming", "icon": "🌿", "description": "灾后种植空心菜恢复生计" },
  { "name": "慢采蘑菇网", "englishName": "Slow Mushroom Network", "icon": "🍄", "description": "倡导可持续采菌保护森林" },
  { "name": "光伏调研", "englishName": "Solar Stakeholder Study", "icon": "☀️", "description": "评估光伏企业气候行动" },
  { "name": "竹构建筑", "englishName": "Bamboo Rural Build", "icon": "🏡", "description": "用竹子建低碳农村设施" },
  { "name": "麦记零碳课", "englishName": "McDonald's E-learning", "icon": "🍟", "description": "为员工上线零碳培训" },
  { "name": "雪具循环", "englishName": "Ski Gear Reuse", "icon": "⛷️", "description": "回收二手滑雪装备减蜡污染" },
  { "name": "素食快闪", "englishName": "Plant Pop-up", "icon": "🥗", "description": "快闪餐厅推广低碳植物餐" },
  { "name": "藏文化课堂", "englishName": "Tibetan Climate Tales", "icon": "📚", "description": "用藏族故事教儿童气候知识" },
  { "name": "CSA菜园", "englishName": "Community Garden CSA", "icon": "🧑‍🌾", "description": "城乡共建共享小菜园" },
  { "name": "牧民田野记", "englishName": "Pastoral Climate Stories", "icon": "📝", "description": "记录牧民的气候生存实录" },
  { "name": "高温保障", "englishName": "Heat-Safe Streets", "icon": "🌡️", "description": "为清洁工人制定防暑方案" },
  { "name": "时尚市集", "englishName": "Sustainable Fashion Fair", "icon": "👗", "description": "市集推广低碳纺织品" },
  { "name": "亲子安全包", "englishName": "Family Climate Kit", "icon": "🧩", "description": "游戏包教家庭应对极端天气" },
  { "name": "无碍共创", "englishName": "Accessible Co-design", "icon": "🤝", "description": "与残障者共创气候适应方案" },
  { "name": "慢递实验", "englishName": "Bike Slow Mail", "icon": "📮", "description": "用自行车完成绿色同城递送" },
  { "name": "气候影像展", "englishName": "Climate Diary Film", "icon": "🎞️", "description": "短片加策展引发代际对话" },
  { "name": "AI科普工厂", "englishName": "AIGC Climate Lab", "icon": "🤖", "description": "用AI把论文变漫画动画" }
    ]
};