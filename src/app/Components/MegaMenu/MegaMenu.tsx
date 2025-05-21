'use client';
import { Stack } from "@mui/material";
import styles from './megamenu.module.scss';
import { MainBtn } from "../Buttons/MainButton/MainBtn";

interface iMegaMenu {
    activeTypes: 'health' | 'life' | 'rewards' | 'support';
}

export function MegaMenu({activeTypes}:iMegaMenu){

    return(
        <Stack tabIndex={0} className={styles['mm-wrapper']}>
            {activeTypes === 'health' && (     
            <Stack tabIndex={0} className={styles['mm-innerwrapper']}>
               
                    <Stack tabIndex={0} className={styles['mm-column']} style={{borderBottomLeftRadius: 10}}>
                        <div tabIndex={0} className={styles['mm-column--border']} style={{paddingLeft: 50, paddingRight: 32}}>
                            <h2 style={{color: 'black'}}>Get Health Quote in minutes</h2>
                            <p style={{color: 'black'}}>5 Star Defaqto rated health insurance, with rewards for healthy living. From £1.45 a day.</p>
                            <MainBtn ariaLabel="Get quote button" type='quote' onClick={() => {}} title='Get a health Quote'/>
                            <MainBtn ariaLabel="Login to app" type='login' onClick={() => {}} title='How to make a claim'/>
                        </div>
                    </Stack>
                    
                    <Stack tabIndex={0} className={styles['mm-column']}>
                    <div tabIndex={0} className={styles['mm-column--border']}>
                        <h2 style={{color: 'black'}}>Health Title</h2>
                        <a href='#' style={{color: 'black'}}>Health link</a>
                        <a href='#' style={{color: 'black'}}>Health link</a>
                        <a href='#' style={{color: 'black'}}>Health link</a>
                        <a href='#' style={{color: 'black'}}>Health link</a>
                        <a href='#' style={{color: 'black'}}>Health link</a>
                        <a href='#' style={{color: 'black'}}>Health link</a>
                    </div>
                    </Stack>
                    <Stack tabIndex={0} className={styles['mm-column']} style={{borderBottomRightRadius: 10}}>
                    <div tabIndex={0} className={styles['mm-column--noborder']}>
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
            {activeTypes === 'life' && (
               <Stack tabIndex={0} className={styles['mm-innerwrapper']} >
               <Stack tabIndex={0} className={styles['mm-column']} style={{borderBottomLeftRadius: 10}}>
               <div tabIndex={0} className={styles['mm-column--border']} style={{paddingLeft: 50, paddingRight: 32}}>
                            <h2 style={{color: 'black'}}>Get a life quote in minutes</h2>
                            <p style={{color: 'black'}}>5 Star Defaqto rated health insurance, with rewards for healthy living. From £1.45 a day.</p>
                            <MainBtn ariaLabel="Get quote button" type='quote' onClick={() => {}} title='Get a life Quote'/>
                            <MainBtn ariaLabel="Login to app" type='login' onClick={() => {}} title='How to make a claim'/>
                        </div>                    </Stack>
                    
                    <Stack tabIndex={0} className={styles['mm-column']}>
                    <div tabIndex={0} className={styles['mm-column--border']}>
                    <h2 style={{color: 'black'}}>Life Title</h2>
                    <a href='#' style={{color: 'black'}}>Life link</a>
                        <a href='#' style={{color: 'black'}}>Life link</a>
                        <a href='#' style={{color: 'black'}}>Life link</a>
                        <a href='#' style={{color: 'black'}}>Life link</a>
                        <a href='#' style={{color: 'black'}}>Life link</a>
                        <a href='#' style={{color: 'black'}}>Life link</a>
                    </div>
                    </Stack>
                    <Stack tabIndex={0} className={styles['mm-column']} style={{borderBottomRightRadius: 10}}>
                    <div tabIndex={0} className={styles['mm-column--noborder']}>
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
            {activeTypes === 'rewards' && (
            <Stack tabIndex={0} className={styles['mm-innerwrapper']}>
            <Stack tabIndex={0} className={styles['mm-column']} style={{borderBottomLeftRadius: 10}}>
            <div tabIndex={0} className={styles['mm-column--border']} style={{paddingLeft: 50, paddingRight: 32}}>
                            <h2 className={styles['mm-columntext--black']}>How the Vitality Programme works</h2>
                            <p className={styles['mm-columntext--black']}>Looking to get healthier or feel less stressed? Whatever your reason for making a change, we’ve got the benefits and rewards to help you on your way.</p>
                            <MainBtn ariaLabel="Get quote button" type='quote' onClick={() => {}} title='Explore Vitalty rewards'/>
                            
                        </div>                    </Stack>
                    
                    <Stack tabIndex={0} className={styles['mm-column']}>
                    <div tabIndex={0} className={styles['mm-column--border']}>
                    <h2 className={styles['mm-columntext--black']}>Rewards Title</h2>
                    <a href='#' className={styles['mm-columntext--black']}>Rewards link</a>
                        <a href='#' className={styles['mm-columntext--black']}>Rewards link</a>
                        <a href='#' className={styles['mm-columntext--black']}>Rewards link</a>
                        <a href='#' className={styles['mm-columntext--black']}>Rewards link</a>
                        <a href='#' className={styles['mm-columntext--black']}>Rewards link</a>
                        <a href='#' className={styles['mm-columntext--black']}>Rewards link</a>
                    </div>
                    </Stack>
                    <Stack tabIndex={0} className={styles['mm-column']} style={{borderBottomRightRadius: 10}}>
                    <div tabIndex={0} className={styles['mm-column--noborder']}>
                    <h2 className={styles['mm-columntext--black']}>Rewards Title</h2>
                    <a href='#' className={styles['mm-columntext--black']}>Rewards link</a>
                        <a href='#' className={styles['mm-columntext--black']}>Rewards link</a>
                        <a href='#' className={styles['mm-columntext--black']}>Rewards link</a>
                        <a href='#' className={styles['mm-columntext--black']}>Rewards link</a>
                        <a href='#' className={styles['mm-columntext--black']}>Rewards link</a>
                        <a href='#' className={styles['mm-columntext--black']}>Rewards link</a>
                    </div>
                    </Stack>
    </Stack> 
        )}
            {activeTypes === 'support' && (
             <Stack tabIndex={0} className={styles['mm-innerwrapper']}>
             <Stack tabIndex={0} className={styles['mm-column']} style={{borderBottomLeftRadius: 10}}>
             <div tabIndex={0} className={styles['mm-column--border']} style={{paddingLeft: 50, paddingRight: 32}}>
                            <h2 className={styles['mm-columntext--black']}>Vitality points question?</h2>
                            <p className={styles['mm-columntext--black']}>Find out how to recover any Vitality points that are missing from your statement or submit evidence of your health appointments to get Vitality points.</p>
                            <MainBtn ariaLabel="Get quote button" type='quote' onClick={() => {}} title='Go to missing points guide'/>
                            <MainBtn ariaLabel="Login to app" type='login' onClick={() => {}} title='Submit evidence'/>
                        </div>                    </Stack>
                    
                    <Stack tabIndex={0} className={styles['mm-column']} >
                    <div tabIndex={0} className={styles['mm-column--border']}>
                    <h2 tabIndex={0} className={styles['mm-columntext--black']}>Support Title</h2>
                    <a href='#' className={styles['mm-columntext--black']}>Support link</a>
                        <a href='#' className={styles['mm-columntext--black']}>Support link</a>
                        <a href='#' className={styles['mm-columntext--black']}>Support link</a>
                        <a href='#' className={styles['mm-columntext--black']}>Support link</a>
                        <a href='#' className={styles['mm-columntext--black']}>Support link</a>
                        <a href='#' className={styles['mm-columntext--black']}>Support link</a>
                    </div>
                    </Stack>
                    <Stack tabIndex={0} className={styles['mm-column']} style={{borderBottomRightRadius: 10}}>
                    <div tabIndex={0} className={styles['mm-column--noborder']}>
                    <h2 className={styles['mm-columntext--black']}>Support Title</h2>
                    <a href='#' className={styles['mm-columntext--black']}>Support link</a>
                        <a href='#' className={styles['mm-columntext--black']}>Support link</a>
                        <a href='#' className={styles['mm-columntext--black']}>Support link</a>
                        <a href='#' className={styles['mm-columntext--black']}>Support link</a>
                        <a href='#' className={styles['mm-columntext--black']}>Support link</a>
                        <a href='#' className={styles['mm-columntext--black']}>Support link</a>
                    </div>
                    </Stack>
     </Stack> 
        )}
        </Stack>

    )
}