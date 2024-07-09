document.getElementById('encrypt-btn').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    const encryptedText = encrypt(inputText);
    document.getElementById('output-text').value = encryptedText;
});

document.getElementById('decrypt-btn').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    const decryptedText = decrypt(inputText);
    document.getElementById('output-text').value = decryptedText;
});

document.getElementById('copy-btn').addEventListener('click', () => {
    const outputText = document.getElementById('output-text');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
});

function encrypt(text) {
    const rules = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    return text.replace(/[eioua]/g, char => rules[char]);
}

function decrypt(text) {
    const rules = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    return text.replace(/enter|imes|ai|ober|ufat/g, match => rules[match]);
}
