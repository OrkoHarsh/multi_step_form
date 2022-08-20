import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step1 = ({ state, handleChange, handleNext }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Please Fill personal Data",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "firstName",
            label: "First Name",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "lastName",
            label: "Last Name",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={3}>
          {renderSelect({
            state,
            name: "gender",
            label: "Gender",
            options: [
              { key: "Male", value: "male" },
              { key: "Female", value: "female" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={3}>
          {renderSelect({
            state,
            name: "religion",
            label: "Religion",
            options: [
              { key: "Hindu", value: "hindu" },
              { key: "Muslim", value: "muslim" },
              { key: "Sikh", value: "sikh" },
              { key: "Buddhist", value: "buddhist" },
              { key: "Jain", value: "jain" },
              { key: "Christian", value: "christian" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={3}>
          {renderSelect({
            state,
            name: "category",
            label: "Category",
            options: [
              { key: "SC", value: "scheduled caste" },
              { key: "ST", value: "scheduled tribe" },
              { key: "OBC", value: "other backward class" },
              { key: "GEN", value: "general" },
              { key: "EWS", value: "economically weaker section" },
             
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={3}>
          {renderSelect({
            state,
            name: "single child",
            label: "Single Child",
            options: [
              { key: "Yes", value: "yes" },
              { key: "No", value: "no" },
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "aadhar number",
            label: "Aadhar Number",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "phone",
            label: "Phone",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "email",
            label: "Email",
            type: "email",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        {renderButton({ label: "Next", onClick: handleNext })}
      </Grid>
    </Paper>
  );
};

export default Step1;
