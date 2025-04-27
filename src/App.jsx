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
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
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
    jobType: "Private",
    degree: "B.A",
    land: "",
    caste: "",
    bhaisiya: "",
  });

  const [dahejAmount, setDahejAmount] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const calculateDahej = () => {
    let amount = 50000;
    const salary = parseInt(form.salary) || 0;
    amount += salary * 12 * 0.5;

    const expenses = parseInt(form.expenses) || 0;
    amount += expenses * 0.7;

    if (form.maritalStatus === "Divorced") amount -= 50000;
    if (form.homeOwnership === "Owned") amount += 100000;
    if (form.carOwnership === "Yes") amount += 100000;
    if (form.location === "Rural") amount -= 30000;
    if (form.location === "Outside") amount += 200000;

    // New conditions
    if (form.jobType === "Government") amount += 300000;
    if (["B.Tech", "B.Pharma"].includes(form.degree)) amount += 150000;
    if (["BCA", "B.Com"].includes(form.degree)) amount += 100000;
    if (form.degree === "B.A") amount += 50000;

    const land = parseInt(form.land) || 0;
    amount += land * 20000; // 20k ₹ per bigha

    if (form.caste === "Yadav") {
      const bhaisiya = parseInt(form.bhaisiya) || 0;
      amount += bhaisiya * 15000; // 15k ₹ per bhaisiya
    }

    setDahejAmount(amount);
  };

  return (
    <>
      <div>
        <Container maxWidth="sm" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Typography
            variant="h3"
            align="center"
            sx={{ fontWeight: "bold", color: "#6a1b9a" }}
            gutterBottom
            data-aos="zoom-in"
          >
            💍 Dahej Calculator
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 4 }}
            data-aos="fade-up"
          >
            Find out your 'hypothetical' dowry value today! 🚀
          </Typography>

          <Card
            elevation={6}
            sx={{
              borderRadius: 4,
              padding: 3,
              backgroundColor: "#fafafa",
            }}
            data-aos="fade-right"
          >
            <CardContent>
              <Grid container spacing={3}>
                {/* Age, Salary, Expenses */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Age"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    type="number"
                    variant="outlined"
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
                    variant="outlined"
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
                    variant="outlined"
                  />
                </Grid>

                {/* Marital Status */}
                <Grid item xs={12}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>Marital Status</Typography>
                  <RadioGroup row name="maritalStatus" value={form.maritalStatus} onChange={handleChange}>
                    <FormControlLabel value="Single" control={<Radio />} label="Single" />
                    <FormControlLabel value="Married" control={<Radio />} label="Married" />
                    <FormControlLabel value="Divorced" control={<Radio />} label="Divorced" />
                  </RadioGroup>
                </Grid>

                {/* Home Ownership */}
                <Grid item xs={12}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>Home Ownership</Typography>
                  <RadioGroup row name="homeOwnership" value={form.homeOwnership} onChange={handleChange}>
                    <FormControlLabel value="Owned" control={<Radio />} label="Owned" />
                    <FormControlLabel value="Rented" control={<Radio />} label="Rented" />
                  </RadioGroup>
                </Grid>

                {/* Car Ownership */}
                <Grid item xs={12}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>Car Ownership</Typography>
                  <RadioGroup row name="carOwnership" value={form.carOwnership} onChange={handleChange}>
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                  </RadioGroup>
                </Grid>

                {/* Location */}
                <Grid item xs={12}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>Location</Typography>
                  <RadioGroup row name="location" value={form.location} onChange={handleChange}>
                    <FormControlLabel value="Urban" control={<Radio />} label="Urban India" />
                    <FormControlLabel value="Rural" control={<Radio />} label="Rural India" />
                    <FormControlLabel value="Outside" control={<Radio />} label="Outside India" />
                  </RadioGroup>
                </Grid>

                {/* Job Type */}
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Job Type</InputLabel>
                    <Select name="jobType" value={form.jobType} onChange={handleChange} label="Job Type">
                      <MenuItem value="Government">Government</MenuItem>
                      <MenuItem value="Private">Private</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Degree */}
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Graduation Degree</InputLabel>
                    <Select name="degree" value={form.degree} onChange={handleChange} label="Graduation Degree">
                      <MenuItem value="B.A">B.A</MenuItem>
                      <MenuItem value="B.Com">B.Com</MenuItem>
                      <MenuItem value="BCA">BCA</MenuItem>
                      <MenuItem value="B.Tech">B.Tech</MenuItem>
                      <MenuItem value="B.Pharma">B.Pharma</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Land */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Father's Land (in Bigha)"
                    name="land"
                    value={form.land}
                    onChange={handleChange}
                    type="number"
                    variant="outlined"
                  />
                </Grid>

                {/* Caste */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Caste"
                    name="caste"
                    value={form.caste}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>

                {/* Bhaisiya - only show if caste is Yadav */}
                {form.caste.toLowerCase() === "yadav" && (
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Number of Bhaisiya (Buffaloes)"
                      name="bhaisiya"
                      value={form.bhaisiya}
                      onChange={handleChange}
                      type="number"
                      variant="outlined"
                    />
                  </Grid>
                )}

                {/* Calculate Button */}
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                      backgroundColor: "#ff9800",
                      ":hover": {
                        backgroundColor: "#fb8c00",
                      },
                      fontWeight: "bold",
                      borderRadius: 2,
                    }}
                    onClick={calculateDahej}
                  >
                    Calculate Now 🚀
                  </Button>
                </Grid>

                {/* Result */}
                {dahejAmount !== null && (
                  <Grid item xs={12} data-aos="fade-up">
                    <Typography
                      variant="h5"
                      align="center"
                      sx={{ mt: 3, mb: 1, color: "#d32f2f", fontWeight: "bold" }}
                    >
                      Estimated Dowry: ₹{dahejAmount.toLocaleString()}
                    </Typography>
                    <Typography variant="caption" display="block" align="center" color="text.secondary">
                      *Disclaimer: Dowry is illegal under the Dowry Prohibition Act, 1961.
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </CardContent>
          </Card>

          {/* Fun Facts */}
          <Card
            elevation={4}
            sx={{
              mt: 4,
              borderRadius: 4,
              padding: 3,
              backgroundColor: "#e3f2fd",
            }}
            data-aos="fade-left"
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                📚 Did You Know?
              </Typography>
              <ul style={{ paddingLeft: "20px" }}>
                <li>Dowry Prohibition Act was enforced in 1961 in India.</li>
                <li>Many NGOs and groups work to end dowry practices.</li>
                <li>Marriage today is based on love and equality ❤️.</li>
              </ul>
            </CardContent>
          </Card>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default App;
