<template>
  <main>
    <van-icon name="debit-pay"/>
    <p>报名成功，请点击支付门票</p>
    <van-button size="large" type="primary">微信支付</van-button>
  </main>
</template>
<style lang="postcss" scoped>
  p{
    text-align: center;
  }
  .van-icon{
    margin: 40px auto 20px auto;
    color: #FFF;
    font-size: 100px;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background:#4b0;
  }
  .van-button{
    margin: 20px 0 20px 10px;
    width: calc(100% - 20px);
  }
</style>

