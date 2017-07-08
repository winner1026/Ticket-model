<template>
	<div class="list">
		<pt-header title='选择城市' address='planeTicket'></pt-header>
	    <div class="container" @click='chooseCity'>
			<ul class="letter">
				<li><a href="#A1">A</a></li>
				<li><a href="#B1">B</a></li>
				<li><a href="#C1">C</a></li>
				<li><a href="#D1">D</a></li>
				<li><a href="#E1">E</a></li>
				<li><a href="#F1">F</a></li>
				<li><a href="#G1">G</a></li>
				<li><a href="#H1">H</a></li>
				<li><a href="#J1">J</a></li>
				<li><a href="#K1">K</a></li>
				<li><a href="#L1">L</a></li>
				<li><a href="#M1">M</a></li>
				<li><a href="#N1">N</a></li>
				<li><a href="#P1">P</a></li>
				<li><a href="#Q1">Q</a></li>
				<li><a href="#R1">R</a></li>
				<li><a href="#S1">S</a></li>
				<li><a href="#T1">T</a></li>
				<li><a href="#W1">W</a></li>
				<li><a href="#X1">X</a></li>
				<li><a href="#Y1">Y</a></li>
				<li><a href="#Z1">Z</a></li>
			</ul>
	        <div class="city-list"><span class="city-letter" id="A1">A</span>
	            <p data-id="210300">鞍山</p>
	            <p data-id="152922">阿拉善右旗</p>
	            <p data-id="152921">阿拉善左旗</p>
	            <p data-id="340800">安庆</p>
	            <p data-id="410500">安阳</p>
	            <p data-id="542500">阿里</p>
	            <p data-id="610900">安康</p>
	            <p data-id="520400">安顺</p>
	            <p data-id="513200">阿坝</p>
	            <p data-id="659002">阿拉尔</p>
	            <p data-id="652900">阿克苏</p>
	            <p data-id="820100">澳门</p>
	            <p data-id="654300">阿勒泰</p>
	        </div>
	        <div class="city-list"><span class="city-letter" id="B1">B</span>
	            <p data-id="220800">白城</p>
	            <p data-id="150200">包头</p>
	            <p data-id="150800">巴彦淖尔</p>
	            <p data-id="130600">保定</p>
	            <p data-id="210500">本溪</p>
	            <p data-id="220600">白山</p>
	            <p data-id="341600">亳州</p>
	            <p data-id="340300">蚌埠</p>
	            <p data-id="371600">滨州</p>
	            <p data-id="620400">白银</p>
	            <p data-id="610300">宝鸡</p>
	            <p data-id="530500">保山</p>
	            <p data-id="469030">白沙</p>
	            <p data-id="451000">百色</p>
	            <p data-id="522401">毕节</p>
	            <p data-id="450500">北海</p>
	            <p data-id="511900">巴中</p>
	            <p data-id="469035">保亭</p>
	            <p data-id="652800">巴音郭楞</p>
	            <p data-id="652700">博尔塔拉</p>
	            <p data-id="110100">北京</p>
	        </div>
	        <div class="city-list"><span class="city-letter" id="C1">C</span>
	            <p data-id="140400">长治</p>
	            <p data-id="130900">沧州</p>
	            <p data-id="320400">常州</p>
	            <p data-id="330282">慈溪</p>
	            <p data-id="320581">常熟</p>
	            <p data-id="130800">承德</p>
	            <p data-id="150400">赤峰</p>
	            <p data-id="220100">长春</p>
	            <p data-id="431000">郴州</p>
	            <p data-id="430100">长沙</p>
	            <p data-id="341100">滁州</p>
	            <p data-id="430700">常德</p>
	            <p data-id="341400">巢湖</p>
	            <p data-id="341700">池州</p>
	            <p data-id="469027">澄迈</p>
	            <p data-id="451400">崇左</p>
	            <p data-id="469031">昌江</p>
	            <p data-id="532300">楚雄</p>
	            <p data-id="445100">潮州</p>
	            <p data-id="500100">重庆</p>
	            <p data-id="510100">成都</p>
	            <p data-id="542100">昌都</p>
	            <p data-id="652300">昌吉</p>
	        </div>
	        <div class="city-list"><span class="city-letter" id="D1">D</span>
	            <p data-id="232700">大兴安岭</p>
	            <p data-id="140200">大同</p>
	            <p data-id="230600">大庆</p>
	            <p data-id="321181">丹阳</p>
	            <p data-id="210200">大连</p>
	            <p data-id="210600">丹东</p>
	            <p data-id="370500">东营</p>
	            <p data-id="371400">德州</p>
	            <p data-id="511700">达州</p>
	            <p data-id="532900">大理</p>
	            <p data-id="469003">儋州</p>
	            <p data-id="469025">定安</p>
	            <p data-id="533400">迪庆</p>
	            <p data-id="510600">德阳</p>
	            <p data-id="469007">东方</p>
	            <p data-id="533100">德宏</p>
	            <p data-id="441900">东莞</p>
	            <p data-id="621100">定西</p>
	        </div>
	        <div class="city-list"><span class="city-letter" id="E1">E</span>
	            <p data-id="150600">鄂尔多斯</p>
	            <p data-id="420700">鄂州</p>
	            <p data-id="422800">恩施</p>
	        </div>
	        <div class="city-list"><span class="city-letter" id="F1">F</span>
	            <p data-id="210900">阜新</p>
	            <p data-id="210400">抚顺</p>
	            <p data-id="350181">福清</p>
	            <p data-id="341200">阜阳</p>
	            <p data-id="370983">肥城</p>
	            <p data-id="361000">抚州</p>
	            <p data-id="350100">福州</p>
	            <p data-id="440600">佛山</p>
	            <p data-id="450600">防城港</p>
	        </div>
	        <div class="city-list"><span class="city-letter" id="G1">G</span>
	            <p data-id="440100">广州</p>
	            <p data-id="360700">赣州</p>
	            <p data-id="510800">广元</p>
	            <p data-id="511600">广安</p>
	            <p data-id="450300">桂林</p>
	            <p data-id="450800">贵港</p>
	            <p data-id="520100">贵阳</p>
	            <p data-id="513300">甘孜</p>
	            <p data-id="623000">甘南</p>
	            <p data-id="640400">固原</p>
	            <p data-id="632600">果洛</p>
	        </div>
	        <div class="city-list"><span class="city-letter" id="H1">H</span>
	            <p data-id="231100">黑河</p>
	            <p data-id="211400">葫芦岛</p>
	            <p data-id="330481">海宁</p>
	            <p data-id="320800">淮安</p>
	            <p data-id="131100">衡水</p>
	            <p data-id="150100">呼和浩特</p>
	            <p data-id="330500">湖州</p>
	            <p data-id="230400">鹤岗</p>
	            <p data-id="150700">呼伦贝尔</p>
	            <p data-id="230100">哈尔滨</p>
	            <p data-id="130400">邯郸</p>
	            <p data-id="330100">杭州</p>
	            <p data-id="410600">鹤壁</p>
	            <p data-id="371700">菏泽</p>
	            <p data-id="420200">黄石</p>
	            <p data-id="431200">怀化</p>
	            <p data-id="340600">淮北</p>
	            <p data-id="421100">黄冈</p>
	            <p data-id="430400">衡阳</p>
	            <p data-id="340100">合肥</p>
	            <p data-id="340400">淮南</p>
	            <p data-id="341000">黄山</p>
	            <p data-id="451200">河池</p>
	            <p data-id="460100">海口</p>
	            <p data-id="441600">河源</p>
	            <p data-id="532500">红河</p>
	            <p data-id="441300">惠州</p>
	            <p data-id="610700">汉中</p>
	            <p data-id="451100">贺州</p>
	            <p data-id="632800">海西</p>
	            <p data-id="632100">海东</p>
	            <p data-id="632300">黄南</p>
	            <p data-id="652200">哈密</p>
	            <p data-id="632200">海北</p>
	            <p data-id="653200">和田</p>
	            <p data-id="632500">海南</p>
	        </div>
	        <div class="city-list"><span class="city-letter" id="J1">J</span>
	            <p data-id="210700">锦州</p>
	            <p data-id="330700">金华</p>
	            <p data-id="140700">晋中</p>
	            <p data-id="320281">江阴</p>
	            <p data-id="220200">吉林</p>
	            <p data-id="230800">佳木斯</p>
	            <p data-id="230300">鸡西</p>
	            <p data-id="330400">嘉兴</p>
	            <p data-id="140500">晋城</p>
	            <p data-id="350582">晋江</p>
	            <p data-id="370282">即墨</p>
	            <p data-id="360800">吉安</p>
	            <p data-id="370100">济南</p>
	            <p data-id="420800">荆门</p>
	            <p data-id="410800">焦作</p>
	            <p data-id="370800">济宁</p>
	            <p data-id="410881">济源</p>
	            <p data-id="421000">荆州</p>
	            <p data-id="360400">九江</p>
	            <p data-id="360200">景德镇</p>
	            <p data-id="445200">揭阳</p>
	            <p data-id="620300">金昌</p>
	            <p data-id="440700">江门</p>
	            <p data-id="620200">嘉峪关</p>
	            <p data-id="620900">酒泉</p>
	        </div>
	        <div class="city-list"><span class="city-letter" id="K1">K</span>
	            <p data-id="320583">昆山</p>
	            <p data-id="410200">开封</p>
	            <p data-id="530100">昆明</p>
	            <p data-id="650200">克拉玛依</p>
	            <p data-id="653000">克孜勒苏柯尔克孜</p>
	            <p data-id="653100">喀什</p>
	        </div>
	        <div class="city-list"><span class="city-letter" id="L1">L</span>
	            <p data-id="141000">临汾</p>
	            <p data-id="131000">廊坊</p>
	            <p data-id="211000">辽阳</p>
	            <p data-id="220400">辽源</p>
	            <p data-id="141100">吕梁</p>
	            <p data-id="320700">连云港</p>
	            <p data-id="371200">莱芜</p>
	            <p data-id="411100">漯河</p>
	            <p data-id="331100">丽水</p>
	            <p data-id="341500">六安</p>
	            <p data-id="431300">娄底</p>
	            <p data-id="350800">龙岩</p>
	            <p data-id="370681">龙口</p>
	            <p data-id="371300">临沂</p>
	            <p data-id="410300">洛阳</p>
	            <p data-id="371500">聊城</p>
	            <p data-id="530700">丽江</p>
	            <p data-id="451300">来宾</p>
	            <p data-id="510500">泸州</p>
	            <p data-id="530900">临沧</p>
	            <p data-id="469033">乐东</p>
	            <p data-id="511100">乐山</p>
	            <p data-id="620100">兰州</p>
	            <p data-id="450200">柳州</p>
	            <p data-id="513400">凉山</p>
	            <p data-id="469034">陵水</p>
	            <p data-id="542600">林芝</p>
	            <p data-id="469028">临高</p>
	            <p data-id="540100">拉萨</p>
	            <p data-id="520200">六盘水</p>
	            <p data-id="621200">陇南</p>
	            <p data-id="622900">临夏</p>
	        </div>
	        <div class="city-list"><span class="city-letter" id="M1">M</span>
	            <p data-id="231000">牡丹江</p>
	            <p data-id="340500">马鞍山</p>
	            <p data-id="510700">绵阳</p>
	            <p data-id="511400">眉山</p>
	            <p data-id="440900">茂名</p>
	            <p data-id="441400">梅州</p>
	       	</div>
	        <div class="city-list"><span class="city-letter" id="N1">N</span>
	            <p data-id="320100">南京</p>
	            <p data-id="330200">宁波</p>
	            <p data-id="320600">南通</p>
	            <p data-id="360100">南昌</p>
	            <p data-id="411300">南阳</p>
	            <p data-id="350700">南平</p>
	            <p data-id="350900">宁德</p>
	            <p data-id="350583">南安</p>
	            <p data-id="542400">那曲</p>
	            <p data-id="450100">南宁</p>
	            <p data-id="511300">南充</p>
	            <p data-id="511000">内江</p>
	            <p data-id="533300">怒江</p>
	        </div>
	        <div class="city-list"><span class="city-letter" id="P1">P</span>
	            <p data-id="211100">盘锦</p>
	            <p data-id="360300">萍乡</p>
	            <p data-id="410400">平顶山</p>
	            <p data-id="410900">濮阳</p>
	            <p data-id="350300">莆田</p>
	            <p data-id="510400">攀枝花</p>
	            <p data-id="530800">普洱</p>
	            <p data-id="620800">平凉</p>
	        </div>
	        <div class="city-list"><span class="city-letter" id="Q1">Q</span>
	            <p data-id="130300">秦皇岛</p>
	            <p data-id="230200">齐齐哈尔</p>
	            <p data-id="230900">七台河</p>
	            <p data-id="350500">泉州</p>
	            <p data-id="429005">潜江</p>
	            <p data-id="370200">青岛</p>
	            <p data-id="330800">衢州</p>
	            <p data-id="441800">清远</p>
	            <p data-id="522700">黔南</p>
	            <p data-id="450700">钦州</p>
	            <p data-id="530300">曲靖</p>
	            <p data-id="522300">黔西南</p>
	            <p data-id="621000">庆阳</p>
	            <p data-id="522600">黔东南</p>
	            <p data-id="469002">琼海</p>
	            <p data-id="469036">琼中</p>
	        </div>
	        <div class="city-list"><span class="city-letter" id="R1">R</span>
	            <p data-id="320682">如皋</p>
	            <p data-id="371082">荣成</p>
	            <p data-id="371100">日照</p>
	            <p data-id="542301">日喀则</p>
	        </div>
	        <div class="city-list"><span class="city-letter" id="S1">S</span>
	            <p data-id="220300">四平</p>
	            <p data-id="231200">绥化</p>
	            <p data-id="220700">松原</p>
	            <p data-id="320500">苏州</p>
	            <p data-id="310100">上海</p>
	            <p data-id="321300">宿迁</p>
	            <p data-id="330600">绍兴</p>
	            <p data-id="140600">朔州</p>
	            <p data-id="230500">双鸭山</p>
	            <p data-id="210100">沈阳</p>
	            <p data-id="330682">上虞</p>
	            <p data-id="130100">石家庄</p>
	            <p data-id="440500">汕头</p>
	            <p data-id="350400">三明</p>
	            <p data-id="429021">神农架</p>
	            <p data-id="361100">上饶</p>
	            <p data-id="411400">商丘</p>
	            <p data-id="421300">随州</p>
	            <p data-id="341300">宿州</p>
	            <p data-id="411200">三门峡</p>
	            <p data-id="420300">十堰</p>
	            <p data-id="440300">深圳</p>
	            <p data-id="430500">邵阳</p>
	            <p data-id="440200">韶关</p>
	            <p data-id="441500">汕尾</p>
	            <p data-id="510900">遂宁</p>
	            <p data-id="611000">商洛</p>
	            <p data-id="542200">山南</p>
	            <p data-id="460200">三亚</p>
	            <p data-id="640200">石嘴山</p>
	            <p data-id="659001">石河子</p>
	        </div>
	        <div class="city-list"><span class="city-letter" id="T1">T</span>
	            <p data-id="140100">太原</p>
	            <p data-id="211200">铁岭</p>
	            <p data-id="220500">通化</p>
	            <p data-id="130200">唐山</p>
	            <p data-id="320585">太仓</p>
	            <p data-id="120100">天津</p>
	            <p data-id="321200">泰州</p>
	            <p data-id="150500">通辽</p>
	            <p data-id="331000">台州</p>
	            <p data-id="370900">泰安</p>
	            <p data-id="429006">天门</p>
	            <p data-id="340700">铜陵</p>
	            <p data-id="522201">铜仁</p>
	            <p data-id="469026">屯昌</p>
	            <p data-id="610200">铜川</p>
	            <p data-id="620500">天水</p>
	            <p data-id="654200">塔城</p>
	            <p data-id="659003">图木舒克</p>
	            <p data-id="652100">吐鲁番</p>
	            <p data-id="710100">台湾</p>
	        </div>
	        <div class="city-list"><span class="city-letter" id="W1">W</span>
	            <p data-id="330300">温州</p>
	            <p data-id="320200">无锡</p>
	            <p data-id="150900">乌兰察布</p>
	            <p data-id="150300">乌海</p>
	            <p data-id="340200">芜湖</p>
	            <p data-id="420100">武汉</p>
	            <p data-id="370700">潍坊</p>
	            <p data-id="371000">威海</p>
	            <p data-id="469006">万宁</p>
	            <p data-id="610500">渭南</p>
	            <p data-id="469005">文昌</p>
	            <p data-id="469001">五指山</p>
	            <p data-id="620600">武威</p>
	            <p data-id="450400">梧州</p>
	            <p data-id="532600">文山</p>
	            <p data-id="659004">五家渠</p>
	            <p data-id="640300">吴忠</p>
	            <p data-id="650100">乌鲁木齐</p>
	        </div>
	        <div class="city-list"><span class="city-letter" id="X1">X</span>
	            <p data-id="140900">忻州</p>
	            <p data-id="152500">锡林郭勒</p>
	            <p data-id="130500">邢台</p>
	            <p data-id="152200">兴安</p>
	            <p data-id="320300">徐州</p>
	            <p data-id="410700">新乡</p>
	            <p data-id="420600">襄阳</p>
	            <p data-id="360500">新余</p>
	            <p data-id="411500">信阳</p>
	            <p data-id="429004">仙桃</p>
	            <p data-id="411000">许昌</p>
	            <p data-id="430300">湘潭</p>
	            <p data-id="350200">厦门</p>
	            <p data-id="341800">宣城</p>
	            <p data-id="420900">孝感</p>
	            <p data-id="421200">咸宁</p>
	            <p data-id="433100">湘西</p>
	            <p data-id="610100">西安</p>
	            <p data-id="610400">咸阳</p>
	            <p data-id="532800">西双版纳</p>
	            <p data-id="630100">西宁</p>
	            <p data-id="810100">香港</p>
	        </div>
	        <div class="city-list"><span class="city-letter" id="Y1">Y</span>
	            <p data-id="320282">宜兴</p>
	            <p data-id="222400">延边</p>
	            <p data-id="321000">扬州</p>
	            <p data-id="140800">运城</p>
	            <p data-id="320900">盐城</p>
	            <p data-id="140300">阳泉</p>
	            <p data-id="330281">余姚</p>
	            <p data-id="230700">伊春</p>
	            <p data-id="210800">营口</p>
	            <p data-id="370600">烟台</p>
	            <p data-id="420500">宜昌</p>
	            <p data-id="430600">岳阳</p>
	            <p data-id="360900">宜春</p>
	            <p data-id="430900">益阳</p>
	            <p data-id="330782">义乌</p>
	            <p data-id="360600">鹰潭</p>
	            <p data-id="431100">永州</p>
	            <p data-id="450900">玉林</p>
	            <p data-id="511800">雅安</p>
	            <p data-id="530400">玉溪</p>
	            <p data-id="441700">阳江</p>
	            <p data-id="610800">榆林</p>
	            <p data-id="511500">宜宾</p>
	            <p data-id="445300">云浮</p>
	            <p data-id="610600">延安</p>
	            <p data-id="654000">伊犁哈萨克</p>
	            <p data-id="640100">银川</p>
	            <p data-id="632700">玉树</p>
	        </div>
	        <div class="city-list"><span class="city-letter" id="Z1">Z</span>
	            <p data-id="130700">张家口</p>
	            <p data-id="330681">诸暨</p>
	            <p data-id="321100">镇江</p>
	            <p data-id="320582">张家港</p>
	            <p data-id="211300">朝阳</p>
	            <p data-id="430800">张家界</p>
	            <p data-id="410100">郑州</p>
	            <p data-id="370400">枣庄</p>
	            <p data-id="330900">舟山</p>
	            <p data-id="440183">增城</p>
	            <p data-id="440400">珠海</p>
	            <p data-id="411600">周口</p>
	            <p data-id="370300">淄博</p>
	            <p data-id="430200">株洲</p>
	            <p data-id="350600">漳州</p>
	            <p data-id="411700">驻马店</p>
	            <p data-id="440800">湛江</p>
	            <p data-id="520300">遵义</p>
	            <p data-id="510300">自贡</p>
	            <p data-id="530600">昭通</p>
	            <p data-id="441200">肇庆</p>
	            <p data-id="442000">中山</p>
	            <p data-id="620700">张掖</p>
	            <p data-id="512000">资阳</p>
	            <p data-id="640500">中卫</p>
	        </div>
	    </div>
	</div>
