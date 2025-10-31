const dia = document.getElementById("day");
const mes = document.getElementById("month");
const ano = document.getElementById("year");
const diaResposta = document.getElementById("dia");
const mesResposta = document.getElementById("mes");
const anoResposta = document.getElementById("ano");
const enviar = document.getElementById("send");

enviar.addEventListener("click", (e) => {
    e.preventDefault();
    const d = parseInt(dia.value);
    const m = parseInt(mes.value);
    const a = parseInt(ano.value);

    const nascimento = new Date(a, m - 1, d);
    const hoje = new Date()
    console.log(nascimento.getDate());

    let valido = true;

    const inputs = document.querySelectorAll("input[type='text']");


    inputs.forEach(input => {
        const textErro = input.previousElementSibling;
        const spanErro = input.nextElementSibling;

        if (input.value === "") {
            spanErro.innerText = "This field is required";
            input.classList.add("active");
            spanErro.style.display = "block";
            textErro.classList.add("ativa");
            valido = false
            return
        } else {
            input.classList.remove("active");
            spanErro.style.display = "none";
            textErro.classList.remove("ativa");
        }
    });



    if (valido) {
        if (a > hoje.getFullYear()) {
            ano.nextElementSibling.innerText = "Must be in the past";
            ano.previousElementSibling.classList.add("ativa");
            ano.nextElementSibling.style.display = "block";
            ano.classList.add("active");
            valido = false;
        } else {
            ano.previousElementSibling.classList.remove("ativa");
            ano.nextElementSibling.style.display = "none";
            ano.classList.remove("active");
            valido = true;
        }
        if (m > 12 || m < 1) {
            mes.nextElementSibling.innerText = "Must be a valid month";
            mes.previousElementSibling.classList.add("ativa");
            mes.nextElementSibling.style.display = "block";
            mes.classList.add("active");
            valido = false;
        } else {
            mes.previousElementSibling.classList.remove("ativa");
            mes.nextElementSibling.style.display = "none";
            mes.classList.remove("active");
            valido = true;
        }
        if(d != nascimento.getDate()){
            dia.nextElementSibling.innerText = "Must be a valid day";
            dia.previousElementSibling.classList.add("ativa");
            dia.nextElementSibling.style.display = "block";
            dia.classList.add("active");
            valido = false;
            return
        }
    }



    //     if (dia.value === "") {
    //         dia.nextElementSibling.innerText = "This field is required";
    //         dia.previousElementSibling.classList.add("ativa");
    //         dia.nextElementSibling.style.display = "block";
    //         dia.classList.add("active");
    //         valido = false;
    //         return
    //     } else {
    //         dia.nextElementSibling.innerText = "Must be a valid day";
    //         dia.previousElementSibling.classList.add("ativa");
    //         dia.nextElementSibling.style.display = "block";
    //         dia.classList.add("active");
    //     }


    // }
    // else {
    //     dia.previousElementSibling.classList.remove("ativa");
    //     dia.nextElementSibling.style.display = "none";
    //     dia.classList.remove("active");
    //     valido = true;
    // }


    if (valido) {
        let anos = hoje.getFullYear() - nascimento.getFullYear();
        let meses = hoje.getMonth() - nascimento.getMonth();
        let dias = hoje.getDate() - nascimento.getDate();

        if (dias < 0) {
            meses--;
            const ultimoDiaMesAnterior = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
            dias += ultimoDiaMesAnterior;
        }

        if (meses < 0) {
            anos--;
            meses += 12;
        }

        anoResposta.innerText = anos;
        mesResposta.innerText = meses;
        diaResposta.innerText = dias;

        dia.value = "";
        mes.value = "";
        ano.value = "";
    }
});