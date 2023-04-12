import { useParams } from "react-router-dom"
import {useEffect, useState} from 'react'

export default function Detalhes(){

    const {id} = useParams();

    const [filme , setFilme] = useState({});

    return(
        <div>
            <h1>
                <h1>Filme : {id}</h1>
                <h2> </h2>
            </h1>
        </div>
    )
}