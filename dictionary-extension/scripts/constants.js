export const DICTIONARY_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
export const PH_WORD = '#WORD#';
export const PH_AUDIO_SRC = '#AUDIO_SRC#';
export const PH_PHONETIC = '#PHONETIC#';
export const PH_MEANING = '#MEANING#';
export const BODY_TEMPLATE = `
    <h2 class="word" id="word">${PH_WORD}</h2>
    <audio  id ="audio" src="${PH_AUDIO_SRC}"controls>
    </audio>
    <h3 id="phonetic">${PH_PHONETIC}</h3>
    <div id="meaning">${PH_MEANING}</div>
`;