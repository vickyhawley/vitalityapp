import { Stack } from "@mui/material";
import { MainBtn } from "../../Buttons/MainButton/MainBtn";
import image from  './../../../assets/bannerImage.jpg';

interface iCallToAction{
    title: string;
    description: string;
    btnTitle: string;
    titleColor?: string;
    descriptionColor?: string;
    backgroundColor?: string;
    borderRadius?: number;
}

export function CallToAction({title, description, btnTitle, titleColor, descriptionColor, backgroundColor, borderRadius}: iCallToAction){

    console.log('what is the image import?', image)
    return(
        <Stack justifyContent={'center'} alignItems={'center'}  flexDirection='row' gap={4} style={{backgroundColor: backgroundColor, borderRadius: borderRadius, padding: 12}}>
            <Stack  alignItems='flex-start' flexDirection='column' justifyContent={'flex-start'} gap={3} style={{width: '60%'}}>
                <h1 style={{fontSize: 58, fontWeight: 800, width: '70%', color: titleColor}}>{title}</h1>
                <p style={{width: '80%', fontSize: 24, fontWeight: 500, color: descriptionColor}}>{description}</p>
                <MainBtn title={btnTitle} type='cta'/>
            </Stack>
            <Stack justifyContent='flex-start'  alignItems='center' >
                <img src={image.src} style={{borderRadius: '100%', alignSelf: 'flex-start'}} alt='people communicating over a computer' height={350} width={350}/>
            </Stack>
        </Stack>
    )
}