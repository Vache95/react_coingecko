import { useGetTrandingsQuery } from "features/Home/api";
import CoinTrending from "./CoinTrending";
import Skeleton from "common/ui/Skeleton";


const Tranding = () => {

  const { data: response, isFetching } = useGetTrandingsQuery()

  if (isFetching) {
    return (
      <div className="wrapper-container mt-8">
        <Skeleton className='h-8 w-32' />
        {[...Array(4)].map((_, index) => (
          <Skeleton key={index} className='h-8 w-full mt-2' />
        ))}
      </div>
    )
  }

  return (
    <div className="mt-8">
      <h1 className="text-2xl mb-2">
        {!!response?.coins.length && response?.coins.map(coin => <CoinTrending
          key={coin.item.coin_id} coin={coin.item} />)}
      </h1>
    </div>
  )
}

export default Tranding