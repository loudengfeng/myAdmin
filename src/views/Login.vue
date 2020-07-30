<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">溜达溜达管理后台</div>
      <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
        <el-form-item prop="phone">
          <el-input v-model="param.phone" placeholder="phone">
            <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="password" v-model="param.password"
                    @keyup.enter.native="submitForm()">
            <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
      </el-form>
      <div class="forget-paw">忘记密码</div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        param: {
          phone: '15068543161',
          password: '123lou'
        },
        rules: {
          phone: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }]
        }
      };
    },
    created() {

    },
    methods: {
      submitForm() {
        this.$refs.login.validate(valid => {
          if (valid) {
            this.$message.success('登录成功');
            // localStorage.setItem('ms_username', this.param.username);
            this.$router.push('/index');
          } else {
            this.$message.error('请输入账号和密码');
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  };
</script>

<style>
  .el-input-group__prepend {
    color: #000;
    background-color: transparent;
    border: transparent;
    font-size: 20px;
  }

  .el-input__inner {
    border-top-left-radius: 6px !important;
    border-bottom-left-radius: 6px !important;
    border-radius: 6px;
  }
</style>
<style scoped>
  .el-button--primary {
    background-color: #61d799;
    border-color: #61d799;
    color: #000;
  }

  .el-button--primary:hover {
    background: #61d799;
    border-color: #61d799;
    color: #000;
  }

  .login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background: url(../assets/index/login-bgi.jpg) no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
    background-color: rgba(55, 55, 55, 0.63);
  }

  .ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 40px;
    color: #61d799;
    font-weight: 400;
    margin-bottom: 30px;
    /* border-bottom: 1px solid #ddd; */
  }

  .ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    /* background: rgba(255, 255, 255, 0.3); */
    overflow: hidden;
  }

  /* .ms-content {
padding: 30px 30px;
} */

  .login-btn {
    text-align: right;
  }

  .login-btn button {
    width: 40%;
    height: 36px;
    margin-bottom: 10px;
  }

  .login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
  }

  .forget-paw {
    text-align: center;
    font-size: 14px;
    color: #61d799;
    cursor: pointer;
  }
</style>
