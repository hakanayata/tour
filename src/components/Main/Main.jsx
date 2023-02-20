import './Main.scss';
import Card from "./Card"
import { data } from '../../helpers/data';


const Main = () => {
    console.log(data)
    return (
        <div className="card-container">
           {data.map(item => {
               return <Card  {...item} />
           })}
        </div>
        
    )
}

export default Main;

  