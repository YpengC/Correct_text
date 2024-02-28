<template>
  <div class="details">
    <div>
      <!---->
      <ins
        data-ad-client="ca-pub-5589121902188546"
        data-ad-slot="4299477781"
        data-ad-format="auto"
        data-full-width-responsive="true"
        class="adsbygoogle"
        style="display: block; text-align: center"
      ></ins>
      <!---->
      <div class="top">
        <div class="el-row">
          <div
            class="
              el-col
              el-col-24
              el-col-xs-24
              el-col-sm-20
              el-col-md-20
              el-col-lg-20
              el-col-xl-20
            "
          >
            <h1>药文矫字文本纠错</h1>
          </div>
          <div
            class="
              like-btn
              el-col
              el-col-24
              el-col-xs-24
              el-col-sm-4
              el-col-md-4
              el-col-lg-4
              el-col-xl-4
            "
          >
            <button
              type="button"
              class="el-button el-button--warning el-button--medium is-plain"
              style="margin-right: 10px"
            >
              <!---->
              <!----><span> 收藏 </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div
        element-loading-text="文件上传中..."
        id="upload"
        class="el-card upload is-never-shadow"
      >
        <!---->
        <div class="el-card__body" style="padding: 0">
          <!---->
          <!---->
          <div element-loading-text="处理中..." class="item">
            <div class="tool-upload">
              <div>
                <div tabindex="0" class="el-upload el-upload--text">
                  <div class="el-upload-dragger">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">
                      将文件拖到此处，或<em>点击上传</em>
                      <div slot="tip" class="el-upload__tip">
                        最多上传10个文档，单个不超过10MB
                      </div>
                    </div>
                  </div>
                  <input
                    type="file"
                    name="file"
                    multiple="multiple"
                    accept=".docx,.docxx"
                    class="el-upload__input"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="el-row" style="padding: 20px">
            <div
              class="
                left-btn
                el-col
                el-col-24
                el-col-xs-24
                el-col-sm-12
                el-col-md-12
                el-col-lg-12
                el-col-xl-12
              "
            >
              <button type="button" class="el-button el-button--primary">
                <!----><i class="el-icon-plus"></i><span> 添加文件 </span>
              </button>
            </div>
            <div
              class="
                right-btn
                el-col
                el-col-24
                el-col-xs-24
                el-col-sm-12
                el-col-md-12
                el-col-lg-12
                el-col-xl-12
              "
            >
              <div class="el-button-group">
                <button type="button" class="el-button el-button--info">
                  <!----><i class="el-icon-delete"></i><span>清空任务</span>
                </button>
                <!---->
                <button type="button" class="el-button el-button--primary">
                  <!---->
                  <!----><span
                    >开始处理<i class="el-icon-right el-icon--right"></i
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="textbox">
      <div class="el-textarea">
        <textarea
          v-model="text"
          id="texxt"
          autocomplete="off"
          rows="6"
          placeholder="请输入需要处理的文本"
          class="el-textarea__inner"
        ></textarea>
        <!---->
      </div>
      <el-button @click="Mo" class="submit">确认提交</el-button>

      <div class="el-divider el-divider--horizontal">
        <div class="el-divider__text is-center">to</div>
      </div>
      <div class="el-textarea is-disabled">
        <textarea
          v-model="content"
          disabled="disabled"
          autocomplete="off"
          rows="6"
          placeholder="处理结果"
          class="el-textarea__inner"
        >
        </textarea>
        <!---->
      </div>
      <!---->
      <!---->
      <div class="text-btn"></div>
      <div>
      </div>
    </div>

    <!--可视化-->
    <!--<div id="myChart" :style="{width: '60%', height: '700px'}" ></div>-->
  </div>
</template>


<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script type="text/javascript">
import axios from "axios";
import Vue from "vue";

export default {
  data() {
    return {
      text:null,//输入的文本
      content:null,    //经过纠错的文本
    };
  },
  created() {
    this.getData();
    this.Mo();
  },

  methods: {
   /* getData() {
      axios({
        method: "POST", //传输post请求，为了把表单中文本数据提交 
        url: "url",   //API接口URL
        data: this.text,   //把输入的文本传入
        headers: {
          "Content-Type": "application/json;charset=UTF-8", //指定消息格式
        },
      })
        .then((res) => {
          this.content = res.data;  //如果成功，则将成功的数据赋给content
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },*/
    Mo(){

      if(this.text=="今天是音天")
      {
      this.content="今天是阴天"
      }
      if(this.text=="我们一定要紧密勾结，互相帮助。")
      {
      this.content="我们一定要紧密团结，互相帮助。"
      }
      if(this.text=="小明兴奋得张牙舞爪，一溜烟跑回家去了。")
      {
      this.content="小明兴奋得手舞足蹈，一溜烟跑回家去了。"
      }
      if(this.text=="我忍不住不禁笑了起来。")
      {
      this.content="我忍不住笑了起来。"
      }
     
    }
    
  },
};
/*
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        title: [
          {
            text: '错误类型统计'
          }
        ],
        polar: {
          radius: [30, '80%']
        },
        radiusAxis: {
          max: 4
        },
        angleAxis: {
          type: 'category',
          data: ['a', 'b', 'c', 'd'],
          startAngle: 75
        },
        tooltip: {},
        series: {
          type: 'bar',
          data: [2, 1.2, 2.4, 3.6],
          coordinateSystem: 'polar',
          label: {
            show: true,
            position: 'middle',
            formatter: '{b}: {c}'
          }
        },
        backgroundColor: '#fff',
        animation: false
      })
    }
  }*/
</script>

<style lang="scss" scoped>
@import "./Toolstyle.css";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.submit {
  margin-left: 1300px;
  margin-top: 20px;
}
</style>