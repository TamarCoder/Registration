import styles from './Mail.module.css'

export default ({lableTtitle, idInp, typeInp}: any) =>{
    
    return(
        <div className={styles.mail_container}>
            <label htmlFor={idInp} className={styles.lable}>{lableTtitle}</label>
            <input className={styles.mailInput} type= {typeInp} id= {idInp} placeholder={lableTtitle}/>
        </div>
    )
}