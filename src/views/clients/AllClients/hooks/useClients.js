
import { useState, useEffect } from 'react';

// Mock data - replace with actual API calls
const mockClients = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '(555) 123-4567',
    status: 'Active',
    loanType: 'Conventional'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '(555) 234-5678',
    status: 'Pending',
    loanType: 'FHA'
  },
  {
    id: 3,
    name: 'Michael Brown',
    email: 'm.brown@example.com',
    phone: '(555) 345-6789',
    status: 'Active',
    loanType: 'VA'
  }
];

const useClients = (filters) => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      setIsLoading(true);
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Filter clients based on filters
        let filteredClients = [...mockClients];
        
        if (filters.status !== 'all') {
          filteredClients = filteredClients.filter(
            client => client.status.toLowerCase() === filters.status
          );
        }
        
        if (filters.type !== 'all') {
          filteredClients = filteredClients.filter(
            client => client.loanType.toLowerCase() === filters.type
          );
        }
        
        setClients(filteredClients);
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchClients();
  }, [filters]);

  return { clients, isLoading };
};

export default useClients;
