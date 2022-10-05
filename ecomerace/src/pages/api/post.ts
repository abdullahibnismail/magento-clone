import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req:NextApiRequest,res:NextApiResponse){
    res.json(req.body)
    console.log(req.body)
}