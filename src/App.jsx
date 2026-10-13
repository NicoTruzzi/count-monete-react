import { useState } from 'react'
import './App.css'

function App() {
  const [cent5, setCent5] = useState('');
  const [cent10, setCent10] = useState('');
  const [cent20, setCent20] = useState('');
  const [cent50, setCent50] = useState('');
  const [euro1, setEuro1] = useState('');
  const [euro2, setEuro2] = useState('');
  const [totale, setTotale] = useState();

  const parseValue = (val) => val === '' ? 0 : Number(val);

  let somma = 0;
  console.log('render');
  somma = (((cent5 || 0) * 5) + ((cent10 || 0) * 10) + ((cent20 || 0) * 20) + ((cent50 || 0) * 50) + ((euro1 || 0) * 100) + ((euro2 || 0) * 200)) / 100;

  console.log(somma);

  const contaMonete = (e) => {
    e.preventDefault();
    console.log("submit form");
    setTotale(somma)
  }

  return (
    <div className="coin-app">
      <h1 className="coin-title">💰 Conta Monete</h1>
      <form className="coin-form" onSubmit={contaMonete}>
        <div className="coin-grid">
          <label className="coin-label">
            <span className="coin-badge cent">5¢</span>
            <input type="number" name="5cent" min={0} max={100} value={cent5} onKeyDown={(e) => e.preventDefault()} onChange={(e) => setCent5(parseValue(e.target.value))}
            />
          </label>
          <label className="coin-label">
            <span className="coin-badge cent">10¢</span>
            <input type="number" name="10cent" min={0} value={cent10} onKeyDown={(e) => e.preventDefault()} onChange={(e) => setCent10(parseValue(e.target.value))} />
          </label>
          <label className="coin-label">
            <span className="coin-badge cent">20¢</span>
            <input type="number" name="20cent" min={0} value={cent20} onKeyDown={(e) => e.preventDefault()} onChange={(e) => setCent20(parseValue(e.target.value))} />
          </label>
          <label className="coin-label">
            <span className="coin-badge euro">50¢</span>
            <input type="number" name="50cent" min={0} value={cent50} onKeyDown={(e) => e.preventDefault()} onChange={(e) => setCent50(parseValue(e.target.value))} />
          </label>
          <label className="coin-label">
            <span className="coin-badge euro">1€</span>
            <input type="number" name="1euro" min={0} value={euro1} onKeyDown={(e) => e.preventDefault()} onChange={(e) => setEuro1(parseValue(e.target.value))} />
          </label>
          <label className="coin-label">
            <span className="coin-badge euro">2€</span>
            <input type="number" name="2euro" min={0} value={euro2} onKeyDown={(e) => e.preventDefault()} onChange={(e) => setEuro2(parseValue(e.target.value))} />
          </label>
        </div>

        <div className="coin-actions">
          <button className="btn btn-primary" type="submit">Conta</button>
          <button className="btn btn-secondary" type="button" onClick={() => {
            console.log("click azzera");
            setCent5('');
            setCent10('');
            setCent20('');
            setCent50('');
            setEuro1('');
            setEuro2('');
            setTotale();
          }}>Azzera</button>
        </div>
      </form>

      {totale >= 0 && (
        <div className="coin-result">
          <span className="result-label">Totale</span>
          <span className="result-value">{totale}€</span>
        </div>
      )}
    </div>
  )
}

export default App
