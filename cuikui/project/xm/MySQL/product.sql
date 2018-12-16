 #设置客户端语言为utf8;
SET NAMES UTF8;
#如果存在xm,放弃数据库xm;
DROP DATABASE IF EXISTS xm;
#创建数据库xm,并设置编码格式为utf8;
CREATE DATABASE xm CHARSET=UTF8;
#进入数据库xm;
USE xm;
#创建数据库表格xm_user;
CREATE TABLE xm_user(
  uid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  uname VARCHAR(32) UNIQUE,
  upwd VARCHAR(32) NOT NULL,
  email VARCHAR(32),
  phone CHAR(11),
  avatar VARCHAR(128) DEFAULT NULL,
  user_name VARCHAR(16),
  gender BOOL
);
#插入数据
INSERT INTO xm_user VALUES(1,'及时雨','123456','123456@qq.com','123456789',NULL,'宋江',1);
INSERT INTO xm_user VALUES(2,'玉麒麟','223456','223456@qq.com','123456789',NULL,'卢俊义',1);
INSERT INTO xm_user VALUES(3,'豹子头','323456','323456@qq.com','123456789',NULL,'林冲',0);
INSERT INTO xm_user VALUES(4,'智多星','423456','423456@qq.com','123456789',NULL,'吴用',0);
INSERT INTO xm_user VALUES(5,'晁天王','523456','523456@qq.com','123456789',NULL,'晁盖',1);
INSERT INTO xm_user VALUES(6,'入云龙','623456','623456@qq.com','123456789',NULL,'公孙胜',0);
INSERT INTO xm_user VALUES(7,'小旋风','723456','723456@qq.com','123456789',NULL,'柴进',1);
INSERT INTO xm_user VALUES(8,'小李广','823456','823456@qq.com','123456789',NULL,'花荣',0);
INSERT INTO xm_user VALUES(9,'黑旋风','923456','923456@qq.com','123456789',NULL,'李逵',1);
INSERT INTO xm_user VALUES(10,'行者','103456','103456@qq.com','123456789',NULL,'武松',0);

#创建主页境外游xm_index_travel表格;
CREATE TABLE xm_index_travel(
  pid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(64) DEFAULT NULL,
  details VARCHAR(128) DEFAULT NULL,
  price DECIMAL(10,2) DEFAULT NULL,
  href VARCHAR(128) DEFAULT NULL,
  src VARCHAR(128) DEFAULT NULL
);
/*插入数据*/
INSERT INTO xm_index_travel VALUES(NULL,'[马尔代夫希尔顿-依露岛7日游]','希尔顿-依露岛','14600.00','#','img/index/f200.jpg');
INSERT INTO xm_index_travel VALUES(NULL,'[文莱-沙巴5日游]','文莱-沙巴','12500.00','#','img/index/f201.jpg');
INSERT INTO xm_index_travel VALUES(NULL,'[毛里求斯7日游]','毛里求斯','12500.00','#','img/index/f202.jpg');
INSERT INTO xm_index_travel VALUES(NULL,'[普吉岛5日游]','普吉岛','11000.00','#','img/index/f203.jpg');
INSERT INTO xm_index_travel VALUES(NULL,'[美国东海岸-夏威夷14日游]','夏威夷','21000.00','#','img/index/f204.jpg');
INSERT INTO xm_index_travel VALUES(NULL,'[济州岛5日游]','济州岛','10000.00','#','img/index/f205.jpg');
INSERT INTO xm_index_travel VALUES(NULL,'[澳大利亚-凯因斯7日游]','澳大利亚-凯因斯','15000.00','#','img/index/f206.jpg');
INSERT INTO xm_index_travel VALUES(NULL,'[法瑞意11日游]','法瑞意','18000.00','#','img/index/f207.jpg');

