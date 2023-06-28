import React from 'react';
import Modal from './componets/Modal/Modal';

import './index.scss';

function App() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');

    return (
        <div className="App">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="input-text" placeholder='Введіть текст сюди' />
            <button className="open-modal-btn" onClick={() => { setOpen(true) }}>✨Запустити</button>
            <Modal open={open} setOpen={setOpen} text={value} />
        </div>
    );
}

export default App;
