<template>
  <div>
    <el-container class="home_container" >
      <el-header id="Top">
        <!--<img src="../../assets/logo1.jpg" class="Header_logo">-->
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">
            <router-link to="/">首页</router-link>
          </el-menu-item>
          <el-menu-item index="2">
           <router-link to="/tool">工具</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/contact">联系我们</router-link>
          </el-menu-item>
          <div class="line"></div>
        </el-menu>
      </el-header>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
      <el-container>
        <el-footer>
          <footer class="footer-component">
            <div class="footer-2">
              <div>
                <div class="ul-list-frame">
                  <ul>
                    <li>网站导航</li>
                    <li><a href="/">首页</a></li>
                    <li>
                      <a
                        href="/tool"
                        >工具</a
                      >
                    </li>
                    
                  </ul>
                  <ul>
                    <li>联系我们</li>
                    <li>
                      <a
                        rel="nofollow"
                        target="_blank"
                        href="https://www.baidu.com/"
                      >
                        <i class="iconfont iconkefu"></i>
                        微信公众号
                      </a>
                    </li>
                    <li class="phone_box1">
                      <a rel="nofollow" href="https://www.baidu.com/">
                        <i class="iconfont iconcommon_icon_phone1"></i>
                        100 0111 12138
                      </a>
                    </li>
                    
                  </ul>
                </div>
                <div class="logo-frame">
                  <div>
                    <img src="../../assets/baidu.png" />
                    <p>微信扫一扫关注我们</p>
                  </div>
                  <div>
                    <img
                      src="../../assets/logo1.png"
                      alt="药文矫字文本纠错"
                    />
                    <p>药文矫字<br />文本纠错</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};


</script>

<style lang="scss" scoped>

@import "./style1.css";

.home_container {
  height: 100%; 
  width:100%;
}

.el-container{
  height:100%;
  margin: 0;
padding: 0;
}

.el-header {
  background-color: #eef3f8;
  color: #333;
  line-height: 60px;
  font-family: "微软雅黑";
  border-radius: 2px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
   height:100%;
  margin: 0;
padding: 0;
}

.el-main {
    overflow: visible;
     height:100%;
    margin: 0;
  padding: 0;
  }
  
  .el-footer{
     height:100%;
    margin: 0;
  padding: 0;
  
  }
</style>  

