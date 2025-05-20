import styles from  './mainbtn.module.scss';
import { ReactNode } from "react";



interface iMainbtn{
    title: string;
    type: 'nav' | 'cta' | 'banner' | 'dropdown' | 'login' | 'quote';
    onClick: () => void;
    icon?: ReactNode;
}



export function MainBtn({title, type, onClick, icon}: iMainbtn) {

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
        <a onClick={onClick}  style={{textDecoration: 'none', color: 'white', textAlign: 'center'}}><div className={buttonStyles()}>
            <p style={{fontWeight: 600}}>{title}</p>
            {icon}
        </div></a>
    )
}