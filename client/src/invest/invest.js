import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarOutline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

import * as Survey from "survey-react";
import {Component} from "react";


function Notice(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Due notice: each of the tiers of investment plans comes with commensurate risk.'}
        </Typography>
    );
}

const tiers = [
    {
        title: 'Slow and Steady',
        returns: '3%',
        description: [
            'Minimal risk',
            'Passively grow your bank account'
        ],
        buttonText: 'Saving more is easy',
        buttonVariant: 'outlined',
    },
    {
        title: 'Comfortably paced',
        subheader: 'Most popular',
        returns: '5.5%',
        description: [
            'Moderate risk',
            'Outpace inflation from the comfort of your own home',
        ],
        buttonText: 'Get started',
        buttonVariant: 'contained',
    },
    {
        title: 'A real go-getter',
        returns: '8%',
        description: [
            'AI-advised professionals',
            'For those who want to seize the day',
        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },
];



function PlanContent() {
    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />

            {/* Hero unit */}
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Investment Plans
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    Start saving better, today! With our new offering of investment plans, you can find one for any risk appetite.
                    Find out more, below.
                </Typography>
            </Container>
            {/* End hero unit */}
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === 'Enterprise' ? 12 : 6}
                            md={4}
                        >
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                        }}
                                    >
                                        <Typography component="h2" variant="h3" color="text.primary">
                                            {tier.returns}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            /yr
                                        </Typography>
                                    </Box>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth variant={tier.buttonVariant}>
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Notice sx={{ mt: 5 }} />
        </React.Fragment>
    );
}

class Questionnaire extends Component {
    constructor(props) {
        super(props);
        this.state = { isCompleted: false };
        this.onCompleteComponent = this.onCompleteComponent.bind(this);
    }
    onCompleteComponent() {
        this.setState({ isCompleted: true });
    }
    render() {
        Survey.StylesManager.applyTheme("defaultV2");
        let json = {
            "title": "Investment Profile Questionnaire",
            "pages": [
                {
                    "elements": [
                        {
                            "type": "panel",
                            "elements": [
                                {
                                    "type": "html",
                                    "name": "income_intro",
                                    "html": "<article class='intro'> <div class='intro__body wysiwyg'> <p></p>  <p> Everyone has their own investment objectives. The amount of risk to take is personal. </p> <p> Only you can decide what risk/return trade-off you are comfortable with, and the following questions will you assess your tolerence towards risk taking </p>  </article>"
                                }
                            ],
                            "name": "panel1"
                        }
                    ],
                },
                {
                    "name": "Time Horizon",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "I plan to begin withdrawing money from my investments in",
                            "choices": [
                                "Less than 3 years",
                                "3 - 5 years",
                                "6 - 10 years",
                                "11 years or more"
                            ],
                        }, {
                            "type": "radiogroup",
                            "name": "Once I begin withdrawing funds from my investments, I plan to spend all of the funds in",
                            "choices": [
                                "Less than 2 years",
                                "2 - 5 years",
                                "6 - 10 years",
                                "11 years or more"
                            ],
                        }
                    ]
                },
                {
                    "name": "Risk Tolerance",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "I would describe my knowledge of investments as",
                            "isRequired": true,
                            "choices": [
                                "None",
                                "Limited",
                                "Good",
                                "Extensive"
                            ],
                        }, {
                            "type": "radiogroup",
                            "name": "What amount of financial risk are you willing to take when you invest?",
                            "isRequired": true,
                            "choices": [
                                "Take lower than average risks expecting to earn lower than average returns",
                                "Take average risks expecting to earn average returns",
                                "Take aEove average risks expecting to earnaEove average returns"
                            ],
                        }, {
                            "type": "radiogroup",
                            "name": "Select the investments you currently own or have owned",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "3",
                                    "text": "Money market funds or cash investments"
                                }, {
                                    "value": "2",
                                    "text": "Bonds and/or bond funds"
                                }, {
                                    "value": "1",
                                    "text": "Stocks and/or stock funds"
                                }, {
                                    "value": "4",
                                    "text": "International securities and/or international funds"
                                }
                            ],
                        }, {
                            "type": "radiogroup",
                            "name": "Consider this scenario: Imagine that in the past three months, the overall stock market lost 25% of its value. An individual stock investment you own also lost 25% of its value. What would you do?",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "3",
                                    "text": "Sell all of my shares"
                                }, {
                                    "value": "2",
                                    "text": "Sell some of my shares"
                                }, {
                                    "value": "1",
                                    "text": "Do nothing"
                                }, {
                                    "value": "4",
                                    "text": "Buy more shares"
                                }
                            ],
                        }
                    ]
                }
            ],
        };
        var surveyRender = !this.state.isCompleted ? (
            <Survey.Survey
                json={json}
                showCompletedPage={false}
                onComplete={this.onCompleteComponent}
            />
        ) : null;
        var onCompleteComponent = this.state.isCompleted ? (
            <PlanContent />
        ) : null;
        return (
            <div>
                {surveyRender}
                {onCompleteComponent}
            </div>
        );
    }
}

const Invest = () => {
    return (
        <div>
            <Questionnaire />
        </div>
    )
}

export default Invest