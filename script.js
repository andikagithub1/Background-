document.getElementById('removeBgBtn').addEventListener('click', async () => {
    const fileInput = document.getElementById('upload');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please upload an image first.');
        return;
    }

    const formData = new FormData();
    formData.append('image_file', file);
    formData.append('size', 'auto');

    const apiKey = 'YOUR_API_KEY'; // Ganti dengan API key Anda

    try {
        const response = await fetch('https://api.remove.bg/v1.0/removebg', {
            method: 'POST',
            headers: {
                'X-Api-Key': apiKey,
            },
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Failed to remove background');
        }

        const blob = await response.blob();
        const imgElement = document.getElementById('result');
        imgElement.src = URL.createObjectURL(blob);
        imgElement.style.display = 'block';
    } catch (error) {
        console.error(error);
        alert('An error occurred while removing the background.');
    }
});