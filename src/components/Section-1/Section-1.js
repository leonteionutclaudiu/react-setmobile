import Card from 'react-bootstrap/Card';
import classes from './Section-1.module.css';

function Section1() {
  return (
    <Card className={classes.card}>
      <Card.Body>
        <div className={classes.texts}>
          <Card.Title className={classes.title}>
            Sed mauris ex,varius non iaculis elementum dignissim eget dolor
            praesent accumsan
          </Card.Title>
          <Card.Text className={classes.subtitle}>
            Ut turpis tellus,feugiat at egestas eget,luctus vitae
            turpis.Vestibulum eleifend ultricies eros,vitae malesuada lectus
            laoreet vitae.
          </Card.Text>
        </div>
        <Card.Img
          className={classes.image}
          variant="top"
          src="https://i.ibb.co/GTMz2nX/pic01.jpg"
        />
      </Card.Body>
    </Card>
  );
}

export default Section1;
