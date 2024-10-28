# Integrasi API remove.bg ke Website

## Pendahuluan

API remove.bg memungkinkan pengguna untuk menghapus latar belakang dari gambar secara otomatis. Dengan menggunakan API ini, Anda dapat meningkatkan efisiensi dalam pengolahan gambar di website Anda. Dalam panduan ini, kami akan menjelaskan cara mengintegrasikan API remove.bg ke dalam proyek Anda.

## Prerequisites

Sebelum mulai, pastikan Anda telah memenuhi syarat berikut:

- Node.js terinstal di sistem Anda.
- Akun remove.bg untuk mendapatkan API key.

## Mendapatkan API Key

1. Kunjungi [remove.bg](https://www.remove.bg/api) untuk mendaftar dan mendapatkan API key.
2. Setelah mendaftar, Anda akan menerima API key yang diperlukan untuk melakukan panggilan API.

## Instalasi

Untuk menggunakan API remove.bg, Anda perlu menginstal library yang sesuai. Berikut adalah perintah untuk menginstal library menggunakan npm:

```bash
npm install remove.bg

## Menghapus latar belakang dari file lokal

import { removeBackgroundFromImageFile } from "remove.bg";

const localFile = "./path/to/your/image.jpg"; 
const outputFile = "./path/to/output/image-no-bg.png"; 

removeBackgroundFromImageFile({ 
    path: localFile, 
    apiKey: "YOUR_API_KEY", 
    size: "regular", 
    type: "auto", 
    outputFile 
}).then((result) => { 
    console.log(`File saved to ${outputFile}`); 
}).catch((error) => { 
    console.error(error); 
});

## Menghapus Latar belakang dari URL

import { removeBackgroundFromImageUrl } from "remove.bg";

const imageUrl = "https://example.com/path/to/image.jpg"; 
const outputFile = "./path/to/output/image-no-bg.png"; 

removeBackgroundFromImageUrl({ 
    url: imageUrl, 
    apiKey: "YOUR_API_KEY", 
    size: "regular", 
    type: "auto", 
    outputFile 
}).then((result) => { 
    console.log(`File saved to ${outputFile}`); 
}).catch((error) => { 
    console.error(error); 
});


