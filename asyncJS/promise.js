// Nhiều hành động phụ thuộc vào nhau => viết nhiều callbacks => callback hell => promise
/* const xinSoDt = () => {
    let soDt;

    console.log('Goi dien cho thang ban: Cho tao xin so thang Nam');

    console.log('Dang tim...');

    const thaoTacTimKiem = new Promise((resolve, reject) => {
        let daTimThay;

        setTimeout(() => {
            daTimThay = true;

            if (daTimThay) {
                soDt = 123;
                console.log('Da tim thay so thang Nam');
                resolve(soDt);
            } else {
                reject('Tao khong co so');
            }
        }, 1000);
    });
    return thaoTacTimKiem;
};

xinSoDt()
    .then((soDt) => console.log(`Da xin duoc so thang nam: ${soDt}`))
    .catch((err) => console.log(err));
 */
const xinSoDt = () => {
    let soDt;

    console.log('Goi dien cho thang ban: Cho tao xin so thang Nam');

    console.log('Dang tim...');

    const thaoTacTimKiem = new Promise((resolve, reject) => {
        let daTimThay;

        setTimeout(() => {
            daTimThay = true;

            if (daTimThay) {
                soDt = 123;
                console.log('Da tim thay so thang Nam');
                resolve(soDt);
            } else {
                reject('Tao khong co so');
            }
        }, 1000);
    });
    return thaoTacTimKiem;
};

// Sac pin
const sacPin = (soDt) => {
    console.log('Dang sac pin...');
    let chayPin;

    const thaoTacSacPin = new Promise((resolve, reject) => {
        setTimeout(() => {
            chayPin = false;

            if (!chayPin) {
                console.log('Sac pin day, bat dau goi cho Nam');
                resolve(soDt);
            } else {
                reject('Pin chay');
            }
        }, 1500);
    });

    return thaoTacSacPin;
};

// Goi cho Nam
const goiChoNam = (soDt) =>
    console.log(`Dang noi chuyen voi Nam tai so ${soDt}`);

// Thuc hien
xinSoDt()
    .then((soDt) => {
        sacPin(soDt)
            .then((soDt) => goiChoNam(soDt))
            .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
