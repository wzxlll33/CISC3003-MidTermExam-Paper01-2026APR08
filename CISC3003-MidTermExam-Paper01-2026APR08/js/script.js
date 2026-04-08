const container = document.getElementById('container');
const signInBtn = document.getElementById('signIn');
const signUpBtn = document.getElementById('signUp');

console.log('JS加载成功');
console.log('container:', container);
console.log('signInBtn:', signInBtn);
console.log('signUpBtn:', signUpBtn);

// 点击 SIGN IN - 显示 Sign In 表单，显示右侧面板
signInBtn.addEventListener('click', () => {
    console.log('点击 SIGN IN');
    container.classList.add('show-signin');
});

// 点击 SIGN UP - 显示 Sign Up 表单，显示左侧面板
signUpBtn.addEventListener('click', () => {
    console.log('点击 SIGN UP');
    container.classList.remove('show-signin');
});