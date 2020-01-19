<template>
    <div class="cms-login-container">
            <div id="particles-js" style="display: flex;align-items: center;justify-content: center">
            </div>
                <div class="login-page">
                    <div class="login-content">
                        <div class="login-tit">RosCar 后台登录</div>
                        <div class="login-input">
                            <input type="text" placeholder="账号" v-model="loginForm.username">
                        </div>
                        <div class="login-input">
                            <input type="password" placeholder="密码" v-model="loginForm.password">
                        </div>
                        <div class="login-btn" @click="submit">
                                <span>登录</span>
                        </div>
                    </div>
                </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            loginForm : {
                username : '',
                password : ''
            },
        }
    },
    created(){
        let flag = sessionStorage.getItem('flag')
        if(!flag){
            location.reload()
            sessionStorage.setItem('flag',true)
        }else{
            sessionStorage.setItem('flag','')
        }
    },
    methods : {
        submit(){
            let {username,password} = this.loginForm;
            if(!username){
                this.$message.error('账户不能为空')
                return
            }
            if(!password){
                this.$message.error('密码不能为空')
                return
            }
            if(username != 'ros' || password != 'roscar'){
                this.$message.error('账户或密码错误')
                return
            }
            this.$router.push('/cms')
        }
    }
}
</script>
<style lang="less" scoped>
 .cms-login-container{
            canvas{
                display:block;
                vertical-align:bottom;
            }

            .count-particles{
                background: #000022;
                position: absolute;
                top: 48px;
                left: 0;
                width: 80px;
                color: #13E8E9;
                font-size: .8em;
                text-align: left;
                text-indent: 4px;
                line-height: 14px;
                padding-bottom: 2px;
                font-family: Helvetica, Arial, sans-serif;
                font-weight: bold;
            }

            .js-count-particles{
                 font-size: 1.1em;
            }

            #stats,.count-particles{
                -webkit-user-select: none;
                margin-top: 5px;
                margin-left: 5px;
            }

            #stats{
                border-radius: 3px 3px 0 0;
                overflow: hidden;
            }

            .count-particles{
                border-radius: 0 0 3px 3px;
            }


            /* ---- particles.js container ---- */

            #particles-js{
                width: 100%;
                height: 100%;
                background-image: url('http://qiniu.zhijiaozhijia.com/login_background.png');
                background-size: cover;
                background-position: 50% 50%;
                background-repeat: no-repeat;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }
            .login-content{
                width: 400px;
                height: 280px;
                margin: 0 auto;
                position: relative;
                top: 300px;
                border: 1px solid #2890fa;
                background: rgba(40, 144, 250, 0.2);
                border-radius: 5px;
            }
            .login-tit{
                text-align: center;
                // background: rgba(0, 0, 0, 0.8);
                border: 1px solid #2890fa;
                color: #fff;
                padding: 15px 20px;
                font-size: 18px
            }
            .login-input {
                width: 82%;
                margin: 30px auto 0 auto;
            }
            .login-input input{
                background: rgba(0, 0, 0, 0);
                border: 0;
                height: 30px;
                width: 100%;
                line-height: 30px;
                color: #fff;
                border-bottom: 1px solid rgba(40, 144, 250, 0.4);
            }
            .login-input input:focus{
                outline:none;
            }
            .login-btn{
                span{
                    color: #ffffff;
                    display: block;
                    width: 70%;
                    margin: 30px auto;
                    background: rgba(40, 144, 250, 0.2);
                    padding: 10px 30px;
                    border-radius: 5px;
                    text-align: center;
                    letter-spacing: 10px;
                    cursor: pointer;
                 }
            }
            .login-btn-right{
                display: flex;
                align-items: center;
                margin-left: 20px
            }
            .login-btn-right img{
                margin-right: 10px
            }
 }
</style>