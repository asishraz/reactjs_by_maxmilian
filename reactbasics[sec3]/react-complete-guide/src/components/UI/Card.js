import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;

//* {props.children} info:

{
  /* 
Whatever className we have assigned to the <Card>, we should tweak it into the code here.
We will add the classname to the div inside the Card function here
and we will create a constant for all the classes which is used here. 
const classes = 'card' which is by default
const classes = 'card' + props.className [here 'expense-item' is the className]
therefore, we are writing something like this
const classes = 'card' + 'expense-item'
and in <div>, we are using the const classes. 



 */
}
