

document.getElementById('generateButton').addEventListener('click', () => {
    const qrCodeValue = document.getElementById('qrCodeValue').value;
    const additionalInfoElement = document.getElementById('additionalInfo');
    

    additionalInfoElement.textContent = '';

    if (qrCodeValue) {
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrCodeValue)}`;
        document.getElementById('qrCodeImage').src = qrCodeUrl;

        
        const matchedKeyword = Object.keys(keywordList).find(keyword => qrCodeValue.toLowerCase().includes(keyword));
        if (matchedKeyword) {
            additionalInfoElement.textContent = keywordList[matchedKeyword];
        }
    } else {
        alert('Please enter a value to generate a QR code.');
    }
});