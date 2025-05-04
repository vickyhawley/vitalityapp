import { Link, Stack } from "@mui/material";
import styles from  './mainbtn.module.scss';
import { ChevronDown } from "../../Icons/ChevronDown/ChevronDown";


interface iMainbtn{
    title: string;
    type: 'nav' | 'cta' | 'banner' | 'dropdown' | 'login' | 'quote';

}



export function MainBtn({title, type}: iMainbtn) {


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

    // const chevronStyles
    return(
        <Link style={{textDecoration: 'none', color: 'white'}}><div className={buttonStyles()}>
            <p style={{fontWeight: 600}}>{title}</p>
            {type === 'dropdown' && <ChevronDown color={'#000000'}/>}

        </div></Link>
    )
}