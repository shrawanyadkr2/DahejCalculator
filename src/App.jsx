import React, { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import {
  Container,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [form, setForm] = useState({
    age: "",
    salary: "",
    expenses: "",
    maritalStatus: "Single",
    homeOwnership: "Owned",
    carOwnership: "Yes",
    location: "Urban",
  });

  const [dahejAmount, setDahejAmount] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const calculateDahej = () => {
    let amount = 50000;
    const salary = parseInt(form.salary) || 0;
    amount += salary * 12 * 0.1;

    const expenses = parseInt(form.expenses) || 0;
    amount += expenses * 0.1;

    if (form.maritalStatus === "Divorced") amount -= 50000;
    if (form.homeOwnership === "Owned") amount += 30000;
    if (form.carOwnership === "Yes") amount += 20000;
    if (form.location === "Rural") amount -= 20000;
    if (form.location === "Outside") amount += 100000;

    setDahejAmount(amount);
  };

  return (
    <>
      <div>
      <Container maxWidth="sm" style={{ marginTop: "40px" }}>
      <Typography variant="h4" align="center" color="purple" gutterBottom data-aos="fade-down">
        Dahej Calculator
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" data-aos="fade-up">
        How Much Dowry Should You Ask For?
      </Typography>

      <Card style={{ marginTop: "30px" }} data-aos="fade-right">
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Age"
                name="age"
                value={form.age}
                onChange={handleChange}
                type="number"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Monthly Salary (₹)"
                name="salary"
                value={form.salary}
                onChange={handleChange}
                type="number"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Education Expenses (₹)"
                name="expenses"
                value={form.expenses}
                onChange={handleChange}
                type="number"
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle1">Marital Status</Typography>
              <RadioGroup row name="maritalStatus" value={form.maritalStatus} onChange={handleChange}>
                <FormControlLabel value="Single" control={<Radio />} label="Single" />
                <FormControlLabel value="Married" control={<Radio />} label="Married" />
                <FormControlLabel value="Divorced" control={<Radio />} label="Divorced" />
              </RadioGroup>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle1">Home Ownership</Typography>
              <RadioGroup row name="homeOwnership" value={form.homeOwnership} onChange={handleChange}>
                <FormControlLabel value="Owned" control={<Radio />} label="Owned" />
                <FormControlLabel value="Rented" control={<Radio />} label="Rented" />
              </RadioGroup>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle1">Car Ownership</Typography>
              <RadioGroup row name="carOwnership" value={form.carOwnership} onChange={handleChange}>
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle1">Location</Typography>
              <RadioGroup row name="location" value={form.location} onChange={handleChange}>
                <FormControlLabel value="Urban" control={<Radio />} label="India - Urban" />
                <FormControlLabel value="Rural" control={<Radio />} label="India - Rural" />
                <FormControlLabel value="Outside" control={<Radio />} label="Outside India" />
              </RadioGroup>
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" color="warning" fullWidth onClick={calculateDahej}>
                Calculate
              </Button>
            </Grid>

            {dahejAmount !== null && (
              <Grid item xs={12} data-aos="fade-up">
                <Typography variant="h5" align="center" color="orange" style={{ marginTop: "20px" }}>
                  Estimated Dowry Amount: ₹{dahejAmount.toLocaleString()}
                </Typography>
                <Typography variant="caption" display="block" align="center" color="textSecondary">
                  Note: This is a satirical calculator. Dowry is illegal under the Dowry Prohibition Act, 1961.
                </Typography>
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Card>

      <Card style={{ marginTop: "20px", marginBottom: "40px" }} data-aos="fade-left">
        <CardContent>
          <Typography variant="h6" gutterBottom>Did You Know?</Typography>
          <ul>
            <li>Dowry Prohibition Act was passed in India in 1961.</li>
            <li>Despite being illegal, dowry still persists in some areas.</li>
            <li>Organizations work to educate against dowry practices.</li>
            <li>Modern marriages focus on mutual respect.</li>
          </ul>
        </CardContent>
      </Card>
    </Container>
    <Footer/>


      </div>

    </>
  );
};

export default App;
