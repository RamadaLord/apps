import Image from '../../img/O_hobbit.jpg'

export default function Emcartaz (){
    return (
        <div>
            <h1>
                Em cartaz
            </h1>
            <img src={Image} alt={Image}/>
        </div>
    )
}