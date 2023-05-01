import { useState, useEffect } from 'react';
import { Block } from './components/Block';
import './App.css';
// import { useRef } from 'react';

function App() {
    const [fromCurrency, setFromCurrency] = useState('RUB');
    const [toCurrency, setToCurrency] = useState('USD');
    const [fromPrice, setFromPrice] = useState(0);
    const [toPrice, setToPrice] = useState(1);
    const [rates, setRates] = useState({
        'RUB' : 77.32,
        'USD' : 1,
        'EUR' : 0.92,
        'GBP' : 0.8
    });

    // const ratesRef = useRef({});
    // Link isn't working
    // useEffect(() => {
    //     fetch('https://cdn.cur.su/api/latest.json')
    //         .then(res => res.json())
    //         .then(json => {
    //             ratesRef.current = json.rates;
    //             onChangeToPrice(1);
    //         })
    //         .catch(err => {
    //             console.warn(err);
    //             alert('Не удалось получить информацию!')
    //         });
    // }, []);

    const onChangeFromPrice = value => {
        const price = value / rates[fromCurrency];
        const result = price * rates[toCurrency];
        setToPrice(result.toFixed(3));
        setFromPrice(value);
    }

    const onChangeToPrice = value => {
        const result = rates[fromCurrency] / rates[toCurrency] * value;
        setFromPrice(result.toFixed(3));
        setToPrice(value);
    }

    useEffect(() => {
        onChangeFromPrice(fromPrice);
    }, [fromCurrency]);

    useEffect(() => {
        onChangeToPrice(toPrice);
    }, [toCurrency]);

    return (
        <div className="App">
            <Block value={fromPrice} currency={fromCurrency} onChangeCurrency={setFromCurrency} onChangeValue={onChangeFromPrice}/>
            <Block value={toPrice} currency={toCurrency} onChangeCurrency={setToCurrency} onChangeValue={onChangeToPrice}/>
        </div>
    );
}

export default App;
