<template>
    <div>
        <div class="home_box">
            <div class="banner_box">
              <div class="bg_1"></div>
              <div class="bg_2"></div>
              <div class="bg_3"></div>
              <div class="width_1200">
                <div class="left_box">
                  <h2>药文矫字文本纠错</h2>
                  <ul>
                    <li>高精度文本纠错，让错误无所遁形</li>
                    <li>轻松代替翻译官，告别僵硬的机械翻译</li>
                    <li>适用于大部分场景的AI校对，使用范围广</li>
                  </ul>
                </div>
                <div class="right_box">
                  <img src="../../assets/logo2.png" />
                </div>
              </div>
            </div>
            <el-divider></el-divider>
            <div class="section_1">
              <p class="p_36">在这些情况下您可以使用药文矫字文本纠错</p>
              <ul class="width_1200">
                <li>
                  <a>
                    <p>论文语法纠错</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p>出版社等地文本处理</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p>AI校对字幕的电影制作</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p>图书公司矫正、翻译</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p>更多其他场景</p>
                  </a>
                </li>
              </ul>
            </div>
            <el-divider></el-divider>
            <div class="section_2 width_1200">
              <p class="p_36">药文矫字文本纠错功能特性</p>
              <p class="p_20">
                帮助您在不改变文本原意的情况下尽可能多的纠正错误内容
              </p>
              <p class="p_20">
                提高文本内容的正确率和质量，使用药文矫字文本纠错，操作简单，方便省时。
              </p>
              <ul>
                <li>
                  <img src="../../assets/dis1.png" />
                  <div>
                    <p>二次纠错</p>
                    <p>二次纠错，消除一次纠错的遗留问题，精准到位</p>
                  </div>
                </li>
                <li>
                  <img src="../../assets/dis2.png" />
                  <div>
                    <p>一键批量操作处理</p>
                    <p>可一键选择多个文本传入处理，节省时间让操作更轻松</p>
                  </div>
                </li>
                <li>
                  <img src="../../assets/dis3.png" />
                  <div>
                    <p>支持多种类型的错误识别</p>
                    <p>可以识别处理包括用词、语法、知识类错误的文本</p>
                  </div>
                </li>
                <li>
                  <img src="../../assets/dis4.png" />
                  <div>
                    <p>翻译官模式</p>
                    <p>
                      高精度翻译，取代翻译官，告别传统僵硬的机械翻译
                    </p>
                  </div>
                </li>
                <li>
                  <img src="../../assets/dis5.png" />
                  <div>
                    <p>检查-纠错字词-二次纠错语法</p>
                    <p>
                      摆脱翻译后仍然需要自己对翻译后的文本再次更改校对的困境，实现一步完成。
                    </p>
                  </div>
                </li>
                <li>
                  <img src="../../assets/dis6.png" />
                  <div>
                    <p>AI智能校对</p>
                    <p>降低了校对所需的时间，减少人工校对的压力</p>
                  </div>
                </li>
              </ul>
            </div>
            <el-divider></el-divider>
            <section class="section_3">
              <p class="p_36 width_1200">软件功能优势</p>
              <!-- 走马灯 -->
              <div class="swiper-container swiper-container-2">
                <el-carousel :interval="4000" type="card" height="450px">
                  <el-carousel-item>
                    <img
                      src="../../assets/bkk1.png"
                      width="100%"
                      height="100%"
                    />
                  </el-carousel-item>
                  <el-carousel-item>
                    <img
                      src="../../assets/bkk2.png"
                      width="100%"
                      height="100%"
                    />
                  </el-carousel-item>
                  <el-carousel-item>
                    <img
                      src="../../assets/bkk3.png"
                      width="100%"
                      height="100%"
                    />
                  </el-carousel-item>
                  <el-carousel-item>
                    <img
                      src="../../assets/bkk4.png"
                      width="100%"
                      height="100%"
                    />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </section>

            <section class="section_5">
              <p class="p_36">药文矫字值得更多人信赖</p>
              <!-- Swiper -->
              <div class="swiper-container swiper-container-1 width_1200">
                <div class="user">
              <div class="home-title">
              </div>
              <div class="user-main contentCenter">
                <div class="user-item">
                  <p>
                    <span class="blockquote blockquote-before"></span
                    >工具操作很简单，基本没有什么难度，很好上手，支持支持。<span
                      class="blockquote blockquote-after"
                    ></span>
                  </p>
                  <div class="">
                    <span class="headPortrait"
                      ><img
                        src="../../assets/user1.png"
                    /></span>
                    <p class="nameId">
                      <span>随梦行者</span
                      ><span><i class="idIcon"></i>1548352</span>
                    </p>
                    <span class="symbol"></span>
                  </div>
                </div>
                <div class="user-item">
                  <p>
                    <span class="blockquote blockquote-before"></span
                    >本以为这种工具纠正效果不是很好，亲自使用之后直接爱住了，开发大大太棒啦！药文矫字yyds<span
                      class="blockquote blockquote-after"
                    ></span>
                  </p>
                  <div class="">
                    <span class="headPortrait"
                      ><img
                        src="../../assets/user2.jpg"
                    /></span>
                    <p class="nameId">
                      <span>想吃巧克力</span
                      ><span><i class="idIcon"></i>527851</span>
                    </p>
                    <span class="symbol"></span>
                  </div>
                </div>
                <div class="user-item">
                  <p>
                    <span class="blockquote blockquote-before"></span
                    >直接拯救我的论文，太激动了！！！为什么没有评分系统啊，我要给这个工具一百分！！<span
                      class="blockquote blockquote-after"
                    ></span>
                  </p>
                  <div class="">
                    <span class="headPortrait"
                      ><img
                        src="../../assets/user3.png"
                    /></span>
                    <p class="nameId">
                      <span>张伟</span
                      ><span><i class="idIcon"></i>364812</span>
                    </p>
                    <span class="symbol"></span>
                  </div>
                </div>
                <div class="user-item">
                  <p>
                    <span class="blockquote blockquote-before"></span
                    >被朋友推荐过来使用的，用完感觉非常棒，傻瓜式操作，太适合我这种平常和文本对着拼命的打工人了！<span
                      class="blockquote blockquote-after"
                    ></span>
                  </p>
                  <div class="">
                    <span class="headPortrait"
                      ><img
                        src="../../assets/user4.jpg"
                    /></span>
                    <p class="nameId">
                      <span>郭包肉盖饭</span><span><i class="idIcon"></i>512469</span>
                    </p>
                    <span class="symbol"></span>
                  </div>
                </div>
                <div class="user-item">
                  <p>
                    <span class="blockquote blockquote-before"></span
                    >之前觉得这种工具好鸡肋，直到现在自己工作在出版社天天整理、审核投稿才发现发明这种工具的人简直是天才！.<span
                      class="blockquote blockquote-after"
                    ></span>
                  </p>
                  <div class="">
                    <span class="headPortrait"
                      ><img
                        src="../../assets/user5.jpg"
                    /></span>
                    <p class="nameId">
                      <span>风轻云淡</span
                      ><span><i class="idIcon"></i>125887</span>
                    </p>
                    <span class="symbol"></span>
                  </div>
                </div>
                <div class="user-item">
                  <p>
                    <span class="blockquote blockquote-before"></span
                    >回来评论了！之前觉得这种工具没什么太大的作用，现在全靠这工具救我狗命，对不起开发大大，之前是我说话声大了点！！！<span
                      class="blockquote blockquote-after"
                    ></span>
                  </p>
                  <div class="">
                    <span class="headPortrait"
                      ><img
                        src="../../assets/user6.jpg"
                    /></span>
                    <p class="nameId">
                      <span>我爱中国</span
                      ><span><i class="idIcon"></i>669851</span>
                    </p>
                    <span class="symbol"></span>
                  </div>
                </div>
              </div>
            </div>
                <!-- 回到顶部 -->
                <div class="swiper-pagination"></div>
              </div>
            </section>
            <div id="topAnchor" ref="faultTree" class="wrap">
              <a id="TOPUp" href="#Top">
                <img
                  style="width: 100%; height: 80%"
                  src="../../assets/top.png"
                  alt=""
                />
              
              </a>
              
            </div>
          </div>
    </div>
</template>

<script>
export default {
    name:'Init',
}
</script>


