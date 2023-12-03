import { DICTIONARY_URL, BODY_TEMPLATE, PH_WORD, PH_PHONETIC, PH_AUDIO_SRC, PH_MEANING } from "./constants.js";
import { makePtag, mapDefinitions,removeAudio } from "./utils.js";

const body = document.querySelector('body');

const fetchMeaning = async (word) => {
  const response = await fetch(`${DICTIONARY_URL}${word}`);
  if (response.status !== 200) throw new Error('Word not found');
  const result = await response.json();
  return result;
}

const populatePopup = (result) => {
  const { phonetics, word, phonetic, meanings } = result[0];
  const audioSrc = phonetics.reverse()[0]?.audio;
  
  let meaningsHTML = '';
  meanings.map(meaning => {
    const { partOfSpeech, definitions } = meaning;
    meaningsHTML += makePtag(partOfSpeech,['pos']);
    meaningsHTML += mapDefinitions(definitions);
  });

  let popupBody = BODY_TEMPLATE;
  popupBody = popupBody.replace(PH_WORD, word);
  popupBody = popupBody.replace(PH_PHONETIC, phonetic ?? '');
  popupBody = popupBody.replace(PH_AUDIO_SRC, audioSrc);
  popupBody = popupBody.replace(PH_MEANING, meaningsHTML);
  body.innerHTML = popupBody;
  !audioSrc && removeAudio();

}

const start = async () => {
  try {
    const { word } = await chrome.storage.local.get(["word"]);
    const result = await fetchMeaning(word.trim());
    populatePopup(result);
  } catch (error) {
      body.innerHTML = makePtag(error.message,['error']);    
  }
}

start();

