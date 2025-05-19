import styles from './Mail.module.css';


export default ({lableTtitle, idInp, typeInp}: any) =>{
    
    return(
        <div className='mail_container'>
            <label htmlFor={idInp}>{lableTtitle}</label>
            <input type= {typeInp} id= {idInp} className='_input' placeholder={lableTtitle}/>
        </div>
    )
}