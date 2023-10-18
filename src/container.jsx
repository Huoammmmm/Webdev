import Panel from './accordion';
import React, { useState } from 'react';
import logo from './monyet.jfif';

function KomponenProfil() {
    const [Poto, setFoto] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const Foto = React.createElement('img', { src: Poto ? logo : '', alt: 'logo' });
    const divfoto = React.createElement('div', { className: `Foto` }, Foto);

    const nama = React.createElement('h1', null, 'Andy Wijaya');
    const divnama = React.createElement('div', { className: 'Nama' }, nama);

    const divluar1 = React.createElement('div', { className: 'Div1' }, divfoto, divnama);

    const angkatan = React.createElement(Panel, {
        title: "Angkatan",
        isActive: activeIndex === 0,
        onShow: () => setActiveIndex(0)
    }
        , 'Angkatan 2022');

    const major = React.createElement(Panel, {
        title: "Jurusan",
        isActive: activeIndex === 1,
        onShow: () => setActiveIndex(1)
    }
        , 'Major: IMT');

    const jalursukses = React.createElement(Panel, {
        title: "Jalur sukses ",
        isActive: activeIndex === 2,
        onShow: () => setActiveIndex(2)
    }
        , 'Jalur sukses: CE');

    const hobby = React.createElement(Panel, {
        title: "Hobby",
        isActive: activeIndex === 3,
        onShow: () => setActiveIndex(3)
    }
        , 'Hobby: Coding');

    const listbiodata = React.createElement('ul', null, [angkatan, major, jalursukses, hobby]);
    const divbiodata = React.createElement('div', { className: 'divbiodata' }, listbiodata);

    const gender = React.createElement('li', null, 'Gender: Male');
    const Career = React.createElement('li', null, 'Career: College student');
    const list1 = React.createElement('ul', null, [gender, Career]);
    const divlist1 = React.createElement('div', { className: 'Div2' }, list1)
    const div2 = React.createElement('div', null, divlist1, divbiodata);


    const org1 = React.createElement('li', null, 'NPLC 2022');
    const org2 = React.createElement('li', null, 'Perkumpulan Blue Archive');
    const org3 = React.createElement('li', null, 'Perkumpulan FF');
    const listorganisasi = React.createElement('ul', null, [org1, org2, org3]);
    const divorganisasi = React.createElement('div', { className: 'Div3' }, listorganisasi);
    const div3 = React.createElement('div', null, divorganisasi);

    const tombol = React.createElement('button', { className: 'button', onClick: () => setFoto(prev => !prev) }, 'Click Me');
    const divbutton = React.createElement('div', { className: 'Div3' }, tombol);

    const divpalingluar = React.createElement('div', null, [divluar1, div2, div3, divbutton]);

    return divpalingluar;

}

export default KomponenProfil;


