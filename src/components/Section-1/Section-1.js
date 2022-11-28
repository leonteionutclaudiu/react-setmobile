import Card from 'react-bootstrap/Card';
import classes from './Section-1.module.css';

function Section1() {
  return (
    <Card className={classes.card}>
      <Card.Body>
        <Card.Title>
          Sed mauris ex,varius non iaculis elementum dignissim eget dolor
          praesent accumsan
        </Card.Title>
        <Card.Text>
          Ut turpis tellus,feugiat at egestas eget,luctus vitae
          turpis.Vestibulum eleifend ultricies eros,vitae malesuada lectus
          laoreet vitae.
        </Card.Text>
        <Card.Img variant="top" src="https://i.ibb.co/GTMz2nX/pic01.jpg" />
      </Card.Body>
    </Card>
  );
}

export default Section1;
