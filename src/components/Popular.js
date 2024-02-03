import c1 from '../assets/images/c1.jpg'
import c2 from '../assets/images/c2.jpg'
import c3 from '../assets/images/c3.jpg'
import c4 from '../assets/images/c4.jpg'


function Popular(){
    return( <div class="popular">
    <h1 class="popular__title">Most Popular</h1>
    <p class="popular__subtitle">Pick the best fit topic for you</p>
    <div class="popular__container">
        <div class="course-card">
        <img src={c1} alt="sale image"></img>
            <h3>Python data Visaulisation Masterclass 2023</h3>
            <p>col steele</p>
            <p>4.6⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div class="course-card">
        <img src={c2} alt="sale image"></img>
            <h3>Basic to Advance Programming with EMC</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div class="course-card">
        <img src={c3} alt="sale image"></img>
            <h3>Web Development Bootcamp 2023 New </h3>
            <p>col steele</p>
            <p>3.1⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div class="course-card">
        <img src={c4} alt="sale image"></img>
            <h3>Master UI/UX Designing with Figma</h3>
            <p>col steele</p>
            <p>2.9⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>

        <div class="course-card">
        <img src={c2} alt="sale image"></img>
            <h3>Basic to Advance Programming with EMC</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>

        <div class="course-card">
        <img src={c4} alt=" Screen-readers already"></img>
            <h3>Master UI/UX Designing with Figma</h3>
            <p>col steele</p>
            <p>2.9⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>

        <div class="course-card">
        <img src={c1} alt="sale image"></img>
            <h3>Python data Visaulisation Masterclass 2023</h3>
            <p>col steele</p>
            <p>4.6⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>

        <div class="course-card">
        <img src={c3} alt=" Screen-readers already"></img>
            <h3>Web Development Bootcamp 2023 New </h3>
            <p>col steele</p>
            <p>3.1⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
    </div>
</div>
)
}
export default Popular