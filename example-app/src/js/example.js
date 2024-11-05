import { CapacitorAppRestart } from '@kristianheljas&#x2F;capacitor-app-restart';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    CapacitorAppRestart.echo({ value: inputValue })
}
