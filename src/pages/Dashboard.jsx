import { Box, Button, Typography } from '@mui/material';
// import BlogCard from '../components/blogcard/BlogCard';
// import Loading from '../assets/loading.gif'
import { useContext, useEffect, useState } from 'react';
// import { BlogDataContext } from '../context/BlogContext';
// import { blueGrey } from '@mui/material/colors'

const Dashboard = () => {

  // console.log(blogPosts)

  return (
    <>
      <Typography variant='h3' sx={{ fontFamily: 'Girassol, cursive', textAlign: 'center' }} >-Dashboard-</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, marginY: '1rem' }}>
        {/* {blogPosts?.map((post, index) => (
          <BlogCard blogData={post} key={index} />
        ))} */}
        {/* burda gelen data ekrana işleniyor */}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '60%', margin: '2rem auto' }}>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={null}
        // onClick={() => setPage(page > 6 ? (page - 6) : (page))}
        >View Less</Button>
        <Button
          color="warning"
          startIcon={null}
        // onClick={() => setPage(page + 6)} variant="outlined"
        >View More</Button>
      </Box>
    </>
  );
}
export default Dashboard