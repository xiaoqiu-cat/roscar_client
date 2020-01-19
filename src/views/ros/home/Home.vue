<template>
  <div class="home-container">
        <div class="content">
                  <el-carousel :interval="4000" type="card" height="250px" class="banner-ros">
                      <el-carousel-item v-for="item in banners" :key="item.imgsrc">
                          <img :src="item.imgsrc" alt="">
                      </el-carousel-item>
                  </el-carousel>
        </div>
        <div class="video-wrapper">
            <div class="title-video">
                ROS 激光雷达小车 操作演示
            </div>
            <video id="video" src="http://qiniu.newtechcollege.com/f89f8581" controls></video>
        </div>
        <div class="footer">
            <div class="footer-img">
                <img src="http://droitthemes.com/html/saasland/img/seo/footer_bg.png" alt="">
            </div>
            <div class="copyright">
                @Copyright  2018- {{newyear}} RosCar 版权所有. <a href="http://www.beian.miit.gov.cn/" target="_blank">鲁ICP备17039960号-2</a>
            </div>
        </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      banners : [
        {
          imgsrc : "http://qiniu.wanglei0633.top/rviz.png"
        },{
          imgsrc : "http://qiniu.wanglei0633.top/ros.png"
        },
        {
          imgsrc : 'http://qiniu.wanglei0633.top/car.jpg'
        }
      ]
    }
  },
  mounted () {
   
  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
    .home-container{
          text-align:center;
          color: #45526b; 
          height: 100%;
          .content{
              margin: 0 auto;
              min-height: calc(100vh - 460px);
              width: 1024px;
              .banner-ros{
                  margin:0 auto;
                  margin-top: 50px;
                  .el-carousel__item:nth-child(2n) {
                    background-color: #99a9bf;
                  }
                  
                  .el-carousel__item:nth-child(2n+1) {
                    background-color: #d3dce6;
                  }
                  img{
                    width: 100%;
                    height: 100%;
                  }
              }
          }
          .video-wrapper{
            width: 1080px;
            margin: 10px auto;
            margin-bottom: 150px;
            .title-video{
              font-size: 30px;
            }
            #video{
              height: 500px;
              width: auto;
            }
          }
          .footer{
            text-align: center;
            width:100%;
            background-color:#ffffff;
            z-index:9999;
            .footer-img{
                width: 1348px;
                height: 266px;
                margin: 10px auto;
                img{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            .copyright{
                font-size: 14px;
                margin: 50px auto;
            }
        }
    }
     @media (max-width: 1060px){
        .content {
            width: 100%!important;
            min-height: calc(100vh - 150px) !important;
            .banner-ros{
              display: none;
            }
            .footer-img{
              display: none;
            }
        }
        .search-box input {
            cursor: pointer;
            width: 0!important;
            border-color: transparent!important;
            position: relative;
        }
        
    }
</style>
