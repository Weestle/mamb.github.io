var difficultyInput = document.querySelector('#difficulty');
var difficultyOutput = document.querySelector('#difficulty_val');
var veganInput = document.querySelector('#is_vegan');
var veganOutpiut = document.querySelector('#vegan_output');
var scoreInput = document.querySelector('#score');
var scoreOutput = document.querySelector('#score_val');
var is_vegan = false;
var mainImg = document.querySelector('#main_food');
difficultyInput.value = 0;
scoreInput.value = 3;

// Ползунок сложности приготовления
difficultyInput.addEventListener('input', function () {
    var s = this.value + " ";
    if (this.value > 7) {
        s += 'СЛОЖНО';
        difficultyOutput.style.backgroundColor = 'rgb(240, 0, 0)';
    }
    else if (this.value > 4) {
        s += 'СРЕДНЕ';
        difficultyOutput.style.backgroundColor = 'orange';
    }
    else {
        s += 'ЛЕГКО';
        difficultyOutput.style.backgroundColor = 'rgb(0, 220, 0)';
    }
    difficultyOutput.innerHTML = s;
});
// Для вегетарианцев
veganInput.addEventListener('change', function () {
    if (is_vegan) {
        veganOutpiut.innerHTML = 'Нет';
    }
    else {
        veganOutpiut.innerHTML = 'Да';
    }
    is_vegan = !is_vegan;
})
// Ползунок вкуса блюда
scoreInput.addEventListener('input', function () {
    if (this.value == 1) {
        scoreOutput.innerHTML = 'Очень невкусно';
    }
    else if (this.value == 2) {
        scoreOutput.innerHTML = 'Невкусно';
    }
    else if (this.value == 3) {
        scoreOutput.innerHTML = 'Под пиво пойдет';
    }
    else if (this.value == 4) {
        scoreOutput.innerHTML = 'Вкусно';
    }
    else {
        scoreOutput.innerHTML = 'Очень вкусно';
    }
})

function setImg(val) {
    var img = document.querySelector('#' + val);
    var src = img.getAttribute('src');
    mainImg.src = src;
}