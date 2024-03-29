import Skeleton from "common/ui/Skeleton";
import { useGetMarketsQuery } from "features/Home/api";

import Coin from "./Coin";


const Markets = () => {

  const { data: response, isFetching } = useGetMarketsQuery()


  if (isFetching) {
    return (
      <div className="wrapper-container mt-8">
        <Skeleton className='h-8 w-32' />
        {[...Array(9)].map((_, index) => (
          <Skeleton key={index} className='h-8 w-full mt-2' />
        ))}
      </div>
    )
  }

  return (
    <section className="mt-8">
      <h1 className="text-2xl mb-2">Markets</h1>
      {!!response?.length && response?.map(coin => <Coin key={coin.id} coin={coin} />
      )}
    </section>
  )
}

export default Markets