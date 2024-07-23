import Box from '@mui/material/Box';
import styles from './newOrder.module.css'
import ProcessBox from '../../Auth/process/ProcessBox';
import TextField from '@mui/material/TextField';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';



const steps = [
  {
    title: '',
    semTitle: 'Pickup Information',
    pathName: '/consigner/orders/new/pickup_information',
    status: false
  },
  {
    title: '',
    semTitle: 'Purchase Order',
    pathName: '/purchase_order',
    status: false
  },
  {
    title: '',
    semTitle: 'Finalize',
    pathName: '/finalize',
    status: false
  }
];


const NewOrder = () => {
  return (
    
    <Box component="section" sx={{ p: 2 }} className={styles.container}>
    
      <h1 className={styles.title}>New Order</h1>
      <Box component="section" sx={{ p: 4, border: '2px solid #FB8C00', borderRadius: '20px' }} minWidth={600}>
        <ProcessBox step={steps} completion={0}/>
      </Box>
      <Box component="section" className={styles.information}>
        <Box component="section" className={styles.left}>
          <Box component="section" sx={{ p: 2, marginBottom: '20px' }}>
            <h1 className={styles.subTitle}>Pickup Date</h1>
        
            <TextField 
              sx={{ minWidth: '300px'}}
              id="outlined-basic" 
              label="Date" 
              variant="outlined" 
              type='date'
              InputLabelProps={{
                shrink: true,
              }}
            />
            
          </Box>
          <Box component="section">
            <h1 className={styles.subTitle}>Pickup Time</h1>
            
            <div className={styles.tinmeIN}>
              <TextField 
                sx={{ minWidth: '300px'}}
                id="outlined-basic" 
                label="From" 
                variant="outlined" 
                type='time'
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField 
                sx={{ minWidth: '300px'}}
                id="outlined-basic" 
                label="To" 
                variant="outlined" 
                type='time'
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
  
          </Box>
        </Box>
        <Box component="section" className={styles.right}>
          <Box component="section" sx={{ p: 2, marginBottom: '20px' }}>
            <h1 className={styles.subTitle}>Pickup Location</h1>
            <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, borderRadius: '50px', background: '#F5F6FA' }}
            >
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1, }}
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
            
            </Paper>
          </Box>
            <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
              Google map
            </Box>
        </Box>
      </Box>
      <Box component="section" sx={{ p: 2, textAlign: 'center'}}>
        <button className={styles.submitBtn}>Submit</button>
      </Box>
    </Box>
    
  )
}

export default NewOrder