/*创建周边热门景区表格xm_index_inland*/
CREATE TABLE xm_index_inland(
  lid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(64) DEFAULT NULL,
  href VARCHAR(128) DEFAULT NULL,
  src VARCHAR(128) DEFAULT NULL
);
/*插入数据*/
INSERT INTO xm_index_inland VALUES(NULL,'活力广东','#','img/index/gn01.jpg');
INSERT INTO xm_index_inland VALUES(NULL,'阳光海南','#','img/index/gn02.jpg');
INSERT INTO xm_index_inland VALUES(NULL,'乐享河北','#','img/index/gn03.jpg');
INSERT INTO xm_index_inland VALUES(NULL,'清新福建','#','img/index/gn04.jpg');
INSERT INTO xm_index_inland VALUES(NULL,'江西风景独好','#','img/index/gn05.jpg');
INSERT INTO xm_index_inland VALUES(NULL,'天府四川','#','img/index/gn06.jpg');
INSERT INTO xm_index_inland VALUES(NULL,'晋善晋美','#','img/index/gn07.jpg');
INSERT INTO xm_index_inland VALUES(NULL,'七彩云南','#','img/index/gn08.jpg');
INSERT INTO xm_index_inland VALUES(NULL,'好客山东','#','img/index/gn09.jpg');
INSERT INTO xm_index_inland VALUES(NULL,'灵秀湖北','#','img/index/gn10.jpg');

CREATE TABLE xm_index_destination(
  lid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(64) DEFAULT NULL,
  href VARCHAR(128) DEFAULT NULL,
  src VARCHAR(128) DEFAULT NULL
);
INSERT INTO xm_index_destination VALUES(NULL,'丽水','#','img/index/1.jpg');
INSERT INTO xm_index_destination VALUES(NULL,'婺源','#','img/index/2.jpg');
INSERT INTO xm_index_destination VALUES(NULL,'北京','#','img/index/3.jpg');
INSERT INTO xm_index_destination VALUES(NULL,'商丘','#','img/index/4.jpg');
INSERT INTO xm_index_destination VALUES(NULL,'大理','#','img/index/5.jpg');
INSERT INTO xm_index_destination VALUES(NULL,'拉萨','#','img/index/6.jpg');
INSERT INTO xm_index_destination VALUES(NULL,'呼和浩特','#','img/index/7.jpg');
INSERT INTO xm_index_destination VALUES(NULL,'成都','#','img/index/8.jpg');
INSERT INTO xm_index_destination VALUES(NULL,'丽江','#','img/index/9.jpg');
INSERT INTO xm_index_destination VALUES(NULL,'三亚','#','img/index/10.jpg');

CREATE TABLE xm_index_tourist(
  lid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  txt VARCHAR(64) DEFAULT NULL,
  title VARCHAR(64) DEFAULT NULL,
  href VARCHAR(128) DEFAULT NULL,
  src VARCHAR(128) DEFAULT NULL
);
INSERT INTO xm_index_tourist VALUES(NULL,'森林公馆','森林公馆','#','img/index/a.jpg');
INSERT INTO xm_index_tourist VALUES(NULL,'庐山老景,天沐温泉','庐山老景+天沐温泉','#','img/index/b.jpg');
INSERT INTO xm_index_tourist VALUES(NULL,'厦门','厦门市景区','#','img/index/c.jpg');
INSERT INTO xm_index_tourist VALUES(NULL,'婺源-江岭-瑶里-景德镇','婺源-江岭-瑶里-景德镇','#','img/index/d.jpg');
INSERT INTO xm_index_tourist VALUES(NULL,'雪山','西北雪山景色','#','img/index/e.jpg');

/***xm_index_details***/
-- CREATE TABLE xm_index_details(
--   pid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   title VARCHAR(64),
--   href VARCHAR(128) DEFAULT NULL,
--   src VARCHAR(128)
-- );
-- INSERT INTO xm_index_details VALUES(1,'靖西鹅泉田园之歌','details.html?pid=1','img/index1/pic1.jpg');
-- INSERT INTO xm_index_details VALUES(2,'广西德天瀑布','details.html?pid=2','img/index1/pic2.jpg');
-- INSERT INTO xm_index_details VALUES(3,'四姑娘山长平沟','details.html?pid=3','img/index1/pic3.jpg');
-- INSERT INTO xm_index_details VALUES(4,'泸沽湖色彩','details.html?pid=4','img/index1/pic4.jpg');
-- INSERT INTO xm_index_details VALUES(5,'丽江第一湾','details.html?pid=5','img/index1/pic5.jpg');
-- INSERT INTO xm_index_details VALUES(6,'空中草原那拉提','details.html?pid=6','img/index1/pic6.jpg');
-- INSERT INTO xm_index_details VALUES(7,'日出花竹','details.html?pid=7','img/index1/pic7.jpg');
-- INSERT INTO xm_index_details VALUES(8,'三生三世,十里桃花','details.html?pid=8','img/index1/pic8.jpg');
-- INSERT INTO xm_index_details VALUES(9,'映霞金帐汗','details.html?pid=9','img/index1/pic9.jpg');


