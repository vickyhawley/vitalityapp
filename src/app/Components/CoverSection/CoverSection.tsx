'use client';

import { Stack } from "@mui/material";
import { Card } from "../Cards/Card";


interface iCoverSection{
    title: string;
    description: string;
}

export function CoverSection({title, description}: iCoverSection){

    return(
        <Stack tabIndex={0} style={{padding: 38, backgroundColor: '#EAEFF3'}} alignItems={'center'} gap={4} justifyContent={'center'}>
            <Stack tabIndex={0} gap={1} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}><h1 style={{color: '#000000'}}>{title}</h1>
            <p style={{color: '#000000'}}>{description}</p>
            </Stack>
            
            <Stack tabIndex={0} flexDirection={'row'}>
            <Card title='Title' description="Pays out to your loved ones if you die or become terminally ill"  shape='portrait'/>
            <Card title='Title' description="Pays out to your loved ones if you die or become terminally ill" shape='portrait'/>
           
            </Stack>
        </Stack>
    )
}