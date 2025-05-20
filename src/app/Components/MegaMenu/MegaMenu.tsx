import { Stack } from "@mui/material";
import styles from './megamenu.module.scss';

interface iMegaMenu{
    type: string;
}

export function MegaMenu({type}: iMegaMenu){


    return(
        <Stack className={styles['mm-wrapper']}>
            {type === 'health' && (     
            <Stack style={{ height: '100vh', flex: 1,flexDirection: 'row', paddingBottom: 300 }}>
               
                    <Stack style={{backgroundColor: 'white', height: '50vh', paddingLeft: 200,flex: 1, borderBottomLeftRadius: 10, padding: 32}}>
                        <div style={{ borderRight: '2px solid #F1F1F1', flex: 1}}></div>
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
               <Stack style={{backgroundColor: 'white', height: '50vh', flex: 1, paddingLeft: 200, borderBottomLeftRadius: 10, padding: 32}}>
                        <div style={{ borderRight: '2px solid #F1F1F1', flex: 1}}></div>
                    </Stack>
                    
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
            <Stack style={{backgroundColor: 'white', height: '50vh', flex: 1, paddingLeft: 200, borderBottomLeftRadius: 10, padding: 32}}>
                        <div style={{ borderRight: '2px solid #F1F1F1', flex: 1}}></div>
                    </Stack>
                    
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
             <Stack style={{backgroundColor: 'white', height: '50vh', flex: 1, paddingLeft: 200, borderBottomLeftRadius: 10, padding: 32}}>
                        <div style={{ borderRight: '2px solid #F1F1F1', flex: 1}}></div>
                    </Stack>
                    
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