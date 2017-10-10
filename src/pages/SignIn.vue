<template>
  <main>
    <van-cell-group>
      <van-field v-model="name" label="姓名" icon="clear" required  @click-icon="name = ''">
      </van-field>

      <van-field v-model="email" type="email" icon="clear" label="邮箱" required @click-icon="email = ''">
      </van-field>

      <van-field v-model="phone" type="tel" icon="clear" label="手机号" required @click-icon="phone = ''">
      </van-field>

    </van-cell-group>
    <van-button size="large" type="primary" @click="onSubmit">报名</van-button>
  </main>
</template>
<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      isNameChecked: true,
      isEmailChecked: true,
      isPhoneChecked: true,
    }
  },
  methods: {
    onSubmit(){
      if(this.validate()){
        
      }
    },
    validate(){
      if(!this.checkName()) return false
      if(!this.checkEmail()) return false
      if(!this.checkPhone()) return false

      return true
    },
    checkName(){
      if(this.name === ''){
        Toast('请输入您的姓名')
        this.isNameChecked = false
      }
      return this.isNameChecked
    },
    checkEmail(){
      const reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
      if(this.email === ''){
        Toast('请输入您的邮箱')
        this.isEmailChecked = false
      }else if(!reg.test(this.email)){
        Toast('请检查您的邮箱格式')
        this.isEmailChecked = false
      }
      return this.isEmailChecked
    },
    checkPhone(){
      const reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
      if(this.phone === ''){
        Toast('请输入您的手机号')
        this.isPhoneChecked = false
      }else if(!reg.test(this.phone)){
        Toast('请检查您的手机号格式')
        this.isPhoneChecked = false
      }

      return this.isPhoneChecked
    }
  }
}
</script>

<style lang="postcss" scoped>
  .van-button{
    margin: 20px 0 20px 10px;
    width: calc(100% - 20px);
  }
</style>
