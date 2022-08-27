import {
  Box,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { css } from "@emotion/react";
import { useState } from "react";

const styles = {
  content: css({
    marginTop: "24px",
    display: "flex",
    flexDirection: "column",
  }),
  stepperBox: css({}),
  questionContainer: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  questionTitle: css({
    marginBlockStart: 0,
    marginBlockEnd: 0,
    marginInlineStart: 0,
    marginInlineEnd: 0,
    marginTop: "32px",
    fontWeight: "800",
    fontSize: "32px",
    lineHeight: "32px",
  }),
  questionBox: css({
    width: "640px",
    backgroundColor: "#ebf0eb",
    borderRadius: "8px",
    marginTop: "16px",
    paddingLeft: "24px",
    paddingRight: "24px",
    paddingBottom: "32px",
    marginBottom: "64px",
  }),
  question: css({
    marginTop: "32px",
  }),
  radioGroup: css({
    display: "flex",
    flexDirection: "column",
  }),
};

export default function Questionnaire() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState([
    "子供にせがまれた",
    "未就学児",
    "友達等とトラブル",
  ]);
  const stepLabels = ["質問１", "質問２", "質問３"];
  const questions = [
    {
      questionLabel: "お子さんに携帯電話を持たせようと思った理由は何ですか?",
      valueLabels: [
        "子供にせがまれた",
        "子供の所在地がわかるようにするため",
        "仲間外れにされないか心配",
        "メディアリテラシーがつくと思った",
        "その他",
      ],
    },
    {
      questionLabel: "お子さんの年齢は？",
      valueLabels: [
        "未就学児",
        "小学1～2年生",
        "小学3～4年生",
        "小学5～6年生",
        "中学1年生",
        "中学2年生",
        "中学3年生",
        "高校1年生",
        "高校2年生",
        "高校3年生",
      ],
    },
    {
      questionLabel: "どのようなトラブルを想定していますか？",
      valueLabels: [
        "友達等とトラブル",
        "身に覚えのない料金請求",
        "誹謗中傷などの書き込み",
        "ネット上で知り合った人と会う等",
      ],
    },
  ];

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let newValues = values;
    newValues[index] = (event.target as HTMLInputElement).value;
    setValues(newValues);
    setStep(index + 1);
  };

  return (
    <div css={styles.content}>
      {values}
      <Box sx={{ width: "100%" }} css={styles.stepperBox}>
        <Stepper activeStep={step} alternativeLabel>
          {stepLabels.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <div css={styles.questionContainer}>
        <p css={styles.questionTitle}>あなたについてお聞かせください</p>
        <div css={styles.questionBox}>
          <FormControl>
            {questions.map((item, index) => (
              <div key={index} css={styles.question}>
                <FormLabel>{item.questionLabel}</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={item.valueLabels[0]}
                  name="radio-buttons-group"
                  value={values[index]}
                  css={styles.radioGroup}
                  onChange={(event) => {
                    handleChange(event, index);
                  }}
                >
                  {item.valueLabels.map((valueItem, valueIndex) => (
                    <FormControlLabel
                      key={valueIndex}
                      value={valueItem}
                      control={<Radio />}
                      label={valueItem}
                    />
                  ))}
                </RadioGroup>
              </div>
            ))}
          </FormControl>
        </div>
      </div>
    </div>
  );
}
