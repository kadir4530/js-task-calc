const gecerliIslemler = [
    {
        islemTipi: 'Toplama',
        operator: '+'
    },
    {
        islemTipi: 'Cikarma',
        operator: '-'
    },
    {
        islemTipi: 'Carpma',
        operator: '*'
    },
    {
        islemTipi: 'Bolme',
        operator: '/'
    }
]

const hesapMakinesi = (param1, param2, operator) => {
    const sonuc = {
        parametreler: [param1, param2],
        islemTipi: operator,
        islemSonucu: null,
        hata: []
    };

    //Hata ayiklama
    sonuc.hata = hataYakala(param1, param2, operator);

    //Hata yoksa islem yap
    if (sonuc.hata.length === 0) {
        sonuc.islemSonucu = islemYap(param1, param2, operator);
        sonuc.islemTipi = gecerliIslemler.find(islem => islem.operator === operator).islemTipi;
    }

    return sonuc;
}

const hataYakala = (param1, param2, operator) => {

    const hata = [];
    if (typeof param1 !== 'number' || typeof param2 !== 'number') {
        hata.push('Lutfen Number tipinde deger giriniz')
    }
    if (!gecerliIslemler.find(islem => islem.operator === operator)) {
        hata.push('Lutfen gecerli 4 islem operatorlerini kullaniniz! (+,-,*,/)')
    }
    else if (operator === '/' && param2 === 0) {
        hata.push('0 a bolunme hatasi')
    }
    return hata;
}

const islemYap = (param1, param2, operator) => {
    let islemSonucu;
    if (operator === '+') islemSonucu = param1 + param2;
    if (operator === '-') islemSonucu = param1 - param2;
    if (operator === '*') islemSonucu = param1 * param2;
    if (operator === '/') islemSonucu = param1 / param2;

    return islemSonucu;
}

console.log(hesapMakinesi(4500, 30, '+'));