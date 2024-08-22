// Example data
const jobs = [
    { title: 'Software Engineer', company: 'Tech Corp', location: 'Remote' },
    { title: 'Data Scientist', company: 'Data Inc.', location: 'New York' },
];

const transactions = [
    { id: 'txn123', amount: '0.5 BTC', timestamp: '2024-08-20 10:00' },
    { id: 'txn124', amount: '1.2 BTC', timestamp: '2024-08-20 11:30' },
];

// Function to display job listings
function displayJobs() {
    const jobList = document.getElementById('job-list');
    jobs.forEach(job => {
        const jobItem = document.createElement('div');
        jobItem.className = 'job-item';
        jobItem.innerHTML = `<h3>${job.title}</h3><p>${job.company} - ${job.location}</p>`;
        jobList.appendChild(jobItem);
    });
}

// Function to display blockchain transactions
function displayTransactions() {
    const transactionList = document.getElementById('transaction-list');
    transactions.forEach(transaction => {
        const transactionItem = document.createElement('div');
        transactionItem.className = 'transaction-item';
        transactionItem.innerHTML = `<p><strong>Transaction ID:</strong> ${transaction.id}</p><p><strong>Amount:</strong> ${transaction.amount}</p><p><strong>Timestamp:</strong> ${transaction.timestamp}</p>`;
        transactionList.appendChild(transactionItem);
    });
}

// Initial display
displayJobs();
displayTransactions();
