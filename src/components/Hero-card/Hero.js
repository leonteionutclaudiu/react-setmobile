import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from './Hero.module.css';

function HeroCard() {
  return (
    <Card>
      <Card.Body className={classes.body}>
        <Card.Title className={classes.title}>Aqmeter</Card.Title>
        <Card.Text>Acces online account of utilities companies.</Card.Text>
        <Button variant="primary">Register</Button>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  );
}

export default HeroCard;
