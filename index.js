/* FUNCTION IN REACT */
/* 
function MainContent(){
    return(
        <h2> i am learning react</h2>
        )
}
ReactDOM.render(
<div>
    <MainContent/>
</div>, 
document.getElementById("root"))  */

const navbar = (
   <nav>
    <h1> Staffs Profile</h1>
    <ul>
        <li>Board of Management</li>
        <li>Teaching Staffs</li>
        <li>Teaching Staffs</li>
    </ul>
   </nav>
)
const page = (
    <div>
        <h1> my awesome website in react</h1>
        <h3> reasons i love react</h3>
        <ol>
            <li>composable</li>
            <li>declarative</li>
            <li>hireable skiull</li>
        </ol>
    </div>
)
ReactDOM.render(
      page ,
    document.getElementById("root")
)
