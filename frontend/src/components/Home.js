import styles3 from './index3.module.css'
import{Link} from 'react-router-dom';
import { FaInstagram, FaFacebook, FaGoogle, FaGithub,FaWhatsapp,FaUserCircle,FaRegUserCircle } from 'react-icons/fa' ;
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Home(){
    return(
        <div className={styles3.container3}> 

            <nav className={styles3.nav3}>
                <div className={styles3.logo3}>
                    <a href="index.html">TaskList</a>
                </div>
                <ul className={styles3.ul3}>
                    <li className={styles3.li3}><a className={styles3.a3} href="#">Home</a></li>
                    <li className={styles3.li3}><a className={styles3.a3} href="#">Serviços</a></li>
                    <li className={styles3.li3}><a className={styles3.a3} href="#">Team</a></li>
                    <li className={styles3.li3}><a className={styles3.a3} href="#">Blog</a></li>
                    <li className={styles3.li3}><a className={styles3.a3} href="#">nos contacte</a></li>
                    <li className={styles3.li3}><a className={styles3.a3} href="#">Login</a></li>
                    <a className={styles3.a3}><FaUserCircle className={styles3.icons3}/></a>    
                </ul>
                <div className={styles3.menuIcon3}>
                    <img src='/fav.jpeg'/>
                </div>
            </nav>

            <main className={styles3.main3}>
                <div className={styles3.textBx3}>
                    <h1 className={styles3.h13}> Faça listas na nossa plataforma digital <br /> <b> Transforme seu mundo com a gente. </b> </h1><br /><br />
                    <p className={styles3.p3}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et ultricies leo, quis convallis dolor. Etiam bibendum ut neque sed mollis. Pellentesque luctus justo a tempus pulvinar. Vivamus eu eros eros.
                    </p>
                    <br /><br />

                        <TextField id="outlined-basic" label="Endereço de Email" variant="outlined" />

                        <button className={styles3.button3}>Ver Mais</button>

<br /><br /><br /><br />
                    <div className={styles3.t3}>
                            <a><FaFacebook className={styles3.icons3}/></a>
                            <a><FaGoogle className={styles3.icons3}/></a>
                            <a><FaGithub className={styles3.icons3}/></a>
                            <a><FaInstagram className={styles3.icons3}/></a>
                            <a><FaWhatsapp className={styles3.icons3}/></a>     

                    </div>
                </div>


                <div className={styles3.imgBX3}>
                </div>
            </main>
    </div>
    );
    
} 

export default Home;