/***详情页表格***/
CREATE TABLE xm_details(
  pid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(64), 
  src_lg VARCHAR(256),
  src_sm VARCHAR(256)
);
INSERT INTO xm_details VALUES(1,'靖西鹅泉田园之歌','img/details/jx1.jpg,img/details/jx2.jpg,img/details/jx3.jpg,img/details/jx4.jpg,img/details/jx5.jpg,img/details/jx6.jpg,img/details/jx7.jpg','img/details/jx_1.jpg,img/details/jx_2.jpg,img/details/jx_3.jpg,img/details/jx_4.jpg,img/details/jx_5.jpg,img/details/jx_6.jpg,img/details/jx_7.jpg');
INSERT INTO xm_details VALUES(2,'广西德天瀑布美景','img/details/details1.jpg,img/details/details2.jpg,img/details/details3.jpg,img/details/details4.jpg,img/details/details5.jpg,img/details/details6.jpg,img/details/details7.jpg','img/details/details_1.jpg,img/details/details_2.jpg,img/details/details_3.jpg,img/details/details_4.jpg,img/details/details_5.jpg,img/details/details_6.jpg,img/details/details_7.jpg');
INSERT INTO xm_details VALUES(3,'四姑娘山长平沟','img/details/sgn1.jpg,img/details/sgn2.jpg,img/details/sgn3.jpg,img/details/sgn4.jpg,img/details/sgn5.jpg,img/details/sgn6.jpg,img/details/sgn7.jpg','img/details/sgn_1.jpg,img/details/sgn_2.jpg,img/details/sgn_3.jpg,img/details/sgn_4.jpg,img/details/sgn_5.jpg,img/details/sgn_6.jpg,img/details/sgn_7.jpg');
INSERT INTO xm_details VALUES(4,'泸沽湖色彩','img/details/lgh1.jpg,img/details/lgh2.jpg,img/details/lgh3.jpg,img/details/lgh4.jpg,img/details/lgh5.jpg,img/details/lgh6.jpg,img/details/lgh7.jpg','img/details/lgh_1.jpg,img/details/lgh_2.jpg,img/details/lgh_3.jpg,img/details/lgh_4.jpg,img/details/lgh_5.jpg,img/details/lgh_6.jpg,img/details/lgh_7.jpg');
INSERT INTO xm_details VALUES(5,'丽江第一湾','img/details/lj1.jpg,img/details/lj2.jpg,img/details/lj3.jpg,img/details/lj4.jpg,img/details/lj5.jpg,img/details/lj6.jpg,img/details/lj7.jpg','img/details/lj_1.jpg,img/details/lj_2.jpg,img/details/lj_3.jpg,img/details/lj_4.jpg,img/details/lj_5.jpg,img/details/lj_6.jpg,img/details/lj_7.jpg');
INSERT INTO xm_details VALUES(6,'空中草原那拉提','img/details/nlt1.jpg,img/details/nlt2.jpg,img/details/nlt3.jpg,img/details/nlt4.jpg,img/details/nlt5.jpg,img/details/nlt6.jpg,img/details/nlt7.jpg','img/details/nlt_1.jpg,img/details/nlt_2.jpg,img/details/nlt_3.jpg,img/details/nlt_4.jpg,img/details/nlt_5.jpg,img/details/nlt_6.jpg,img/details/nlt_7.jpg');
INSERT INTO xm_details VALUES(7,'日出花竹','img/details/hz1.jpg,img/details/hz2.jpg,img/details/hz3.jpg,img/details/hz4.jpg,img/details/hz5.jpg,img/details/hz6.jpg,img/details/hz7.jpg','img/details/hz_1.jpg,img/details/hz_2.jpg,img/details/hz_3.jpg,img/details/hz_4.jpg,img/details/hz_5.jpg,img/details/hz_6.jpg,img/details/hz_7.jpg');
INSERT INTO xm_details VALUES(8,'三生三世,十里桃花,林芝与你,期待花开','img/details/th1.jpg,img/details/th2.jpg,img/details/th3.jpg,img/details/th4.jpg,img/details/th5.jpg,img/details/th6.jpg,img/details/th7.jpg','img/details/th_1.jpg,img/details/th_2.jpg,img/details/th_3.jpg,img/details/th_4.jpg,img/details/th_5.jpg,img/details/th_6.jpg,img/details/th_7.jpg');
INSERT INTO xm_details VALUES(9,'映霞金帐汗','img/details/yx1.jpg,img/details/yx2.jpg,img/details/yx3.jpg,img/details/yx4.jpg,img/details/yx5.jpg,img/details/yx6.jpg,img/details/yx7.jpg','img/details/yx_1.jpg,img/details/yx_2.jpg,img/details/yx_3.jpg,img/details/yx_4.jpg,img/details/yx_5.jpg,img/details/yx_6.jpg,img/details/yx_7.jpg');

