class TextEffectsManager {
    GetText(elementId) {
        return document.getElementById(elementId).textContent;
    }
    
    SetText(elementId, elementText) {
        document.getElementById(elementId).textContent = elementText;
    }

    AddSymbols(elementId, symbol) {
        this.SetText(elementId,this.GetText(elementId) + symbol)
    }

    async WriteText(elementId) {
        var textContent = this.GetText(elementId);
        this.SetText(elementId,"");
        for(let i = 0; i < textContent.length;i++) {
            this.AddSymbols(elementId, textContent[i]);
            await new Promise(resolve => setTimeout(resolve,20));
        }
    }

    constructor() {
        this.WriteText("nick");
    }
}

var textEffectsManager = new TextEffectsManager();

function CheckAdaptive()
{
    console.log(window.innerWidth);
    if(window.innerWidth >= 1280)
        textEffectsManager.SetText("adaptive-joke", "Футер сайтека");
    else
        textEffectsManager.SetText("adaptive-joke", "Адаптиву сделал");
}

window.innerWidth = 1280;

window.addEventListener("resize",CheckAdaptive());