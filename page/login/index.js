/**
 * 目标1：验证码登录
 * 1.1 在 utils/request.js 配置 axios 请求基地址
 * 1.2 收集手机号和验证码数据
 * 1.3 基于 axios 调用验证码登录接口
 * 1.4 使用 Bootstrap 的 Alert 警告框反馈结果给用户
 */

document.querySelector('.btn').addEventListener('click', () => {
  const form = document.querySelector('.login-form')
  const data = serialize(form, { hash: true , empty: true })
  if (data.code.length !== 6) {
    myAlert('验证码长度必须是6位')
    return
  }

  console.log(data)
  if (data.mobile.length !== 11) {
    myAlert('手机号长度必须是11位')
    return
  }

//1.3 基于 axios 调用验证码登录接口
axios.post('/login', data)
  .then(res => {
    myAlert('登录成功')
    // 登录成功后，跳转到首页
    location.href = '/'
  })
  .catch(err => {
    myAlert('登录失败，请检查手机号或验证码')
    console.log(err)
  })
})
