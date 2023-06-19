import {React} from 'react'
import {Accordion,AccordionDetails,AccordionSummary,Typography}  from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import "./MuiAccordion.scss"
const MuiAccordion = () => {

  return (
    <div >

       <Accordion className='accordiondiv'>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Carspotting nədir?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
Carspotting şəhərdə piyada gəzərkən 
          </Typography>
        </AccordionDetails>
      </Accordion >
      <Accordion className='accordiondiv'>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Vizyonumuz</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion className='accordiondiv'>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography> Niyə məhz maşınlar ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla illum eaque, ipsam labore nisi nihil nemo molestiae laboriosam quae animi iure accusamus numquam beatae. Modi ex beatae error quis unde.
          </Typography>
        </AccordionDetails>
      </Accordion >





      <Accordion className='accordiondiv'>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>Biz kimik?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dicta officia laboriosam quidem nulla neque quas aut impedit molestiae omnis dolorum delectus modi error, doloremque odio possimus? Sapiente, eius animi.
          </Typography>
        </AccordionDetails>
      </Accordion >
  
    </div>
  )
}

export default MuiAccordion


















