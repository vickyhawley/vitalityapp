import { Stack } from "@mui/material";
import styles from './megamenu.module.scss';
import { MainBtn } from "../Buttons/MainButton/MainBtn";

interface iMegaMenu{
    type: string;
}

export function MegaMenu({type}: iMegaMenu){


    return(
        <Stack className={styles['mm-wrapper']}>
            {type === 'health' && (     
            <Stack style={{ height: '100vh', flex: 1,flexDirection: 'row', paddingBottom: 300 }}>
               
                    <Stack style={{backgroundColor: 'white', height: '50vh', flex: 1, borderBottomLeftRadius: 10, padding: 32}}>
                        <div style={{ borderRight: '2px solid #F1F1F1', flex: 1, display: 'flex', flexDirection: 'column', paddingLeft: 250, paddingRight: 32, gap: 10}}>
                            <h2 style={{color: 'black'}}>Get Health Quote in minutes</h2>
                            <p style={{color: 'black'}}>5 Star Defaqto rated health insurance, with rewards for healthy living. From £1.45 a day.</p>
                            <MainBtn type='quote' onClick={() => {}} title='Get a health Quote'/>
                            <MainBtn type='login' onClick={() => {}} title='How to make a claim'/>
                        </div>
                    </Stack>
                    
                    <Stack style={{backgroundColor: 'white', height: '50vh', flex: 1, padding: 32}}>
                    <div style={{ borderRight: '2px solid #F1F1F1', flex: 1, display: 'flex',flexDirection: 'column', gap: 10}}>
                        <h2 style={{color: 'black'}}>Health Title</h2>
                        <a href='#' style={{color: 'black'}}>Health link</a>
                        <a href='#' style={{color: 'black'}}>Health link</a>
                        <a href='#' style={{color: 'black'}}>Health link</a>
                        <a href='#' style={{color: 'black'}}>Health link</a>
                        <a href='#' style={{color: 'black'}}>Health link</a>
                        <a href='#' style={{color: 'black'}}>Health link</a>
                    </div>
                    </Stack>
                    <Stack style={{backgroundColor: 'white', height: '50vh', flex: 1, borderBottomRightRadius: 10, padding: 32}}>
                    <div style={{flex: 1, display: 'flex',flexDirection: 'column', gap: 10}}>
                    <h2 style={{color: 'black'}}>Health Title</h2>
                    <a href='#' style={{color: 'black'}}>Health link</a>
                        <a href='#' style={{color: 'black'}}>Health link</a>
                        <a href='#' style={{color: 'black'}}>Health link</a>
                        <a href='#' style={{color: 'black'}}>Health link</a>
                        <a href='#' style={{color: 'black'}}>Health link</a>
                        <a href='#' style={{color: 'black'}}>Health link</a>
                    </div>
                    </Stack>
                   
            </Stack>          
            )}
            {type === 'life' && (
               <Stack style={{ height: '100vh', flex: 1,flexDirection: 'row', paddingBottom: 300, }}>
               <Stack style={{backgroundColor: 'white', height: '50vh', flex: 1, borderBottomLeftRadius: 10, padding: 32}}>
               <div style={{ borderRight: '2px solid #F1F1F1', flex: 1, display: 'flex', flexDirection: 'column', paddingLeft: 250, paddingRight: 32, gap: 10}}>
                            <h2 style={{color: 'black'}}>Get Health Quote in minutes</h2>
                            <p style={{color: 'black'}}>5 Star Defaqto rated health insurance, with rewards for healthy living. From £1.45 a day.</p>
                            <MainBtn type='quote' onClick={() => {}} title='Get a health Quote'/>
                            <MainBtn type='login' onClick={() => {}} title='How to make a claim'/>
                        </div>                    </Stack>
                    
                    <Stack style={{backgroundColor: 'white', height: '50vh', flex: 1, padding: 32}}>
                    <div style={{ borderRight: '2px solid #F1F1F1', flex: 1, display: 'flex',flexDirection: 'column', gap: 10}}>
                    <h2 style={{color: 'black'}}>Life Title</h2>
                    <a href='#' style={{color: 'black'}}>Life link</a>
                        <a href='#' style={{color: 'black'}}>Life link</a>
                        <a href='#' style={{color: 'black'}}>Life link</a>
                        <a href='#' style={{color: 'black'}}>Life link</a>
                        <a href='#' style={{color: 'black'}}>Life link</a>
                        <a href='#' style={{color: 'black'}}>Life link</a>
                    </div>
                    </Stack>
                    <Stack style={{backgroundColor: 'white', height: '50vh', flex: 1, borderBottomRightRadius: 10, padding: 32}}>
                    <div style={{flex: 1, display: 'flex',flexDirection: 'column', gap: 10}}>
                    <h2 style={{color: 'black'}}>Life Title</h2>
                    <a href='#' style={{color: 'black'}}>Life link</a>
                        <a href='#' style={{color: 'black'}}>Life link</a>
                        <a href='#' style={{color: 'black'}}>Life link</a>
                        <a href='#' style={{color: 'black'}}>Life link</a>
                        <a href='#' style={{color: 'black'}}>Life link</a>
                        <a href='#' style={{color: 'black'}}>Life link</a>
                    </div>
                    </Stack>
       </Stack> 
        )}
            {type === 'rewards' && (
            <Stack style={{ height: '100vh', flex: 1,flexDirection: 'row', paddingBottom: 300, }}>
            <Stack style={{backgroundColor: 'white', height: '50vh', flex: 1, borderBottomLeftRadius: 10, padding: 32}}>
            <div style={{ borderRight: '2px solid #F1F1F1', flex: 1, display: 'flex', flexDirection: 'column', paddingLeft: 250, paddingRight: 32, gap: 10}}>
                            <h2 style={{color: 'black'}}>Get Health Quote in minutes</h2>
                            <p style={{color: 'black'}}>5 Star Defaqto rated health insurance, with rewards for healthy living. From £1.45 a day.</p>
                            <MainBtn type='quote' onClick={() => {}} title='Get a health Quote'/>
                            <MainBtn type='login' onClick={() => {}} title='How to make a claim'/>
                        </div>                    </Stack>
                    
                    <Stack style={{backgroundColor: 'white', height: '50vh', flex: 1, padding: 32}}>
                    <div style={{ borderRight: '2px solid #F1F1F1', flex: 1, display: 'flex',flexDirection: 'column', gap: 10}}>
                    <h2 style={{color: 'black'}}>Rewards Title</h2>
                    <a href='#' style={{color: 'black'}}>Rewards link</a>
                        <a href='#' style={{color: 'black'}}>Rewards link</a>
                        <a href='#' style={{color: 'black'}}>Rewards link</a>
                        <a href='#' style={{color: 'black'}}>Rewards link</a>
                        <a href='#' style={{color: 'black'}}>Rewards link</a>
                        <a href='#' style={{color: 'black'}}>Rewards link</a>
                    </div>
                    </Stack>
                    <Stack style={{backgroundColor: 'white', height: '50vh', flex: 1, borderBottomRightRadius: 10, padding: 32}}>
                    <div style={{flex: 1, display: 'flex',flexDirection: 'column', gap: 10}}>
                    <h2 style={{color: 'black'}}>Rewards Title</h2>
                    <a href='#' style={{color: 'black'}}>Rewards link</a>
                        <a href='#' style={{color: 'black'}}>Rewards link</a>
                        <a href='#' style={{color: 'black'}}>Rewards link</a>
                        <a href='#' style={{color: 'black'}}>Rewards link</a>
                        <a href='#' style={{color: 'black'}}>Rewards link</a>
                        <a href='#' style={{color: 'black'}}>Rewards link</a>
                    </div>
                    </Stack>
    </Stack> 
        )}
            {type === 'support' && (
             <Stack style={{ height: '100vh', flex: 1,flexDirection: 'row', paddingBottom: 300, }}>
             <Stack style={{backgroundColor: 'white', height: '50vh', flex: 1, borderBottomLeftRadius: 10, padding: 32}}>
             <div style={{ borderRight: '2px solid #F1F1F1', flex: 1, display: 'flex', flexDirection: 'column', paddingLeft: 250, paddingRight: 32, gap: 10}}>
                            <h2 style={{color: 'black'}}>Get Health Quote in minutes</h2>
                            <p style={{color: 'black'}}>5 Star Defaqto rated health insurance, with rewards for healthy living. From £1.45 a day.</p>
                            <MainBtn type='quote' onClick={() => {}} title='Get a health Quote'/>
                            <MainBtn type='login' onClick={() => {}} title='How to make a claim'/>
                        </div>                    </Stack>
                    
                    <Stack style={{backgroundColor: 'white', height: '50vh', flex: 1, padding: 32}}>
                    <div style={{ borderRight: '2px solid #F1F1F1', flex: 1, display: 'flex',flexDirection: 'column', gap: 10}}>
                    <h2 style={{color: 'black'}}>Support Title</h2>
                    <a href='#' style={{color: 'black'}}>Support link</a>
                        <a href='#' style={{color: 'black'}}>Support link</a>
                        <a href='#' style={{color: 'black'}}>Support link</a>
                        <a href='#' style={{color: 'black'}}>Support link</a>
                        <a href='#' style={{color: 'black'}}>Support link</a>
                        <a href='#' style={{color: 'black'}}>Support link</a>
                    </div>
                    </Stack>
                    <Stack style={{backgroundColor: 'white', height: '50vh', flex: 1, borderBottomRightRadius: 10, padding: 32}}>
                    <div style={{flex: 1, display: 'flex',flexDirection: 'column', gap: 10}}>
                    <h2 style={{color: 'black'}}>Support Title</h2>
                    <a href='#' style={{color: 'black'}}>Support link</a>
                        <a href='#' style={{color: 'black'}}>Support link</a>
                        <a href='#' style={{color: 'black'}}>Support link</a>
                        <a href='#' style={{color: 'black'}}>Support link</a>
                        <a href='#' style={{color: 'black'}}>Support link</a>
                        <a href='#' style={{color: 'black'}}>Support link</a>
                    </div>
                    </Stack>
     </Stack> 
        )}
        </Stack>

    )
}