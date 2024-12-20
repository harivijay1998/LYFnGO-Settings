import { Box, Card, Typography } from '@mui/material'
import React from 'react'

const Signin = () => {
  return (
    <Box sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingBlock:{md:'100px'}
    }}>
    <Card sx={{
        backgroundColor:'#ffffff',
        height:'500px',
        width:'900px',
        boxShadow:3,
        borderRadius:'20px'
    }}>
        <Box>
            <Box
            sx={{
                width:'120px',
                height:'60px',
                
            }}
            >
                <img
                src='LyfngoFlash.b48d0fbf.png'
                alt='lyfngo_logo'
                style={{maxWidth:'100%',maxHeight:'100%'}}
                ></img>
            </Box>
            <Typography variant='h6' sx={{fontWeight:500}}>Sign in</Typography>
            <Typography variant='p'>to access your <span style={{color:'#125fbf'}}>LYFnGO </span>account</Typography>

        </Box>
      
    </Card>
    </Box>
  )
}

export default Signin
