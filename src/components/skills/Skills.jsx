import React from 'react'
import "./skills.scss";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function Skills() {
  return (
    <div id='skills'>
      <h2 className='text-center'>SKILLS</h2>
      <div className="container ">
        <div className='item text-center'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">HTML</Typography>
            <Rating name="read-only" value={4} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">CSS</Typography>
            <Rating name="read-only" value={4} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center mobile'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">HTML5</Typography>
            <Rating name="read-only" value={4} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center mobile'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">CSS3</Typography>
            <Rating name="read-only" value={4} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">JavaScript</Typography>
            <Rating name="read-only" value={3} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center mobile'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">ES6</Typography>
            <Rating name="read-only" value={3} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center mobile'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">Bootstrap</Typography>
            <Rating name="read-only" value={3} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">Tailwind</Typography>
            <Rating name="read-only" value={4} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">React.js</Typography>
            <Rating name="read-only" value={3} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center mobile'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">SASS</Typography>
            <Rating name="read-only" value={3} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center mobile'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">JSX</Typography>
            <Rating name="read-only" value={2} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center mobile' >
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">React BootStrap</Typography>
            <Rating name="read-only" value={3} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center mobile'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">MUI</Typography>
            <Rating name="read-only" value={3} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center mobile'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">StyledComponent</Typography>
            <Rating name="read-only" value={3} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center mobile'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">Axios</Typography>
            <Rating name="read-only" value={3} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center mobile'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">Redux</Typography>
            <Rating name="read-only" value={2} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">FireBase</Typography>
            <Rating name="read-only" value={3} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        {/* <div className='item text-center mobile'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">Next.js</Typography>
            <Rating name="read-only" value={3} max={5} readOnly className='text-primary' />
          </Box>
        </div> */}
        <div className='item text-center'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">Git & Github</Typography>
            <Rating name="read-only" value={4} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">Node.js</Typography>
            <Rating name="read-only" value={3} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center mobile'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">Express.js</Typography>
            <Rating name="read-only" value={3} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center mobile'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">MangoDB</Typography>
            <Rating name="read-only" value={3} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        {/* <div className='item text-center mobile'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">MySQL</Typography>
            <Rating name="read-only" value={3} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center mobile'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">SQL</Typography>
            <Rating name="read-only" value={3} max={5} readOnly className='text-primary' />
          </Box>
        </div> */}
        <div className='item text-center'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">Python</Typography>
            <Rating name="read-only" value={3} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">JAVA</Typography>
            <Rating name="read-only" value={3} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center mobile'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">C Language</Typography>
            <Rating name="read-only" value={3} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">C++</Typography>
            <Rating name="read-only" value={3} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">AI & ML</Typography>
            <Rating name="read-only" value={1} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center mobile'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">SDLC</Typography>
            <Rating name="read-only" value={1} max={5} readOnly className='text-primary' />
          </Box>
        </div>
        <div className='item text-center mobile'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">MDLC</Typography>
            <Rating name="read-only" value={1} max={5} readOnly className='text-primary' />
          </Box>
        </div>
      </div>
    </div>
  )
}
