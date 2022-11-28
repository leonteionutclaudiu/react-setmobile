import Card from 'react-bootstrap/Card';
import classes from './Section-2-Card.module.css';

function Section2Card({ title, text }) {
  return (
    <>
      <Card className={classes.card}>
        <Card.Body>
          <Card.Title className={classes.title}>{title}</Card.Title>
        </Card.Body>
      </Card>
      <br />
      <Card className={classes.card}>
        <Card.Body>
          <Card.Text className={classes.text}>{text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Section2Card;
