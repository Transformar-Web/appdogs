

let deferredInstallPrompt = null;

const installBtn = document.querySelector("#btnApp") ;
installBtn.addEventListener("click", installPWA);

window.addEventListener("beforeinstallprompt", saveBeforeInstallPromptEvent );

function saveBeforeInstallPromptEvent(evt){
    deferredInstallPrompt = evt;
    installBtn.removeAttribute("hidden");
}


function installPWA(evt){
    deferredInstallPrompt.prompt();
    evt.srcElement.setAttribute("hidden", true);
    deferredInstallPrompt.userChoice.then(choice=>{
        if(choice.outcome === "accepted"){
           console.log("Aceptado")
        }else{
            console.log("No Aceptado")
        }
     deferredInstallPrompt = null;
    })
}

window.addEventListener("appinstalled", logAppInstalled);
function logAppInstalled(evt){
   console.log("App instalada")
}

