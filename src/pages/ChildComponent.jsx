import Accordion from "../components/Accordion";

const ChildComponent =(props) =>{

    console.log("ChildComponent::::",props)
    return (
    <>
    
    {/* <GrandChild  data={props}/> */}
    <Accordion>
        <div
        label="Section 1"
        displayStatus={true?"1":"0"}
        >
            <div>user data</div>
            <div>user data</div>
            <div>user data</div>
        </div>
        <div
        label="Section 1"
        displayStatus={true?"1":"0"}
        >Section 2</div>
        <div
        label="Section 2"
        displayStatus={true?"1":"0"}
        >Section 3</div>
        <div
        label="Section 3"
        displayStatus={true?"1":"0"}
        >Section 4</div>
        <div
        label="Section 4"
        displayStatus={true?"1":"0"}
        >Section 5</div>
    </Accordion>
    </>);
}
export default ChildComponent