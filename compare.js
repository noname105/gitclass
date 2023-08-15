// let age = 25;

// console.log(age === 25);
// console.log(age === '25');
// console.log(age == '25');

let score = 100;

if (score === 100) {
    console.log('축하합니다 A 입니다');
} 

else if (score === 80) {
    console.log('아쉽네요 B 입니다');
}

else {
    console.log('분발하세요');
}

switch(score) {
    case 100:
        console.log('축하합니다 A 입니다');
        break;
    
    case 80:
        console.log('아쉽네요 B 입니다');
        break;

    case 60:
        console.log('분발하세요');
        break
}