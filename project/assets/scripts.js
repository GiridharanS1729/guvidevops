document.getElementById('text-input').addEventListener('input', autoResize);
document.getElementById('copy-button').addEventListener('click', copyToClipboard);
document.getElementById('clear-button').addEventListener('click', clearAll);
document.getElementById('download-button').addEventListener('click', downloadAsTxt);

function autoResize() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
}

function convertText(caseType) {
    let text = document.getElementById('text-input').value;

    switch (caseType) {
        case 'uppercase':
            text = text.toUpperCase();
            break;
        case 'lowercase':
            text = text.toLowerCase();
            break;
        case 'camelcase':
            text = toCamelCase(text);
            break;
        case 'sentencecase':
            text = toSentenceCase(text);
            break;
        case 'titlecase':
            text = toTitleCase(text);
            break;
        case 'pascalcase':
            text = toPascalCase(text);
            break;
        case 'altcase':
            text = toAltCase(text);
            break;
        case 'initialcase':
            text = toInitialCase(text);
            break;
        case 'swapcase':
            text = toSwapCase(text);
            break;
    }

    document.getElementById('text-input').value = text;
    autoResize.call(document.getElementById('text-input'));
}

function toCamelCase(str) {
    return str.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase());
}

function toSentenceCase(str) {
    return str.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

function toPascalCase(str) {
    return str.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/g, word => word.toUpperCase());
}

function toAltCase(str) {
    return str.split('').map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()).join('');
}

function toInitialCase(str) {
    return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

function toSwapCase(str) {
    return str.split('').map(char => {
        if (char === char.toLowerCase()) {
            return char.toUpperCase();
        } else {
            return char.toLowerCase();
        }
    }).join('');
}

function copyToClipboard() {
    const textArea = document.getElementById('text-input');
    textArea.select();
    document.execCommand('copy');
    alert('Text copied to clipboard!');
}

function clearAll() {
    document.getElementById('text-input').value = '';
}

function downloadAsTxt() {
    const text = document.getElementById('text-input').value;
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'text.txt';
    link.click();
}
