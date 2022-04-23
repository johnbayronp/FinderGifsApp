
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {data:images,loading} = useFetchGifs(category); // Custom Hook

    return (
    <>  
        <h2 className='animate__animated animate__backInDown'> {category[0].toUpperCase()+category.slice(1).toLowerCase() } </h2>

        { /* loading && 'Cargando...' */ }
        
        <div className="card-grid">
            {
                images.map( (gif) => 
                    <GifGridItem key={gif.id} {...gif} />
                )
            }
        </div>
        
    </>
  )
}
