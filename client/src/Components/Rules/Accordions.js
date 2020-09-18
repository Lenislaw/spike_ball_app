import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderRadius: 0,
    margin: "5px 10px",
    textAlign: "left",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>BEFORE PLAY</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul className="list">
                <li className="item">
                  The ball should be inflated to 30cm circumference.
                </li>
                <li className="item">
                  The tension of the net should be consisten throughout. A ball
                  dropped from 40cm aboce the net should bounce up approximately
                  30-46cm.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>DURING PLAY</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul className="list">
                <li className="item">
                  All players except the receiver must begin the point at least
                  183cm from the net.
                </li>
                <li className="item">
                  The receiver may stand at any desired distance.
                </li>
                <li className="item">
                  Once the server strikes the ball, players may go any where
                  they choose.
                </li>
                <li className="item">
                  Possession changes when the ball contacts the net.
                </li>
                <li className="item">
                  Each team has up to 3 touches per possession.
                </li>
                <li className="item">
                  Determine a serving order which alternates players from the
                  two teams (e.g. Player 3 follows Player 1, etc.).
                </li>
                <li className="item">
                  To equalize sun and wind effects, rotate starting positions 90
                  degrees counter-clockwise every 5 points if desired.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>SCORING</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul className="list">
                <li className="item">
                  Roundnet is played using tally scoring; points can be won by
                  the serving or receiving team.
                </li>
                <li className="item">
                  Games are typically played to 11,15 or 21. In turnament play,
                  the tournament director specifis the winning score.
                </li>
                <li className="item">
                  Games must be won by two points unless otherwise agreed upon
                  or specified.
                </li>
                <li className="item">
                  The rally end and a point is awarded when:
                  <ul className="list-list">
                    <li className="item">
                      The ball contacts the ground or otherwise isn't returned
                      onto the net within 3 touches.
                    </li>
                    <li className="item">
                      The ball is hit directly into the rim at any
                      time,including on a serve.
                    </li>
                    <li className="item">
                      The ball bounces and falls back onto the net or rim.
                    </li>
                    <li className="item">
                      The ball clearly rolls across the net.
                    </li>
                  </ul>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>SERVING</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul className="list">
                <li className="item">
                  If the receiving team wins the point, the next designated
                  player serves according to the initial sequence. Otherwise,
                  the server switches places with his/her partner and serves to
                  the other receiving team member.
                </li>
                <li className="item">
                  The receiving team sets their position first. The server
                  stands 180 degrees across the designated receiver--the only
                  player allowed to field the serve.
                </li>
                <li className="item">
                  Serves may be struck with any amount of force; short serves
                  are allowed.
                </li>
                <li className="item">
                  If a server serves two faults, the receiving team wins the
                  point. Violation of ANY of the following rules is a fault:
                  <ul className="list-list">
                    <li className="item">
                      The server must toss the ball upward at least 10cm.
                    </li>
                    <li className="item">
                      If the server tosses the ball, he/she must hit it.
                      Dropping, catching, or swinging at and missing a toss all
                      count as a fault.
                    </li>
                  </ul>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>RALLIES</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul className="list">
                <li className="item">
                  Touches must alternate between teammates. Consecutive touches
                  by one player result in a loss of a point.
                </li>
                <li className="item">
                  The ball must be contacted cleanly, not caught, lifted, or
                  thrown. Players may not hit the ball with two hands, even if
                  placed together "volleyball style".
                </li>
                <li className="item">
                  Players may use any individual part of their body to hit the
                  ball.
                </li>
                <li className="item">
                  After the serve, any unusual bounce (i.e. pocket) that does
                  not contact the rim is legal and playable.
                </li>
                <li className="item">
                  A shot which lands on the net, rolls into the rim and then off
                  the net (i.e. roll-up) is played as a pocket, not a direct rim
                  hit.
                </li>
                <li className="item">
                  If teams cannot determine the legality of a hit, replay the
                  point.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>INFRACTIONS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul className="list">
                <li className="item">Remember: Player safety is paramount!</li>
                <li className="item">
                  Defending players must make an effort not to impede the
                  offending team's possession or play on the ball.
                </li>
                <li className="item">
                  If an offender collides with a defender, or a defender's
                  position prevents a markable offensive play on the ball, the
                  infracted player may call "hinder" to force a replay of the
                  point.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Fragment>
  );
}
