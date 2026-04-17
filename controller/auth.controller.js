import axios from "axios"

export const todoData=async(req,res)=>{
    try {
        const {data,error} = await axios.get('https://dummyjson.com/users')
        if(error){
            return res.status(400).json({error:error.message})
        }
        // const users= data.split(0,10)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}