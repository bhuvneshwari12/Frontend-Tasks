import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
      <a href={`/${props.id}`}>Show Details</a>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
