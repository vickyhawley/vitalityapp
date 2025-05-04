import { Stack } from "@mui/material";
import { Card } from "../Cards/Card";
import { Description } from "@mui/icons-material";

interface iCoverSection{
    title: string;
    description: string;
}

export function CoverSection({title, description}: iCoverSection){

    return(
        <Stack style={{padding: 38, backgroundColor: '#EAEFF3'}} alignItems={'center'} gap={4} justifyContent={'center'}>
            <Stack gap={1} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}><h1 style={{color: '#000000'}}>{title}</h1>
            <p style={{color: '#000000'}}>{description}</p>
            </Stack>
            
            <Stack flexDirection={'row'}>
            <Card title='Title' description="blah"  shape='portrait'/>
            <Card title='Title' description="blah" shape='portrait'/>
           
            </Stack>
        </Stack>
    )
}