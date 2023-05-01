import { useState } from 'react';
import Modal from './components/Modal';
import './App.css';

function App() {
    const [open, setOpen] = useState(false);

    return (
        <div className="App">
            <button className="open-modal-btn" onClick={() => setOpen(true)}>✨ Открыть окно</button>
            <Modal open={open} setOpen={setOpen}>
                <h3>Это модальное окно!</h3>
                <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
                <input type="button" value="Click me!"/>
            </Modal>
        </div>
    );
}

export default App;
