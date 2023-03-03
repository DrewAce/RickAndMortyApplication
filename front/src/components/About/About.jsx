import style from './About.module.css'
import imgIg from '../../img/ig.png'
import imgGit from '../../img/git.png'
import imgLink from '../../img/link.png'

export default function About(){
    return (
        <div className={style.contenedor}> 
            <div className={style.posicion}>
                <div className={style.info}>
                    <p className={style.about}>Lorem Ipsum </p>  
                    <br /><br />
                    <div className={style.containerRedes}>
                        <a href='https://github.com/DrewAce' target='__blank'><button className={style.boton}><img src={imgGit} className={style.img}></img></button></a>   
                                            
                        <a href='https://www.linkedin.com/in/juan-andr%C3%A9s-carmona-le%C3%B3n-52a378261/' target='__blank'><button className={style.boton}><img src={imgLink} className={style.img}></img></button></a>
                    </div>
                </div>                 
                <div className={style.title}>
                    <h1 className={style.name}>Hecho por <b className={style.b}>Juan Andrés</b></h1>     
                </div>           
            </div>
        </div>
    )
}