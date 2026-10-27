// 1. Ví dụ về hàm gọi lại (Callback)
function callTenTimes(callback) {
    for (let i = 0; i < 10; i++) {
        callback();
    }
}

callTenTimes(function () {
    alert('함수 호출');
});

// 2. Khai báo đối tượng (Object) sản phẩm
let product = {
    제품명: '7D 건조 망고',
    유형: '당절임',
    성분: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    원산지: '필리핀'
};

// Truy cập và hiển thị thử thuộc tính
alert(product['제품명']);

// 3. Sử dụng vòng lặp for in để duyệt qua các thuộc tính của đối tượng
for (let i in product) {
    alert(i + ' : ' + product[i]);
}

// 4. Khai báo đối tượng 'person' có chứa phương thức (method) và sử dụng 'this'
let person = {
    name: '윤인성',
    eat: function (food) {
        alert(this.name + '이(가) ' + food + '을/를 먹습니다.');
    }
};

// Gọi phương thức của đối tượng person
person.eat('밥');