const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// 点击 Sign Up（在遮罩层右侧面板）→ 切换到Sign Up表单
signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
    console.log('切换到 Sign Up');
});

// 点击 Sign In（在遮罩层左侧面板）→ 切换回Sign In表单
signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
    console.log('切换到 Sign In');
});