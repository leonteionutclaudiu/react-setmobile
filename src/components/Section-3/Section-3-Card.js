import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from './Section-3-Card.module.css';

function Section3Card({ title, text, link }) {
  return (
    <Card className={classes.card}>
      <Card.Body>
        <Card.Img variant="top" src={link} />
        <Card.Title className={classes.title}>{title}</Card.Title>
        <Card.Text className={classes.text}>{text}</Card.Text>
        <Button className={classes.btn} variant="primary">
          Learn More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Section3Card;
