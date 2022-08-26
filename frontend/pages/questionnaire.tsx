import { Box, Stepper, Step, StepLabel } from "@mui/material";
import { css } from "@emotion/react";
import { red } from "@mui/material/colors";

const styles = {
  sample: css({
    display: "flex",
  }),
};

const steps = ["質問１", "質問２", "質問３"];

export default function questionnaire() {
  return (
    <div css={styles.sample}>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={0} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}
