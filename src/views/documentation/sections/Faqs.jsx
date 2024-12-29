
import { useState } from 'react';
import { 
  Card, 
  CardHeader, 
  CardContent, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Divider 
} from '@mui/material';
import { IconChevronDown } from '@tabler/icons-react';

const Faqs = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: 'How do I import existing leads?',
      answer: 'You can import leads using our CSV import tool. Go to Leads > Import Leads and follow the step-by-step guide to map your data fields and import your leads.'
    },
    {
      question: 'Can I customize the pipeline stages?',
      answer: 'Yes, you can customize pipeline stages under Settings > Pipeline. Add, edit, or remove stages to match your workflow.'
    },
    {
      question: 'How do I set up email notifications?',
      answer: 'Navigate to Settings > Notifications to configure email preferences. You can customize notifications for new leads, status updates, and task reminders.'
    },
    {
      question: 'What reports are available?',
      answer: 'LoanBuddy offers various reports including lead performance, conversion rates, and team productivity. You can also create custom reports based on your needs.'
    },
    {
      question: 'How secure is my data?',
      answer: 'We use industry-standard encryption and security measures to protect your data. All data is encrypted at rest and in transit, and we regularly perform security audits.'
    }
  ];

  return (
    <Card>
      <CardHeader title="Frequently Asked Questions" />
      <Divider />
      <CardContent>
        <Typography variant="body2" paragraph>
          Find answers to common questions about using LoanBuddy. Can't find what you're looking for? Contact our support team.
        </Typography>

        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              expandIcon={<IconChevronDown />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
            >
              <Typography variant="subtitle1">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="textSecondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </CardContent>
    </Card>
  );
};

export default Faqs;
