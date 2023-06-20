import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
//import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  containerAll: {
    //width: "100%",
    marginBottom: "3rem",
    backgroundImage: `url(homebg.jpg)`,
    //height: "110vh",
    width: "100%",
    backgroundSize: "100%",
    //backgroundRepeat: "no-repeat",
    opacity: "1",
    marginTop: "-10rem",
    paddingTop: "10rem",
    paddingBottom: "7rem",
  },
  containerYear: {
    margin: "0.5rem",
  },
  title: {
    marginLeft: "1rem",
    marginBottom: "1rem",
    color: "white",
  },
  heading1: {
    fontSize: "2.5rem",
    marginTop: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  year: {
    ...theme.typography,
    width: "100%",
    fontSize: "1.2rem",
    fontWeight: "bold",
    height: "2rem",
    textAlign: "center",
    color: "white",
  },
  projectContainer: {
    height: "25rem",
    width: "25rem",
    margin: "0.4rem",
    borderRadius: "0.5rem",
    boxShadow: "0.2rem 0.2rem 0.5rem MediumTurquoise",
    [theme.breakpoints.down("xs")]: {
      height: "22rem",
      width: "22rem",
      boxShadow: "0.1rem 0.1rem 0.3rem MediumTurquoise",
    },
  },
  imgBoxNFTmarketplace: {
    margin: "auto",
    marginTop: "1rem",
    height: "12.5rem",
    width: "23rem",
    //border: `${theme.palette.primary.main} solid 0.2rem`,
    backgroundImage: `url(nftmarketImg.png)`,
    backgroundSize: "cover",
    [theme.breakpoints.down("xs")]: {
      height: "11rem",
      width: "20rem",
    },
  },
  textNFTmarketplace: {
    margin: "auto",
    marginTop: "0.5rem",
    fontSize: "1.1rem",
    textAlign: "center",
    height: "8rem",
    width: "23rem",
    //border: "1px solid red",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      width: "20rem",
      height: "7.5rem",
    },
  },
  imgBoxCardGame: {
    margin: "auto",
    marginTop: "1rem",
    height: "12.5rem",
    width: "23rem",
    //border: `${theme.palette.primary.main} solid 0.2rem`,
    backgroundImage: `url(cardgameImg.png)`,
    backgroundSize: "cover",
    [theme.breakpoints.down("xs")]: {
      height: "11rem",
      width: "20rem",
    },
  },
  textCardGame: {
    margin: "auto",
    marginTop: "0.4rem",
    fontSize: "1.1rem",
    textAlign: "center",
    height: "8rem",
    width: "23rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      width: "20rem",
      height: "7.5rem",
    },
  },
  imgBoxOrganic: {
    margin: "auto",
    marginTop: "1rem",
    height: "12.5rem",
    width: "23rem",
    //border: `${theme.palette.primary.main} solid 0.2rem`,
    backgroundImage: `url(iorganicfarmImg.png)`,
    backgroundSize: "cover",
    [theme.breakpoints.down("xs")]: {
      height: "11rem",
      width: "20rem",
    },
  },
  textOrganic: {
    margin: "auto",
    marginTop: "0.5rem",
    fontSize: "1.1rem",
    textAlign: "center",
    height: "8rem",
    width: "23rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.0rem",
      width: "20rem",
      height: "7.5rem",
    },
  },
  imgBoxClassroom: {
    margin: "auto",
    marginTop: "1rem",
    height: "12.5rem",
    width: "23rem",
    //border: `${theme.palette.primary.main} solid 0.2rem`,
    backgroundImage: `url(iClassroomImg.png)`,
    backgroundSize: "cover",
    [theme.breakpoints.down("xs")]: {
      height: "11rem",
      width: "20rem",
    },
  },
  textClassroom: {
    margin: "auto",
    marginTop: "0.5rem",
    fontSize: "1.1rem",
    textAlign: "center",
    height: "8rem",
    width: "23rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.0rem",
      width: "20rem",
      height: "7.2rem",
    },
  },
  imgBoxJAR: {
    margin: "auto",
    marginTop: "1rem",
    height: "12.5rem",
    width: "23rem",
    //border: `${theme.palette.primary.main} solid 0.2rem`,
    backgroundImage: `url(jarImg.png)`,
    backgroundSize: "cover",
    [theme.breakpoints.down("xs")]: {
      height: "11rem",
      width: "20rem",
    },
  },
  textJAR: {
    margin: "auto",
    marginTop: "0.5rem",
    fontSize: "1.1rem",
    textAlign: "center",
    height: "8rem",
    width: "23rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.0rem",
      width: "20rem",
      height: "7.2rem",
    },
  },
  imgBoxOkinawa: {
    margin: "auto",
    marginTop: "1rem",
    height: "16rem",
    width: "23rem",
    //border: `${theme.palette.primary.main} solid 0.2rem`,
    backgroundImage: `url(okinawaImg.png)`,
    backgroundSize: "cover",
    [theme.breakpoints.down("xs")]: {
      height: "13.5rem",
      width: "20rem",
    },
  },
  textOkinawa: {
    margin: "auto",
    marginTop: "0.5rem",
    fontSize: "1.1rem",
    textAlign: "center",
    height: "4.7rem",
    width: "23rem",
    //border: "1px solid red",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.0rem",
      width: "20rem",
      height: "4.7rem",
    },
  },
  cardLinkBox: {
    marginTop: "0.4rem",
    //border: "1px solid red",
    [theme.breakpoints.down("xs")]: {
      marginTop: "0rem",
    },
  },
  cardLink: {
    margin: "0.2rem",
    padding: "0.2rem",
    //border: "1px solid green",
    [theme.breakpoints.down("xs")]: {
      margin: "0.1rem",
      padding: "0.1rem",
    },
  },
}));

