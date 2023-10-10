
import React,{useState} from 'react';
import logo from './monyet.jfif';

function KomponenProfil(){
    const [circle, setCircle] = useState(false);

    const Foto = React.createElement('img', { src: logo, alt: 'logo' });
    const divfoto = React.createElement('div', { className: `Foto ${circle ? 'circle' : ''}`}, Foto);
    const nama = React.createElement('h1', null, 'Andy Wijaya');
    const divnama = React.createElement('div', { className: 'Nama' }, nama);
    const divluar1 = React.createElement('div', { className: 'Div1' }, divfoto,divnama);

    const angkatan = React.createElement('li', null, 'Angkatan: 2022');
    const major = React.createElement('li', null, 'Major: IMT');
    const jalursukses = React.createElement('li', null, 'Jalur sukses: CE');
    const hobby = React.createElement('li', null, 'Hobby: Coding');
    const listbiodata = React.createElement('ul', null, [angkatan, major, jalursukses, hobby]);
    const divbiodata = React.createElement('div', {className: 'divbiodata'}, listbiodata);

    const gender = React.createElement('li', null, 'Gender: Male');
    const Career = React.createElement('li', null, 'Career: College student');
    const list1 = React.createElement('ul', null, [gender, Career]);
    const divlist1 = React.createElement('div', { className: 'Div2' }, list1)
    const div2 = React.createElement('div', null, divlist1,divbiodata);
    
    
  
  
  
    const org1 = React.createElement('li', null, 'NPLC 2022');
    const org2 = React.createElement('li', null, 'Perkumpulan Blue Archive');
    const org3 = React.createElement('li', null, 'Perkumpulan FF');
    const listorganisasi = React.createElement('ul', null, [org1, org2, org3]);
    const divorganisasi = React.createElement('div', { className: 'Div3' }, listorganisasi);
    const div3 = React.createElement('div', null, divorganisasi);
  
    const tombol = React.createElement('button', {className:'button',onClick: () => setCircle(prev => !prev)}, 'Click Me');
    const divbutton = React.createElement('div', { className: 'Div3' }, tombol);
  
    const divpalingluar = React.createElement('div', null, [divluar1,div2,div3,divbutton]);
  
    return divpalingluar;
  
}

export default KomponenProfil;

  
