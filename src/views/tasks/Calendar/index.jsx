
import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import CalendarView from './components/CalendarView';
import CalendarFilters from './components/CalendarFilters';
import EventDialog from './components/EventDialog';
import CalendarStats from './components/CalendarStats';

const Calendar = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filters, setFilters] = useState({
    view: 'month',
    taskType: 'all',
    assignee: 'all'
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setOpenDialog(true);
  };

  const handleEventSave = (eventData) => {
    console.log('Saving event:', eventData);
    setOpenDialog(false);
    setSelectedEvent(null);
  };

  return (
    <MainCard title="Calendar">
      <Typography variant="body2" gutterBottom>
        View and manage tasks, appointments, and deadlines in a calendar format. Schedule and track important dates.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CalendarStats />
        </Grid>
        <Grid item xs={12}>
          <CalendarFilters 
            filters={filters} 
            onFilterChange={handleFilterChange}
            onAddClick={() => setOpenDialog(true)}
          />
        </Grid>
        <Grid item xs={12}>
          <CalendarView 
            filters={filters}
            onEventClick={handleEventClick}
          />
        </Grid>
      </Grid>

      <EventDialog
        open={openDialog}
        event={selectedEvent}
        onClose={() => {
          setOpenDialog(false);
          setSelectedEvent(null);
        }}
        onSave={handleEventSave}
      />
    </MainCard>
  );
};

export default Calendar;
