export function toRna(string){
    let transcription = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U',
    }
    let rna = '';

    for (let i=0; i<string.length; i++) {
        const char = string.charAt(i);

        if (char in transcription === false) {
            throw new Error('Invalid input DNA.');
        }
        
        rna += transcription[char];
    }
    return rna;
}