import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '90%',
      height: 'inherit',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  })
);

function getSteps() {
  return [
    'Обсуждение этапов совместной работы',
    'Работа с респондентами',
    'Создание дизайн-макета',
    'Разработка',
    'Тестирование',
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div>
          <ul>
            <li>Проработка ключевого функционала проекта</li>
            <li>
              Обсуждение возможности технической реализации. Фронтенд, бэкенд,
              интеграция со сторонними сервисами(базами данных)
            </li>
            <li>
              Разработка пользовательских сценариев (UserStory) или другими
              словами моделирование поведение пользователя
            </li>
          </ul>
        </div>
      );
    case 1:
      return (
        <div>
          <ul>
            <li>Связь с респондентами</li>
            <li>
              Обсуждение с респондентами разработанного UserStory. Выявление потребности в разрабатываемом функционале
            </li>
            <li>
              Доработка UserStory в соответствии с обратной связью от респондентов
            </li>
          </ul>
        </div>
      );
    case 2:
      return (
        <div>
          <ul>
            <li>Разработка первичного прототипа дизайн-макета в Figma</li>
            <li>
              Обсуждение с командой проекта дизайна и внесение правок 
            </li>
            <li>
              Доработка дизайн-макета
            </li>
          </ul>
        </div>
      );
      case 3:
      return (
        <div>
          <ul>
            <li>Разработка прототипа проекта</li>
            <li>
              Верстка проекта и настройка функционала прототипа 
            </li>
            <li>
              Создание бэкенд части проекта (интеграция со сторонними сервисами или создание псевдо-данных)
            </li>
          </ul>
        </div>
      );
      case 4:
      return (
        <div>
          <ul>
            <li>Тестирование прототипа проекта</li>
            <li>
              Выявление багов в прототипе проекта
            </li>
          </ul>
        </div>
      );
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Назад
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Закончить' : 'Вперед'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>
            И все это мы должны успеть сделать за 2 недели!
          </Typography>
          <Button onClick={handleReset} className={classes.button}>
            Сбросить
          </Button>
        </Paper>
      )}
    </div>
  );
}
