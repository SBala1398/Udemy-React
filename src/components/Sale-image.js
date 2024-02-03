import sale from '../assets/images/sale.jpg'



function Saleimages(){
    return(
        <div class="sale-image">
        <img src={sale} alt="sale image"></img>
        <div class="sale-image__offer">
            <h2>Udemy Flah Sale! 24 Hourse to save </h2>
            <p>
                Get the Top Courses For Only 499! Just One Day To Save and life time sipport
            </p>
        </div>
    </div>
    )
}
export default Saleimages