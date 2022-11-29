import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from './Hero.module.css';

function HeroCard() {
  return (
    <Card className={classes.hero}>
      <Card.Body className={classes.body}>
        <Card.Title className={classes.title}>Aqmeter</Card.Title>
        <Card.Text className={classes.subtitle}>
          Access online account of utilities companies.
        </Card.Text>

        <div className={classes.btns}>
          <Button className={classes.register} variant="primary">
            Register
          </Button>
          <Button className={classes.learnMore} variant="primary">
            Learn More
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default HeroCard;
