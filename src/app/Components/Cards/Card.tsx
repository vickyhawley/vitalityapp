import { Stack } from "@mui/material";
import { MainBtn } from "../Buttons/MainButton/MainBtn";
import graphic from './../../assets/graphicMedium.png';
import styles from './card.module.scss';

interface iCard{
    title: string;
    shape: 'portrait' | 'landscape';
    description: string;
}

export function Card({title, shape, description}:iCard){


    return(<>
    <Stack tabIndex={0} className={styles['card-wrapper']} justifyContent={'center'} alignItems={'center'} gap={4} flexDirection={shape === 'portrait' ? 'column' : 'row'}>
        <div tabIndex={0} className={styles['card-img-wrapper']}><img src={graphic.src} alt='' className={styles['card-img']} height={65} width={65}/></div>
        <Stack tabIndex={0} gap={2} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
        <h2 style={{color: '#000000'}}>{title}</h2>
        <p className={styles['card-description']}>{description}</p>
        
        </Stack>
        <div tabIndex={0}>
        <MainBtn ariaLabel="Get a quote" title='Get a health quote' type='quote' onClick={() => {}}/>
        <MainBtn ariaLabel='Get a quote' title='Health insurance' type='cta' onClick={() => {}}/>
        </div>
        
    </Stack> 

    </>)
}