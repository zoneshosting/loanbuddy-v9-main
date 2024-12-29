import React, { useState } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import MainCard from "ui-component/cards/MainCard";

const leadsData = [
  { applicationNumber: "APP-1234", date: "Feb 3, 2023", status: "Warm", customer: "Olivia Ryhe", email: "olivia@email.com" },
  { applicationNumber: "APP-1233", date: "Feb 3, 2023", status: "Hot", customer: "Steve Hampton", email: "steve.hamp@email.com" },
  { applicationNumber: "APP-1232", date: "Feb 3, 2023", status: "Cold", customer: "Ciaran Murray", email: "ciaran.murray@email.com" },
  { applicationNumber: "APP-1231", date: "Feb 3, 2023", status: "Warm", customer: "Maria Macdonald", email: "maria.mc@email.com" },
  { applicationNumber: "APP-1230", date: "Feb 3, 2023", status: "Hot", customer: "Charles Fulton", email: "fulton@email.com" },
  { applicationNumber: "APP-1229", date: "Feb 3, 2023", status: "Cold", customer: "Jay Hooper", email: "hooper@email.com" },
  { applicationNumber: "APP-1228", date: "Feb 3, 2023", status: "Warm", customer: "Krystal Stevens", email: "k.stevens@email.com" },
  { applicationNumber: "APP-1227", date: "Feb 3, 2023", status: "Hot", customer: "Sachin Flynn", email: "s.flyn@email.com" },
  { applicationNumber: "APP-1226", date: "Feb 2, 2023", status: "Cold", customer: "Michael Johnson", email: "m.johnson@email.com" },
  { applicationNumber: "APP-1225", date: "Feb 2, 2023", status: "Warm", customer: "Emily Davis", email: "emily.davis@email.com" },
  { applicationNumber: "APP-1224", date: "Feb 2, 2023", status: "Hot", customer: "Liam Brown", email: "liam.brown@email.com" },
  { applicationNumber: "APP-1223", date: "Feb 2, 2023", status: "Cold", customer: "Sophia Wilson", email: "sophia.wilson@email.com" },
  { applicationNumber: "APP-1222", date: "Feb 1, 2023", status: "Warm", customer: "James Smith", email: "james.smith@email.com" },
  { applicationNumber: "APP-1221", date: "Feb 1, 2023", status: "Hot", customer: "Charlotte Taylor", email: "charlotte.taylor@email.com" },
  { applicationNumber: "APP-1220", date: "Feb 1, 2023", status: "Cold", customer: "Benjamin Lee", email: "benjamin.lee@email.com" },
  { applicationNumber: "APP-1219", date: "Feb 1, 2023", status: "Warm", customer: "Amelia Harris", email: "amelia.harris@email.com" },
  { applicationNumber: "APP-1218", date: "Jan 31, 2023", status: "Hot", customer: "Ethan Clark", email: "ethan.clark@email.com" },
  { applicationNumber: "APP-1217", date: "Jan 31, 2023", status: "Cold", customer: "Ava Lewis", email: "ava.lewis@email.com" },
  { applicationNumber: "APP-1216", date: "Jan 31, 2023", status: "Warm", customer: "Noah Walker", email: "noah.walker@email.com" },
  { applicationNumber: "APP-1215", date: "Jan 30, 2023", status: "Hot", customer: "Isabella Hall", email: "isabella.hall@email.com" },
  { applicationNumber: "APP-1214", date: "Jan 30, 2023", status: "Cold", customer: "William Allen", email: "william.allen@email.com" },
  { applicationNumber: "APP-1213", date: "Jan 30, 2023", status: "Warm", customer: "Sophia Scott", email: "sophia.scott@email.com" },
  { applicationNumber: "APP-1212", date: "Jan 30, 2023", status: "Hot", customer: "Oliver Adams", email: "oliver.adams@email.com" },
  { applicationNumber: "APP-1211", date: "Jan 29, 2023", status: "Cold", customer: "Mia Nelson", email: "mia.nelson@email.com" },
  { applicationNumber: "APP-1210", date: "Jan 29, 2023", status: "Warm", customer: "Lucas Carter", email: "lucas.carter@email.com" },
  { applicationNumber: "APP-1209", date: "Jan 29, 2023", status: "Hot", customer: "Harper Mitchell", email: "harper.mitchell@email.com" },
  { applicationNumber: "APP-1208", date: "Jan 28, 2023", status: "Cold", customer: "Alexander Perez", email: "alex.perez@email.com" },
  { applicationNumber: "APP-1207", date: "Jan 28, 2023", status: "Warm", customer: "Ella White", email: "ella.white@email.com" },
  { applicationNumber: "APP-1206", date: "Jan 28, 2023", status: "Hot", customer: "Henry Thompson", email: "henry.thompson@email.com" },
  { applicationNumber: "APP-1205", date: "Jan 27, 2023", status: "Cold", customer: "Zoe Ramirez", email: "zoe.ramirez@email.com" },
  { applicationNumber: "APP-1204", date: "Jan 27, 2023", status: "Warm", customer: "Jack Martinez", email: "jack.martinez@email.com" },
];

const ActiveLeads = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter leads based on search and status
  const filteredData = leadsData.filter((lead) => {
    const matchesStatus = statusFilter === "All" || lead.status === statusFilter;
    const matchesSearch =
      lead.applicationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Handle download for individual lead
  const handleDownloadLead = (lead) => {
    const csvContent = `data:text/csv;charset=utf-8,Application Number,Date,Status,Customer,Email\n${Object.values(lead).join(",")}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${lead.applicationNumber}_lead.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle download for all filtered leads
  const handleDownloadAll = () => {
    const csvContent =
      "data:text/csv;charset=utf-8,Application Number,Date,Status,Customer,Email\n" +
      filteredData.map((lead) => Object.values(lead).join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "leads_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <MainCard title="Active Leads">
      <Typography variant="body2" gutterBottom>
        View and manage your active mortgage leads here. This section shows all current leads with their status, contact information, and follow-up actions.
      </Typography>
      <div style={{ marginBottom: "20px", display: "flex", justifyContent: "space-between" }}>
        <TextField
          placeholder="Search for lead"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "30%" }}
        />
        <FormControl style={{ width: "20%" }}>
          <InputLabel>Status</InputLabel>
          <Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Warm">Warm</MenuItem>
            <MenuItem value="Hot">Hot</MenuItem>
            <MenuItem value="Cold">Cold</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" style={{ height: "40px" }} onClick={handleDownloadAll}>
          Download All CSV
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Application Number</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((lead, index) => (
              <TableRow key={index}>
                <TableCell>{lead.applicationNumber}</TableCell>
                <TableCell>{lead.date}</TableCell>
                <TableCell>{lead.status}</TableCell>
                <TableCell>{lead.customer}</TableCell>
                <TableCell>{lead.email}</TableCell>
                <TableCell>
                  <Button variant="text" onClick={() => handleDownloadLead(lead)}>
                    Download
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  );
};

export default ActiveLeads;
