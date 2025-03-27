import React, { useState } from "react";
import './Perfil.css'

function IMCCalculadora() {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [resultado, setResultado] = useState(null);

    function calcularIMC() {
        if (peso && altura) {
            const alturaMetros = altura / 100;
            const imc = (peso / (alturaMetros * alturaMetros)).toFixed(2);

            let classificacao = "";
            if (imc < 18.5) classificacao = "Abaixo do peso";
            else if (imc < 24.9) classificacao = "Peso normal";
            else if (imc < 29.9) classificacao = "Sobrepeso";
            else classificacao = "Obesidade";

            setResultado(`IMC: ${imc} - ${classificacao}`);
        }
    }

    return (
        <div >
            <div className="header">
            <h2>Calculadora de IMC</h2>
            <input
                type="number"
                placeholder="Peso (kg)"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
            />
            <br />
            <input
                type="number"
                placeholder="Altura (cm)"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
            />
            <br />
            <button onClick={calcularIMC}>Calcular</button>
            {resultado && <p>{resultado}</p>}
            </div>
        </div>
    );
}

export default IMCCalculadora;
