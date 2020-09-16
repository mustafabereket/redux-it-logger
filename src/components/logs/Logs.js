import React, {useState, useEffect} from 'react'
import LogItem from './LogItem';
import { Preloader } from '../layout/Preloader';

const Logs = () => {
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(false);

    const getLogs = async () => {
        setLoading(true);
        let data = await fetch('/logs');
        let logs = await data.json();
        setState(logs);
        setLoading(false);
    }

    useEffect(()=>{
        getLogs();
        // es-lint-disable-next-line
    }, [])

    if(loading) return (<Preloader/>)

    return (
    
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'>System Logs</h4>
            </li>
            {state.map((log, index) => (<LogItem key={log.id} log={log}/>))}     
        </ul>
    )
}
export default Logs;