import styles from  './mainbtn.module.scss';
import { ReactNode } from "react";



interface iMainbtn{
    title: string;
    type: 'nav' | 'cta' | 'banner' | 'dropdown' | 'login' | 'quote';
    onClick: () => void;
    icon?: ReactNode;
    ariaLabel: string;
}



export function MainBtn({title, type, onClick, icon, ariaLabel}: iMainbtn) {

    const buttonStyles = () => {
        if(type == 'nav'){
            return styles['nav']
        }else
        if(type == 'cta'){
            return styles['cta']
        }else
        if(type == 'banner'){
            return styles['banner']
        }else
        if(type == 'dropdown'){
            return styles['dropdown']
        }else
        if(type == 'login'){
            return styles['login']
        }else
        if(type == 'quote'){
            return styles['quote']
        }else(styles['cta'])
    }

  
    return(
        <a aria-label={ariaLabel} onClick={onClick}  style={{textDecoration: 'none', color: 'white', textAlign: 'center'}}><div className={buttonStyles()}>
            <p style={{fontWeight: 600}}>{title}</p>
            {icon}
        </div></a>
    )
}