/**景点简介**/
CREATE TABLE xm_details_info(
  pid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  content VARCHAR(1024)
);

INSERT INTO xm_details_info VALUES(1,'<p class="font">靖西市隶属广西壮族自治区，百色市代管的县级市，位于东经105°56′～106°48′，北纬22°51′～23°34′；地处中越边境，边境线长152.5公里，南与越南社会主义共和国高平茶岭县、重庆县山水相连，西与那坡县毗邻，北与百色市区和云南省富宁县交界，东与天等县、大新县接壤，东北紧靠德保县。</p><p class="font">靖西属亚热带季风气候，年均气温19.1℃，素有气候“小昆明”之称。境内以溶蚀高原地貌为主，山明、水秀，以奇峰异洞、四季如春的自然风光闻名遐迩，又有山水“小桂林”之誉，是旅游、度假和避暑的理想胜地。</p><p class="font">2016年12月，列为第三批国家新型城镇化综合试点地区。</p>');
INSERT INTO xm_details_info VALUES(2,'<p class="font">德天瀑布位于广西壮族自治区崇左市大新县硕龙镇德天村，中国与越南边境处的归春河上游，瀑布气势磅礴、蔚为壮观，与紧邻的越南板约瀑布（“Bản Giốc & Đức Thiên”）相连，是亚洲第一、世界第二大跨国瀑布，年均水流量约为贵州黄果树瀑布的三倍，为中国国家AAAA级旅游景区。 [1]  还是《酒是故乡醇》和《花千骨》的外景拍摄地，神奇而美妙。</p><p class="font">2016年1月，国家旅游局和环保部拟认定广西自治区崇左市大德天景区为国家生态旅游示范</p>');
INSERT INTO xm_details_info VALUES(3,'<p class="font">四姑娘山风景区：世界自然遗产、国家AAAA级旅游景区、国家级风景名胜区、国家地质公园、国家级自然保护区，四川大熊猫栖息地世界遗产，全国十大登山名山。</p><p class="font">四姑娘山雄峻奇异的山峰，鬼斧神工的地貌，丰富独特的景观，被誉为东方圣山，使她成为观光者的胜地、登山者的天堂、徒步人的迷宫、摄影家的乐园。</p>');
INSERT INTO xm_details_info VALUES(4,'<p class="font">泸沽湖，俗称左所海，古名勒得海、鲁枯湖，纳西族摩梭语“泸”为山沟，“沽”为里，意即山沟里的湖，湖位于四川省盐源县与云南省宁蒗县交界处，为川滇共辖，湖东为盐源县泸沽湖镇（原左所区），湖西为宁蒗县永宁乡。 [1]  湖泊略呈北西一东南走向，南北长9.5公里，东西宽5.2公里，湖岸线长约44公里，湖泊面积50.1平方公里，集水面积247.6平方公里，最大水深105.3米，平均水深为40.3米，湖水库容量为22.52亿立方米，湖水最大透明度达12米，湖面海拔2685米。</p><p class="font">泸沽湖是云南省海拔最高的湖泊，是中国第三大深水湖泊。泸沽湖周边主要居住着摩梭人、彝族和普米族，沿岸居住有蒙古族7种民族，约1.3万人。</p>');
INSERT INTO xm_details_info VALUES(5,'<p class="font">漓江，属珠江流域西江水系，为支流桂江上游河段的通称，位于广西壮族自治区东北部。传统意义上的漓江起点为桂江源头越城岭猫儿山，现代水文定义为兴安县溶江镇灵渠口，终点为平乐三江口。漓江上游河段为大溶江，下游河段为传统名称的桂江。灵渠河口为桂江大溶江段和漓江段的分界点，荔浦河、恭城河口为漓江段和桂江段的分界点。漓江段全长164公里。沿江河床多为水质卵石，泥沙量小，水质清澈，两岸多为岩溶地貌。旅游资源丰富，著名的桂林山水就在漓江上。</p><p class="font">关于旅游文化请参阅：桂林漓江风景区。</p>');
INSERT INTO xm_details_info VALUES(6,'<p class="font">夏牧场又被称为是“空中草原”，空中草原名称的由来是和它的海拔有关系，夏牧场的平均海拔为2200米，它是一个山间盆地，草肥水美，其时6、7、8月份是夏牧场的黄金季节，这时候山上山下发生了神奇的变化，夏牧场冰洞融化了，它是那样的清秀自然，天山林海雪源消失了；它是那样式的茫茫苍苍，伏季夏牧场鲜亮明快，山清水秀；由山下向上，随着地势的增高，气候、土壤、生物等自然条件都随之发生明显的变化，形成一条垂直景观带，是人们休闲避暑的好去处……</p>');
INSERT INTO xm_details_info VALUES(7,'<p class="font">来到霞浦，自然是首选花竹。因为霞浦天气受海洋影响，很不确定，连天气预报也无法准确预测。而游客千里迢迢的赶过来，当然还要尽可能的多玩多拍几处景点。最好的办法就是在预感天气最好的一个凌晨日出安排给花竹。</p><p class="font">花竹村位于霞浦县三沙镇，霞浦县的最东端。是一个三面环海的半岛式村落，观景台在高出海面两百多米的山头上。</p>');
INSERT INTO xm_details_info VALUES(8,'<p class="font">林芝，是西藏自治区下辖地级市 [1]  ，古称工布，“林芝”是藏文“尼池”或“娘池”音译而来，藏语意为“娘氏家庭的宝座或太阳的宝座”。位于西藏东南部，雅鲁藏布江中下游，其西部和西南部分别与拉萨市、山南市相连，西连那曲市嘉黎县、东接昌都市，南部部分区域在藏南地区（印度占据）、缅甸国接壤，被称为西藏江南，有世界上最深的峡谷——雅鲁藏布江大峡谷和世界第三深度的峡谷帕隆藏布大峡谷</p><p class="font">林芝风景秀丽，很多地带被誉为“西藏江南”，有林芝桃花节，有丰富多彩的南伊沟等。还有被誉为西藏西双版纳的墨脱县和察隅县底部。</p>');
INSERT INTO xm_details_info VALUES(9,'<p class="font">金帐汗蒙古部落是呼伦贝尔唯一以游牧部落为景观的旅游景点，位于呼伦贝尔草原“中国第一曲水”的莫尔格勒河畔。这里是中外驰名的天然牧场。中国历史上许多北方游牧民族都曾在这里游牧，繁衍生息</p><p class="font">金帐汗景点的布局，就是当年成吉思汗行帐的缩影和再现。法国、日本、德国、香港、台湾、俄罗斯等中外影视剧组纷纷纷此拍摄影视剧，是理想的草原影视基地。</p>');







