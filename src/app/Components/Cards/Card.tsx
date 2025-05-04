import { Stack } from "@mui/material";
import { MainBtn } from "../Buttons/MainButton/MainBtn";
import graphic from './../../assets/graphicMedium.png';

interface iCard{
    title: string;
    shape: 'portrait' | 'landscape';
    description: string;

}

export function Card({title, shape, description}:iCard){


    return(<>
    <Stack style={{backgroundColor: '#ffffff', padding: 24, borderRadius: 8, margin: 5}} justifyContent={'center'} alignItems={'center'} gap={4} flexDirection={shape === 'portrait' ? 'column' : 'row'}>
        <img src={graphic.src} alt='' height={65} width={65}/>
        <Stack gap={2} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
        <h2 style={{color: '#000000'}}>{title}</h2>
        <p style={{color: '#000000'}}>{description}</p>
        <div>
        <MainBtn title='Get a health quote' type='quote'/>
        <MainBtn title='Health insurance' type='cta' />
        </div>
        </Stack>
    </Stack> 

    </>)
}