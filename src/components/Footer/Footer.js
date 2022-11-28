import classes from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

const icon1 = <FontAwesomeIcon icon={faSquare} />;
const icon2 = <FontAwesomeIcon icon={faSquare} />;
const icon3 = <FontAwesomeIcon icon={faSquare} />;
const icon4 = <FontAwesomeIcon icon={faSquare} />;
const icon5 = <FontAwesomeIcon icon={faSquare} />;
const icon6 = <FontAwesomeIcon icon={faSquare} />;

function Footer() {
  return (
    <section className={classes.footer}>
      <div className={classes.icons}>
        <div className={classes.icon}>{icon1}</div>
        <div className={classes.icon}>{icon2}</div>
        <div className={classes.icon}>{icon3}</div>
        <div className={classes.icon}>{icon4}</div>
        <div className={classes.icon}>{icon5}</div>
        <div className={classes.icon}>{icon6}</div>
      </div>
      <div className={classes.footerTexts}>
        <p> &#169; Setmobile S.R.L. All rights reserved.</p>
        <p>
          Design:<span className={classes.name}>Vivamus Donec</span>
        </p>
      </div>
    </section>
  );
}

export default Footer;
