import styles from './Button.module.css'
function Button() {
  
  

  const handleClick2 = (name)=> console.log(`${name} stop clicking me`)
  
  return(
    <>
    <button onClick={()=>handleClick2("Thunder")} className={styles.button}>Click Me🎆</button>
    
    </>
  );
}
export default Button