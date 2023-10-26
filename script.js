const textBox = document.getElementById("textBox");
const container = document.querySelector(".container");

const imageBox = document.createElement("div");
imageBox.classList.add("imageBox");

const QRimage = document.createElement('img');
QRimage.classList.add("QRimage");

const downloadBtn = document.createElement("a");
downloadBtn.textContent = "Download"
downloadBtn.classList.add("downloadBtn");

const apiUrl = "https://quickchart.io/qr?margin=2&size=300&ecLevel=H&format=png&light=f8f7f9&text=";

textBox.addEventListener("input",(e)=>{
    if(e.target.value.length >0){
    QRimage.src = `${apiUrl}${e.target.value}`;

    imageBox.appendChild(QRimage);
    imageBox.appendChild(downloadBtn);

    container.appendChild(imageBox)
    downloadImage(`${apiUrl}${e.target.value}`,`${e.target.value}_QR _Code`)
    }
    else{
        imageBox.remove()
    }
})

async function downloadImage(imageSrc,nameOfDownload){
    const response = await fetch(imageSrc);
    const blobImage = await response.blob();
    const href = URL.createObjectURL(blobImage);
    downloadBtn.href = href;
    downloadBtn.download = nameOfDownload;
}
console.log(textBox.value);
