//Floating Button
document.querySelector('#btnFloat').addEventListener('click', function(){
    actionToggle();
})

function actionToggle() {
    let action = document.querySelector('.action')
    action.classList.toggle('active')
}