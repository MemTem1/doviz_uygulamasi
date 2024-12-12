import React, { useEffect, useState, useRef } from 'react'
import '../css/currency.css';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';
function currensy() {
    const inputRef = useRef(null);
    const [amount, setAmonut] = useState(1);
    const [fromCurrecy, setFromCurrency] = useState("USD");
    const [toCurrecy, setCurrecy] = useState("TRY");
    const [result, setResult] = useState(0);
    const [deger, SetDeger] = useState([])
    const [uyari, setUyari] = useState("");
    let BASE_URL = 'https://api.freecurrencyapi.com/v1/historical';
    let api_key = 'fca_live_CflTawBnk0YeSbTcNQ86VFjZa3M3ptuLJUbPcis8'




    const exchange = async () => {
        if (amount >= 1) {
            const response = await axios.get(`${BASE_URL}?apikey=${api_key}&base_currency=${fromCurrecy}`);
            let sonuc = (response.data.data["2024-12-11"][toCurrecy] * amount).toFixed(2);
            setResult(sonuc);
            console.log(sonuc);
            setAmonut("");
            setUyari("")


        }
        else {
            if (amount == "") {
                setUyari("lütfen boş bırakma")
            }
            else if (amount <= 1) {
                setUyari("1 den büyük değerler ver")
                setAmonut("");

            }


        }


    }
    useEffect(() => {
        inputRef.current.focus();
    })


    return (
        <div className='container'>

            <div className='curency-div'>
                <div>
                    <h3 className='title'>DOVİZ KURU UYGULAMASI</h3>
                </div>
                <h3 className='uyari'>{uyari}</h3>

                <div>
                    <input type="number" className='result'

                        ref={inputRef}
                        value={amount}
                        onChange={(e) => setAmonut(e.target.value)} />
                    <select name=""
                        className="from-curnecy-option"
                        onChange={(e) => setFromCurrency(e.target.value)}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="TRY">TL</option>
                    </select>
                    <FaRegArrowAltCircleRight style={{ fontSize: '20px', margin: '0 5px', color: 'white' }} />
                    <select name=""
                        className="to-curnecy-option"
                        onChange={(e) => setCurrecy(e.target.value)}>
                        <option value="TRY">TL</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>

                    </select>
                    <input type="number" className='result' value={result} onChange={(e) => setResult(e.target.value)} />
                </div>
                <div>
                    <button onClick={exchange} className='translate'>ÇEVİR</button>
                </div>

            </div>

        </div>
    )
}

export default currensy