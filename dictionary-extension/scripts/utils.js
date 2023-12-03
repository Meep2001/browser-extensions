export const makePtag = (content, classNames = []) => `<p class="${classNames.join(' ')}">${content}</p>`;

export const mapDefinitions = (definitions) => {
    const items = definitions.map(({ definition, example }) => {
        let content = '';
        content += '<div>';
        content += makePtag(definition);
        example && (content += makePtag(`Ex. ${example}`, ['example', 'italic']));
        content += '</div>';
        return `<li>${content}</li>`;
    });
    return `<ul>${items.join('')}</ul>`;
}

export const removeAudio = () => {
    const body = document.querySelector('body');
    const audio = document.getElementsByTagName('audio')[0];
    body.removeChild(audio);
}