</template>

<script>
	import ptHeader from "../components/ptHeader"
	export default {
		components:{
			ptHeader
		},		
		/*
		var lists=document.querySelectorAll('p');
		console.log(lists[35].offsetTop)
		可以用这种方法用时间代理点击p设置container的scrollTop直接调到该P
		*/
		mounted(){
			
			
		},
		methods:{
			chooseCity(e){
				var e= e || window.event;
				var target = e.target || e.srcElement;		
				if(target.nodeName.toLowerCase()=='p'){
					if(this.$route.query.chooseStartingPoint){
						localStorage.setItem('startingPoint',target.innerText);
						this.$router.push({name:'planeTicket'});    
					}
					else{
						localStorage.setItem('endPoint',target.innerText);
		    			this.$router.push({name:'planeTicket'}); 			
					}
				}				
			}			
		}
	}
/*
	/data/:id这个路由匹配/data/1,/data/2这里的 id 叫 params
	/data?id=1 /data?id=2 这里的 id 叫 query
*/
</script>

<style scoped>
.list{
	display: flex;
	flex-direction: column;
	height: 100%;
}
.container{
	flex: 1;
	overflow: auto;
}
.letter{
	position: fixed;
	right: .15rem;
	top:.6rem
}
.letter>li>a{
	display: block;
	color: #1ba1ba;
	font-size: .14rem;
	font-weight: 900;
	padding-top:.05rem
}
.city-list>.city-letter{
	display: block;
	background: #f3f8fb;
	padding: .05rem;
	font-size:.14rem;
	font-weight:900;
	border-bottom:.001rem solid #d7dbde;
}
.city-list>p{
	font-size:.12rem;
	border-bottom:.001rem solid #d7dbde;
	line-height: .4rem;
	margin-left:.4rem ;
}
</style>
