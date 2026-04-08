// 获取元素
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// 调试输出
console.log('signUpButton:', signUpButton);
console.log('signInButton:', signInButton);
console.log('container:', container);

// 点击 Sign Up 按钮（切换到注册视图）
signUpButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
    console.log('切换到 Sign Up');
});

// 点击 Sign In 按钮（切换到登录视图）
signInButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
    console.log('切换到 Sign In');
});