const Projects = () => {
  const classes = useStyles();
  useEffect(() => {
    document.title = "Projects Robert Peng";
  }, []);
  const projects = (
    <Grid container direction="column" className={classes.containerAll}>
      <Grid item>
        <Grid container direction="column" className={classes.containerYear}>
          <Grid item className={classes.year}>
            2023
          </Grid>
          <Grid item>
            <Grid container justifyContent="space-evenly">
              <Grid item>
                <Paper className={classes.projectContainer}>
                  <Grid container direction="column">
                    <Link
                      target="_blank"
                      href="https://lambent-souffle-3c300d.netlify.app/"
                      aria-label="visit OURS NFT marketplace hosted on Netlify"
                    >
                      <Grid
                        item
                        className={classes.imgBoxNFTmarketplace}
                      ></Grid>
                    </Link>
                    <Grid item>
                      <Typography className={classes.textNFTmarketplace}>
                        OURS, a Web 3.0 full-stack Dapp using Hardhat, Solidity,
                        OpenZeppelin, The Graph, Alchemy, Ethers.js, & Next.js.
                        A decentralized NFT marketplace for users to buy & sell
                        NFTs in the listed collections including Bored Students
                        & Friends deployed on Polygon Mumbai testnet.
                      </Typography>
                      <Grid
                        container
                        direction="row"
                        className={classes.cardLinkBox}
                        justifyContent="space-evenly"
                        alignItems="center"
                      >
                        <Grid item className={classes.cardLink}>
                          <Link
                            target="_blank"
                            href="https://lambent-souffle-3c300d.netlify.app/"
                            aria-label="Visit OURS NFT marketplace hosted on Netlify"
                          >
                            Website
                          </Link>
                        </Grid>
                        <Grid item className={classes.cardLink}>
                          <Link
                            target="_blank"
                            href="https://github.com/robertpengcode/NFTmarket"
                            aria-label="Check OURS NFT marketplace repository on Github"
                          >
                            GitHub
                          </Link>
                        </Grid>
                        <Grid item className={classes.cardLink}>
                          <Link
                            target="_blank"
                            href="https://youtu.be/H1chjHBBGn0"
                            aria-label="Check OURS NFT marketplace video demo on Youtube"
                          >
                            Demo App
                          </Link>
                        </Grid>
                        <Grid item className={classes.cardLink}>
                          <Link
                            target="_blank"
                            href="https://youtu.be/QwtjOYHlVps"
                            aria-label="Check OURS NFT marketplace Solidity demo on Youtube"
                          >
                            Demo Solidity
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.projectContainer}>
                  <Grid container direction="column">
                    <Link
                      target="_blank"
                      href="https://jazzy-gnome-63384c.netlify.app/"
                      aria-label="Visit Yan Kingdom game hosted on Netlify"
                    >
                      <Grid item className={classes.imgBoxCardGame}></Grid>
                    </Link>
                    <Grid item>
                      <Typography className={classes.textCardGame}>
                        Yan Kingdom, a Web 3.0 full-stack Dapp using Hardhat,
                        Solidity, OpenZeppelin, Ethers.js, Alchemy, &
                        TailwindCSS. An on-chain card battle game, deployed on
                        Polygon Mumbai testnet, allows players to mint ERC1155
                        tokens as in-game characters & treasures to flight with
                        others.
                      </Typography>
                      <Grid
                        container
                        direction="row"
                        className={classes.cardLinkBox}
                        justifyContent="space-evenly"
                        alignItems="center"
                      >
                        <Grid item className={classes.cardLink}>
                          <Link
                            target="_blank"
                            href="https://jazzy-gnome-63384c.netlify.app/"
                            aria-label="Visit OURS NFT marketplace hosted on Netlify"
                          >
                            Website
                          </Link>
                        </Grid>
                        <Grid item className={classes.cardLink}>
                          <Link
                            target="_blank"
                            href="https://github.com/robertpengcode/Blockchain_CardGame"
                            aria-label="Check Yan Kingdom game repository on Github"
                          >
                            GitHub
                          </Link>
                        </Grid>
                        <Grid item className={classes.cardLink}>
                          <Link
                            target="_blank"
                            href="https://youtu.be/fCMBIZYfqsM"
                            aria-label="Check Yan Kingdom video demo on Youtube"
                          >
                            Demo App
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" className={classes.containerYear}>
          <Grid item className={classes.year}>
            2021
          </Grid>
          <Grid item>
            <Grid container justifyContent="space-evenly">
              <Grid item>
                <Paper className={classes.projectContainer}>
                  <Grid container direction="column">
                    <Link
                      target="_blank"
                      href="https://iorganicfarm.herokuapp.com"
                      aria-label="visit iOrganicFarm website hosted on Heroku"
                    >
                      <Grid item className={classes.imgBoxOrganic}></Grid>
                    </Link>
                    <Grid item>
                      <Typography className={classes.textOrganic}>
                        iOrganicFarm, a full-stack Website Project using Node,
                        Express, React (hooks), and MongoDB. An e-commerce
                        website where users can buy organic produce and
                        registered vendors can exchange them. Built with Web
                        Accessibility (WCAG 2.1) awareness.
                      </Typography>
                      <Grid
                        container
                        direction="row"
                        className={classes.cardLinkBox}
                        justifyContent="space-evenly"
                        alignItems="center"
                      >
                        <Grid item className={classes.cardLink}>
                          <Link
                            target="_blank"
                            href="https://iorganicfarm.herokuapp.com"
                            aria-label="visit iOrganicFarm website hosted on Heroku"
                          >
                            Website
                          </Link>
                        </Grid>
                        <Grid item className={classes.cardLink}>
                          <Link
                            target="_blank"
                            href="https://github.com/robertpengcode/iOrganicFarm"
                            aria-label="Check iOrganicFarm game repository on Github"
                          >
                            GitHub
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" className={classes.containerYear}>
          <Grid item className={classes.year}>
            2020
          </Grid>
          <Grid item>
            <Grid container justifyContent="space-evenly">
              <Grid item>
                <Paper className={classes.projectContainer}>
                  <Grid container direction="column">
                    <Link
                      target="_blank"
                      href="https://github.com/robertpengcode/graceShopper"
                      aria-label="Check JAR repository on Github"
                    >
                      <Grid item className={classes.imgBoxJAR}></Grid>
                    </Link>
                    <Grid item>
                      <Typography className={classes.textJAR}>
                        JAR, a Fullstack Academy group project by Josh, Andres,
                        and Robert using Node, Express, React, and PostgreSQL.
                        An e-commerce website where visitors can browse
                        essential goods during the stay-at-home period.
                      </Typography>
                      <Grid
                        container
                        direction="row"
                        className={classes.cardLinkBox}
                        justifyContent="space-evenly"
                        alignItems="center"
                      >
                        <Grid item className={classes.cardLink}>
                          <Link
                            target="_blank"
                            href="https://github.com/robertpengcode/graceShopper"
                            aria-label="Check JAR repository on Github"
                          >
                            GitHub
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.projectContainer}>
                  <Grid container direction="column">
                    <Link
                      target="_blank"
                      href="https://github.com/robertpengcode/iClassroom"
                      aria-label="Check iClassroom repository on Github"
                    >
                      <Grid item className={classes.imgBoxClassroom}></Grid>
                    </Link>
                    <Grid item>
                      <Typography className={classes.textClassroom}>
                        iClassroom, a Fullstack Academy group project by Tandid,
                        Aleks, Vinayak, and Robert using Node, Express, React,
                        and PostgreSQL. An online education platform where
                        teachers can assign homeworks to students and grade
                        them...
                      </Typography>
                      <Grid
                        container
                        direction="row"
                        className={classes.cardLinkBox}
                        justifyContent="space-evenly"
                        alignItems="center"
                      >
                        <Grid item className={classes.cardLink}>
                          <Link
                            target="_blank"
                            href="https://github.com/robertpengcode/iClassroom"
                            aria-label="Check iClassroom repository on Github"
                          >
                            GitHub
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" className={classes.containerYear}>
          <Grid item className={classes.year}>
            2019
          </Grid>
          <Grid item>
            <Grid container justifyContent="space-evenly">
              <Grid item>
                <Paper className={classes.projectContainer}>
                  <Grid container direction="column">
                    <Link
                      target="_blank"
                      href="https://robertpengcode.github.io/1945-OKINAWA/"
                      aria-label="Visit 1945 Okinawa website hosted by Github"
                    >
                      <Grid item className={classes.imgBoxOkinawa}></Grid>
                    </Link>
                    <Grid item>
                      <Typography className={classes.textOkinawa}>
                        1945 OKINAWA, a shooting game using JavaScript, HTML,
                        CSS, Bootstrap. The background is the battle of Okinawa
                        happened in 1945.
                      </Typography>
                      <Grid
                        container
                        direction="row"
                        className={classes.cardLinkBox}
                        justifyContent="space-evenly"
                        alignItems="center"
                      >
                        <Grid item className={classes.cardLink}>
                          <Link
                            target="_blank"
                            href="https://robertpengcode.github.io/1945-OKINAWA/"
                            aria-label="Visit 1945 Okinawa website hosted by Github"
                          >
                            Website
                          </Link>
                        </Grid>
                        <Grid item className={classes.cardLink}>
                          <Link
                            target="_blank"
                            href="https://github.com/robertpengcode/1945-OKINAWA"
                            aria-label="Check 1945 Okinawa repository on Github"
                          >
                            GitHub
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Box id="main" role="main" tabIndex="-1">
      <Box className={classes.title}>
        <Typography variant="h1" className={classes.heading1}>
          My Projects
        </Typography>
      </Box>
      <Box>{projects}</Box>
    </Box>
  );
};

export default Projects;
