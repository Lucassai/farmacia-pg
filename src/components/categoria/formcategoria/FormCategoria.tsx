/* import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'
import { buscar } from '../../../services/Service';

function FormCategoria() {

    const [categoria, setCategoria] = useState<Categoria[]>([]);

async function buscarCategoria(){
    try{
        await buscar("categoria", setCategoria);
    }
    catch
}
}



export default FormCategoria */