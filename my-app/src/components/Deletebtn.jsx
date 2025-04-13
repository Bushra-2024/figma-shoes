'use client'
import React from 'react'
// import API from '../app/page.jsx'
import axios from 'axios'
// import  {getData}  from '@/app/page'
const API = 'https://to-dos-api.softclub.tj/api/to-dos'

const Deletebtn = ({id}) => {
	const deleteData = async() => {
		try {
			await axios.delete(`${API}?id=${id}`)
			location.reload()
			// router.refresh()

			// getData()
		} catch (error) {
			console.error(error);
		}
	}
  return (
	 <div>
		<button className='bg-red-700 text-white p-1' onClick={deleteData}>delete</button>
	 </div>
  )
}

export default Deletebtn
