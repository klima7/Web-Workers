function startPeselWorker() {
    var worker = new Worker('pesel_ip.js');

    worker.addEventListener('message', function(e) {
        if(!e.data.pesel) alert('Pesel is invalid');
        else alert('Pesel is valid');
        if(!e.data.ip) alert('Ip is invalid');
        else alert('Ip is valid');
    }, false);

    worker.postMessage({
        pesel: document.getElementById('pesel').value,
        ip: document.getElementById('ip').value,
    });
}

function startLettersWorker() {
    var worker = new Worker('switch_letters.js');

    worker.addEventListener('message', function(e) {
        document.getElementById('name').value = e.data.name;
        document.getElementById('surname').value = e.data.surname;
    }, false);

    worker.postMessage({
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
    });
}
