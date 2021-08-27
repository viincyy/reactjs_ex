/* const xinSoDt = (hamGoiLai) => {
    let soDt;

    console.log('Goi dien cho thang ban: Cho tao xin so thang Nam');

    console.log('Thang ban dang tim so thang Nam');

    setTimeout(() => {
        soDt = 123;
        console.log('Day roi. Da tim duoc so thang Nam');
        hamGoiLai(soDt);
    }, 1000);

    // console.log(soDt);
};

const hamGoiLai = (soDt) => console.log(`So dien thoai cua thang Nam: ${soDt}`);

xinSoDt(hamGoiLai);

*/

// Qua nhieu callback => callback hell
const xinSoDt = (hamGoiLaiSauKhiTimRa) => {
    let soDt;

    console.log('Goi dien cho thang ban: Cho tao xin so thang Nam');

    console.log('Thang ban dang tim so thang Nam');

    setTimeout(() => {
        soDt = 123;
        console.log('Day roi. Da tim duoc so thang Nam');
        hamGoiLaiSauKhiTimRa(soDt, goiChoNam);
    }, 1000);
};

const sacPin = (soDt, hamGoiLaiSauKhiSacPin) => {
    console.log('Doi ti, sac pin da');

    setTimeout(() => {
        console.log('Sac pin xong, bat dau goi...');
        hamGoiLaiSauKhiSacPin(soDt);
    }, 2000);
};

const goiChoNam = (soDt) =>
    console.log(`Dang noi chuyen voi Nam sau khi goi vao so: ${soDt}`);

xinSoDt(sacPin);
