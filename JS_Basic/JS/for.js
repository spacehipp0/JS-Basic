/*  버튼 0 누르면 
- 모든 버튼 에 붙은 orange 클래스명 제거 
- 버튼0에 orange 클래스명 추가
- 기존 show 클래스 모두 제거    
- div에 show 클래스명 추가 */


// 자주 쓰는 셀렉터 변수에 넣어쓰기

var 버튼 = $('.tab-button');
var 설명 = $('.tab-content');

//for (let i = 0; i < 3; i++) {
//    버튼.eq(i).on('click', function () {
//        탭열기(i)
//    })
//
//}

// 축약할 코드에 변수가 있으면 변수를 파라미터로 바꿔야 잘됨
function 탭열기(구멍) {
    버튼.removeClass('orange');
    설명.removeClass('show');
    버튼.eq(구멍).addClass('orange');
    설명.eq(구멍).addClass('show');
}


$('.list').click(function (e) {
    console.log(e.target.dataset.id);
    탭열기(e.target.dataset.id);
    
    
});
