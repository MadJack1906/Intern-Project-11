function tabs(event, tabName) {
    // Remove the problem-selector-active class to the current active
    // Add the active class to the selected class
    let previousActiveElement = document.getElementById('side-bar').getElementsByClassName('problem-selector-active')[0];
    let activeElement = document.getElementById(tabName);

    const activeClass = 'problem-selector-active';

    previousActiveElement.classList.remove(activeClass);
    activeElement.classList.add(activeClass);

    let previousContent = document.getElementsByClassName('problem-container p-5 border');
    
    for (let element of previousContent) {
        element.classList.add('hidden')
    }

    switch(tabName) {
        case 'problem-one-btn':
            document.getElementById('problem-one-cntnt').classList.remove('hidden');
        break;

        case 'problem-two-btn':
            document.getElementById('problem-two-cntnt').classList.remove('hidden');
        break;

        case 'problem-three-btn':
            document.getElementById('problem-three-cntnt').classList.remove('hidden');
        break;

        case 'problem-four-btn':
            document.getElementById('problem-four-cntnt').classList.remove('hidden');
        break;

        // Add the remaining cases here
    }
    
    console.log(`${document.getElementsByClassName('problem-container p-5 border h-screen').length}`);

}