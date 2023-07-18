import { useEffect, useState } from 'react'
import styles from './home.module.css'
import {BiSearch} from 'react-icons/bi'
import { Link } from 'react-router-dom'


//https://coinlib.io/api/v1/coinlist?key=bb37b73cb5fc8e46&

//Sua chave de API: bb37b73cb5fc8e46

interface CoinsProps{
    name:string;
    delta_24h:string;
    price:string;
    symbol:string;
    volume_24h:string
    market_cap:string;
    formatedPrice:string;
    formatedMarket:string;

}

interface DataProps{
    coins: CoinsProps[];
}

export function Home (){
    const [coins, setCoins] =useState<CoinsProps[]>([])
   
    useEffect(() => {
   
        function getData() {
     
          fetch('https://sujeitoprogramador.com/api-cripto/?key=bb37b73cb5fc8e46&pref=BRL')
           .then(response => response.json()) 
           .then((data: DataProps) => {
              let coinsData = data.coins.slice(0, 15);

              let price = Intl.NumberFormat("pt-BR",{
                style:"currency",
                currency:"BRL"
              })

              const formatresult = coinsData.map((item) =>{
                const formated ={
                    ...item,
                    formatedPrice:price.format(Number(item.price)),
                    formatedMarket:price.format(Number(item.market_cap)),
                }

                return formated;
              })
               
             
              setCoins(formatresult);
           })
           
          
        },
    
        getData();



    }, [])

    return(
        
        <main className={styles.container}>
            <form className={styles.form}>
                <input
                placeholder='Digite o simbolo da moeda:BTC..'
                
                />
                <button type="submit">
                 <BiSearch size={30} color="#fff"/>
                </button>
            </form>

            <table>

                <thead>
                    <tr>
                        <th scope='col'>Moeda</th>
                        <th scope='col'>Valor mercado</th>
                        <th scope='col'>Preço</th>
                        <th scope='col'>Volume</th>
                    </tr>
                </thead>
                <tbody id='tbory'>
                  <tr className={styles.tr}>
                    <td className={styles.tdLabel} data-label="Moeda">
                        <Link className={styles.link} to="/detail/btc">
                            <span>Bitcoin</span> | BTC
                        </Link>
                    </td>
                    <td className={styles.tdLabel} data-label="Mercado">
                        R$ 19293
                    </td>
                    <td className={styles.tdLabel} data-label="Preço">
                        R$ 40.962
                    </td>
                    <td className={styles.tdProfit} data-label="Volume">
                        <span>-5.3</span>
                    </td>
                  </tr>
                </tbody>
            </table>

        </main>
    )
}
